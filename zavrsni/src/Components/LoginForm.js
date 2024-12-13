import { useState } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(true);

    const [password, setPassword] = useState("");

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = validateEmail(email);

        setIsValid(isValid);

        if (isValid) {
            //Slanje post zahtjeva
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Email: </label>
            <input
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="example@example.com"
            />
            {!isValid && <p>Neispravan format email-a</p>}

            <label>Lozinka</label>
            <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
            />
            <button type="submit">Prijavi se</button>
        </form>
    )
}

export default LoginForm; 