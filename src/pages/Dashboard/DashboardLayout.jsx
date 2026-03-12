import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { Logo } from '../../componenets/Logo'
import { OptionOne, OptionTwo } from '../../constants/SidebarOptions'
import BreadCrumb from '../../componenets/CustomComponents/BreadCrumb'
import { MdOutlinePermIdentity } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import { useTheme } from '../../context/ThemeContext'




const DashboardLayout = () => {
    const location = useLocation()
    const [open, setOpen] = useState(false)

    const [active, setActive] = useState(OptionOne[0] || {})

    const {theme, darkMode, lightMode}=useTheme()

    useEffect(() => {
        setActive([...OptionOne, ...OptionTwo].find((op) => op.path === location.pathname))
    }, [location])


    return (
        <>
            <div className="h-screen md:h-full flex dark:bg-dark-color dark:text-gray-300">

                {/* Sidebar */}
                <aside className="w-1/5 hidden   md:block">

                    <div className='flex flex-col justify-between h-full  '>
                        <div>
                            {/*== logo and title ======================*/}
                            <div className='flex  gap-2 items-center p-4'>
                                <Logo />
                                <h1 className='text-primary-color font-sans font-semibold text-lg'>aps</h1>
                            </div>
                            <nav>
                                <div className='flex flex-col p-4 border-b-1 border-gray-300'>
                                    {
                                        OptionOne?.map((option) => (
                                            <NavLink key={option.id} to={option.path}
                                                className={`hover:text-primary-color px-4 py-2 rounded-full flex items-center gap-2
                                    ${location.pathname === option.path && 'bg-secondary-color text-primary-color'}`} >
                                                <option.icon />  {option.label}
                                            </NavLink>
                                        ))
                                    }
                                </div>

                                <div className='flex flex-col  p-4'>
                                    {
                                        OptionTwo?.map((option) => (
                                            <NavLink key={option.id} to={option.path}
                                                className={`hover:text-primary-color px-4 py-2 rounded-full flex items-center gap-2
                                    ${location.pathname === option.path && 'bg-secondary-color text-primary-color'}`} >
                                                <option.icon /> {option.label}
                                            </NavLink>
                                        ))
                                    }
                                </div>

                            </nav>
                        </div>
                        <div className='flex items-center justify-between p-4'>
                            <div className='flex items-center gap-2'>
                                <div className='p-2 bg-gray-200 rounded-full'>
                                    <MdOutlinePermIdentity size={30} />
                                </div>
                                <div className='flex flex-col'>
                                    <p className='text-[12px] text-gray-400'>admin@edu.com</p>
                                    <p className='text-[13px] font-[500]'>Security Lead</p>
                                </div>
                            </div>
                            <div>
                                <FaAngleRight />
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Right Section */}
                <div className="flex h-[100vh] flex-col w-full lg:w-4/5">

                    {/* Header */}
                    <header className=" w-full flex flex-col gap-2 md:flex-row md:items-center  md:justify-between p-2 md:px-6 border-b border-gray-100">
                        <div className='flex md:hidden justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <Logo />
                                <h1 className='text-primary-color font-sans font-semibold text-lg'>aps</h1>
                            </div>
                            <div className='md:hidden relative'>
                                <HiDotsVertical onClick={() => setOpen(!open)} />

                                {/* Dropdown */}
                                {open && (
                                    <div className="absolute right-0 mt-2 w-40 p-1 flex flex-col gap-2 bg-white shadow-md rounded-lg shadow-lg z-50">

                                        <button className='p-1 border-1 border-gray-300 rounded-md text-[12px] font-semibold'>
                                            Export Report
                                        </button>
                                        <button className='p-1 border-1 border-red-300 text-red-400 rounded-md font-semibold text-[12px] bg-red-100 '>
                                            Stop Scan
                                        </button>
                                        <button className='p-1 border-1 border-gray-300 rounded-md text-[12px] font-semibold'>
                                            {theme}
                                        </button>

                                    </div>
                                )}

                            </div>

                        </div>
                        <div className='flex items-center'>
                            {active.label}
                            <span><BreadCrumb path={location.pathname} /></span>
                        </div>
                        <div className='hidden md:flex gap-2'>
                            <button className='p-1  lg:px-4 lg:py-2 border-1 border-gray-300 rounded-md text-[12px] font-semibold'>Export Report</button>
                            <button className='p-1  lg:px-4 lg:py-2 border-1 border-red-300 text-red-400 rounded-md font-semibold text-[12px] bg-red-100 '>Stop Scan</button>
                            {
                                theme==="light" ?
                                <button 
                                className='p-1  lg:px-4 lg:py-2 border-1 border-gray-300 rounded-md text-[12px] font-semibold'
                                onClick={()=>darkMode()}
                            >
                                Dark
                            </button>
                                :
                                <button 
                                className='p-1  lg:px-4 lg:py-2 border-1 border-gray-300 rounded-md text-[12px] font-semibold'
                                onClick={()=>lightMode()}
                            >
                                Light
                            </button>
                            }
                            
                            
                            
                            
                        </div>
                    </header>

                    {/* Dynamic Content */}
                    <main className="flex-1  p-2 overflow-y-auto bg-light-color dark:bg-dark-color dark:border-1 border-gray-700">
                        <Outlet />
                    </main>

                </div>

            </div>

            {/* ===== Footer ----------------------------- */}
            <footer className='bg-light-color py-2 md:hidden'>
                <div className='bg-white'>
                    <div className='flex items-center justify-between p-1'>
                        <div className='flex items-center gap-2'>
                            <div className='p-1 bg-gray-200 rounded-full'>
                                <MdOutlinePermIdentity size={25} />
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-[10px] text-gray-400'>admin@edu.com</p>
                                <p className='text-[11px] font-[500]'>Security Lead</p>
                            </div>
                        </div>
                        <div>
                            <FaAngleRight size={15} />
                        </div>
                    </div>
                    <nav className='flex justify-between gap-2 px-2 pt-1 text-sm border-t border-gray-200 overflow-x-auto'>
                        {
                            OptionOne?.map((op) => (
                                <NavLink key={op.id} to={op.path} className='flex min-w-[70px] flex-col'>
                                    <div className='flex justify-center'><op.icon /></div>
                                    <p className='text-[12px] text-center'>{op.label}</p>
                                </NavLink>
                            ))
                        }
                        {
                            OptionTwo?.map((op) => (
                                <NavLink key={op.id} to={op.path} className='min-w-[70px] flex flex-col'>
                                    <div className='flex justify-center'><op.icon /></div>
                                    <p className='text-[12px] text-center'>{op.label}</p>
                                </NavLink>
                            ))
                        }
                    </nav>
                </div>
            </footer>
        </>
    )
}

export default DashboardLayout