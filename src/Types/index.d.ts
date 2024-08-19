import { OutputFileEntry  } from "@uploadcare/react-uploader";
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

interface IPost{
  caption:string,
  photo:PhotoMeta[],
  likes:number,
  userLikes:[],
  userId:string | undefined ,
  date:Date
}

interface PhotoMeta {
  cdnUrl:string,
  uuid:string
}

interface FileEntry{
  files:OutputFileEntry[],

}

interface IFileUpload{
  
}