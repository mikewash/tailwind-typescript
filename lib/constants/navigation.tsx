import {
    HiOutlineViewGrid,
    HiOutlineCube,
    HiOutlineDocumentText,
    HiOutlineAnnotation,
    HiOutlineQuestionMarkCircle,
    HiOutlineCog,
    HiOutlineUsers,
    HiOutlineLogout
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashbaord',
        label: 'Dashboard',
        path: '/admin',
        icon: <HiOutlineViewGrid />
    },
    {
        key: 'team',
        label: "Team",
        path: '/team',
        icon: <HiOutlineUsers />
    }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'settings',
        label: 'Settings',
        path: '/settings',
        icon: <HiOutlineCog />
    }
]