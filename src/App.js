import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import Header from './containers/Header';
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";


function App() {
  return (
   
     <Router>
       <Header/>
       <Switch>
       <Route path="/">
         <ProductListing/>
       </Route>
       <Route path="/product/:productId">
         <ProductDetails/>
       </Route>
       <Route>404! Page Not Found!</Route>   
       </Switch>
     </Router>
    
  );
}

export default App;
