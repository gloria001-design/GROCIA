import React from "react";
import { useState, useEffect, useContext } from "react";
// import "./styles/Products.css";
import "../components/styles/List.css";
import axios from "axios";
import { AppContext } from "../global/AppContext";

const List = ({
  showcategory,
  setShowCategory,
  categoryIndex,
  setCategoryIndex,
  setCategories,
  categories,
}) => {
  // const [categories, setCategories] = useState(["See All", "All "]);
  //   const [showcategory, setShowCategory] = useState(false);
  //   const [categoryIndex, setCategoryIndex] = useState(1);
  const [showDropdown, setShowDropdown] = useState(false);
  const { name } = useContext(AppContext);
  console.log(name);
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
        {categories.map((category, index) =>
          category === "See All" ? (
            <div
              key={index}
              className="dropdown"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="see-all">See All</button>

              {showDropdown && (
                <div className="dropdown-menu">
                  {categories.slice(1).map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <button
              key={index}
              onClick={() => setCategoryIndex(index)}
              style={{
                background:
                  index === categoryIndex ? "rgb(2,185,40)" : "transparent",
                color: index === categoryIndex ? "white" : "black",
              }}
            >
              {category}
            </button>
          ),
        )}
      </div>
    </section>
  );
};

export default List;
