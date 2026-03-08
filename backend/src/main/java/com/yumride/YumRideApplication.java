package com.yumride;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class YumRideApplication {
    public static void main(String[] args) {
        SpringApplication.run(YumRideApplication.class, args);
        System.out.println("🍕 YumRide Backend Started! http://localhost:8080");
    }
}
