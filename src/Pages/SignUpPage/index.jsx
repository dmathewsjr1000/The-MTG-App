import { useState } from "react";

export default function SignupPage({ addAccount }) {
    const [account, setAccount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addAccount(account)
        setAccount('')
    }
    return (
        <>
            <div>
                <h1>Signup Page</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                    type="text"
                    name="userName"
                    onChange={(e) => setAccount(e.target.value)}
                     value={account}
                    />
                    <input
                    type="text"
                    name="email"
                    onChange={(e) => setAccount(e.target.value)}
                    value={account}
                    />
                    <input
                    type="text"
                    name="passWord"
                    onChange={(e) => setAccount(e.target.value)}
                    value={account}
                    />
                    <input
                    type="text"
                    name="dob"
                    onChange={(e) => setAccount(e.target.value)}
                    value={account}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </>    
    
)}


