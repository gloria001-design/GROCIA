import React from "react";
import { useState, useEffect } from "react";
// import "./styles/Products.css";
import "../components/styles/List.css";
import axios from "axios";
const List = ({
  showcategory,
  setShowCategory,
  categoryIndex,
  setCategoryIndex,
  categories,
  setCategories,
}) => {
  //   const [categories, setCategories] = useState(["See All", "All "]);
  //   const [showcategory, setShowCategory] = useState(false);
  //   const [categoryIndex, setCategoryIndex] = useState(1);

  const URL = "https://fakestoreapi.com/products/categories";

  const fetchCategory = async () => {
    try {
      const response = await axios.get(URL);
      console.log(showcategory);
      setCategories([...categories, ...response.data]);
    } catch (error) {
      console.error("This error ", error);
    }
  };
  useEffect(() => {
    fetchCategory();
  }, []);
  return (
    <section className="section">
      <div className="div">
        {categories.map((category, index) => (
          <button
            key={index}
            onMouseEnter={() => {
              `${category === "See All" ? setShowCategory(true) : null}`;
            }}
            onClick={() => setCategoryIndex(index)}
            style={{
              background:
                index === categoryIndex ? "rgb(2,185,40)" : "transparent",
              color: index === categoryIndex ? "white" : "black",
            }}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
};

export default List;
