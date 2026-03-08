# 🍕 YumRide — Full Stack Project

## Technologies
| Layer | Technology |
|-------|-----------|
| Frontend | HTML + CSS + Bootstrap 5 + JavaScript |
| Backend | Java 17 + Spring Boot 3.2 |
| Database | H2 (Dev) / MySQL (Production) |
| Security | Spring Security + JWT |

---

## Project Structure
```
yumride-fullstack/
├── frontend/
│   └── index.html          ← Complete Frontend (HTML+CSS+JS+Bootstrap)
│
└── backend/                ← Spring Boot REST API
    ├── pom.xml
    ├── README.md           ← API docs
    └── src/main/java/com/yumride/
        ├── YumRideApplication.java
        ├── controller/     ← REST endpoints
        ├── model/          ← Database entities
        ├── repository/     ← JPA queries
        ├── service/        ← Business logic
        └── config/         ← Security + CORS
```

---

## Run करा

### Step 1 — Backend Start करा
```bash
cd backend
mvn spring-boot:run
```
✅ Backend: `http://localhost:8080`

### Step 2 — Frontend उघडा
```
frontend/index.html → Browser मध्ये open करा
```

---

## Frontend ↔ Backend Connection

Frontend automatically backend शी connect होतो.  
Backend बंद असल्यास **local data** वापरतो (fallback).

```javascript
const API_BASE = 'http://localhost:8080/api';
```

### Connected Features:
- ✅ Login / Register → JWT Token
- ✅ Restaurants list → DB वरून
- ✅ Menu items → DB वरून  
- ✅ Order place → DB मध्ये save
- ✅ Admin orders → Real orders

---

## API Endpoints
| Method | URL | Description |
|--------|-----|-------------|
| POST | `/api/auth/login` | Login |
| POST | `/api/auth/register` | Register |
| GET | `/api/restaurants` | सर्व restaurants |
| GET | `/api/restaurants/{id}/menu` | Menu |
| POST | `/api/orders` | Order place |
| GET | `/api/orders` | सर्व orders (Admin) |
