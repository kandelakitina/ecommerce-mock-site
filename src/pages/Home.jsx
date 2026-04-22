import ProductCard from "../components/ProductCard.jsx";
import { getProducts } from "../data/products.js";

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
				<div className="product-grid">
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</div>
	);
}
