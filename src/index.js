import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Header from "./components/header";
import Main from "./containers/main";
import CurrentUserProvider from "./contexts/currentUser";

ReactDOM.render(
  <React.StrictMode>
    <CurrentUserProvider>
      <Router>
        <Header />
        <Main>
          <Routes></Routes>
        </Main>
      </Router>
    </CurrentUserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
