# Venture Launcher Backend Test

A simple REST API built with Node.js and Express for managing Founders and Posts. This project uses an in-memory data store (JavaScript arrays), so no database setup is required.

---

## Project Structure

```text
venture-launcher-backend-test/
│── package.json
│── server.js
│── README.md
│
├── config/
│   └── server.config.js
│
├── data/
│   └── store.js
│
├── utils/
│   └── generateId.js
│
├── validators/
│   ├── index.js
│   ├── founder.validator.js
│   └── post.validator.js
│
├── repositories/
│   ├── index.js
│   ├── founder.repository.js
│   └── post.repository.js
│
├── services/
│   ├── index.js
│   ├── founder.service.js
│   └── post.service.js
│
├── controllers/
│   ├── index.js
│   ├── founder.controller.js
│   └── post.controller.js
│
└── routes/
    │── index.js
    │
    └── v1/
        │── index.js
        │── founder.routes.js
        └── post.routes.js
```

---

## Features

- Create and retrieve founders
- Create and retrieve posts
- Validate request payloads
- Optional filtering of posts by `founderId`
- Proper HTTP status codes (`200`, `201`, `400`, `404`)
- Clear JSON error responses
- Versioned API structure (`/api/v1`)
- Layered architecture:
  - Validators
  - Repositories
  - Services
  - Controllers
  - Routes

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/navinyadav8919/venture-launcher-backend-test.git
cd venture-launcher-backend-test
```

### 2. Install Dependencies

```bash
npm install
```

---

## Running the Application

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

Server runs at:

```text
http://localhost:3000
```

---

## API Base URL

```text
http://localhost:3000/api/v1
```

---

## Data Models

### Founder

```json
{
  "id": "string",
  "name": "string",
  "email": "string",
  "role": "founder | investor",
  "sectors": ["string"],
  "createdAt": "ISO timestamp"
}
```

### Post

```json
{
  "id": "string",
  "founderId": "string",
  "content": "string",
  "createdAt": "ISO timestamp"
}
```

---

## API Endpoints

### Create Founder

**POST** `/founders`

#### Request Body

```json
{
  "name": "Naveen Sidharth",
  "email": "naveen@example.com",
  "role": "founder",
  "sectors": ["AI", "EdTech"]
}
```

---

### Get All Founders

**GET** `/founders`

---

### Create Post

**POST** `/posts`

#### Request Body

```json
{
  "founderId": "founder_1715420000000_123",
  "content": "Building the first version of Venture Launcher."
}
```

---

### Get All Posts

**GET** `/posts`

---

### Filter Posts by Founder

**GET** `/posts?founderId=founder_1715420000000_123`

---

## Example Success Response

```json
{
  "success": true,
  "data": {
    "id": "founder_1715420000000_123",
    "name": "Naveen Sidharth",
    "email": "naveen@example.com",
    "role": "founder",
    "sectors": ["AI", "EdTech"],
    "createdAt": "2026-05-11T12:00:00.000Z"
  }
}
```

---

## Example Error Response

```json
{
  "success": false,
  "error": "Name is required"
}
```

---

## Validation Rules

### Founder
- `name` is required
- `email` is required
- `role` must be `founder` or `investor`
- `sectors` must be an array (optional)

### Post
- `founderId` must reference an existing founder
- `content` is required and cannot be empty

---

## Testing

The API was tested using Postman.

Recommended test flow:
1. Create a founder
2. Get all founders
3. Create a post
4. Get all posts
5. Filter posts by founder
6. Test validation and 404 responses

---

## Technology Stack

- Node.js
- Express.js
- CORS
- Nodemon

---

#