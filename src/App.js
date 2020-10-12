import React from 'react';
import HomePage from "./pages/homePage";
import Menu from "./pages/menu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about">
          </Route>
          <Route path="/restaurants/menu/:id">
            <Menu/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
