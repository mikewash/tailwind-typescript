import React from 'react'
import Logo from '@/data/logo.svg'
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '@/lib/constants/navigation'
import Link from './Link'
import SidebarLogo from 'flowbite-react/lib/esm/components/Sidebar/SidebarLogo'
import { HiOutlineLogout } from 'react-icons/hi'

const linkClasses = "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base"

//right now there is a styling error with the bottom admin settings on the sidebar, the ones at the top
//are fine, when you hover over the top ones then the whole sidebar turns gray while 
//the ones on the bottom don't
//I would fix it but i'm not sure how and at this point I just have to get this thing done

export default function AdminSidebar() {
    return (
        <div className='flex-col bg-neutral-900 p-5 text-white w-60'>
            <div className="flex items-center px-1 py-3 gap-2">
                <Logo />
                <span className="text-neutral-100 text-lg">AdminDashboard</span>
            </div>
            <div className='flex-1'>{DASHBOARD_SIDEBAR_LINKS.map((item) => (
                <SidebarLink key={item.key} item={item} />
            ))}
            </div>
            <div className='absolute bottom-10 flex-2 px-0 gap-0.5 border-t border-neutral-700'>
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}
                <div className='text-red-500 cursor-pointer flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'>
                    <span className='text-xl'>
                        <HiOutlineLogout />
                    </span>
                    <div className='text-xl font-semibold'>
                        Logout
                    </div>
                </div>

            </div>
        </div>
    )
}




function SidebarLink({ item }) {
    return (
        <Link href={item.path} className={linkClasses}>
            <span className="text-xl">{item.icon}</span>
            {item.label}
        </Link>
    )
}