import { useState } from "react";
import { Routes, Route } from "react-router";
import Layout from "./Component/Layout";
import Home from "./Component/Home";
import Menu from "./Component/Menu";
import Login from "./Component/Login";
import About from "./Component/About";
import Contact from "./Component/Contact";
import SignUp from "./Component/SignUp";
import ViewDetails from "./Component/ViewDetails";
import Cart from "./Component/Cart";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <Routes>
      <Route element={<Layout cartCount={cartCount} />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu setCartCount={setCartCount} />} />
        <Route path="/viewdetails/:id" element={<ViewDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;