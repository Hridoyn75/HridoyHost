import Image from "next/image";
import Link from "next/link";

const UserPage = async ({params}) => {
    const response = await fetch("https://server-hridoyhost.onrender.com/user/" + params.chatID,
    { cache: 'no-store' })
    const data = await response.json();
    
    return (
    <>
    <h1 className=" text-center text-3xl py-8">All Your Memories🚀</h1>
    <div className=" flex flex-wrap px-2 md:px-10">
        {data.map(photo =>{
            return (
                <div key={photo.id} className=" p-2 w-1/3 md:w-1/4 lg:w-1/5">
                    <div className="rounded  text-center ">
                    <Image 
                    priority
                    src={photo.url}
                    width={1080}
                    height={1080}
                    alt="Photo"
                    className=" object-cover rounded aspect-square mb-2" />
                    <a href={photo.url}>Download</a>
                    </div>
                </div>
            )
        })}
    </div>
    {
        data.length === 0 && 
        <main className=" w-full h-screen flex flex-col justify-center items-center">
            <div  className=' bg-[#FF3D3D] rounded-lg p-10 flex flex-col justify-center gap-5'>
            <p className=" py-2">Invalid ChatID!</p>
            <Link href='/' className=' text-center hover:bg-[#1d2e3d] bg-[#0D1F2D] px-4 py-2 rounded-md'>Try again</Link>
            </div>
        </main>
    }
    </>
  )
}

export default UserPage