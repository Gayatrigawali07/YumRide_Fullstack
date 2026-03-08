package com.yumride.controller;

import com.yumride.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AuthController {

    private final AuthService authService = null;

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterRequest request) {
        String token = authService.register(
                request.name(),
                request.email(),
                request.password(),
                request.phone()
        );

        return ResponseEntity.ok(Map.of(
                "token", token,
                "message", "Registration successful! 🎉"
        ));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        String token = authService.login(request.email(), request.password());

        return ResponseEntity.ok(Map.of(
                "token", token,
                "message", "Welcome back! 🍕"
        ));
    }

    public record RegisterRequest(
            String name,
            String email,
            String password,
            String phone
    ) {}

    public record LoginRequest(
            String email,
            String password
    ) {}
}