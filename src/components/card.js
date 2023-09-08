'use client'
import Image from "next/image";
import { useState } from "react";

const Card = ({url}) => {
    const [full, setFull] = useState(false)

  return (
    <div className="rounded  text-center ">
    <div className={`${full && `fixed flex left-0 top-0 w-full h-screen`}`}>
    {full &&
    <>
    <div className=" fixed top-0 w-full h-screen bg-gray-900 opacity-90"></div>
    <span onClick={()=>setFull(false)} className=" bg-gray-900 p-2 rounded-full border z-20 cursor-pointer text-4xl text-red-600 font-bold fixed top-5 right-5">&times;</span>
    </>
    }
    <Image 
    onClick={()=> setFull(true)}
    priority
    src={url}
    width={1920}
    height={1080}
    alt="Photo"
    className=' cursor-pointer z-10 transition-all duration-700 object-contain rounded mb-2' />
    </div>
    <a className=" text-sm" href={url}>Download</a>
    </div>
  )
}

export default Card