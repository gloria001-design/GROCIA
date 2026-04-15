import "./styles/Card.css";

const Card = () => {
  return (
    <div className="cart">
      <div className="cart-wrapper">
        {/* LEFT SIDE */}
        <div className="cart-left">
          <h2 className="cart-title">Shopping Cart</h2>

          {/* ITEM */}
          <div className="cart-item">
            <img src="https://i.postimg.cc/GhNJfTzb/download-(13).jpg" alt="" />

            <div className="item-info">
              <h3>Fried Rice</h3>
              <p className="price">₦5,000</p>

              <div className="qty-control">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>

            <button className="delete-btn">Remove</button>
          </div>

          {/* ITEM */}
          <div className="cart-item">
            <img src="https://i.postimg.cc/XN1wZBRH/download-(14).jpg" alt="" />

            <div className="item-info">
              <h3>Chicken</h3>
              <p className="price">₦3,000</p>

              <div className="qty-control">
                <button>-</button>
                <span>2</span>
                <button>+</button>
              </div>
            </div>

            <button className="delete-btn">Remove</button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="cart-right">
          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Items</span>
            <span>2</span>
          </div>

          <div className="summary-row total">
            <span>Total</span>
            <span>₦8,000</span>
          </div>

          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
