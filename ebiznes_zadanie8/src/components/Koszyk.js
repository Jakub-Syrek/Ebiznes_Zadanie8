import React from "react";
import { Link } from "react-router-dom";

function Koszyk({ cart, removeFromCart }) {
  const calculateTotalAmount = (cart) => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const totalAmount = calculateTotalAmount(cart);

  return (
    <div>
      <h2>Koszyk</h2>
      {cart.length === 0 ? (
        <p>Koszyk jest pusty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>Cena: {item.price}</p>
              <button onClick={() => removeFromCart(item)}>Usuń</button>
            </div>
          ))}
          <p>Suma: {totalAmount}</p>
          <Link to={`/platnosci/${totalAmount}`}>Przejdź do płatności</Link>
        </>
      )}
    </div>
  );
}

export default Koszyk;
