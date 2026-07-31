import { useEffect, useState } from "react";
import axios from "axios";
import API_URL from "../../services/api";
import "../../styles/recentOrders.css";

function RecentOrders() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/reservations`)
      .then((response) => {
        setReservations(response.data);
      })
      .catch((error) => {
        console.error("Error fetching reservations:", error);
      });
  }, []);

  return (
    <section className="recent-orders">
      <h2>Recent Reservations</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Phone</th>
            <th>Guests</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody>
          {reservations.length > 0 ? (
            reservations.map((reservation) => (
              <tr key={reservation.id}>
                <td>#{reservation.id}</td>
                <td>{reservation.customer_name}</td>
                <td>{reservation.phone}</td>
                <td>{reservation.number_of_guests}</td>
                <td>{reservation.reservation_date}</td>
                <td>{reservation.reservation_time}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No reservations found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}

export default RecentOrders;