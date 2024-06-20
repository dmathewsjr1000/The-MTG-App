import { useState } from "react";
export default function LoginPage({ addAccount }) {
    const [accounts, setAccounts] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addAccount(accounts)
        setAccounts('')
    }
    return (
        <>
            <div>
                <h1>Login Page</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for='username'>Username: </label>
                    <input
                    type="text"
                    name="userName"
                    onChange={(e) => setAccounts(e.target.value)}
                     value={accounts}
                    />
                    <label for='password'>Password: </label>
                    <input
                    type="password"
                    name="passWord"
                    onChange={(e) => setAccounts(e.target.value)}
                    value={accounts}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </>    
    
)}