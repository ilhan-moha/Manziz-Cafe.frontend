import { Link } from "react-router-dom";
import heroImage from "../../assets/images/photo-1467003909585-2f8a72700288.avif";


function Hero() {
  return (
    <section className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay">
            <span className="location-badge">
              📍 Now Open • Westlands, Nairobi  
            </span>

        <h1>
            where coffee 
            <br /> 
            meets Comfort
        </h1>

        <p>
          Experience Nairobi's finest handcrafted coffees, Kenyan
          single-origin teas, and wholesome food in a warm,
          welcoming space.
          </p>
        
        <div className="hero-buttons">
            <Link className="primary-btn" to="/reservations">
                Reserve a Table
            </Link>

            <Link className="secondary-btn" to="/menu">
                View Our Menu
            </Link>
        </div>
        </div>
    </section>
  );
}

export default Hero;