package com.yumride.service;

import com.yumride.model.MenuItem;
import com.yumride.model.Restaurant;
import com.yumride.repository.MenuItemRepository;
import com.yumride.repository.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RestaurantService {

    private final RestaurantRepository restaurantRepository;
    private final MenuItemRepository menuItemRepository;

    public List<Restaurant> getAll(String category, String search) {
        if (category != null && !category.equals("All")) {
            return restaurantRepository.findByCategory(category);
        }
        if (search != null && !search.isBlank()) {
            return restaurantRepository.findByNameContainingIgnoreCase(search);
        }
        return restaurantRepository.findAll();
    }

    public Restaurant getById(Long id) {
        return restaurantRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Restaurant not found!"));
    }

    public List<MenuItem> getMenu(Long restaurantId) {
        return menuItemRepository.findByRestaurantId(restaurantId);
    }

    public Restaurant create(Restaurant restaurant) {
        return restaurantRepository.save(restaurant);
    }

    public Restaurant update(Long id, Restaurant updated) {
        Restaurant existing = getById(id);
        existing.setName(updated.getName());
        existing.setCuisine(updated.getCuisine());
        existing.setDeliveryTime(updated.getDeliveryTime());
        existing.setIsOpen(updated.getIsOpen());
        return restaurantRepository.save(existing);
    }

    public void delete(Long id) {
        restaurantRepository.deleteById(id);
    }
}
