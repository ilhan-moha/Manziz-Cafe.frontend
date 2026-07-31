import API_URL from "./api";

const token = () => localStorage.getItem("token");

export const getOrders = async () => {
  const response = await fetch(`${API_URL}/orders`, {
    headers: {
      Authorization: `Bearer ${token()}`,
    },
  });

  return await response.json();
};

export const createOrder = async (order) => {
  const response = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token()}`,
    },
    body: JSON.stringify(order),
  });

  return await response.json();
};

export const updateOrder = async (id, data) => {
  const response = await fetch(`${API_URL}/orders/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token()}`,
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};

export const deleteOrder = async (id) => {
  const response = await fetch(`${API_URL}/orders/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token()}`,
    },
  });

  return await response.json();
};