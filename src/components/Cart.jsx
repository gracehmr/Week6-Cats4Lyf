import "./Cart.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Cart = (props) => {
  const { cartItems, addCart, removeCart } = props;
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  return (
    <div className="cartWrapper">
      <h4 className="yourCart">Your Cart:</h4>
      <ul className="cartList"></ul>
      <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>

      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div>{item.name}</div>
          <div>
            <button onClick={() => addCart(item)} className="add">
              +
            </button>
            <button onClick={() => removeCart(item)} className="remove">
              -
            </button>
          </div>
          <div>
            {item.qty} x £{item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div>Total Price: </div>
          <div>£{totalPrice}</div>

          <button>
            <Link
              to={{
                pathname: "/checkout",
                state: { cart: cartItems, total: totalPrice },
              }}
            >
              Checkout
            </Link>
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;

