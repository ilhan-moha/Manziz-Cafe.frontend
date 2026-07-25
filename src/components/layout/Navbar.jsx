import {Link} from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <span className="logo-icon">☕</span>
        <h2>Manziz Cafe</h2>
      </div>

      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="auth-buttons">
        <Link to="/login" className="login-btn">
           Login
           </Link>
        <Link to="/register" className="register-btn">
        Register
        </Link>
      </div>
    </header>
  );
}

export default Navbar;