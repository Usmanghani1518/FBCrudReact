import { ISiderBarProps } from '@/Types'
import React from 'react'
import homeIcon from "@/assets/icons/home.svg";
import addIcon from "@/assets/icons/add.svg";
import myphotosIcon from "@/assets/icons/myphotos.svg";
import settingIcon from "@/assets/icons/settings.svg";
import directIcon from "@/assets/icons/direct.svg";
import notificationIcon from "@/assets/icons/notification.svg";
import logoutIcon from "@/assets/icons/logout.svg";
import profileIcon from "@/assets/icons/profile.svg";
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import { useUserAuth } from '@/context/userAuthContext';



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
    link:'/myPhotos',
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
    name:'Settings',
    link:'#',
    Icon:settingIcon
  }
]

export const SideBar:React.FC<ISiderBarProps> = () => {
  const {pathname} = useLocation();
  const {logOut} =useUserAuth();

  const handleLogout = ()=>{
    logOut()
  }

  return (
    <nav className='flex flex-col  relative h-screen max-w-sm w-full'>
      <div className='flex justify-center m-5'>
        <div className='text-white text-lg'>
          Photogram
        </div>
      </div>
      {
        navItem.map((items)=>(
          <div key={items.name} className={cn(
            buttonVariants({variant:'default'}),
            pathname === items.link ?"bg-white text-white-800 hover:bg-white rounded-none"
            :"hover:bg-slate-950 hover:text-white bg-transparent rounded-none",
            "justify-start"
        )}>
            <Link to={items.link} className='flex'>
            <span><img src={items.Icon} className={`w-5 h-5 mr-2 ${pathname === items.link ?"invert-0":"invert"}`}    alt="" /></span>
            <span>{items.name}</span>
            </Link>
          </div>
        ))
      }

   <div  className={cn(
            buttonVariants({variant:'default'}),
           "hover:bg-slate-950 hover:text-white bg-transparent rounded-none hover:cursor-pointer",
            "justify-start"
        )} onClick={handleLogout}>
            <span><img src={logoutIcon} className={`w-5 h-5 mr-2 invert }`}    alt="" /></span>
            <span>Logout</span>
          </div>

    </nav>
  )
}