import { useState, useEffect } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Modal from "react-modal";
import CartIcon from "./components/assets/shopping-cart.png";
import Checkout from "./components/Checkout";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    handleFetch();
  }, []);

  const catNames = [
    "Luna",
    "Bella",
    "Nala",
    "Lola",
    "Poppy",
    "Willow",
    "Coco",
    "Tilly",
    "Misty",
    "Daisy",
    "Milo",
    "Simba",
    "Loki",
    "Leo",
    "Charlie",
    "Tigger",
    "George",
    "Alfie",
    "Oreo",
    "Max",
  ];

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  const reset = () => {
    handleHideModal();
    setCartItems([]);
  };

  const handleFetch = async () => {
    let response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=9"
    );
    let data = await response.json();
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      item.name = catNames[Math.floor(Math.random() * catNames.length)];
      item.price = Math.floor(Math.random() * 300);
    }
    setData(data);
  };

  const addCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const removeCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <Router>
        <div className="header">
          <h1>Cats4Lyf</h1>
          <img
            src={CartIcon}
            alt="cart"
            className="cartIcon"
            onClick={handleShowModal}
          />
        </div>
        <Switch>
          <Route path="/checkout">
            <Checkout reset={reset} />
          </Route>
          <Route path="/">
            <div className="mainBody">
              <Modal isOpen={showModal} className="modal">
                <button onClick={handleHideModal}>X</button>
                <Cart
                  removeCart={removeCart}
                  addCart={addCart}
                  cartItems={cartItems}
                  className="cart"
                />
              </Modal>
              <Products
                className="products"
                products={data}
                addCart={addCart}
              />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
