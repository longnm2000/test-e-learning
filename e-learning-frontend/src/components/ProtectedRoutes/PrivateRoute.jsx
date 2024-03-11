import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  const hasUser = localStorage.getItem("currentUser") || "";
  console.log(!!hasUser);

  return hasUser ? <Outlet /> : <Navigate to={"/login"} />;
}

export default PrivateRoutes;
