import React, { useState } from 'react';
import './ItemCard.css';
import { useCart } from '../../Context/Cart';

function ItemCard({ title, price, image, id }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart({ id, title, price, image, quantity });
    setAddedToCart(true);
    
    // Reset the "Added to cart" message after 2 seconds
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    setQuantity(Math.max(1, value)); // Ensures minimum value is 1
  };

  return (
    <div className="item-card">
      <div className="item-card-image">
        <img 
          src={image || 'https://via.placeholder.com/300'} 
          alt={title || 'Product Image'} 
        />
      </div>
      <div className="item-card-content">
        <h3 className="item-title">{title || 'Product Title'}</h3>
        <p className="item-price">${price || '19.99'}</p>
        <div className="item-controls">
          <input 
            type="number" 
            className="item-quantity"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            max="99"
          />
          <button 
            className={`add-to-cart-btn ${addedToCart ? 'added' : ''}`} 
            onClick={handleAddToCart}
          >
            {addedToCart ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;