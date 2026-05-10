import { Outlet } from "react-router";
import { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Layout = () => {
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cartItems")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (item) => {
    const exists = cartItems.find((cartItem) => cartItem.id === item.id);
    if (exists) {
      return false;
    }
    setCartItems([...cartItems, item]);
    return true;
  };

  return (
    <>
      <Navbar cartCount={cartItems.length} />
      <Outlet context={{ handleAddToCart }} />
      <Footer/>
    </>
  );
};

export default Layout;