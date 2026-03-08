package com.yumride.controller;

import com.yumride.model.MenuItem;
import com.yumride.model.Restaurant;
import com.yumride.service.RestaurantService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/restaurants")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class RestaurantController {

    private final RestaurantService restaurantService;

    // GET /api/restaurants — सर्व restaurants
    @GetMapping
    public ResponseEntity<List<Restaurant>> getAllRestaurants(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String search) {
        return ResponseEntity.ok(restaurantService.getAll(category, search));
    }

    // GET /api/restaurants/{id} — एक restaurant
    @GetMapping("/{id}")
    public ResponseEntity<Restaurant> getById(@PathVariable Long id) {
        return ResponseEntity.ok(restaurantService.getById(id));
    }

    // GET /api/restaurants/{id}/menu — menu items
    @GetMapping("/{id}/menu")
    public ResponseEntity<List<MenuItem>> getMenu(@PathVariable Long id) {
        return ResponseEntity.ok(restaurantService.getMenu(id));
    }

    // POST /api/restaurants — नवीन restaurant add (Admin only)
    @PostMapping
    public ResponseEntity<Restaurant> create(@RequestBody Restaurant restaurant) {
        return ResponseEntity.ok(restaurantService.create(restaurant));
    }

    // PUT /api/restaurants/{id} — update
    @PutMapping("/{id}")
    public ResponseEntity<Restaurant> update(@PathVariable Long id,
                                              @RequestBody Restaurant restaurant) {
        return ResponseEntity.ok(restaurantService.update(id, restaurant));
    }

    // DELETE /api/restaurants/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        restaurantService.delete(id);
        return ResponseEntity.ok("Restaurant deleted ✅");
    }
}
