import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-5 flex  justify-between items-center">
      <Link href={"/"} className=" text-3xl font-bold text-slate-900">
        HridoyHost
      </Link>
      <ul className=" flex items-center gap-5 text-xl text-slate-600">
        <li>
          <Link href={"/"} className=" hover:text-slate-900">
            Home
          </Link>
        </li>
        <li>
          <Link href={"/blueprint"} className=" hover:text-slate-900">
            How it works
          </Link>
        </li>
        <li>
          <Link href={"/"} className=" hover:text-slate-900">
            About
          </Link>
        </li>
        <li>
          <Link className=" flex hover:text-slate-900" href={"/"}>
            {" "}
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
              class="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>{" "}
            GitHub
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
