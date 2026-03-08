package com.yumride.service;

import com.yumride.controller.OrderController.PlaceOrderRequest;
import com.yumride.model.*;
import com.yumride.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final UserRepository userRepository;
    private final RestaurantRepository restaurantRepository;
    private final MenuItemRepository menuItemRepository;

    public Order placeOrder(PlaceOrderRequest request) {
        User user = userRepository.findById(request.userId())
                .orElseThrow(() -> new RuntimeException("User not found!"));
        Restaurant restaurant = restaurantRepository.findById(request.restaurantId())
                .orElseThrow(() -> new RuntimeException("Restaurant not found!"));

        // Calculate totals
        List<OrderItem> items = request.items().stream().map(req -> {
            MenuItem menuItem = menuItemRepository.findById(req.menuItemId())
                    .orElseThrow(() -> new RuntimeException("Menu item not found!"));
            return OrderItem.builder()
                    .menuItem(menuItem)
                    .quantity(req.quantity())
                    .price(menuItem.getPrice() * req.quantity())
                    .build();
        }).collect(Collectors.toList());

        int subtotal = items.stream().mapToInt(OrderItem::getPrice).sum();
        int deliveryFee = 29;
        int tax = (int) Math.round(subtotal * 0.05);
        int discount = getCouponDiscount(request.couponCode());
        int total = subtotal + deliveryFee + tax - discount;

        // Generate order ID
        String orderId = "#YR" + (100000 + (int)(Math.random() * 900000));

        Order order = Order.builder()
                .orderId(orderId)
                .user(user)
                .restaurant(restaurant)
                .items(items)
                .subtotal(subtotal)
                .deliveryFee(deliveryFee)
                .tax(tax)
                .discount(discount)
                .totalAmount(total)
                .paymentMethod(request.paymentMethod())
                .couponCode(request.couponCode())
                .status(Order.OrderStatus.CONFIRMED)
                .build();

        // Set order reference in items
        Order saved = orderRepository.save(order);
        items.forEach(i -> i.setOrder(saved));
        return saved;
    }

    public List<Order> getAll() {
        return orderRepository.findAllByOrderByCreatedAtDesc();
    }

    public Order getByOrderId(String orderId) {
        return orderRepository.findByOrderId(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found!"));
    }

    public void updateStatus(String orderId, Order.OrderStatus status) {
        Order order = getByOrderId(orderId);
        order.setStatus(status);
        orderRepository.save(order);
    }

    public void submitReview(String orderId, int rating, String review) {
        Order order = getByOrderId(orderId);
        order.setRating(rating);
        order.setReview(review);
        order.setStatus(Order.OrderStatus.DELIVERED);
        orderRepository.save(order);
    }

    private int getCouponDiscount(String code) {
        if (code == null) return 0;
        return switch (code.toUpperCase()) {
            case "SAVE20", "FOOD10", "RUSH50" -> 40;
            default -> 0;
        };
    }
}
