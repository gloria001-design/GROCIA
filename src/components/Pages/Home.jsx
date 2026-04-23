import React from "react";
// import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react";
import Hero from "../Hero";

// import Products from "../Products";
import List from "../List";
// import Card from "../Card";
import Product from "../Product";
// import Card from "./components/Card";
const Home = () => {
  const [todos, setTodos] = useState([]);
  // const [showcategory, setShowCategory] = useState(false);
  const [categoryIndex, setCategoryIndex] = useState(1);
  const [showcategory, setShowCategory] = useState(false);
  const [category, setCategory] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [categories, setCategories] = useState(["See All", "All"]);
  const [cartCount, setCartCount] = useState(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    return cartItems.length;
  });
  const navigate = useNavigate();

  const handleCartChange = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cartItems.length);
  };

  async function fecthData() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setTodos(data);
      const allCategory = data.map((item) => item.category);
      setCategory(allCategory);
      setIsloading(false);
      // toast.success("Product gotten succesfully");
      console.log(data);
    } catch (error) {
      console.error("Fetch error", error.message);
    }
  }
  useEffect(() => {
    fecthData();
  }, []);
  console.log(todos);
  console.log(isloading);
  return (
    <div>
      <Header cartCount={cartCount} />
      <Hero />
      <List
        setCategories={setCategories}
        categories={categories}
        setShowCategory={setShowCategory}
        showcategory={showcategory}
        categoryIndex={categoryIndex}
        setCategoryIndex={setCategoryIndex}
      />
      {/* <Products /> */}
      <Product
        // setCategories={setCategories}
        categories={categories}
        data={todos}
        isloading={isloading}
        categoryIndex={categoryIndex}
        navigate={navigate}
        category={category}
        onCartChange={handleCartChange}
      />
      {/* <Card /> */}
    </div>
  );
};

export default Home;
