import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";
const routes = {
  "/": () => <Login />,
  "/home": () => <Home />,
};
export default routes;