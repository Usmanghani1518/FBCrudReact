import { ILayoutProps } from '@/Types'
import React from 'react'
import { SideBar } from '@/components/sidebar'
import { UserList } from '@/components/userList'



export const Layout:React.FC<ILayoutProps> = ({children}) => {
  return (
    <div>
        <aside className='flex gap-x-4 bg-gray-800 fixed top-0 left-0 z-40 lg:w-60 h-screen'>
            <SideBar/>
        </aside>
        <div className=' lg:ml-60 lg:mr-60 flex-1 mr-36 '>{children}</div>
        <aside className=' hidden lg:block bg-gray-800 fixed right-0 top-0  z-40 lg:w-60 h-screen'>
          <UserList/>
        </aside>
    </div>
  )
}