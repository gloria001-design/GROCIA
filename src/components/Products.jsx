import { useState, useEffect } from "react";
import "./styles/Products.css";
import axios from "axios";

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const URL = "https://fakestoreapi.com/products";

  const fetchCategory = async () => {
    try {
      const response = await axios.get(URL);

      const allCategories = [
        { idCategory: "0", strCategory: "See All" },
        ...response.data.categories,
      ];

      setCategories(allCategories);
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
        <div
          className="dropdown"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <button className="see-all">See All</button>

          {showDropdown && (
            <div className="dropdown-menu">
              {categories.map((item) => (
                <p key={item.id}>{item.category}</p>
              ))}
            </div>
          )}
        </div>

        {categories.slice(0, 8).map((item) => (
          <button key={item.idCategory}>{item.strCategory}</button>
        ))}
      </div>
    </section>
  );
};

export default Products;
