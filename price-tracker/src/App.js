import React from 'react';
import { BrowserRouter as Router,Route } from "react-router-dom";
import Navbar from './components/Navbar';
import CreateProduct from './components/CreateProduct';
import ProductList from './components/ProductList';
import EditProduct from './components/EditProduct';


function App() {
  return (
    <div className='App'>
    <Router>
      <Navbar/><br/>
      <Route exact path='/' component={CreateProduct}/>
      <Route exact path='/edit/:id' component={EditProduct}/>
      <Route exact path='/list' component={ProductList}/>
    </Router>
    </div>
  );
}

export default App;
