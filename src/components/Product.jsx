import "../components/styles/Product.css";

const Products = ({ data, isloading, navigate, categoryIndex, categories }) => {
  const selectedCategory = categories[categoryIndex];

  return (
    <div>
      {/* <article className="category">
        {category.slice(0, 7).map((category) => (
          <button className="btnc">{category.name}</button>
        ))}
      </article> */}
      <div className="BodyHolder">
        {isloading ? (
          <div className="loading">
            loading <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          data
            .filter((item) =>
              selectedCategory === "All"
                ? true
                : item.category === selectedCategory,
            )
            .map((item) => (
              <div className="bodycontainer" key={item.id}>
                <div className="card">
                  <img src={item.images} alt="" />
                  <h1>{item.title}</h1>
                  <p>{item.price}</p>
                  <button onClick={() => navigate(`/detail/${item.id}`)}>
                    {selectedCategory === "All"
                      ? "Show Details"
                      : "Add to cart"}
                  </button>
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default Products;
