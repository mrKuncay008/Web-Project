import { useState } from 'react';
import '../../css/app.css';
import kelLogo from "../../../public/image/logoNew.png"
import { List, Download, Upload, Save } from 'react-feather';
import NavLink from '@/Components/NavLink';
import { Link } from '@inertiajs/react';
import ModalIncome from './ModalIncome';
import ModalOutcome from './ModalOutcome';

export default function Authenticated({ auth, header, children }) {

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar Navbar */}
            <nav className="bg-gray-800 nav_main shadow-lg">
                <div className="flex items-center justify-center h-16 border-b-1">
                    <Link href="/">
                        <img src={kelLogo} width={100} alt="Logo" />
                    </Link>
                </div>

                <div className="flex flex-col gap-4 mt-5">
                <NavLink href={route('dashboard')} className=' text-white gap-3 block px-4 py-2 hover:text-blue-500' active={route().current('dashboard')}>
                    <List size={20}/>
                        Dasboard
                </NavLink>
                
                <div className=' flex gap-3 px-4 py-2 hover:text-blue-500'>
                    <Download size={20}/>
                    <ModalIncome/>
                </div>

                <div className=' flex gap-3 px-4 py-2 hover:text-blue-500'>
                    <Upload size={20}/>
                        <ModalOutcome />
                </div>
                
                </div>

                <div className="flex flex-col mt-12">
                    <NavLink href={route('profile.edit')} className='text-white block px-4 py-2'>
                            Profile
                    </NavLink>

                    <NavLink href={route('logout')} method="post" as="button" className='text-white block px-4 py-2'>
                            Log Out
                    </NavLink>
                </div>
                    
            </nav>

            {/* Konten Utama */}
            <div className="flex-grow ml-48">
                <header className="bg-slate-900 shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>

                <main className="py-12">
                    {children}
                </main>
            </div>
        </div>
    );
}


//         <div className="min-h-screen bg-gray-100">
//             <nav className="bg-gray-800 border-b border-gray-800">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex justify-between h-16">
//                         <div className="flex">
//                             <div className="shrink-0 flex items-center">
//                                 <Link href="/">
//                                     <img src={kelLogo} width={100}  />
//                                 </Link>
//                             </div>
// 
//                             <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex text-white">
//                                 <NavLink href={route('dashboard')} className='text-white text-lg' active={route().current('dashboard')}>
//                                     Semangat Pagi {auth.user.name} ❤️
//                                 </NavLink>
//                             </div>
//                         </div>
// 
//                         <div className="hidden sm:flex sm:items-center sm:ml-6 ">
//                             <div className="ml-3 relative">
//                                 <Dropdown>
//                                     <Dropdown.Trigger>
//                                         <span className="inline-flex rounded-md">
//                                             <button
//                                                 type="button"
//                                                 className="inline-flex items-center px-3 py-2
//                                                  border border-transparent text-sm leading-4 font-medium rounded-md text-gray-200 bg-gray-800 hover:text-blue-600 focus:outline-none transition ease-in-out duration-150"
//                                             >
//                                                 {auth.user.name}
// 
//                                                 <svg
//                                                     className="ml-2 -mr-0.5 h-4 w-4"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                     viewBox="0 0 20 20"
//                                                     fill="currentColor"
//                                                 >
//                                                     <path
//                                                         fillRule="evenodd"
//                                                         d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                                                         clipRule="evenodd"
//                                                     />
//                                                 </svg>
//                                             </button>
//                                         </span>
//                                     </Dropdown.Trigger>
// 
//                                     <Dropdown.Content>
//                                         <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
//                                         <Dropdown.Link href={route('logout')} method="post" as="button">
//                                             Log Out
//                                         </Dropdown.Link>
//                                     </Dropdown.Content>
//                                 </Dropdown>
//                             </div>
//                         </div>
// 
//                         <div className="-mr-2 flex items-center sm:hidden">
//                             <button
//                                 onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
//                                 className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
//                             >
//                                 <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
//                                     <path
//                                         className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M4 6h16M4 12h16M4 18h16"
//                                     />
//                                     <path
//                                         className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M6 18L18 6M6 6l12 12"
//                                     />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
// 
//                 <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
//                     <div className="pt-2 pb-3 space-y-1">
//                         <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
//                             Dashboard
//                         </ResponsiveNavLink>
//                     </div>
// 
//                     <div className="pt-4 pb-1 border-t border-gray-200">
//                         <div className="px-4">
//                             <div className="font-medium text-base text-gray-800">
//                                 {auth.user.name}
//                             </div>
//                             <div className="font-medium text-sm text-gray-500">{auth.user.email}</div>
//                         </div>
// 
//                         <div className="mt-3 space-y-1">
//                             <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
//                             <ResponsiveNavLink method="post" href={route('logout')} as="button">
//                                 Log Out
//                             </ResponsiveNavLink>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
// 
//             {header && (
//                 <header className="bg-slate-900 shadow">
//                     <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
//                 </header>
//             )}
// 
//             <main>{children}</main>
//         </div>