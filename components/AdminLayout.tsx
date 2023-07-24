import React, { Children } from 'react'
import siteMetadata from '@/data/siteMetadata'
import Link from './Link'
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';

type Props = {
    title: string,
    children: JSX.Element,
};

//if you want to get rid of the header then add "inset-y-0" to the classname
/*okay so, for the bottom part of the side bar I can't get the flex stuff to work as intended where it pushes it down.
so what I ended up doing it just pushing the bottom part of the sidebar all the way down 
BUT because i'm forcefully pushing it down, the sidebar color stays like where it is
so I'm changing the color of the entire sidebar side of the page to the same color instead of having it to where 
what the sidebar is covering is that dark grey color

basically - ENTIRE sidebar is now a color instead of the small parts of the sidebar

honestly my explanation doesn't make much sense to me either*/

//okay i keep having to change margins and stuff because things just aren't in line, 

export default function AdminLayout({ children }) {
    return (
        <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden absolute left-0 inset-y-0'>
            <div className="bg-neutral-900"> <AdminSidebar /> </div>
            <div className="p-4 w-auto">
                <div className="bg-teal-200 -my-4 -mx-4"> <AdminHeader /> </div>
                <main className="flex-grow container mx-auto px-4 sm:px-6">{children}</main>
            </div>
        </div>
    )
}