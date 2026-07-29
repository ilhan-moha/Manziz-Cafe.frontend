import { Link } from "react-router-dom";
import "../styles/resetPassword.css";

function ResetPassword() {
  return (
    <section className="reset-page">
      <div className="reset-card">

        <h2>Reset Password</h2>
        <p>Create a new password for your account.</p>

        <form className="reset-form">

          <div className="form-group">
            <label>New Password</label>
            <input
              type="password"
              placeholder="Enter your new password"
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your new password"
            />
          </div>

          <button type="submit" className="reset-btn">
            Reset Password
          </button>

        </form>

        <div className="reset-links">
          <Link to="/login">Back to Login</Link>
        </div>

      </div>
    </section>
  );
}

export default ResetPassword;