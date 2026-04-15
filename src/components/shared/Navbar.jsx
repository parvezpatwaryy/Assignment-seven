'use client'
import React from 'react';
import { MdOutlineHome } from "react-icons/md";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Navbar = () => {
  const pathname = usePathname();
  const activeClass = 'text-[#FFFFFF] bg-[#244D3F] font-bold rounded-lg';
  const inactiveClass = 'text-[#64748B] font-semibold';

  return (
    <div className='sm:w-[600] lg:w-[1600] mx-auto'>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="text-[#244D3F] btn-ghost text-xl">
            <span className='font-bold text-[#1F2937] ml-10'>Keen</span>keeper
          </a>
        </div>
        <div className="flex-none px-5 mr-10">
          <ul className="menu menu-horizontal px-1 text-black gap-2">
            <li className={pathname === '/' ? activeClass : inactiveClass}>
              <Link href="/"><MdOutlineHome />Home</Link>
            </li>

            <li className={pathname === '/apps' ? activeClass : inactiveClass}>
              <Link href="/apps"><RiTimeLine />Timeline</Link>
            </li>

            <li className={pathname === '/inastallation' ? activeClass : inactiveClass}>
              <Link href="/inastallation"><ImStatsDots />Stats</Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;