import React from "react";
import { useOAuth2Login } from "react-oauth2-login";

const Login = () => {
  const { handleLogin } = useOAuth2Login({
    authorizationUrl: "https://your-auth-server.com/oauth2/authorize",
    clientId: "your-client-id",
    redirectUri: "https://your-redirect-uri.com/login/callback",
    scopes: ["openid", "profile", "email"],
  });

  return (
    <div>
      <h2>Logowanie</h2>
      <button onClick={handleLogin}>Zaloguj się</button>
    </div>
  );
};

export default Login;
