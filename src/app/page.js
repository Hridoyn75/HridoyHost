'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react';

export default function Home() {
  const { push } = useRouter();
  const [chatID, setChatID] = useState(0)

  const handleSubmit = (e)=>{
    e.preventDefault()
   push("/user/" + chatID)
  }
  return (
    <main className=" w-full h-screen flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit}  className=' bg-[#FF3D3D] rounded-lg p-10 flex flex-col justify-center gap-5'>
         <input onChange={(e)=> setChatID(e.target.value)} placeholder='Enter your ChatID' required type="number" className=' placeholder:text-blue-700 text-black border-2 border-[#1d2e3d] p-2 rounded focus:outline-none bg-[#4a9d9c]'/>
          <button type="submit" className=' text-center hover:bg-[#1d2e3d] bg-[#0D1F2D] px-4 py-2 rounded-md'>Get Entry</button>
        </form>
    </main>
  )
}
