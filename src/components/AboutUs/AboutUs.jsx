import React from "react";

const AboutUs = () => {
  return (
    <div className='w-4/5 mx-auto py-32 flex justify-center items-center gap-20'>
      <div className='font-syne w-1/2'>
        <h5 className='text-sm font-semibold uppercase text-[#C77DFF]'>
          About us
        </h5>
        <h4 className='text-white text-3xl font-semibold uppercase mb-10'>
          What IS MERAKI THEO?
        </h4>
        <p className='text-white text-xs font-semibold mb-14 leading-7'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar.
        </p>

        <button className='ring-2 ring-[#C77DFF] outline-none text-white font-semibold text-sm py-3 px-7 rounded'>
          Buy NFT
        </button>
      </div>

      <div className='w-1/2 flex flex-col justify-start items-start gap-5'>
        <div className='h-28 w-[550px] py-2 px-3 bg-[#C77DFF80]/10 ring-2 ring-[#C77DFF80] rounded-md flex flex-col justify-start items-start'>
          <h5 className='text-lg text-white font-semibold mb-2'>
            Unique, 1/1 generated
          </h5>
          <p className='text-white'>...</p>
        </div>

        <div className='h-28 w-[550px] py-2 px-3 bg-[#C77DFF80]/10 ring-2 ring-[#C77DFF80] rounded-md flex flex-col justify-start items-start'>
          <h5 className='text-lg text-white font-semibold mb-2'>
            140+ traits in 16 categories
          </h5>
          <p className='text-white'>...</p>
        </div>

        <div className='h-28 w-[550px] py-2 px-3 bg-[#C77DFF80]/10 ring-2 ring-[#C77DFF80] rounded-md flex flex-col justify-start items-start'>
          <h5 className='text-lg text-white font-semibold mb-2'>
            Usage rights included
          </h5>
          <p className='text-white'>...</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
