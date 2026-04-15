import { useState } from "react";
import "../styles/Cart.css";

const AddToCart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      title: "Fried Rice",
      price: 5000,
      image: "https://i.postimg.cc/GhNJfTzb/download-(13).jpg",
      quantity: 1,
    },
    {
      id: 2,
      title: "Chicken",
      price: 3000,
      image: "https://i.postimg.cc/XN1wZBRH/download-(14).jpg",
      quantity: 2,
    },
    {
      id: 3,
      title: "Beans",
      price: 3000,
      image: "https://i.postimg.cc/Mp7MYnL8/download-(15).jpg",
      quantity: 2,
    },

    {
      id: 2,
      title: "Salad",
      price: 3000,
      image: "https://i.postimg.cc/yN6mgh8L/download-(16).jpg",
      quantity: 2,
    },
  ]);

  const increase = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decrease = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart 🛒</h2>

      <div className="cart-content">
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-card" key={item.id}>
              <img src={item.image} alt="" />

              <div className="cart-details">
                <h3>{item.title}</h3>
                <p>₦{item.price}</p>

                <div className="quantity">
                  <button onClick={() => decrease(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increase(item.id)}>+</button>
                </div>
              </div>

              <button className="remove" onClick={() => removeItem(item.id)}>
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Summary</h3>

          <p>Total Items: {cart.length}</p>
          <h2>₦{total}</h2>

          <button className="checkout">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
