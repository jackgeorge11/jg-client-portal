import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ClientProvider } from "./ClientsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ClientProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
