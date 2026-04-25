/** biome-ignore-all lint/a11y/noStaticElementInteractions: no reason */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: no reason */

import { useState } from "react";

export default function Auth() {
	const [mode, setMode] = useState("signup");
	return (
		<div className="page">
			<div className="contrainer">
				<div className="auth-container">
					<h1 className="page-title">
						{mode === "signup" ? "Sign up" : "Login"}
					</h1>
					<form action="" className="auth-form">
						<div className="form-group">
							<label htmlFor="email" className="form-label">
								Email
							</label>
							<input type="email" className="form-input" id="email" />
						</div>
						<div className="form-group">
							<label htmlFor="password" className="form-label">
								Password
							</label>
							<input type="password" className="form-input" />
						</div>
						<button className="btn btn-primary btn-large" type="submit">
							{mode === "signup" ? "Sign up" : "Login"}
						</button>
					</form>
					<div className="auth-switch">
						{mode === "signup" ? (
							<p>
								Already have an account?{" "}
								<span className="auth-link" onClick={() => setMode("login")}>
									Login
								</span>
							</p>
						) : (
							<p>
								Don't have an account?{" "}
								<span className="auth-link" onClick={setMode("signup")}>
									Sign Up
								</span>
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
