import React from 'react';
import { MdOutlineHome } from "react-icons/md";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
const Navbar = () => {
  return (
    <div className='w-[1600] mx-auto'>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="text-[#244D3F]  btn-ghost text-xl"><span className='font-bold text-[#1F2937] ml-10'>Keen</span>kee per</a>
        </div>
        <div className="flex-none px-5 mr-10">
          <ul className=" menu menu-horizontal px-1 text-black">
            <li className='text-[#FFFFFF] bg-amber-500 font-bold'><a><MdOutlineHome />Home</a></li>
            <li className='text-[#64748B] font-semibold'><a><RiTimeLine />Timeline</a></li>
            <li className='text-[#64748B] font-semibold'><a><ImStatsDots />Stats</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;