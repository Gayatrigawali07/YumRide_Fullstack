package com.yumride.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Table(name = "restaurants")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String cuisine;
    private String emoji;
    private Double rating;
    private String deliveryTime;   // "25-35 min"
    private String priceRange;     // "₹200 for two"
    private String tag;            // BESTSELLER, TRENDING etc.
    private String category;       // Indian, Chinese, Pizza...

    @Builder.Default
    private Boolean isOpen = true;

    @OneToMany(mappedBy = "restaurant", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<MenuItem> menuItems;
}
