/** biome-ignore-all lint/a11y/noStaticElementInteractions: no reason */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: no reason */

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Auth() {
	const location = useLocation();
	const [mode, setMode] = useState(() => {
		const params = new URLSearchParams(location.search);
		return params.get("mode") === "login" ? "login" : "signup";
	});

	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const modeParam = params.get("mode");
		if (modeParam === "login" || modeParam === "signup") {
			setMode(modeParam);
		}
	}, [location.search]);
	const [message, setMessage] = useState(null);
	const { login, signup } = useAuth();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		try {
			if (mode === "signup") {
				signup(data.email, data.password);
				setMessage({ type: "success", text: "Account created successfully!" });
			} else {
				login(data.email, data.password);
				setMessage({ type: "success", text: "Login successful!" });
			}
			setTimeout(() => navigate("/"), 1000);
		} catch (error) {
			setMessage({ type: "error", text: error.message });
		}
	};

	const switchMode = (newMode) => {
		setMode(newMode);
		setMessage(null);
	};

	return (
		<div className="page">
			<div className="contrainer">
				<div className="auth-container">
					<h1 className="page-title">
						{mode === "signup" ? "Sign up" : "Login"}
					</h1>
					{message && (
						<div className={`message message-${message.type}`}>
							{message.text}
						</div>
					)}
					<form onSubmit={handleSubmit(onSubmit)} className="auth-form">
						<div className="form-group">
							<label htmlFor="email" className="form-label">
								Email
							</label>
							<input
								type="email"
								className="form-input"
								id="email"
								{...register("email", { required: "Email is required" })}
							/>
							{errors.email && (
								<span className="form-error">{errors.email.message}</span>
							)}
						</div>
						<div className="form-group">
							<label htmlFor="password" className="form-label">
								Password
							</label>
							<input
								type="password"
								className="form-input"
								{...register("password", {
									required: "Password is required",
									minLength: {
										value: 8,
										message: "Password must be at least 8 characters",
									},
									maxLength: {
										value: 50,
										message: "Password must be less than 50 characters",
									},
								})}
							/>
							{errors.password && (
								<span className="form-error">{errors.password.message}</span>
							)}
						</div>
						<button className="btn btn-primary btn-large" type="submit">
							{mode === "signup" ? "Sign up" : "Login"}
						</button>
					</form>
					<div className="auth-switch">
						{mode === "signup" ? (
							<p>
								Already have an account?{" "}
								<span className="auth-link" onClick={() => switchMode("login")}>
									Login
								</span>
							</p>
						) : (
							<p>
								Don't have an account?{" "}
								<span
									className="auth-link"
									onClick={() => switchMode("signup")}
								>
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
