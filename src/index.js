import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Header from "./components/header";
import Main from "./containers/main";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Main>
        <Routes></Routes>
      </Main>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
