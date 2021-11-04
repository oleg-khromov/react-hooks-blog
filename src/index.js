import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Header from "./components/header";
import Main from "./containers/main";
import CurrentUserProvider from "./contexts/currentUser";
import CurrentUserChecker from "./components/currentUserChecker";

ReactDOM.render(
  <React.StrictMode>
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Router>
          <Header />
          <Main>
            <Routes></Routes>
          </Main>
        </Router>
      </CurrentUserChecker>
    </CurrentUserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
