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
import { Link } from "react-router-dom";
import { IUserSignUp } from "@/Types";

interface ISignUpProps {}



const initialvalue:IUserSignUp = {
  email:'',
  password:'',
  confirmPassword:''
}

const SignUp: React.FC<ISignUpProps> = () => {
  const [userInfo,setUserInfo]= useState<IUserSignUp>(initialvalue)

  const handleSubmit =(e:MouseEvent<HTMLFormElement>)=>{
    e.preventDefault()
    try {
      console.log('*************',userInfo)
    } catch (error) {
      console.log('&&&&&&&&&&&&&&&77',userInfo)
    }
    
    }

  return (
    <div className="bg-slate-800 w-full h-screen">
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
              Enter your email below to create your account
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid">
              <Button variant="outline" /* onClick={handleGoogleSignIn} */>
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
            <div className="grid gap-2">
              <Label htmlFor="confirmpassword">Confirm password</Label>
              <Input
                id="confirmpassword"
                type="password"
                placeholder="Confirm password"
                value={userInfo.confirmPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUserInfo({
                    ...userInfo,
                    confirmPassword: e.target.value,
                  })
                }
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full" type="submit">
              Sign Up
            </Button>
            <p className="mt-3 text-sm text-center">
              Already have an account ? <Link to="/login">Login</Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
    </div>
    </div></div>
  );
};
export default SignUp;
