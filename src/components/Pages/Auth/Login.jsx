import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Auth.css";
// import Header from "../../Header";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Fill all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (user) => user.email === form.email && user.password === form.password,
    );

    if (foundUser) {
      toast.success("Login successful", {
        position: "top-right",
        autoClose: 2000,
      });

      console.log("Logged in user:", foundUser);

      navigate("/");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <>
      {/* <Header /> */}

      <div className="auth-container">
        <div className="auth">
          <div className="auth-box">
            <h2>Login</h2>

            <p>
              Don't have an account?
              <Link to="/register">Create An Account</Link>
            </p>

            <form onSubmit={handleSubmit}>
              <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
              />

              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />

              <button type="submit">Login</button>
            </form>
          </div>
        </div>
        <div className="auth-image">
          <div className="image">
            <img
              src="https://i.postimg.cc/Twf3jryM/f46d562c4e8f8e2e7822f8148c429b3520948809.png"
              alt=""
            />
          </div>
          <div className="text-holder">
            <h1> No more market stress</h1>

            <p>
              Buy food in bulk from the conform of your home with no worries
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
