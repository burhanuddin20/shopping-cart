import { Link } from "react-router-dom";
import "./NavBar.css";
import { useCart } from '../../Context/Cart';

const NavBar = () => {
    const { cart, getCartCount, getCartTotal, removeFromCart } = useCart();
    const cartCount = getCartCount();

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/shop">Shop</Link>
            </div>
            <div className="navbar-right">
                <div className="cart-dropdown">
                    <Link className="nav-link cart-link" to="/cart">
                        Cart
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </Link>
                    {cartCount > 0 && (
                        <div className="cart-preview">
                            <div className="cart-preview-items">
                                {cart.map(item => (
                                    <div key={item.id} className="cart-preview-item">
                                        <img src={item.image} alt={item.title} />
                                        <div className="cart-preview-item-details">
                                            <p className="item-title">{item.title}</p>
                                            <p className="item-quantity">Qty: {item.quantity}</p>
                                            <p className="item-price">${item.price}</p>
                                        </div>
                                        <button 
                                            className="preview-remove-btn"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                removeFromCart(item.id);
                                            }}
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className="cart-preview-footer">
                                <div className="cart-preview-total">
                                    <span>Total:</span>
                                    <span>${getCartTotal().toFixed(2)}</span>
                                </div>
                                <Link to="/cart" className="view-cart-btn">
                                    View Cart
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;