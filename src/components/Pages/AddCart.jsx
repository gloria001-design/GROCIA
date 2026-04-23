import { useReducer } from "react";
import "../styles/Cart.css";

const initialCart = [
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
    id: 4,
    title: "Salad",
    price: 3000,
    image: "https://i.postimg.cc/yN6mgh8L/download-(16).jpg",
    quantity: 2,
  },
];

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE_QUANTITY':
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    case 'DECREASE_QUANTITY':
      return state.map((item) =>
        item.id === action.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    case 'REMOVE_ITEM':
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

const AddToCart = () => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  const increase = (id) => {
    dispatch({ type: 'INCREASE_QUANTITY', id });
  };

  const decrease = (id) => {
    dispatch({ type: 'DECREASE_QUANTITY', id });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', id });
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart </h2>

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
