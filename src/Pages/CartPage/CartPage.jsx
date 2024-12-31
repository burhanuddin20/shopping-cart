import React from 'react';
import { useCart } from '../../Context/Cart';
import NavBar from '../../Components/NavBar/NavBar';
import './CartPage.css';

function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, parseInt(newQuantity));
  };

  const renderContent = () => {
    if (cart.length === 0) {
      return (
        <div className="cart-empty">
          <h2>Your cart is empty</h2>
          <p>Add some items to your cart to see them here!</p>
        </div>
      );
    }

    return (
      <>
        <h1>Your Cart</h1>
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p className="item-price">${item.price}</p>
              </div>
              <div className="cart-item-controls">
                <input
                  type="number"
                  min="1"
                  max="99"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  className="cart-quantity"
                />
                <button 
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <div className="cart-total">
            <h3>Total:</h3>
            <h3>${getCartTotal().toFixed(2)}</h3>
          </div>
          <button className="checkout-btn">
            Proceed to Checkout
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="app-wrapper">
      <NavBar />
      <div className="content-container">
        <div className="cart-page">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default CartPage;
