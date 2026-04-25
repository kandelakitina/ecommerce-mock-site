import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../data/products.js";

export default function Product() {
	const { id } = useParams();
	const navigate = useNavigate();
	const product = getProductById(id);

	if (!product) {
		return (
			<div className="page">
				<div className="container">
					<h1 className="page-title">Product not found</h1>
					<button
						type="button"
						onClick={() => navigate("/")}
						className="btn btn-primary"
					>
						Back to Home
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className="page">
			<div className="container">
				<div className="product-detail">
					<div className="product-detail-image">
						<img src={product.image} alt={product.name} />
					</div>
					<div className="product-detail-content">
						<h1 className="product-detail-name">{product.name}</h1>
						<p className="product-detail-price">${product.price}</p>
						<p className="product-detail-description">{product.description}</p>
						<button type="button" className="btn btn-primary btn-large">
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
