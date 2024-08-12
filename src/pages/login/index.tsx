import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGoogle } from "react-icons/fa";
import  React, { useState ,MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IUserLogIn } from "@/Types";
import { useUserAuth } from "@/context/userAuthContext";

interface ILoginProps {}

const Login: React.FC<ILoginProps> = () => {



    const initialValue:IUserLogIn ={
      email:'',
      password:''
  }

  const [userInfo ,setUserInfo] = useState<IUserLogIn>(initialValue)
  const {googleSignIn,logIn} = useUserAuth();
  const navigate = useNavigate();

const  handleGoogleSignIn = async ()=>{
  try {
    googleSignIn()
    navigate("/")
  } catch (error) {
    console.log("error in google log in ",error)
  }
}

const handleSubmit = (e:MouseEvent<HTMLFormElement>)=>{
  e.preventDefault();
  try {
    console.log("77&&&&&&&&&&&&&&&&&&&&")
    logIn(userInfo.email,userInfo.password);
    navigate("/")
  } catch (error) {
    console.log("error in email log in ", error)
  }
}

  return  <div className="bg-slate-800 w-full h-screen">
  <div className="container mx-auto p-6 flex h-full">
    <div className="flex justify-center items-center w-full">
<div className="max-w-sm rounded-xl border bg-card text-card-foreground shadow-sm">
  <Card>
    <form onSubmit={handleSubmit}>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center mb-4">
          PhotoGram
        </CardTitle>
        <CardDescription>
          Enter your email below to login your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid">
          <Button variant="outline" type="button" onClick={()=>handleGoogleSignIn()}>
            <FaGoogle className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            type="email"
            placeholder="dipesh@example.com"
            value={userInfo.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            value={userInfo.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserInfo({ ...userInfo, password: e.target.value })
            }
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Button className="w-full" type="submit">
          Log In
        </Button>
        <p className="mt-3 text-sm text-center">
          Do not have any account ? <Link to="/signup">Sign Up</Link>
        </p>
      </CardFooter>
    </form>
  </Card>
</div>
</div>
</div></div>;
};
export default Login;
