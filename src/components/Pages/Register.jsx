import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";
import Header from "../Header";

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

    // simple validation
    if (!form.name || !form.email || !form.password) {
      alert("All fields are required");
      return;
    }

    if (form.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    console.log("Registered:", form);

    // 🔥 redirect to login page
    navigate("/login");
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>

        <input name="name" placeholder="Name" onChange={handleChange} />

        <input name="email" placeholder="Email" onChange={handleChange} />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
