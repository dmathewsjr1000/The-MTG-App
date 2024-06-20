import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { UserContext } from "../../Context/UserContext";


export default function NavBar() {
    const themeCtx = useContext(ThemeContext)
    const { setTheme} = themeCtx
    console.log(themeCtx);

    const userCtx = useContext(UserContext)

    return (
        <nav>
            <Link to='/'>The Deck Box</Link>
            <Link to='/profile'>Planeswalker</Link>
            <Link to='/card_search'>Card Search</Link>
            <Link to='/deck_building'>Deck Building</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
            <div>
                <h3>Greetings {userCtx.name}</h3>
            </div>
            <div>   
            <label htmlFor="theme-toggle">
                 Toggle Dark
                <input type="checkbox"
                onChange={() => setTheme((prevState) => prevState === 'light' ? 'dark' : 'light')} />
            </label>
        </div>
    </nav>    
)}