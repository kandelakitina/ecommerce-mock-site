import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Auth from "./pages/Auth.jsx";
import Checkout from "./pages/Checkout.jsx";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import "./App.css";

function App() {
	return (
		<div className="app">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/auth" element={<Auth />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/product/:id" element={<Product />} />
			</Routes>
		</div>
	);
}

export default App;
