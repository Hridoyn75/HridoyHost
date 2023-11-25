import Link from "next/link";

export default function Home() {
  return (
    <main className=" text-center w-full h-[85dvh] flex flex-col justify-center items-center">
      {/* <MainForm /> */}
      <div className=" px-4">
        <h1 className=" pb-3 text-4xl md:text-6xl font-bold text-slate-900">
          Unlimited Free Image Hosting
        </h1>
        <p className=" md:text-xl pb-5 max-w-[600px] mx-auto text-slate-600">
          Reliable, secure, and always up. Let's save your memory with our free
          unlimited image hosting service.
        </p>
        <div className=" flex justify-center items-center gap-3">
        <Link href={"/blueprint"}>
          <span className=" hover:bg-slate-900 hover:text-white px-4 py-2 rounded border-2  border-slate-900 text-slate-900 font-bold text-xl">
            How it Works?
          </span>
        </Link>
        <Link href={"/app"}>
          <span className=" px-4 py-2 rounded border-2 border-slate-900 bg-slate-900 hover:bg-slate-800 text-white text-xl">
            Try for Free
          </span>
        </Link>

        </div>
      </div>
    </main>
  );
}
