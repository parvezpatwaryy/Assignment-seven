import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React from 'react';

const Footer = () => {
  return (
    <div className='max-sm:w-[600] lg:w-[1600] mx-auto bg-[#244D3F] pt-10'>
      <div className='text-center space-y-5'>
        <h1 className='font-bold text-5xl text-white'>KeenKeeper</h1>
        <p className='text-gray-300'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
        <h3 className='font-semibold text-white'>Social Links</h3></div>
      <div className="flex gap-3 justify-center text-white pt-3">
        <p><FaInstagram /></p>
        <p><FaFacebook /></p>
        <p><FaXTwitter /></p>
      </div>
      <div className="flex justify-between items-center ml-50 mr-50 mt-5 mb-5 text-gray-400">
        <h2>© 2026 KeenKeeper. All rights reserved.</h2>
        <span className="flex gap-3">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;