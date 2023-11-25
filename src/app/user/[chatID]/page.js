import Link from "next/link";
import { cookies } from 'next/headers'
import Image from "next/image";

const UserPage = async ({params}) => {
    const response = await fetch( process.env.NEXT_PUBLIC_API_URL + "/folders/" + params.chatID,
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
    {valid && <h1 className=" text-center text-3xl py-8">All Your Memories🚀</h1>}
    <div className=" flex flex-wrap px-2 md:px-10">
        {valid && data.map(folder =>{
            return (
                <div key={folder.id} className=" p-2 md:p-4 w-1/4 md:w-1/6 lg:w-[10%]">
                    <Link href={"/user/" + params.chatID + "/" + folder.name}>
                        <Image 
                        src='/folder.svg'
                        width={500}
                        height={500}
                        alt="Folder Icon" />
                        <p className=" text-slate-900 font-bold  overflow-hidden">{folder.name}</p>
                    </Link>
                </div>
            )
        })}
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

export default UserPage