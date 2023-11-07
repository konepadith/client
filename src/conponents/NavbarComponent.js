import { Link } from "react-router-dom"
export default function NavbarComponent(){
    return(
        <nav className="container">
            <ul className="nav nav-tabs">
                <li className="nav-item pr-3 pt-3 pb-3">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item pr-3 pt-3 pb-3">
                    <Link className="nav-link" to="create">Blog</Link>
                </li>
            </ul>
        </nav>
    )
}