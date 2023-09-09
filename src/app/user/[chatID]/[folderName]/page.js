import Card from "@/components/card";
import Link from "next/link";
import { cookies } from 'next/headers'
import { toFormData } from "axios";
import Image from "next/image";

const FolderPage = async ({params}) => {
    const response = await fetch( process.env.NEXT_PUBLIC_API_URL + "/folder/"
     + params.folderName + "/" + params.chatID,
    { cache: 'no-store' })

    const cookieStore = cookies()
    const authUser = cookieStore.get('user')
    let valid = false;
    if(authUser){
        valid = authUser.value === params.chatID;
    }
    const data = await response.json();
    
    return (
    <>
    {valid && <h1 className=" text-center text-3xl py-8">Folder Name: {params.folderName}🚀</h1>}
    {valid && <Link href='/' className=" bg-slate-900 rounded-lg p-2 absolute top-5 left-5">Back</Link>}
    <div className=" flex flex-wrap px-2 md:px-10">
        {valid && data.map(photo =>{
            return (
                <div key={photo.id} className=" p-2 w-1/3 md:w-1/4 lg:w-1/5">
                    <Card url={photo.url} />
                </div>
            )
        })}
        {valid && data.length === 0 && <p className=" text-slate-700 text-2xl">This folder is empty!</p>}
    </div>
    {
        !valid && 
        <main className=" w-full h-screen flex flex-col justify-center items-center">
            <div  className=' bg-yellow-500 rounded-lg p-10 flex flex-col justify-center gap-5'>
            <p className=" py-2 text-black">You're Not Authenticated!</p>
            <Link href='/' className=' text-center hover:bg-[#1d2e3d] bg-[#0D1F2D] px-4 py-2 rounded-md'>Get Access</Link>
            </div>
        </main>
    }
    </>
  )
}

export default FolderPage