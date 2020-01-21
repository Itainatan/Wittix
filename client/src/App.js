import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import "./components/main.scss";

export const Context = React.createContext();

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
      </div>
    </Router>
  );
};

export default App;
