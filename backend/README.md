# 🍕 YumRide Backend — Spring Boot REST API

## Technologies
- **Java 17**
- **Spring Boot 3.2**
- **Spring Security + JWT**
- **Spring Data JPA**
- **H2 Database** (Development)
- **MySQL** (Production)
- **Lombok**

---

## Run the Project

### Prerequisites
- Java 17+
- Maven

### Steps
```bash
cd yumride-backend
mvn spring-boot:run
```

Server: `http://localhost:8080`  
H2 Console: `http://localhost:8080/h2-console`

---

## API Endpoints

### 🔐 Auth
| Method | URL | Description |
|--------|-----|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login → JWT token |

**Register Request:**
```json
{
  "name": "Rahul Sharma",
  "email": "rahul@example.com",
  "password": "secret123",
  "phone": "9876543210"
}
```

**Login Request:**
```json
{
  "email": "rahul@example.com",
  "password": "secret123"
}
```

---

### 🏪 Restaurants
| Method | URL | Description |
|--------|-----|-------------|
| GET | `/api/restaurants` | Get all restaurants |
| GET | `/api/restaurants?category=Indian` | Filter by category |
| GET | `/api/restaurants/{id}` | Get a single restaurant |
| GET | `/api/restaurants/{id}/menu` | Menu items |
| POST | `/api/restaurants` | Add a new restaurant |
| PUT | `/api/restaurants/{id}` | Update |
| DELETE | `/api/restaurants/{id}` | Delete |

---

### 🍽️ Menu Items
| Method | URL | Description |
|--------|-----|-------------|
| GET | `/api/menu` | All items |
| POST | `/api/menu` | Item add |
| PUT | `/api/menu/{id}` | Item update |
| DELETE | `/api/menu/{id}` | Item delete |
| PATCH | `/api/menu/{id}/toggle` | Enable/Disable |

---

### 📦 Orders
| Method | URL | Description |
|--------|-----|-------------|
| POST | `/api/orders` | Place an order |
| GET | `/api/orders` | Get all orders (Admin) |
| GET | `/api/orders/{orderId}` | Track an order |
| PUT | `/api/orders/{orderId}/status` | Status update |
| POST | `/api/orders/{orderId}/review` | Review submit |

**Place Order Request:**
```json
{
  "userId": 1,
  "restaurantId": 2,
  "items": [
    { "menuItemId": 5, "quantity": 2 },
    { "menuItemId": 8, "quantity": 1 }
  ],
  "paymentMethod": "UPI",
  "couponCode": "SAVE20"
}
```

**Update Status:**
```json
{ "status": "DELIVERING" }
```

**Submit Review:**
```json
{ "rating": 5, "review": "Amazing food! 🔥" }
```

---

## Project Structure
```
yumride-backend/
├── src/main/java/com/yumride/
│   ├── YumRideApplication.java     ← Main class
│   ├── controller/
│   │   ├── AuthController.java     ← Login/Register APIs
│   │   ├── RestaurantController.java
│   │   ├── MenuItemController.java
│   │   └── OrderController.java
│   ├── model/
│   │   ├── User.java
│   │   ├── Restaurant.java
│   │   ├── MenuItem.java
│   │   ├── Order.java
│   │   └── OrderItem.java
│   ├── repository/                 ← Database queries
│   ├── service/                    ← Business logic
│   └── config/
│       └── SecurityConfig.java     ← CORS + Security
└── src/main/resources/
    └── application.properties
```

---

## Connect Frontend (JavaScript)

```javascript
// Login
const res = await fetch('http://localhost:8080/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email: 'user@example.com', password: 'pass123' })
});
const { token } = await res.json();

// Restaurants fetch
const restaurants = await fetch('http://localhost:8080/api/restaurants', {
  headers: { 'Authorization': `Bearer ${token}` }
}).then(r => r.json());
```
