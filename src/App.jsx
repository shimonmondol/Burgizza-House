import { Routes, Route } from "react-router";
import Layout from "./Component/Layout";
import Home from "./Component/Home";
import Menu from "./Component/Menu";
import Login from "./Component/Login";
import About from "./Component/About";
import Contact from "./Component/Contact";
import SignUp from "./Component/SignUp";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
