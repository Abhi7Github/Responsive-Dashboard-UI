import React from 'react'
import { TfiReload } from "react-icons/tfi";
import { SummaryCards, ScanData, ScanColors } from '../../constants/DashboradData'
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import { IoFilter } from "react-icons/io5";
import { FiColumns } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { ProgressBar } from "../../componenets/CustomComponents/ProgressBar"







export const DashboardHome = () => {

    const colors = ["#f04343", "#fa7116", "#fabd23", "#21c45d"]

    return (
        <>
            <div className='h-full space-y-2'>
                <div className='bg-white dark:bg-shadow-color rounded-lg'>
                    {/* ---top info card------------------------ */}
                    <div className=' justify-around overflow-x-auto text-[13px] flex  p-4 rounded-lg lg:gap-4'>
                        <div className='flex text-[12px] lg:text-sm items-center gap-1'>
                            <p className='pr-2 px-2 lg:pr-6'>Org: <span className='font-semibold'>Project X</span></p>
                            <p className='pr-2 px-2 lg:px-6 border-l-1 border-gray-400'>Owner: <span className='font-semibold'>Nammagiri</span></p>
                            <p className='pr-2 px-2 lg:px-6 border-l-1 border-gray-400'>Total Scan: <span className='font-semibold'>100</span></p>
                            <p className='pr-2 px-2 lg:px-6 border-l-1 border-gray-400'>Scheduled: <span className='font-semibold'>1000</span></p>
                            <p className='pr-2 px-2 lg:px-6 border-l-1 border-gray-400'>Rescans: <span className='font-semibold'>100</span></p>
                            <p className='pr-2 px-2 lg:px-6 border-l-1 border-gray-400'>Failed Scans: <span className='font-semibold'>100</span></p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <TfiReload className='text-primary-color' /> 10 mins ago
                        </div>
                    </div>
                    {/* ---bottom table card------------------------ */}
                    <div className='p-4 grid grid-cols-2 lg:grid-cols-4 gap-2 justify-between'>
                        {
                            SummaryCards?.map((summary) => (
                                <div key={summary.id} className='px-3 shadow-md rounded space-y-2'>
                                    <div className='flex justify-between items-center gap-3'>
                                        <div className='text-[13px] md:text-[16px] font-[500]'>{summary.title}</div>
                                        <div className={`p-1 rounded-md bg-${summary.color}-200 `}>
                                            <summary.icon color={summary.color} />
                                        </div>
                                    </div>
                                    <div className='flex justify-between gap-3 items-center'>
                                        <div className='text-[15px] md:text-xl'>{summary.count}</div>
                                        <div className={`text-[9px] md:text-[10px] flex items-center ${summary.increase ? "text-red-400" : "text-green-400"}`}>
                                            {summary.increase ? <><FaArrowUpLong /> +</> : <><FaArrowDownLong /> -</>}
                                            {summary.incCount}%
                                            {summary.increase ? "increase" : "decrease"}
                                            than yesterday
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className='flex flex-col rounded-md h-[64vh] bg-white dark:bg-shadow-color text-[12px]'>
                    <div className='flex flex-col md:flex-row gap-2 justify-between px-3 py-2' >
                        <div className="relative flex-grow">

                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 ">
                                <IoMdSearch size={17} />
                            </div>


                            <input
                                type="search"
                                className="block focus:outline-none  w-full rounded-md border border-gray-300 bg-white dark:bg-shadow-color py-1 pl-9 pr-3"
                                placeholder="Search scans by name or type..."
                            />
                        </div>
                        <div className='flex  gap-2'>
                            <button className='px-3 py-1 flex gap-1 items-center border border-gray-300 rounded-md'>
                                <IoFilter /> Filter
                            </button>
                            <button className='px-3 py-1 flex gap-1 items-center border border-gray-300 rounded-md'>
                                <FiColumns />  Column
                            </button>
                            <button className='px-3 bg-primary-color text-white py-1 flex gap-1 items-center border-1 rounded-md'>
                                <IoIosAdd color='white' /> New Scan
                            </button>
                        </div>
                    </div>

                    <div className='grow px-3 pt-1 overflow-x-auto'>
                        <table className='w-180 lg:w-full h-full px-3'>
                            <thead className='h-7'>
                                <tr className="text-left">
                                    <th className="px-2">Scan Name</th>
                                    <th>Type</th>
                                    <th>Status</th>
                                    <th>Progress</th>
                                    <th className='text-center'>Vulnerability</th>
                                    <th className='text-right pr-3'>Last Scan</th>
                                </tr>
                            </thead>
                            <tbody className='border-t border-b'>
                                {ScanData?.map((scan) => (
                                    <tr key={scan.id}>
                                        <td className="px-2 font-semibold">{scan.scanname}</td>
                                        <td>{scan.type}</td>
                                        <td>
                                            <span 
                                                className={`px-2 border font-semibold rounded-sm bg-${ScanColors[scan.status]}-200`}
                                                style={{color:ScanColors[scan.status], borderColor:ScanColors[scan.status]}}
                                            >
                                                {scan.status}
                                            </span>
                                        </td>
                                        <td>
                                            <span className='flex items-center gap-3'>
                                                <div className='h-2 w-20'>
                                                    <ProgressBar color={scan.progress>50 ?"teal" : "#f04343"} bg={`#DEDED1`} progress={scan.progress} />
                                                </div>  {scan.progress}%
                                            </span>
                                        </td>
                                        <td className='text-center'>
                                            <div className='flex gap-2 items-center justify-center'>
                                                {
                                                    scan?.vulnerability?.map((val,index) => (
                                                        <span key={index} className={`w-7 text-[12px] rounded-md`} style={{backgroundColor:colors[index]}}>{val}</span>
                                                    ))
                                                }
                                            </div>
                                        </td>
                                        <td className='text-right pr-3'> {scan.lastscan}d ago</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* === pagination ------------------- */}
                    <div className='px-3 h-9 py-2 content-end flex justify-between'>
                        <p>Showing 10 of 100 scans</p>
                        <div className='flex gap-2 items-center'>
                            <FaAngleLeft className='border rounded-md border-gray-500 h-5 w-5 p-1' />
                            <FaAngleRight className='border rounded-md border-gray-500 h-5 w-5 p-1' />
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}
