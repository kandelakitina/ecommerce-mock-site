import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useCart } from "../context/CartContext.jsx";

export default function Checkout() {
	const navigate = useNavigate();
	const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } =
		useCart();
	const { isAuthenticated } = useAuth();

	if (!isAuthenticated) {
		return (
			<div className="page">
				<div className="container">
					<h1 className="page-title">Please login to checkout</h1>
					<button
						type="button"
						onClick={() => navigate("/auth?mode=login")}
						className="btn btn-primary"
					>
						Go to Login
					</button>
				</div>
			</div>
		);
	}

	if (cart.length === 0) {
		return (
			<div className="page">
				<div className="container">
					<h1 className="page-title">Your cart is empty</h1>
					<button
						type="button"
						onClick={() => navigate("/")}
						className="btn btn-primary"
					>
						Continue Shopping
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className="page">
			<div className="container">
				<h1 className="page-title">Checkout</h1>
				<div className="checkout-container">
					<div className="checkout-items">
						<h2 className="checkout-section-title">Order Summary</h2>
						{cart.map((item) => (
							<div key={item.id} className="checkout-item">
								<img
									src={item.image}
									alt={item.name}
									className="checkout-item-image"
								/>
								<div className="checkout-item-details">
									<h3 className="checkout-item-name">{item.name}</h3>
									<p className="checkout-item-price">${item.price} each</p>
								</div>
								<div className="checkout-item-controls">
									<div className="quantity-controls">
										<button
											type="button"
											className="quantity-btn"
											onClick={() => updateQuantity(item.id, item.quantity - 1)}
										>
											-
										</button>
										<span className="quantity-value">{item.quantity}</span>
										<button
											type="button"
											className="quantity-btn"
											onClick={() => updateQuantity(item.id, item.quantity + 1)}
										>
											+
										</button>
									</div>
									<p className="checkout-item-total">
										${(item.price * item.quantity).toFixed(2)}
									</p>
									<button
										type="button"
										className="btn btn-small btn-secondary"
										onClick={() => removeFromCart(item.id)}
									>
										Remove
									</button>
								</div>
							</div>
						))}
					</div>
					<div className="checkout-summary">
						<h2 className="checkout-section-title">Order Total</h2>
						<div className="checkout-total">
							<span className="checkout-total-label">Subtotal</span>
							<span className="checkout-total-value">
								${cartTotal.toFixed(2)}
							</span>
						</div>
						<div className="checkout-total">
							<span className="checkout-total-label">Shipping</span>
							<span className="checkout-total-value">Free</span>
						</div>
						<div className="checkout-total checkout-total-final">
							<span className="checkout-total-label">Total</span>
							<span className="checkout-total-value">
								${cartTotal.toFixed(2)}
							</span>
						</div>
						<button
							type="button"
							className="btn btn-primary btn-large btn-block"
							onClick={() => {
								alert("Order placed successfully!");
								clearCart();
								navigate("/");
							}}
						>
							Place Order
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
