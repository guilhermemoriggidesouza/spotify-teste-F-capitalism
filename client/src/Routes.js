import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Login from "./components/Login.js";

function AllRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
    </Switch>
  );
}

export default AllRoutes;