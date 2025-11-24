import { Routes, Route } from "react-router";
import Layout from "./Component/Layout";
import Home from "./Component/Home";
import About from "./Component/About";
import Login from "./Component/Login";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import SignUp from "./Component/SignUp";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
