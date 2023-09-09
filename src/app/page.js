'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import { setCookie, getCookies  } from 'cookies-next';

export default function Home() {
  const { push } = useRouter();
  const [chatID, setChatID] = useState('')
  const [otp, setOtp] = useState('')
  const [ error, setError ] = useState('')
  const [ message, setMessage ] = useState('')
  const authUser = getCookies('user').user;
  
  // useEffect(()=>{
  //   if(authUser){
  //     push('/user/' + authUser)
  //   }
  // },[])


  const handleSubmit = (e)=>{
    e.preventDefault()
    
    axios.get(process.env.NEXT_PUBLIC_API_URL+ "/send-otp/" + chatID)
    .then(response =>{
      setMessage(response.data);
      setError('')
    })
    .catch(error => {
      setError(error.response.data)
      setChatID('')
      setMessage('')
    })
  }

  const handleVerifyOTP = (e)=>{
    console.log(process.env.NEXT_PUBLIC_API_URL);
    e.preventDefault()
    axios.get(process.env.NEXT_PUBLIC_API_URL + "/check-otp/" + chatID + "/" + otp)
    .then(response =>{
      setCookie('user', chatID);
      push("/user/" + chatID)
    })
    .catch(error => {
      setError(error.response.data)
    })
    .finally(()=>{
      setMessage("")
      setOtp('')
      setChatID("")
    })
  }
  return (
    <main className=" w-full h-screen flex flex-col justify-center items-center">
        
        <form onSubmit={!message? handleSubmit : handleVerifyOTP}  className={` ${message ? "bg-[#FF3D3D]" : "bg-yellow-500"} rounded-lg p-10 pt-5 text-center flex flex-col justify-center gap-5`}>
        <div>
          <h1 className=' text-2xl text-[#0D1F2D] font-bold'>HridoyHost</h1>
          <p className=' text-sm text-blue-950'>Unlimited spcae for your Memories</p>
        </div>
          {!message ?
          <>
          <input value={chatID} onChange={(e)=> setChatID(e.target.value)} placeholder='Enter your ChatID' required type="number" className=' placeholder:text-blue-700 text-black border-2 border-[#1d2e3d] p-2 rounded focus:outline-none bg-[#4a9d9c]'/>
          <button type="submit" className=' text-center hover:bg-[#1d2e3d] bg-[#0D1F2D] px-4 py-2 rounded-md'>Get Entry</button>
          </>
          :
          <>
          <input value={otp} onChange={(e)=> setOtp(e.target.value)} placeholder='Enter your OTP' required type="number" className=' placeholder:text-blue-700 text-black border-2 border-[#1d2e3d] p-2 rounded focus:outline-none bg-[#4a9d9c]'/>
          <button type="submit" className=' text-center hover:bg-[#1d2e3d] bg-slate-600 px-4 py-2 rounded-md'>Verify</button>
          <p className=' font-bold bg-black px-2 py-1 rounded text-green-600'>{message}</p>
          </> 
          }
          {error && <p className=' text-black'>{error}</p>}
          
        </form>
    </main>
  )
}
