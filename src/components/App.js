import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MainRouter } from "./MainRouter";
import { RepoApp } from "./RepoApp";

export const App = () => {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
};
