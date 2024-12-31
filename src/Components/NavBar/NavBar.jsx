import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/shop">Shop</Link>
            </div>
            <div className="navbar-right">
                <Link className="nav-link" to="/cart">Cart</Link>
            </div>
        </nav>
    );
}

export default NavBar;