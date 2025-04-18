import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();

  const totalItems = Object.values(cartItems).reduce((a, b) => a + b, 0);

  return (
    <div className="cart">
      <div className="cart-items">
        {totalItems > 0 && (
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Qnty</p>
            <p>Total</p>
          </div>
        )}
        <br />

        {totalItems === 0 ? (
          <p className="empty-cart-msg">Your cart is empty.</p>
        ) : (
          food_list.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={item._id}>
                  <div className="cart-items-title cart-items-item">
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>${item.price * cartItems[item._id]}</p>
                    <button onClick={() => removeFromCart(item._id)}>x</button>
                  </div>
                  <hr />
                </div>
              );
            } else return null;
          })
        )}
      </div>

      {totalItems > 0 && (
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>₹{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery fee</p>
                <p>₹{10}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>₹{getTotalCartAmount() + 2}</b>
              </div>
            </div>
            <button onClick={() => navigate("/order")}>PROCEED TO CHECKOUT</button>
          </div>

          <div className="cart-promocode">
            <p>If you have a promo code, enter it here.</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
