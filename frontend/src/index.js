import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// domain and clinetId are used for authentication
let domain = process.env.REACT_APP_AUTH_DOMAIN;
console.log(domain);
let clientId = process.env.REACT_APP_AUTH_CLIENTID;
console.log(clientId);

//audience and scope are used for authorization , e.g. accessing data in our backend API
let audience = process.env.REACT_APP_AUTH_AUDIENCE;
let scope = process.env.REACT_APP_AUTH_SCOPE;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      audience={audience}
      scope={scope}
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
