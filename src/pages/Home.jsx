import { getProducts } from "../data/products.js";
import { Link } from "react-router-dom";

export default function Home() {
	const products = getProducts();
	return (
		<div className="page">
			<div className="home-hero">
				<h1 className="home-title">Welcome to my shop</h1>
				<p>Discover more products</p>
			</div>
			<div className="container">
				<h2 className="page-title">Our products</h2>
				<div className="products-grid">
					{products.map((product) => (
						<div className="product-card" key={product.id}>
							<img
								src={product.image}
								className="product-card-image"
								alt={product.name}
								aria-label={product.name}
							/>
							<div className="product-card-content">
								<h3>{product.name}</h3>
								<p>{product.price}</p>
								<div>
									<Link></Link>
									<button type="button">Add to Cart</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
