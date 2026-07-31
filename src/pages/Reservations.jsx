import "../styles/reservations.css";
import { useState } from "react";
import axios from "axios";
import API_URL from "../services/api";


function Reservations() {
  const [formData, setFormData] = useState({
    customer_name: "",
    email: "",
    reservation_date: "",
    reservation_time: "",
    number_of_guests: 1,
  });
 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API_URL}/reservations`, formData);

      alert("Reservation successful!");

      setFormData({
        customer_name: "",
        email: "",
        reservation_date: "",
        reservation_time: "",
        number_of_guests: 1,
      });
    } catch (error) {
      console.error(error);
      alert("Failed to make reservation.");
    }
  };
 
  return (
    <section className="reservations-page">

      <div className="reservation-header">
        <h1>Reservations</h1>
        <p>Book a table at Manziz Café.</p>
      </div>

      <form className="reservation-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter your name"
            name="customer_name"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={handleChange}
            name="email"
          />
        </div>

        <div className="form-group">
          <label>Date</label>
           
          <input type="date"
          onChange={handleChange}
          name="reservation_date" />
        </div>

        <div className="form-group">
          <label>Time</label>
          <input type="time"
          onChange={handleChange}
          name="reservation_time" />
        </div>

        <div className="form-group">
          <label>Guests</label>
          <input
            type="number"
            min="1"
            placeholder="Number of guests"
            onChange={handleChange}
            name="number_of_guests"
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