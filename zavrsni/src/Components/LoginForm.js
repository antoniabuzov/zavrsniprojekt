import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValidEmail = validateEmail(email);
        setIsValid(isValidEmail);

        if (!isValidEmail) return;

        setError(null);

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error("Neuspješna prijava. Provjerite podatke.");
            }

            const data = await response.json();
            console.log("Login uspješan:", data);
            // Dodaj logiku: spremi token ili preusmjeri korisnika
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Email: </label>
            <input
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="example@example.com"
            />
            {!isValid && <p style={{ color: "red" }}>Neispravan format email-a</p>}

            <label>Lozinka</label>
            <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
            />

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button type="submit">Prijavi se</button>

            <p>
                Nemaš račun?{" "}
                <Link to="/signup">Registriraj se</Link>
            </p>
        </form>
    );
};

export default LoginForm;
