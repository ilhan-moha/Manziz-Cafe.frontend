import { Link } from "react-router-dom";
import "../styles/forgotPassword.css";

function ForgotPassword() {
  return (
    <section className="forgot-page">
      <div className="forgot-card">

        <h2>Forgot Password?</h2>
        <p>
          Enter your email address and we'll send you a password reset link.
        </p>

        <form className="forgot-form">

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <button type="submit" className="forgot-btn">
            Send Reset Link
          </button>

        </form>

        <div className="forgot-links">
          <Link to="/login">Back to Login</Link>
        </div>

      </div>
    </section>
  );
}

export default ForgotPassword;