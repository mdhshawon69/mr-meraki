import React from "react";
import { BsPlusLg } from "react-icons/bs";

const FAQs = () => {
  return (
    <div className='w-1/2 mx-auto flex justify-between items-center text-white py-5 border-t-2 border-b-2 border-[#9861C7]'>
      <p className=' font-semibold font-syne text-sm'>
        Frequently Asked Questions
      </p>
      <BsPlusLg className='cursor-pointer' />
    </div>
  );
};

export default FAQs;
