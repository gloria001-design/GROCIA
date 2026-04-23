import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./styles/Category.css";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const url = "https://fakestoreapi.com/products/categories";

  const fetchCategory = async () => {
    try {
      const response = await axios.get(url);
      setCategories(response.data);
    } catch (error) {
      console.error("This error ", error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const addCategory = () => {
    const userValue = prompt("Enter a category:");
    if (userValue === null) return;

    const trimmedValue = userValue.trim();
    if (!trimmedValue) {
      alert("Please enter a valid category.");
      return;
    }

    if (categories.includes(trimmedValue)) {
      alert("already exist");
      return;
    }

    setCategories([...categories, trimmedValue]);
  };

  console.log(categories);
  return (
    <div className="category-page">
      <h2>Categories</h2>
      <ul className="category-list">
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
      <div className="category-actions">
        <button onClick={addCategory}>Add Category</button>
      </div>
    </div>
  );
};

export default Category;
