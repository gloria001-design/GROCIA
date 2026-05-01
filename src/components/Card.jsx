import { useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "./styles/Card.css";

// const defaultCart = [
//   {
//     id: 1,
//     title: "Fried Rice",
//     price: 5000,
//     image: "https://i.postimg.cc/GhNJfTzb/download-(13).jpg",
//     quantity: 1,
//   },
//   {
//     id: 2,
//     title: "Chicken",
//     price: 3000,
//     image: "https://i.postimg.cc/XN1wZBRH/download-(14).jpg",
//     quantity: 2,
//   },
// ];

const loadInitialCart = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : defaultCart;
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE_QUANTITY":
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item,
      );
    case "DECREASE_QUANTITY":
      return state
        .map((item) =>
          item.id === action.id
            ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 0) }
            : item,
        )
        .filter((item) => item.quantity > 0);
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.id);
    case "ADD_ITEM": {
      const existingItem = state.find((item) => item.id === action.item.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.item.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...state, { ...action.item, quantity: 1 }];
    }
    case "LOAD_CART":
      return action.cart;
    default:
      return state;
  }
};

const Card = () => {
  const [cart, dispatch] = useReducer(cartReducer, [], loadInitialCart);

  const saveCartToStorage = (items) => {
    localStorage.setItem("cart", JSON.stringify(items));
  };

  const increase = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", id });
  };

  const decrease = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", id });
  };

  const removeMultipleItems = (id) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = storedCart.filter((item) => item.id !== id);
    saveCartToStorage(updatedCart);
    dispatch({ type: "LOAD_CART", cart: updatedCart });
  };

  const removeItem = (id) => {
    removeMultipleItems(id);
  };

  const addItem = (item) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    storedCart.push(item);
    saveCartToStorage(storedCart);
    dispatch({ type: "LOAD_CART", cart: storedCart });
  };

  const addMultipleItems = (items) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...storedCart, ...items];
    saveCartToStorage(updatedCart);
    dispatch({ type: "LOAD_CART", cart: updatedCart });
  };

  const navigate = useNavigate();

  const removeAllItems = () => {
    localStorage.removeItem("cart");
    dispatch({ type: "LOAD_CART", cart: [] });
  };

  useEffect(() => {
    saveCartToStorage(cart);
  }, [cart]);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart">
      <Header cartCount={cart.length} />
      <div className="cart-wrapper">
        <div className="cart-left">
          <h2 className="cart-title">Shopping Cart</h2>

          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt="" />

              <div className="item-info">
                <h3>{item.title}</h3>
                <p className="price">₦{item.price.toLocaleString()}</p>

                <div className="qty-control">
                  <button type="button" onClick={() => decrease(item.id)}>
                    ➖
                  </button>
                  <span>{item.quantity}</span>
                  <button type="button" onClick={() => increase(item.id)}>
                    ➕
                  </button>
                </div>
              </div>

              <button
                className="delete-btn"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="cart-right">
          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Items</span>
            <span>{totalItems}</span>
          </div>

          <div className="summary-row total">
            <span>Total</span>
            <span>${total.toLocaleString()}</span>
          </div>

          <button className="checkout-btn">Proceed to Checkout</button>
          <button className="checkout-btn" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
          <button className="checkout-btn" onClick={removeAllItems}>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
