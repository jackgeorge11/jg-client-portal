import React, { useContext } from "react";
import Home from "./Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ClientContext } from "./ClientsContext";
import LogIn from "./LogIn";
import NotFound from "./NotFound";
import Banner from "./Banner";

function App() {
  const clients = useContext(ClientContext);
  console.log(clients)
  return (
    <div className="app">
      <Banner/>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route exact path="/" element={<Home />} />
          {clients.map((client, i) => (
            <Route
              path={`/${client.link}`}
              key={i}
              element={<LogIn client={client} />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
