import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Error, Home, Login, MyPhotos, Post, Profile, SignUp } from "@/pages";
import ProtectedRoutes from "@/components/protectedroutes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route  element={<ProtectedRoutes  />}>
      <Route path="/" element={<Home/>} errorElement={<Error/>}/>
      <Route path="myPhotos" element={<MyPhotos/>} errorElement={<Error/>}/>
      <Route path="Post" element={<Post/>} errorElement={<Error/>}/>
      <Route path="Profile" element={<Profile/>} errorElement={<Error/>}/>
      </Route>
      <Route path="/login" errorElement={<Error />} element={<Login />} />
      <Route path="/signup" errorElement={<Error />} element={<SignUp />} />
    </>
  )
);
