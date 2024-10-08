
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route } from "react-router-dom";

// import { Routes } from 'react-router-dom';

import Home from './components/Home';
import Cart from './components/Cart';



function App() {
  return (
    // <BrowserRouter>
    //   <Header />


    //   <Route path='/' exact element={<Home />}> </Route>
    //   <Route path='/cart' exact element={<Cart />}> </Route>


    // </BrowserRouter >
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
