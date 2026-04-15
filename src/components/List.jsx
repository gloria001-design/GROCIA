import React from "react";
import { useState, useEffect } from "react";
// import "./styles/Products.css";
import "../components/styles/List.css";
import axios from "axios";
const List = () => {
  const [categories, setCategories] = useState([{ strCategory: "See All" }]);
  const [showDropdown, setShowDropdown] = useState(false);

  const URL = "https://www.themealdb.com/api/json/v1/1/categories.php";

  const fetchCategory = async () => {
    try {
      const response = await axios.get(URL);

      setCategories([...categories, ...response.data.categories]);
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
        {categories
          ?.slice(1, 10)
          .reverse()
          .map((item) => (
            <div key={item.idCategory} className="category">
              <button className="btnc">{item.strCategory}</button>
              {/* <button></button> */}
            </div>
          ))}

        <div
          className="dropdown"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          {categories
            ?.slice(0, 1)
            //   .reverse()
            .map((item) => (
              <div key={item.idCategory} className="category">
                <button
                  className={
                    item.strCategory === "See All" ? "see-all" : "btnc"
                  }
                >
                  {item.strCategory}
                </button>
              </div>
            ))}

          {showDropdown && (
            <div className="dropdown-menu">
              {categories.slice(1).map((item) => (
                <p key={item.idCategory}>{item.strCategory}</p>
              ))}
            </div>
          )}
        </div>

        {/* {showDropdown} */}
      </div>
    </section>
  );
};

export default List;
