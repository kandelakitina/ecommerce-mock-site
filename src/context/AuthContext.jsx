import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
	const [user, setUser] = useState(() => {
		const email = localStorage.getItem("currentUserEmail");
		return email ? { email } : null;
	});

	const login = (email, password) => {
		const users = JSON.parse(localStorage.getItem("users") || "[]");
		const found = users.find(
			(u) => u.email === email && u.password === password,
		);

		if (!found) {
			throw new Error("Invalid email or password");
		}

		localStorage.setItem("currentUserEmail", email);
		setUser({ email });
	};

	const signup = (email, password) => {
		const users = JSON.parse(localStorage.getItem("users") || "[]");

		if (users.find((u) => u.email === email)) {
			throw new Error("Email already exists");
		}

		users.push({ email, password });
		localStorage.setItem("users", JSON.stringify(users));
		localStorage.setItem("currentUserEmail", email);
		setUser({ email });
	};

	const logout = () => {
		localStorage.removeItem("currentUserEmail");
		setUser(null);
	};

	const value = {
		user,
		isAuthenticated: !!user,
		login,
		signup,
		logout,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
}
