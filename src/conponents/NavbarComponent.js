import { Link } from "react-router-dom"
import { getUsername,logout } from "../service/authorize"
import {useNavigate } from "react-router-dom"
export default function NavbarComponent(){
    const navigate = useNavigate();
   
    return(
        <nav className="container">
            <ul className="nav nav-tabs">
                <li className="nav-item pr-3 pt-3 pb-3">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                {
                    getUsername() && (
                        <li className="nav-item pr-3 pt-3 pb-3">
                    <Link className="nav-link" to="/create">Blog</Link>
                </li>
                    )
                }
                
                {
                    !getUsername() && (
                        <li className="nav-item pr-3 pt-3 pb-3">
                    <Link className="nav-link" to="/login">Log in</Link>
                </li>
                    )
                }
                {
                    getUsername() && (
                        <li className="nav-item pr-3 pt-3 pb-3">
                        <button className="nav-link" onClick={()=>logout(()=>navigate("/login"))}>Log out</button>
                    </li>
                    )
                }
                
            </ul>
        </nav>
    )
}