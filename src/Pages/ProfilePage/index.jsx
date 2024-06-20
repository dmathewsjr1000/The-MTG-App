import { useState } from "react"
import axios from axios
import { createPortal } from 'react-dom'
import LoginPage from "../LoginPage"
import SignupPage from "../SignUpPage"

export default function ProfilePage() {
    const [accounts, setAccounts] = useState(data);

    const addAccount = async(newAccount) => {
        try {
            const res = await axios.post('http://localhost:5173/register', {
                username: 'Spyder1000MTG',
                email: 'Spyder1000MTG@example.com',
                password: 'ssl4gohan',
                DOB: '12/23/1982'
            })
            console.log(res.data);
            setAccounts([res.data, ...accounts])
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
        <SignupPage addAccount={addAccount}/>
        </>
    )}