import { FaUserCircle } from "react-icons/fa";
import "../styles/profile.css";

function Profile() {
  return (
    <section className="profile-page">
      <div className="profile-card">

        <FaUserCircle className="profile-avatar" />

        <h2>Admin User</h2>
        <p>Café Administrator</p>

        <div className="profile-info">
          <div className="info-row">
            <strong>Email</strong>
            <span>admin@manzizcafe.com</span>
          </div>

          <div className="info-row">
            <strong>Phone</strong>
            <span>+254 712 345 678</span>
          </div>

          <div className="info-row">
            <strong>Role</strong>
            <span>Administrator</span>
          </div>
        </div>

        <button className="profile-btn">
          Edit Profile
        </button>

      </div>
    </section>
  );
}

export default Profile;