import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import "../styles/orders.css";
import { useEffect, useState } from "react";
import {getOrders, deleteOrder} from "../services/ordersService"

function Orders() {
  const [orders,setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
    },[]);
  
  const loadOrders = async () => {
   const data = await getOrders();

   if (Array.isArray(data)) {
    setOrders(data)
   }
  };

  const handleDelete = async (id) => {
    await deleteOrder(id);
    loadOrders();
  };

return (
  <section className="orders-page">

    <div className="orders-header">
      <h1>Orders</h1>

      <button className="add-order-btn">
        <FaPlus /> Add Order
      </button>
    </div>

    <table className="orders-table">

      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer</th>
          <th>Item</th>
          <th>Total</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

  <tbody>

    {orders.length === 0 ? (
        <tr>
          <td colSpan="6">no orders found</td>
        </tr>
      ): (
  orders.map((order) => (
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
        
        <td>
          {new Date(order.created_at).toLocaleDateString()}
        </td>

        <td className="actions">
        <button className="edit-btn">
          <FaEdit />
        </button>

        <button className="delete-btn"
        onClick={() => handleDelete(order.id)}>
          <FaTrash />
                </button>
              </td>
          </tr>
          ))
        )}
      </tbody>
    </table>
  </section>
);
}

export default Orders;