import React, { Component } from "react";
import Movies from "./components/movies";
import NavBar from "./components/common/navBar";
import {Route,Switch,Redirect} from 'react-router-dom';
import Customers from './components/common/customers';
import Rentals from './components/common/rentals';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/" exact component={Movies}></Route>
          </Switch>

        </div>
      </div>
    );
  }
}

export default App;
