import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const goToSection = (id) => {
    navigate("/");

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth"
      });
    }, 100)
  };

  return (

   <header className="navbar">
      <div className="logo">
        <span className="logo-icon">☕</span>
        <h2>Manziz Cafe</h2>
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-links">

         
         <li><Link to="/" onClick={() => {
              setMenuOpen(false);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              }); }} >Home</Link>
         </li>
        <li>
          <a href="/#menu" onClick={() => setMenuOpen(false)}>
            Menu
          </a>
        </li>
          <li><button className="nav-button" 
           onClick={() => {
            setMenuOpen(false);
            goToSection("about");
           }}>
           About </button> </li>
         <li><button className="nav-button"
          onClick={() => {
            setMenuOpen(false);
            goToSection("contact");
          }}>Contact </button> </li>
        </ul>

        {token && (
          <Link to="/dashboard">Dashboard</Link>
        )}
        
        <div className="auth-buttons">
          <Link to="/login" className="login-btn" onClick={() => setMenuOpen(false)}>
            Login
          </Link>
          <Link to="/register" className="register-btn" onClick={() => setMenuOpen(false)}>
           Register
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;