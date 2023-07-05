import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Platnosci() {
  const { totalAmount } = useParams();
  const [paymentData, setPaymentData] = useState({ name: "", amount: totalAmount });

  const handleInputChange = (event) => {
    setPaymentData({ ...paymentData, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/payment", paymentData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(`There was an error making the payment: ${error}`);
      });
  };

  return (
    <div>
      <h2>Płatności</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Imię i nazwisko:
          <input type="text" name="name" onChange={handleInputChange} />
        </label>
        <label>
          Kwota do zapłaty: {totalAmount} zł
          <input
            type="hidden"
            name="amount"
            value={totalAmount}
            onChange={handleInputChange}
          />
        </label>
        <input type="submit" value="Zapłać" />
      </form>
    </div>
  );
}

export default Platnosci;
