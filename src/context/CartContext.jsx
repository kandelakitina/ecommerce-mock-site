import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext.jsx";

const CartContext = createContext(null);

export function CartProvider({ children }) {
	const { user } = useAuth();
	const userEmail = user?.email;
	const [cart, setCart] = useState([]);

	useEffect(() => {
		if (userEmail) {
			const saved = localStorage.getItem(`cart_${userEmail}`);
			setCart(saved ? JSON.parse(saved) : []);
		} else {
			setCart([]);
		}
	}, [userEmail]);

	useEffect(() => {
		if (userEmail) {
			localStorage.setItem(`cart_${userEmail}`, JSON.stringify(cart));
		}
	}, [cart, userEmail]);

	const addToCart = (product, quantity = 1) => {
		setCart((prev) => {
			const existing = prev.find((item) => item.id === product.id);
			if (existing) {
				return prev.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + quantity }
						: item,
				);
			}
			return [...prev, { ...product, quantity }];
		});
	};

	const removeFromCart = (productId) => {
		setCart((prev) => prev.filter((item) => item.id !== productId));
	};

	const updateQuantity = (productId, quantity) => {
		if (quantity <= 0) {
			removeFromCart(productId);
			return;
		}
		setCart((prev) =>
			prev.map((item) =>
				item.id === productId ? { ...item, quantity } : item,
			),
		);
	};

	const clearCart = () => {
		setCart([]);
	};

	const cartTotal = cart.reduce(
		(total, item) => total + item.price * item.quantity,
		0,
	);

	const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

	const value = {
		cart,
		addToCart,
		removeFromCart,
		updateQuantity,
		clearCart,
		cartTotal,
		cartCount,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
}
