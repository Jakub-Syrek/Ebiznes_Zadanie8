import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Wysyłanie żądania rejestracji na serwer
    // Możesz użyć odpowiedniego API lub narzędzia do komunikacji z serwerem, np. axios

    // Przykładowe dane żądania rejestracji
    const requestData = {
      email: email,
      password: password,
    };

    // Wysłanie żądania rejestracji
    // replace 'your-register-api-url' with the actual URL of your registration API endpoint
    fetch("your-register-api-url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Obsługa odpowiedzi z serwera po rejestracji
        // Możesz przekierować użytkownika do strony logowania lub wyświetlić odpowiedni komunikat

        console.log("Register response:", data);
      })
      .catch((error) => {
        // Obsługa błędów podczas rejestracji
        console.error("Error registering:", error);
      });
  };

  return (
    <div>
      <h2>Rejestracja</h2>
      <form>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Hasło:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleRegister}>
          Zarejestruj się
        </button>
      </form>
    </div>
  );
};

export default Register;
