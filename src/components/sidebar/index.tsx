import { ISiderBarProps } from '@/Types'
import React from 'react'
import homeIcon from "@/assets/icons/home.svg";
import addIcon from "@/assets/icons/add.svg";
import logoutIcon from "@/assets/icons/logout.svg";
import myphotosIcon from "@/assets/icons/myphotos.svg";
import settingIcon from "@/assets/icons/settings.svg";
import directIcon from "@/assets/icons/direct.svg";
import notificationIcon from "@/assets/icons/notification.svg";
import profileIcon from "@/assets/icons/profile.svg";



const navItem =[
  {
    name:'Home',
    link:'/',
    Icon:homeIcon
  },
  {
    name:'Add Photos',
    link:'/post',
    Icon:addIcon
  },
  {
    name:'My Photos',
    link:'/myphotos',
    Icon:myphotosIcon
  },
  {
    name:'Profile',
    link:'/profile',
    Icon:profileIcon
  },
  {
    name:'Notification',
    link:'#',
    Icon:notificationIcon
  },
  {
    name:'Direct',
    link:'#',
    Icon:directIcon
  },
  {
    name:'',
    link:'/',
    Icon:
  },
  {
    name:'',
    link:'/',
    Icon:
  },
]

export const SideBar:React.FC<ISiderBarProps> = () => {
  return (
    <div>SiderBar</div>
  )
}