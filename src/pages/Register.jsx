import { Link, useNavigate } from "react-router-dom";
import "../styles/register.css";
import { useState } from "react";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",

  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("password do not match!");
      return;
    }
    try {
      await axios.post("http://127.0.0.1:5000/register", {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        password: formData.password,
      });

      alert("Registration successful!");
      navigate("/login");
    }catch (error) {
      alert(error.response?.data?.message || "registation failed.")
    }
  };
  return (
    <section className="register-page">
      <div className="register-card">

        <h2>Create Account</h2>
        <p>Join Manziz Café and start ordering today.</p>

        <form className="register-form" onSubmit={handleSubmit}>

           <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="first_name"
              placeholder="Enter your first name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="last_name"
              placeholder="Enter your last name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>


          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>


           <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

      <button type="submit" className="register-btn">
            Register
          </button>

        </form>

        <div className="register-links">
          <p>
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>
        </div>

      </div>
    </section>
  );
}

export default Register;