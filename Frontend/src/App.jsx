import React, { useState } from "react";
import Header from "./components/header";
import Hero from "./components/Hero";
import CardBody from "./components/CardBody";
import Footer from "./components/footer";
import Cart from "./components/Cart";
import OrderHistory from "./components/OrderHistory";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (dish) => {
    setCart((prev) => {
      const found = prev.find((i) => i._id === dish._id);
      if (found) {
        return prev.map((i) =>
          i._id === dish._id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...dish, qty: 1 }];
    });
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((i) => (i._id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0)
    );
  };
  const clearCart = () => setCart([]);

  return (
  <div id="home">
    <Header />
    <Hero />
    <CardBody addToCart={addToCart} />
    <About />
    <Contact />
    <Footer />
    <Cart
      cart={cart}
      addToCart={addToCart}
      decreaseQty={decreaseQty}
      clearCart={clearCart}
    />
    <OrderHistory />
  </div>
);
};

export default App;