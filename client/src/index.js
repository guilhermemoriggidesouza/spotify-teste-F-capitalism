import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login';
import Home from './components/Home';
import * as serviceWorker from './serviceWorker';
import routes from "./Routes";
import {useRoutes} from 'hookrouter';

function App() {
  const routeResult = useRoutes(routes);
  return routeResult;
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();