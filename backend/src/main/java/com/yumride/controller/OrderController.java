package com.yumride.controller;

import com.yumride.model.Order;
import com.yumride.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class OrderController {

    private final OrderService orderService;

    // POST /api/orders — नवीन order place करा
    @PostMapping
    public ResponseEntity<?> placeOrder(@RequestBody PlaceOrderRequest request) {
        Order order = orderService.placeOrder(request);
        return ResponseEntity.ok(Map.of(
            "orderId", order.getOrderId(),
            "totalAmount", order.getTotalAmount(),
            "status", order.getStatus(),
            "message", "Order placed successfully! 🎉"
        ));
    }

    // GET /api/orders — सर्व orders (Admin)
    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        return ResponseEntity.ok(orderService.getAll());
    }

    // GET /api/orders/{orderId} — एक order track करा
    @GetMapping("/{orderId}")
    public ResponseEntity<Order> getOrder(@PathVariable String orderId) {
        return ResponseEntity.ok(orderService.getByOrderId(orderId));
    }

    // PUT /api/orders/{orderId}/status — status update
    @PutMapping("/{orderId}/status")
    public ResponseEntity<?> updateStatus(@PathVariable String orderId,
                                           @RequestBody Map<String, String> body) {
        Order.OrderStatus status = Order.OrderStatus.valueOf(body.get("status"));
        orderService.updateStatus(orderId, status);
        return ResponseEntity.ok(Map.of("message", "Status updated ✅"));
    }

    // POST /api/orders/{orderId}/review — rating + review submit
    @PostMapping("/{orderId}/review")
    public ResponseEntity<?> submitReview(@PathVariable String orderId,
                                           @RequestBody ReviewRequest request) {
        orderService.submitReview(orderId, request.rating(), request.review());
        return ResponseEntity.ok(Map.of("message", "Review submitted! ⭐ Thank you!"));
    }

    // DTOs
    public record PlaceOrderRequest(
        Long userId,
        Long restaurantId,
        List<OrderItemRequest> items,
        String paymentMethod,
        String couponCode
    ) {}

    public record OrderItemRequest(Long menuItemId, Integer quantity) {}

    public record ReviewRequest(Integer rating, String review) {}
}
