import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function ProductCard({ product }) {
	const { addToCart, cart } = useCart();
	const [added, setAdded] = useState(false);
	const cartItem = cart.find((item) => item.id === product.id);
	const cartQuantity = cartItem?.quantity || 0;

	const handleAddToCart = () => {
		addToCart(product);
		setAdded(true);
		setTimeout(() => setAdded(false), 2000);
	};

	return (
		<div className="product-card" key={product.id}>
			<img
				src={product.image}
				className="product-card-image"
				alt={product.name}
				aria-label={product.name}
			/>
			<div className="product-card-content">
				<h3 className="product-card-name">{product.name}</h3>
				<p className="product-card-price">${product.price}</p>
				<div className="product-card-actions">
					<Link to={`/product/${product.id}`} className="btn btn-secondary">
						View Details
					</Link>
					<button
						className="btn btn-primary"
						type="button"
						onClick={handleAddToCart}
					>
						{added ? "Added!" : "Add to Cart"}
						{cartQuantity > 0 && ` (${cartQuantity})`}
					</button>
				</div>
			</div>
		</div>
	);
}
