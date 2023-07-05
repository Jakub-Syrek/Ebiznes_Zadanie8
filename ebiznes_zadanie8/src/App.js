import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet"; // Importujemy komponent Helmet
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleRegistrationSuccess = () => {
    setShowPopup(true);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Strona główna</Link>
            </li>
            {!isLoggedIn && (
              <>
                <li>
                  <Link to="/login">Zaloguj</Link>
                </li>
                <li>
                  <Link to="/register">Zarejestruj</Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          {!isLoggedIn && (
            <>
              <Route
                path="/login"
                element={<LoginForm onLoginSuccess={handleLoginSuccess} />}
              />
              <Route
                path="/register"
                element={
                  <RegistrationForm
                    onRegistrationSuccess={handleRegistrationSuccess}
                  />
                }
              />
            </>
          )}
          {isLoggedIn && (
            <>
              <Route
                path="/produkty"
                element={<Produkty addToCart={addToCart} />}
              />
              <Route
                path="/koszyk"
                element={
                  <Koszyk cart={cart} removeFromCart={removeFromCart} />
                }
              />
              <Route path="/platnosci" element={<Platnosci />} />
            </>
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {showPopup && (
          <div className="popup">
            <h3>Rejestracja udana!</h3>
            <p>Teraz możesz się zalogować.</p>
            <button onClick={() => setShowPopup(false)}>Zamknij</button>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;