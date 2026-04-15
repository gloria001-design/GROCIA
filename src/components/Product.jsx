import "../components/styles/Product.css";

const Products = ({ data, isloading, navigate }) => {
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
          data.map((item) => (
            <div className="bodycontainer" key={item.id}>
              <div className="card">
                <img src={item.images} alt="" />
                <h1>{item.title}</h1>
                <p>{item.price}</p>
                <button onClick={() => navigate(`/detail/${item.id}`)}>
                  Add to cart
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
