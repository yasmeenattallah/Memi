import {Home , AboutUs , Cart , Checkout, Contact, Login, NotFound, Order, ProductDetails, Product, Profile, Register , 
 } from './pages';
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = ()=>  {
  return (
    <div className="App">
     <Home/> 
     <AboutUs/>
     <Cart/>
     <Checkout/>
     <Contact/>
     <Login/>
     <NotFound/>
     <Order/>
     <ProductDetails/>
     <Product/>
     <Profile/>
     <Register/>
    </div>
  );
}
export default App;
