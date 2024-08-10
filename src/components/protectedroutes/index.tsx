import React  from "react";
import { Location, Navigate, Outlet, useLocation } from "react-router-dom";

interface IProtectedRoutes {
 
}

const ProtectedRoutes: React.FC<IProtectedRoutes> = () => {
  const location: Location = useLocation();
  const auth: boolean = true;

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default ProtectedRoutes;
