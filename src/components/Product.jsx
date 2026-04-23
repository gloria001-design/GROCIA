import "../components/styles/Product.css";

const Products = ({
  data,
  isloading,
  navigate,
  categoryIndex,
  categories,
  onCartChange,
}) => {
  const selectedCategory = categories[categoryIndex];

  const AddCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
    if (typeof onCartChange === "function") {
      onCartChange();
    }
  };
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
            .filter(
              (item) =>
                selectedCategory === "All" ||
                item.category === selectedCategory,
            )
            .map((item) => (
              <div className="bodycontainer" key={item.id}>
                <div className="card">
                  <img src={item.image} alt={item.title} />
                  <h1>{item.title}</h1>
                  <p>{item.price}</p>
                  {/* <button onClick={() => navigate(`/detail/${item.id}`)}>
                    {selectedCategory === "All"
                      ? "Show Details"
                      : "Add to cart"}
                    Show Details
                  </button> */}
                  <button onClick={() => AddCart(item)}>Add to cart</button>
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default Products;
