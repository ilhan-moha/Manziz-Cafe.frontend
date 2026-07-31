import { FaUserCircle } from "react-icons/fa";
import "../styles/profile.css";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return (
      <section className="profile-page">
        <h2>No user logged in.</h2>
      </section>
    );
  }

  return (
    <section className="profile-page">
      <div className="profile-card">

        <FaUserCircle className="profile-avatar" />

        <h2>{user.first_name} {user.last_name}</h2>
        <p>Manziz Café User</p>

        <div className="profile-info">

          <div className="info-row">
            <strong>First Name</strong>
            <span>{user.first_name}</span>
          </div>

          <div className="info-row">
            <strong>Last Name</strong>
            <span>{user.last_name}</span>
          </div>

          <div className="info-row">
            <strong>Email</strong>
            <span>{user.email}</span>
          </div>

          <div className="info-row">
            <strong>User ID</strong>
            <span>{user.id}</span>
          </div>

        </div>

       

      </div>
    </section>
  );
}

export default Profile;