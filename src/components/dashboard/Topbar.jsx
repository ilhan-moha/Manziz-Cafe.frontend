import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
import "../../styles/topbar.css";

function Topbar() {
  return (
    <header className="topbar">

      <div className="topbar-search">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search..."
        />
      </div>

      <div className="topbar-right">

        <button className="notification-btn">
          <FaBell />
        </button>

        <div className="user-profile">
          <FaUserCircle className="profile-icon" />
          <div>
            <h4>Admin</h4>
            <p>Manager</p>
          </div>
        </div>

      </div>

    </header>
  );
}

export default Topbar;