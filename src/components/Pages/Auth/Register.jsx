import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/Auth.css";
// import Header from "../../Header";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      toast.error("All fields are required");
      return;
    }

    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    // Get old users
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Add new user
    existingUsers.push(form);

    // Save all users
    localStorage.setItem("users", JSON.stringify(existingUsers));

    console.log("Registered:", form);
    toast.success("Registration successful", {
      position: "top-right",
      autoClose: 2000,
    });

    navigate("/login");
  };

  return (
    <>
      {/* <Header /> */}

      <div className="auth-container">
        <div className="auth">
          <div className="auth-box">
            <h2>Register</h2>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>

            <form onSubmit={handleSubmit}>
              <input
                name="name"
                type="text"
                placeholder="Name"
                onChange={handleChange}
              />

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

              <button type="submit">Register</button>
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
          <div className="text-holder1">
            <h1>No more market stress</h1>

            <p>
              Buy food in bulk from the conform of your home with no worries Get
              your orders delivered to your doorstep at a very quick time
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
