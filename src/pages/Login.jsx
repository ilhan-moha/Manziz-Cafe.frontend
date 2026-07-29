import { Link } from "react-router-dom";
import "../styles/login.css";

function Login() {
  return (
    <section className="login-page">
      <div className="login-card">

        <h2>Welcome Back</h2>
        <p>Sign in to your Manziz Café account</p>

        <form className="login-form">

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
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

        </form>

        <div className="login-links">
          <Link to="/forgot-password">
            Forgot Password?
          </Link>

          <p>
            Don't have an account?{" "}
            <Link to="/register">
              Register
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
}

export default Login;