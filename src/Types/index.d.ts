import { ReactNode } from "react";

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
  Children:ReactNode
}
interface ISiderBarProps{

}

interface IUserList{

}