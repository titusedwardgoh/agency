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
          <Image src="/logo.svg" width={100} height={27} alt="logo" className="cursor-pointer" onClick={() => setShowMenu(false)}/>
        </Link>
        {/* Navigation Row (hidden on mobile) */}
        <nav className="hidden md:flex gap-7 text-secondary font-bold text-lg lg:text-xl">
          <Link href= "/" className={`cursor-pointer hover:underline hover:decoration-2 hover:underline-offset-4 ${pathname === "/" ? "underline decoration-2 underline-offset-4" : null}`}>Home</Link>
          <Link href= "/services" className={`cursor-pointer hover:underline hover:decoration-2 hover:underline-offset-4 ${pathname === "/services" ? "underline decoration-2 underline-offset-4" : null}`}>Services</Link>
          <Link href= "/work" className={`cursor-pointer hover:underline hover:decoration-2 hover:underline-offset-4 ${pathname === "/work" ? "underline decoration-2 underline-offset-4" : null}`}>Work</Link>
          <Link href= "/about" className={`cursor-pointer hover:underline hover:decoration-2 hover:underline-offset-4 ${pathname === "/about" ? "underline decoration-2 underline-offset-4" : null}`}>About</Link>
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
          <Link href="/contact" onClick={() => setShowMenu(false)}>
          <button className="btn btn-secondary text-xl rounded-full py-1 hover:bg-primary hover:text-secondary md:p-6">
            Contact Us
          </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu (only visible on small screens) */}
      <ul
        className={`
          md:hidden fixed top-[72px] left-0 w-full z-40 bg-primary flex flex-col
          transition-all duration-300 ease-in-out
          ${showMenu ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"}
        `}
      >
        <li className="text-secondary text-lg font-bold border-b border-secondary py-3 px-4 cursor-pointer">
          <Link href="/" onClick={() => setShowMenu(false)}>Home</Link>
        </li>
        <li className="text-secondary text-lg font-bold border-b border-secondary py-3 px-4 cursor-pointer">
          <Link href="/services" onClick={() => setShowMenu(false)}>Services</Link>
        </li>
        <li className="text-secondary text-lg font-bold border-b border-secondary py-3 px-4 cursor-pointer">
          <Link href="/work" onClick={() => setShowMenu(false)}>Work</Link>
        </li>
        <li className="text-secondary text-lg font-bold border-b border-secondary py-3 px-4 cursor-pointer">
          <Link href="/about" onClick={() => setShowMenu(false)}>About</Link>
        </li>
      </ul>

    </header>
  );
}
