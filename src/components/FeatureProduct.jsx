import React, { useState } from "react";
import "./FeatureProduct.css"; // Import CSS file

const products = [
  { id: 1, image: "/images/shirt-hero.jpg", name: "Classic White Shirt", price: 25.99 },
  { id: 2, image: "/images/shirt-hero2.jpg", name: "Modern Black Tee", price: 19.99 },
  { id: 3, image: "/images/shirt-hero3.jpg", name: "Casual Blue Denim", price: 29.99 },
  { id: 4, image: "/images/shirt-hero.jpg", name: "Streetwear Graphic Tee", price: 22.99 },
  { id: 1, image: "/images/shirt-hero.jpg", name: "Classic White Shirt", price: 25.99 },
  { id: 2, image: "/images/shirt-hero2.jpg", name: "Modern Black Tee", price: 19.99 },
  { id: 3, image: "/images/shirt-hero3.jpg", name: "Casual Blue Denim", price: 29.99 },
  { id: 4, image: "/images/shirt-hero.jpg", name: "Streetwear Graphic Tee", price: 22.99 },
  
];

const FeaturedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState(false);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, amount) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <section className="featured-products">
      <h2 className="section-title">Our Featured Products</h2>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button className="buy-button" onClick={() => setSelectedProduct(product)}>Buy Now</button>
          </div>
        ))}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-image" />
            <h2>{selectedProduct.name}</h2>
            <p>Price: ${selectedProduct.price.toFixed(2)}</p>
            <button className="confirm-button" onClick={() => { addToCart(selectedProduct); setSelectedProduct(null); setCheckout(true); }}>Proceed to Checkout</button>
            <button className="close-button" onClick={() => setSelectedProduct(null)}>Close</button>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {checkout && (
        <div className="modal-overlay" onClick={() => setCheckout(false)}>
          <div className="checkout-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Checkout</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div className="cart-items">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-image" />
                    <div>
                      <h3>{item.name}</h3>
                      <p>${item.price.toFixed(2)}</p>
                      <div className="quantity-control">
                        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                      </div>
                    </div>
                  </div>
                ))}
                <h3>Total: ${calculateTotal()}</h3>
                <button className="order-button">Place Order</button>
              </div>
            )}
            <button className="close-button" onClick={() => setCheckout(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProducts;
