import React from 'react'
import { Logo } from '../componenets/Logo'
import { IoLogoApple } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaMeta } from "react-icons/fa6";
import { IoStarSharp } from "react-icons/io5";





const Login = () => {
    return (
        <div id='login' className='p-4'>

            {/*== logo and title ======================*/}
            <div className='flex  gap-2 items-center'>
                <Logo />
                <h1 className='text-white font-sans font-semibold text-lg'>aps</h1>
            </div>

            {/*== login content +======================*/}

            <div className='flex flex-col lg:mx-12 min-h-[70vh] lg:flex-row md:items-center  gap-12 lg:mt-15'>

                {/* Left contnet */}
                <div className='flex-1 text-white'>
                    <div className='py-6 space-y-1'>
                        <h1 className='text-4xl font-[500]'>Expert Level Cybersecurity</h1>
                        <h1 className='text-4xl font-[500]'>in 
                            <span className='text-primary-color'>hours</span> 
                            not weeks.
                        </h1>
                    </div>
                    <h3 className='text-sm'>What's included</h3>
                    <ul className='list-disc ml-5 my-3 text-[13px] space-y-2'>
                        <li>Effortlessly spider and map targets to uncover hidden security flaws</li>
                        <li>Deliver high-quality, validated findings in hours, not weeks.</li>
                        <li>Generate professional, enterprise-grade security reports automatically.</li>
                    </ul>
                    <div className='mt-10 lg:mt-40 space-y-2'>
                        <h3 className='text-sm flex gap-1 item-center'>
                            <IoStarSharp color='#00b579' className='mt-[2px]'/> 
                            Trustpilot
                        </h3>
                        <h1 className='font-[500]'>Rated 4.5/5.0 
                            <span>(100k+ reviews)</span>
                        </h1>
                    </div>
                </div>

                {/* Right contnent */}
                <div className='bg-white h-fit w-[290px]  md:w-[380px] py-5 px-4 lg:px-8 rounded-xl text-center'>
                    <h1 className='text-2xl mb-2'>Sign up</h1>
                    <p className='text-[12px]'>Already have an account? 
                        <span className='text-primary-color underline underline-offset-2 cursor-pointer'>
                            Log in
                        </span>
                    </p>
                    <div className='flex flex-col gap-3 py-3'>
                        <input
                            type='text'
                            className='w-full p-3 border-1 border-gray-300 text-[12px] rounded-lg'
                            placeholder='First name*'
                        />
                        <input
                            type='text'
                            className='w-full p-3 border-1 border-gray-300 text-[12px] rounded-lg'
                            placeholder='Last name*' 
                        />
                        <input
                            type='text'
                            className='w-full p-3 border-1 border-gray-300 text-[12px] rounded-lg'
                            placeholder='Email address*' 
                        />
                        <input
                            type='text'
                            className='w-full p-3 border-1 border-gray-300 text-[12px] rounded-lg'
                            placeholder='Password (8+ charecters)*' 
                        />
                        <div className='flex gap-2 items-start'>
                            <input 
                                type='checkbox' 
                                className='mt-[2px]' 
                            />
                            <p className='text-[12px] text-left'>I agree to Aps's 
                                <span className='text-primary-color underline underline-offset-2 cursor-pointer'>
                                    Terms & Conditions
                                </span> 
                                and acknowledge the 
                                <span className='text-primary-color underline underline-offset-2 cursor-pointer'>
                                    Privacy Policy
                                </span>
                            </p>
                        </div>
                    </div>

                    <button className='w-full my-3 bg-primary-color text-white py-2 text-sm rounded-full'>
                        Create account
                    </button>
                    <div className='flex gap-2'>
                        <button className='w-full rounded-full flex justify-center p-2 text-xl bg-black '>
                            <IoLogoApple color='white' />
                        </button>
                        <button className='w-full rounded-full flex justify-center p-2 text-xl bg-gray-200'>
                            <FcGoogle />
                        </button>
                        <button className='w-full rounded-full flex justify-center p-2 text-xl bg-blue-600'>
                            <FaMeta color='white' />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login