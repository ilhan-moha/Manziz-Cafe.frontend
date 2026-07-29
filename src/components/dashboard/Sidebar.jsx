import { Link } from "react-router-dom";
import {
  FaHome,
  FaUtensils,
  FaCalendarAlt,
  FaShoppingCart,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

import "../../styles/sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo">
        <h2>☕ Manziz Café</h2>
      </div>

      <nav className="sidebar-links">

        <Link to="/dashboard">
          <FaHome /> Dashboard
        </Link>

        <Link to="/menu">
          <FaUtensils /> Menu
        </Link>

        <Link to="/orders">
          <FaShoppingCart /> Orders
        </Link>

        <Link to="/reservations">
          <FaCalendarAlt /> Reservations
        </Link>

        <Link to="/profile">
          <FaUser /> Profile
        </Link>

      </nav>

      <button className="logout-btn">
        <FaSignOutAlt /> Logout
      </button>

    </aside>
  );
}

export default Sidebar;