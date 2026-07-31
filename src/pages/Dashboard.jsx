import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import StatCard from "../components/dashboard/StatCard";
import RecentOrders from "../components/dashboard/RecentOrders";
import { useState, useEffect } from "react";
import axios from "axios";
import API_URL from "../services/api";
import {
  FaShoppingCart,
  FaDollarSign,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";

import "../styles/dashboard.css";

function Dashboard() {

 const [stats, setStats] = useState({
  orders: 0,
  revenue: 0,
  reservations: 0,
  customers: 0,
}); 

useEffect(() => {
  const fetchStats = async () => {
    try {
      const token = localStorage.getItem("token");

      const [ordersRes, reservationsRes, usersRes] = await Promise.all([
        axios.get(`${API_URL}/orders`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        axios.get(`${API_URL}/reservations`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        axios.get(`${API_URL}/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
      ]);

      const orders = ordersRes.data;
      const reservations = reservationsRes.data;
      const users = usersRes.data;

      const revenue = orders.reduce(
        (sum, order) => sum + order.total_price,
        0
      );

      setStats({
        orders: orders.length,
        reservations: reservations.length,
        customers: users.length,
        revenue,
      });
    } catch (err) {
      console.error(err);
    }
  };

  fetchStats();
}, []);
  return (
    <div className="dashboard">

      <Sidebar />

      <main className="dashboard-main">

        <Topbar />

        <section className="dashboard-content">

          <h1>Dashboard</h1>
          <p>Welcome back! Here's what's happening today.</p>

          <div className="stats-grid">

            <StatCard
              title="Orders"
              value={stats.orders}
              icon={<FaShoppingCart />}
              color="#8B4513"
            />

            <StatCard
              title="Revenue"
              value={`KSh ${stats.revenue}`}
              icon={<FaDollarSign />}
              color="#4CAF50"
            />

            <StatCard
              title="Reservations"
              value={stats.reservations}
              icon={<FaCalendarAlt />}
              color="#FF9800"
            />

            <StatCard
              title="Customers"
              value={stats.customers}
              icon={<FaUsers />}
              color="#3F51B5"
            />
        </div>

        <RecentOrders />

        </section>

      </main>

    </div>
  );
}

export default Dashboard;