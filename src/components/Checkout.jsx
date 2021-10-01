import { Link, useLocation } from "react-router-dom";

import "./Checkout.css";

const Checkout = ({reset}) => {
  const location = useLocation();
  const { cart, total } = location.state;

  return (
    <div className="checkout">
      <h1>Thank you for your order!</h1>
      <h3>Your order number is: {Math.floor(Math.random() * 300)}</h3>
      {cart.map((item) => (
        <div>
          <p>{item.name}</p>
          <p>£{item.price}</p>
        </div>
      ))}
      <h4>Order Total: £{total}</h4>
      <button onClick={reset}><Link to="/">Back Home</Link></button>
    </div>
  );
};

export default Checkout;

