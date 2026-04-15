import { useEffect, useState } from "react";
import "./styles/Hero.css";

const Hero = () => {
  const changeStateValue = ["healthy", "good", "nice"];
  const [changeState, setChange] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setChange((prev) => (prev + 1) % changeStateValue.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="heroholder">
      <div className="headerbaby">
        <div className="textholder">
          <h3>Make {changeStateValue[changeState]} life with fresh grocery </h3>
          <button className="lis">Shop Now</button>
        </div>
        <div className="imgholder">
          <img
            src="https://i.postimg.cc/QMHwY3Gw/7f015fe46d85178c91e0af2e21e9622e8632cf29.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
