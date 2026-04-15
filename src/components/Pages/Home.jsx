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
  const [isloading, setIsloading] = useState(true);

  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  async function fecthData() {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
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
      <Header />
      <Hero />
      <List />
      {/* <Card /> */}
      {/* <Products /> */}
      <Product
        data={todos}
        isloading={isloading}
        navigate={navigate}
        category={category}
      />
    </div>
  );
};

export default Home;
