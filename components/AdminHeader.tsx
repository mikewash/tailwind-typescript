import React, { Fragment } from 'react'
import {
    HiBell,
    HiCheck,
    HiChevronDown,
    HiCreditCard,
    HiOutlineChatAlt,
    HiOutlineSearch, HiPencil,
} from 'react-icons/hi'
import {Menu, Popover, Transition} from '@headlessui/react'
import Link from "next/link";
import {HiCog8Tooth} from "react-icons/hi2";

//okay i'm not sure why but the active like gray out isn't working for some reason for the Popover.button
//in the video that i'm watching when you click on it it's supposed to gray out the background but it straight up isn't working so...

export default function AdminHeader() {

    return (
        <div className='bg-white h-16 px-4 flex justify-between items-center'>
            <div className='relative'>
                <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"/>
                <input
                    type="text"
                    placeholder='Search...'
                    className='text-sm focus:outline-none active:outline-none w-[24rem] pr-4 pl-11'></input>
            </div>
            <div className='flex items-center gap-2 mr-2'>
                <Popover className="relative">
                    {() => (
                        <>
                            <Popover.Button
                                className="p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:text-gray-100">
                                <HiOutlineChatAlt fontSize={24}/>
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel>this is the panel apparently :V</Popover.Panel>
                            </Transition>
                        </>)}
                </Popover>
                <Popover className={"flex items-start relative "}>
                    <Popover.Button className="outline-none mr-5 md:mr-8 cursor-pointer text-gray-700 ">
                        <HiBell className={" flex items-center h-6 w-6"}/>
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform scale-95"
                        enterTo="transform scale-100"
                        leave="transition ease-in duration=75"
                        leaveFrom="transform scale-100"
                        leaveTo="transform scale-95"
                    >
                        <Popover.Panel
                            className="absolute -right-16 sm:right-4 z-50 mt-2 bg-white shadow-sm rounded max-w-xs sm:max-w-sm w-screen ">
                            <div className="relative p-3">
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-gray-700 font-medium">Notifications</p>
                                    <a className="text-sm text-orange-500" href="#">
                                        Mark all as read
                                    </a>
                                </div>
                                <div className="mt-4 grid gap-4 grid-cols-1 overflow-hidden ">
                                    <div className="flex">
                                        <div
                                            className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center cursor-pointer">
                                            <HiCheck className="h-4 w-4 text-green-600"/>
                                        </div>
                                        <div className="ml-4 ">
                                            <p className="font-medium text-gray-700">
                                                Notification Title
                                            </p>
                                            <p className="text-sm text-gray-500 truncate">
                                                Test Notification text for design
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div
                                            className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center cursor-pointer">
                                            <HiCheck className="h-4 w-4 text-green-600"/>
                                        </div>
                                        <div className="ml-4">
                                            <p className="font-medium text-gray-700">
                                                Notification Title
                                            </p>
                                            <p className="text-sm text-gray-500 truncate">
                                                Test Notification text for design
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div
                                            className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center cursor-pointer">
                                            <HiCheck className="h-4 w-4 text-green-600"/>
                                        </div>
                                        <div className="ml-4">
                                            <p className="font-medium text-gray-700">
                                                Notification Title
                                            </p>
                                            <p className="text-sm text-gray-500 truncate">
                                                Test Notification text for design
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center items-center">
                            <picture>
                                <img
                                    src="/"
                                    className="rounded-full h-8 md:mr-4 border-2 border-white shadow-sm"
                                    alt="profile picture"
                                />
                            </picture>
                            <span className="hidden md:block font-medium text-gray-700">
                Rettson
              </span>
                            <HiChevronDown className="ml-2 h-4 w-4 text-gray-700" />
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform scale-95"
                        enterTo="transform scale-100"
                        leave="transition ease-in duration=75"
                        leaveFrom="transform scale-100"
                        leaveTo="transform scale-95"
                    >
                        <Menu.Items className="absolute right-0 w-56 z-50 mt-2 origin-top-right bg-white rounded shadow-sm">
                            <div className="p-1">
                                <Menu.Item>
                                    <Link
                                        href="#"
                                        className="flex hover:bg-blue-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                                    >
                                        <HiPencil className="h-4 w-4 mr-2" />
                                        Edit
                                    </Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link
                                        href="#"
                                        className="flex hover:bg-blue-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                                    >
                                        <HiCreditCard className="h-4 w-4 mr-2" />
                                        Billing
                                    </Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link
                                        href="#"
                                        className="flex hover:bg-blue-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                                    >
                                        <HiCog8Tooth className="h-4 w-4 mr-2" />
                                        Settings
                                    </Link>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    )
}