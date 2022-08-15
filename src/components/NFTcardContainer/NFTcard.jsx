import React from "react";
import images from "../../assets";

const NFTcard = ({ image }) => {
  return (
    <div className='w-60 h-[300px] bg-[#C77DFF1A] p-3 rounded-3xl ring-2 ring-[#C77DFF] flex flex-col justify-start items-center gap-5 font-syne'>
      <img src={image} alt='nft_image' className='h-52 w-52' />
      <div className='w-full'>
        <div className='h-[1px] w-full bg-[#C77DFF] relative'>
          <span className='font-semibold text-[10px] text-[#C77DFF] p-1 bg-[#1d1a38] absolute -top-[11.3px] left-[92px]'>
            No.88
          </span>
        </div>
      </div>
      <div className='flex justify-between items-center w-full'>
        <p className='w-9 text-white font-semibold text-[10px] p-0.5 border-b border-white'>
          Rare
        </p>
        <img src={images.electron} alt='electron_svg' className='w-4 h-4' />
      </div>
    </div>
  );
};

export default NFTcard;
