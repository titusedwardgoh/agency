"use client";

import { IoMenu, IoClose } from "react-icons/io5";
import Image from "next/image";
import React from "react";
import Link from "next/link"
import { usePathname } from "next/navigation";

export default function Header() {
  const [showMenu, setShowMenu] = React.useState(false);
  const pathname = usePathname()

  function handleClick() {
    setShowMenu((prev) => !prev);
  }

  return (
    <header className="relative">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-50 bg-primary flex justify-between items-center p-5 px-10 md:py-5">
        <Link href="/">
          <Image src="/logo.svg" width={100} height={27} alt="logo" className="cursor-pointer"/>
        </Link>
        {/* Navigation Row (hidden on mobile) */}
        <nav className="hidden md:flex gap-7 text-secondary font-bold text-lg lg:text-xl">
          <a className={`cursor-pointer hover:underline ${pathname === "/" ? "underline decoration-2 underline-offset-4" : null}`}>Home</a>
          <a className={`cursor-pointer hover:underline ${pathname === "/services" ? "underline decoration-2 underline-offset-4" : null}`}>Services</a>
          <a className={`cursor-pointer hover:underline ${pathname === "/work" ? "underline decoration-2 underline-offset-4" : null}`}>Work</a>
          <a className={`cursor-pointer hover:underline ${pathname === "/about" ? "underline decoration-2 underline-offset-4" : null}`}>About</a>
        </nav>

        {/* Right-side buttons */}
        <div className="flex items-center gap-3">
          {/* Menu toggle on mobile only */}
          <button
            onClick={handleClick}
            className="text-secondary text-3xl cursor-pointer focus:outline-none md:hidden"
          >
            {showMenu ? <IoClose /> : <IoMenu />}
          </button>

          <button className="btn btn-secondary text-xl rounded-full py-1 hover:bg-primary hover:text-secondary md:p-6">
            Contact Us
          </button>
        </div>
      </div>

      {/* Mobile Menu (only visible on small screens) */}
      <ul
        className={`
          md:hidden fixed top-[72px] left-0 w-full z-40 bg-primary flex flex-col
          transition-transform duration-500 ease-in-out
          ${showMenu ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}
        `}
      >
        <li className="text-secondary text-lg font-bold border-b border-secondary py-3 px-4 cursor-pointer">
          <a>Home</a>
        </li>
        <li className="text-secondary text-lg font-bold border-b border-secondary py-3 px-4 cursor-pointer">
          <a>Services</a>
        </li>
        <li className="text-secondary text-lg font-bold border-b border-secondary py-3 px-4 cursor-pointer">
          <a>Work</a>
        </li>
        <li className="text-secondary text-lg font-bold border-b border-secondary py-3 px-4 cursor-pointer">
          <a>About</a>
        </li>
      </ul>
    </header>
  );
}
