import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CreateItems from './pages/CreateItems'
import MyCollection from './pages/MyCollection'
import Dashboard from './pages/Dashboard'

const Routes = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create-items" exact component={CreateItems} />
        <Route path="/purchased" exact component={MyCollection} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;