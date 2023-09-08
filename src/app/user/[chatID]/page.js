import Image from "next/image";
import Link from "next/link";

const UserPage = async ({params}) => {
    const response = await fetch("http://localhost:5000/user/" + params.chatID,
    { cache: 'no-store' })
    const data = await response.json();
    
    return (
    <>
    <div className=" flex flex-wrap">
        {data.map(photo =>{
            return (
                <div key={photo.id} className=" p-2 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
                    <div className="rounded text-center ">
                    <Image 
                    src={photo.url}
                    width={1080}
                    height={1080}
                    alt="Photo"
                    className=" object-cover rounded aspect-square" />
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