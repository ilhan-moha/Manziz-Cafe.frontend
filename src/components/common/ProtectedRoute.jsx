
/* function ProtectedRoute({ children }) {
  return children;
}

export default ProtectedRoute; */

import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  return token ? children : <Navigate replace to="/login" />;
}

export default ProtectedRoute;