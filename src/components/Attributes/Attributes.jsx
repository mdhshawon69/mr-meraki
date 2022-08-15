import React from "react";
import images from "../../assets";

const Attributes = () => {
  return (
    <div className='w-3/4 mx-auto font-syne py-10'>
      <div className='w-full bg-attGradient rounded-3xl flex justify-between items-center'>
        <div className='w-1/2 py-12 px-10'>
          <h4 className='text-white text-3xl font-semibold uppercase mb-10'>
            Attributes
          </h4>
          <p className='text-white text-xs font-semibold mb-14 leading-7'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan.
          </p>
          <div className='space-y-4'>
            <div className='flex justify-between items-center p-4 h-10 w-96 ring-2 ring-[#C77DFF] rounded-full'>
              <p className='font-semibold text-sm text-white'>Shapes</p>
              <p className='font-semibold text-sm text-white'>4 Styles</p>
            </div>
            <div className='flex justify-between items-center p-4 h-10 w-96 ring-2 ring-[#C77DFF] rounded-full'>
              <p className='font-semibold text-sm text-white'>Rotation</p>
              <p className='font-semibold text-sm text-white'>9 Styles</p>
            </div>
            <div className='flex justify-between items-center p-4 h-10 w-96 ring-2 ring-[#C77DFF] rounded-full'>
              <p className='font-semibold text-sm text-white'>Colors</p>
              <p className='font-semibold text-sm text-white'>14 Styles</p>
            </div>
            <div className='flex justify-between items-center p-4 h-10 w-96 ring-2 ring-[#C77DFF] rounded-full'>
              <p className='font-semibold text-sm text-white'>Materials</p>
              <p className='font-semibold text-sm text-white'>8 Styles</p>
            </div>
          </div>
        </div>
        <div className='h-2/5'>
          <img
            src={images.attributeImage}
            alt='attribute_image'
            className='h-[520px] w-auto'
          />
        </div>
      </div>
    </div>
  );
};

export default Attributes;
