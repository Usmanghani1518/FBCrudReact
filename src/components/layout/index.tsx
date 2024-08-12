import { ILayoutProps } from '@/Types'
import React from 'react'
import { SideBar } from '@/components/sidebar'



export const Layout:React.FC<ILayoutProps> = () => {
  return (
    <div>
        <aside className='flex gap-x-4 bg-gray-800 fixed top-0 left-0 z-40 lg:w-60 h-screen'>
            <SideBar/>
        </aside>
        <div></div>
        <aside></aside>
    </div>
  )
}