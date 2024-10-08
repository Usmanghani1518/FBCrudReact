import React  from "react";
import { Location, Navigate, Outlet, useLocation } from "react-router-dom";
import {useAuthState} from 'react-firebase-hooks/auth'
import { getAuth } from "firebase/auth";
import { Layout } from "@/components/layout";
interface IProtectedRoutes {
 
}

const ProtectedRoutes: React.FC<IProtectedRoutes> = () => {
  const location: Location = useLocation();
  const auth = getAuth();
  const [user,loading] = useAuthState(auth)


  if(loading){
    return (
      <div>....Loading</div>
    )
  }
  

  return user ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default ProtectedRoutes;
