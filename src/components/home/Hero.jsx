
function Hero() {
  return (
    <section className="hero">
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
            <button className="primary-btn">
                Reserve a Table
            </button>

            <button className="secondary-btn">
                View Our Menu
            </button>
        </div>
        </div>
    </section>
  );
}

export default Hero;