import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Navbar() {
	const { user, isAuthenticated, logout } = useAuth();

	return (
		<nav className="navbar">
			<div className="navbar-container">
				<Link to="/" className="navbar-brand">
					Shophub
				</Link>
				<div className="navbar-links">
					<Link to="/" className="navbar-link">
						Home
					</Link>
					<Link to="/checkout" className="navbar-link">
						Checkout
					</Link>
				</div>
				<div className="navbar-auth">
					{isAuthenticated ? (
						<div className="navbar-auth-links">
							<span className="navbar-link">Welcome, {user.email}</span>
							<button
								type="button"
								onClick={logout}
								className="btn btn-secondary"
							>
								Logout
							</button>
						</div>
					) : (
						<div className="navbar-auth-links">
							<Link to="/auth?mode=login" className="btn btn-primary">
								Login
							</Link>
							<Link to="/auth?mode=signup" className="btn btn-secondary">
								Signup
							</Link>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}
