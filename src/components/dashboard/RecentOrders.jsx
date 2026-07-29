import "../../styles/recentOrders.css";

function RecentOrders() {
  const orders = [
    {
      id: "#1001",
      customer: "John Kamau",
      item: "Cappuccino",
      total: "KSh 300",
      status: "Completed",
    },
    {
      id: "#1002",
      customer: "Amina Hassan",
      item: "Chocolate Cake",
      total: "KSh 600",
      status: "Preparing",
    },
    {
      id: "#1003",
      customer: "Brian Otieno",
      item: "Sandwich",
      total: "KSh 800",
      status: "Pending",
    },
  ];

  return (
    <section className="recent-orders">
      <h2>Recent Orders</h2>

      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Item</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.item}</td>
              <td>{order.total}</td>
              <td>
                <span className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default RecentOrders;