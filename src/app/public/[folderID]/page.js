import Card from '@/components/card';
import React from 'react'

const PublicFolderPage = async({params}) => {
    
    const folderID = params.folderID;

    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/public/" + folderID,
    { cache: 'no-store' })
    let data = [];
    let info = {};
    if(response.status === 200){
        const res = await response.json();
        data = res.urls;
        info = res.info;
    }else{
        data = [];
    }
  return (
    <>
    {
        data.length !== 0 &&
        <div className=' w-[500px] mx-auto text-center max-w-[90%] p-4 my-4 rounded bg-blue-900'>
            <h1 className=' text-2xl pb-1'>Folder Name: {info.name}</h1>
            <p className=' text-slate-300'>Owned By: {info.user}</p>
        </div>
    }
    <div className=" flex flex-wrap px-2 md:px-10">
        {data.map((photo, index) =>{
            return (
                <div key={index} className=" p-2 w-1/3 md:w-1/4 lg:w-1/5">
                    <Card url={photo.url} />
                </div>
            )
        })}
        {data.length === 0 && <p className=" font-bold pt-5 text-slate-700 text-2xl">This Collection is not available!</p>}
    </div>
    </>
  )
}

export default PublicFolderPage