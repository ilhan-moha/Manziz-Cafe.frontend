import "../styles/reservations.css";

function Reservations() {
  return (
    <section className="reservations-page">

      <div className="reservation-header">
        <h1>Reservations</h1>
        <p>Book a table at Manziz Café.</p>
      </div>

      <form className="reservation-form">

        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>Date</label>
          <input type="date" />
        </div>

        <div className="form-group">
          <label>Time</label>
          <input type="time" />
        </div>

        <div className="form-group">
          <label>Guests</label>
          <input
            type="number"
            min="1"
            placeholder="Number of guests"
          />
        </div>

        <button type="submit" className="reserve-btn">
          Reserve Table
        </button>

      </form>

    </section>
  );
}

export default Reservations;