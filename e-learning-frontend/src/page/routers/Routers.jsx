import { Route, Routes } from "react-router-dom";
import HomeStudent from "../students/HomeStudent";
import LoginPage from "../login_register/LoginPage";
import PrivateRoutes from "../../components/ProtectedRoutes/PrivateRoute";

function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<HomeStudent />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Routers;
