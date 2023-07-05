import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Produkty from "./components/Produkty";
import Koszyk from "./components/Koszyk";
import Platnosci from "./components/Platnosci";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";

function Home() {
  return (
    <>
      <Helmet>
        <title>Strona główna</title>
      </Helmet>
      <h2>Strona główna</h2>
    </>
  );
}

function NotFound() {
  return <h2>404 - Strona nie znaleziona</h2>;
}

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Strona główna</Link>
            </li>
            <li>
              <Link to="/produkty">Produkty</Link>
            </li>
            <li>
              <Link to="/koszyk">Koszyk</Link>
            </li>            
            <li>
              <Link to="/login">Zaloguj</Link>
            </li>
            <li>
              <Link to="/register">Zarejestruj</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/produkty"
            element={<Produkty addToCart={addToCart} />}
          />
          <Route
            path="/koszyk"
            element={<Koszyk cart={cart} removeFromCart={removeFromCart} />}
          />
          <Route path="/platnosci/:totalAmount" element={<Platnosci />} />
          
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
