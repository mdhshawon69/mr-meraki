import React from "react";
import Navbar from "../Navbar/Navbar";
import images from "../../assets/index";
import { FaDiscord, FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <div
      className='bg-auto bg-no-repeat bg-center h-[101vh] w-full overflow-hidden font-syne relative'
      style={{ backgroundImage: images.headerImage }}>
      <div>
        <img
          src={images.collection}
          alt='collection_image'
          className='absolute top-2/3'
        />
      </div>
      <Navbar />
      <div className='w-10/12 mx-auto relative'>
        <div className='absolute top-8 flex justify-start items-start'>
          <img
            src={images.headerImage}
            alt='header_image'
            className='lg:h-[625px] w-auto'
          />
          <div className='uppercase text-white absolute left-[80%] top-24'>
            <h1 className='font-bold text-8xl'>meraki</h1>
            <h3 className='font-black text-8xl ml-28'>theos</h3>
            <div className='flex justify-between items-center w-4/5 ml-14 gap-10 mt-8'>
              <p className='text-[9px] text-justify'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <div className='flex justify-center items-center gap-2'>
                <button className='flex justify-center items-center gap-1 outline-none border border-white py-1 px-2 rounded'>
                  <FaDiscord />
                  <span>DISCORD</span>
                </button>
                <button className='flex justify-center items-center gap-1 outline-none border border-white py-1 px-2 rounded'>
                  <FaTwitter /> <span>TWITTER</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center gap-5 absolute right-28 top-[470px]'>
          <div className='border border-white rounded-xl flex justify-center items-center w-[165px] h-[180px] overflow-hidden bg-white/10'>
            <img
              src={images.avater1}
              alt='avater_1'
              className='h-[180px] w-auto'
            />
          </div>
          <div className='border border-white rounded-xl flex justify-center items-center w-[165px] h-[180px] overflow-hidden bg-white/10'>
            <img
              src={images.avater2}
              alt='avater_2'
              className='h-[180px] w-auto'
            />
          </div>
          <div className='border border-white rounded-xl flex justify-center items-center w-[165px] h-[180px] overflow-hidden bg-white/10'>
            <img
              src={images.avater3}
              alt='avater_3'
              className='h-[180px] w-auto'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
