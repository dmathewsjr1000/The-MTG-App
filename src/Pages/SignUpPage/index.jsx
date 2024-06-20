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
                    <label for='username'>Username: </label>
                    <input
                    type="text"
                    name="userName"
                    onChange={(e) => setAccount(e.target.value)}
                     value={account}
                    />
                    <label for='email'>Email: </label>
                    <input
                    type="text"
                    name="email"
                    onChange={(e) => setAccount(e.target.value)}
                    value={account}
                    />
                    <label for='password'>Password: </label>
                    <input
                    type="text"
                    name="passWord"
                    onChange={(e) => setAccount(e.target.value)}
                    value={account}
                    />
                    <label for='cpassword'>Confirm Password: </label>
                    <input
                    type="text"
                    name="cPassWord"
                    onChange={(e) => setAccount(e.target.value)}
                    value={account}
                    />
                    <label for='dob'>DOB: </label>
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


