import { Link } from "react-router-dom";
import "../styles/register.css";

function Register() {
  return (
    <section className="register-page">
      <div className="register-card">

        <h2>Create Account</h2>
        <p>Join Manziz Café and start ordering today.</p>

        <form className="register-form">

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
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