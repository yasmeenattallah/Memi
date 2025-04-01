import {
  Home,
  AboutUs,
  Cart,
  Checkout,
  Contact,
  Login,
  NotFound,
  Order,
  ProductDetails,
  Product,
  Profile,
  Register,
} from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      <Route path="/order" element={<Order />} />
        <Route path="/prodDetails" element={<ProductDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product" element={<Product />} />
        <Route path="/register" element={<Register />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
export default App;
