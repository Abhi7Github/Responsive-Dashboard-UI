import React from 'react'
import { MdOutlineHome } from "react-icons/md";


const BreadCrumb = ({path}) => {

  const [first, ...allPaths]=path.split('/');


  return (
    <div className='flex items-center gap-2 text-[13px] px-4 text-gray-400'>  
        <MdOutlineHome className='mt-[1px]'/> 
        {
            allPaths?.map((path,index)=>(
                <span key={index}>
                    
                        
                    {" /  "}  <span className={`${index===allPaths.length-1 && "text-primary-color font-[500]"}`}>{path}</span>
                    
                </span>
            ))
        }
    </div>
  )
}

export default BreadCrumb