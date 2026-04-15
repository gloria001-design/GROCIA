import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import "../styles/Detail.css";
const DetailPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [isloading, setIsloading] = useState(true);

  async function fetchData() {
    try {
      const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
      const data = await res.json();
      setProduct(data);
      setIsloading(false);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (isloading) return <h2>Loading...</h2>;

  return (
    <>
      <Header />
      <div className="detail">
        <div className="imgs">
          {" "}
          <img src={product.images?.[0]} alt="" />
        </div>
        <div className="text">
          <h1>{product.title}</h1>

          <p>{product.description}</p>
          <hr></hr>

          <h2>${product.price}</h2>
          <select>
            <option value="">Green</option>
            <option value="">Yellow</option>
            <option value="">Blue</option>
          </select>

          <div>
            <h2>Quantity</h2>
            <select>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
            <button>Add to cart</button>
          </div>
          <hr></hr>
          <ul>
            <li>Discovery</li>
            <li>About</li>
            <li>Now</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
