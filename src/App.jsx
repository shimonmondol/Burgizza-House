import { Routes, Route } from "react-router";
import Layout from "./Component/Layout";
import Home from "./Component/Home";
import Product from "./Component/Product ";
import Login from "./Component/Login";
import About from "./Component/About";
import Contact from "./Component/Contact";
import SignUp from "./Component/SignUp";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
