package com.yumride.controller;

import com.yumride.model.MenuItem;
import com.yumride.service.MenuItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/menu")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class MenuItemController {

    private final MenuItemService menuItemService;

    // GET /api/menu — सर्व items
    @GetMapping
    public ResponseEntity<List<MenuItem>> getAll() {
        return ResponseEntity.ok(menuItemService.getAll());
    }

    // POST /api/menu — नवीन item add (Admin)
    @PostMapping
    public ResponseEntity<MenuItem> addItem(@RequestBody MenuItem item) {
        return ResponseEntity.ok(menuItemService.add(item));
    }

    // PUT /api/menu/{id} — item update (Admin)
    @PutMapping("/{id}")
    public ResponseEntity<MenuItem> updateItem(@PathVariable Long id,
                                                @RequestBody MenuItem item) {
        return ResponseEntity.ok(menuItemService.update(id, item));
    }

    // DELETE /api/menu/{id} — item delete (Admin)
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteItem(@PathVariable Long id) {
        menuItemService.delete(id);
        return ResponseEntity.ok(Map.of("message", "Item deleted 🗑️"));
    }

    // PATCH /api/menu/{id}/toggle — enable/disable item
    @PatchMapping("/{id}/toggle")
    public ResponseEntity<?> toggleItem(@PathVariable Long id) {
        boolean isAvailable = menuItemService.toggle(id);
        return ResponseEntity.ok(Map.of(
            "isAvailable", isAvailable,
            "message", isAvailable ? "Item enabled ✅" : "Item disabled ⛔"
        ));
    }
}
