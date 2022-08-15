import React from "react";
import logo from "../../assets/ic_stx.svg";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center border-b-[0.3px] border-white h-16 font-syne uppercase sticky'>
      <div className='flex justify-center items-center w-2/12 border-r h-full border-white'>
        <a href='/'>
          <img src={logo} alt='logo' className='h-12 w-auto' />
        </a>
      </div>
      <div className='w-2/4 border- border-white'>
        <ul className='text-xs text-white flex justify-center items-center gap-12 not-italic'>
          <li>
            <a href='/'>about us</a>
          </li>
          <li>
            <a href='/'>roadmap</a>
          </li>
          <li>
            <a href='/'>faqs</a>
          </li>
        </ul>
      </div>
      <div className='flex justify-center items-center w-2/12 text-white text-xs border-l h-full border-white'>
        <a href='/'>Connect wallet</a>
      </div>
    </div>
  );
};

export default Navbar;
