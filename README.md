# ShopHub

A modern e-commerce web application built with React, featuring user authentication, product browsing, shopping cart management, and checkout functionality.

![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-5-purple)
![React Router](https://img.shields.io/badge/React_Router-6-red)

## Features

- **User Authentication** - Sign up, login, and logout with localStorage persistence
- **Product Catalog** - Browse products with detailed view pages
- **Shopping Cart** - Add, remove, and update quantities with per-user cart storage
- **Checkout** - Order summary with real-time totals and place order functionality
- **Responsive Design** - Mobile-friendly UI with clean, modern styling

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework with hooks |
| **Vite** | Build tool and dev server |
| **React Router v6** | Client-side routing |
| **React Hook Form** | Form handling and validation |
| **Context API** | Global state management |
| **localStorage** | Data persistence |
| **CSS3** | Styling and responsive design |

## Architecture

### Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Navbar.jsx
│   └── ProductCard.jsx
├── context/          # React Context providers
│   ├── AuthContext.jsx    # Authentication state
│   └── CartContext.jsx    # Shopping cart state
├── data/             # Mock data
│   └── products.js
├── pages/            # Route components
│   ├── Auth.jsx         # Login/Signup
│   ├── Checkout.jsx     # Order summary
│   ├── Home.jsx         # Product listing
│   └── Product.jsx      # Product detail
├── App.jsx           # Main app with routes
├── App.css           # Global styles
└── main.jsx          # Entry point with providers
```

### State Management

The app uses **React Context API** for global state:

```
AuthProvider (handles user auth)
    └── CartProvider (handles shopping cart)
            └── App (routes and components)
```

- **AuthContext** - Manages user authentication state with localStorage persistence
- **CartContext** - Manages shopping cart with per-user storage (`cart_{email}`)

### Key Design Decisions

1. **Per-User Carts** - Each user has their own cart stored in localStorage
2. **No Backend** - All data persisted locally for demo purposes
3. **Context over Redux** - Simple state management without extra dependencies
4. **React Hook Form** - Efficient form handling with built-in validation

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ShopHub

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Usage

1. **Sign Up** - Create an account with email and password (min 8 characters)
2. **Browse Products** - View products on the home page
3. **Add to Cart** - Click "Add to Cart" on any product
4. **Checkout** - Review order summary and place order
5. **Logout** - Sign out (cart is preserved for next login)

## Acknowledgments

This project was developed following the tutorial series:
- **YouTube**: [E-commerce React Course](https://www.youtube.com/watch?v=Wt3isV2irrA)

Built with assistance from **Opencode** using the **Qwen3.5-397b-a17b** AI model.

## License

MIT License - feel free to use this project for learning and development.
