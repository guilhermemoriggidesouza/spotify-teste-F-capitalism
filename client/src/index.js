import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import  AllRoutes from './Routes';
import { connectionsContext } from './context';

function App() {
  const [connection, setConnection] = useState(localStorage);

  return (
    <Router>
      <connectionsContext.Provider value = {[ connection, setConnection ]}>
        <AllRoutes />
      </connectionsContext.Provider>
    </Router>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
