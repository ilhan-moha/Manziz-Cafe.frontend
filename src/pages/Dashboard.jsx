import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import StatCard from "../components/dashboard/StatCard";
import RecentOrders from "../components/dashboard/RecentOrders";
import {
  FaShoppingCart,
  FaDollarSign,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";

import "../styles/dashboard.css";

function Dashboard() {
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
              value="120"
              icon={<FaShoppingCart />}
              color="#8B4513"
            />

            <StatCard
              title="Revenue"
              value="KSh 48,500"
              icon={<FaDollarSign />}
              color="#4CAF50"
            />

            <StatCard
              title="Reservations"
              value="35"
              icon={<FaCalendarAlt />}
              color="#FF9800"
            />

            <StatCard
              title="Customers"
              value="220"
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