"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const Card = ({ url, id }) => {
  const [full, setFull] = useState(false);

  const handleDelete = () => {
    axios
      .delete(process.env.NEXT_PUBLIC_API_URL + "/delete-photo/" + id)
      .then((res) => {
        alert(res.data);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="rounded  text-center ">
      <div className={`${full && `fixed flex left-0 top-0 w-full h-screen`}`}>
        {full && (
          <>
            <div className=" fixed top-0 w-full h-screen bg-gray-900 opacity-90"></div>
            <span
              onClick={() => setFull(false)}
              className=" bg-gray-900 p-2 rounded-full border z-20 cursor-pointer text-4xl text-red-600 font-bold fixed top-5 right-5"
            >
              &times;
            </span>
          </>
        )}
        <img
          alt="Photo"
          src={url}
          onClick={() => setFull(true)}
          className=" mx-auto cursor-pointer z-10 transition-all duration-700 object-contain rounded mb-2"
        />
      </div>
      <div className=" p-2 flex justify-around items-center text-xl">
        <button onClick={handleDelete} className=" text-red-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-trash-2"
          >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            <line x1="10" x2="10" y1="11" y2="17" />
            <line x1="14" x2="14" y1="11" y2="17" />
          </svg>
        </button>
        <Link className=" text-blue-600 text-sm" href={url}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-download"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Card;
