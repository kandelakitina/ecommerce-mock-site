/** biome-ignore-all lint/a11y/noStaticElementInteractions: no reason */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: no reason */

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Auth() {
	const [mode, setMode] = useState("signup");
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div className="page">
			<div className="contrainer">
				<div className="auth-container">
					<h1 className="page-title">
						{mode === "signup" ? "Sign up" : "Login"}
					</h1>
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
