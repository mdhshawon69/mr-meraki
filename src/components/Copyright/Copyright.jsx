import React from "react";

const Copyright = () => {
  return (
    <div className='w-4/5 mx-auto py-5 flex justify-between items-center text-white font-syne font-semibold text-xs'>
      <p>Meraki 2022- ALL rights reserved</p>
      <div>
        <ul className='flex justify-center items-center gap-3'>
          <li>
            <a href='#'>Privacy Policy</a>
          </li>
          <li>
            <a href='#'>Cookies</a>
          </li>
          <li>
            <a href='#'>Terms & Conditions</a>
          </li>
          <li>
            <a href='#'>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Copyright;
