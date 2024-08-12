import React from "react";

interface IuserInup {}

interface IUserAuthProvider {
  children: ReactNode;
}

interface IUserSignUp {
  email: string;
  password: string;
  confirmPassword: string;
}

interface IUserLogIn {
  email: string;
  password: string;
}

interface ILayoutProps{
  children:React.ReactNode
}
interface ISiderBarProps{

}

interface IUserList{

}