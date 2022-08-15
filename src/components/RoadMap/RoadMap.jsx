import React from "react";
import { FaTimes } from "react-icons/fa";

const RoadMap = () => {
  return (
    <div className='w-4/5 mx-auto h-[120vh] font-syne'>
      <div className='text-center'>
        <h5 className='text-sm font-semibold uppercase text-[#C77DFF]'>
          MERAKI THEO
        </h5>
        <h4 className='text-white text-3xl font-semibold uppercase mb-10'>
          ROADMAP
        </h4>
      </div>
      <div className='w-1/2 relative'>
        <div className='w-[2px] absolute left-full'>
          {/* First linking line */}
          <div className='h-60 bg-[#565660]'>
            {/* Roadmap Card Community Giveaway-Link-span */}
            <span className='w-12 h-[2px] bg-[#C77DFF80] absolute top-[151px]'>
              <span className='w-2.5 h-2.5 rounded-full bg-[#565660] absolute -left-1 -top-[4px]'></span>
            </span>

            {/* Roadmap Card Launch-Link-span */}
            <span className='w-12 h-[2px] bg-[#C77DFF80] absolute right-0 top-16'>
              <span className='w-2.5 h-2.5 rounded-full bg-[#565660] absolute -right-1 -top-[4px]'></span>
            </span>
          </div>

          {/* Second Linking Line */}
          <div className='bg-[#C77DFF] h-[450px]'>
            {/* Roadmap Card Marchandise Drop-Link-span */}
            <span className='w-12 h-[2px] bg-[#C77DFF] absolute right-0 top-72'>
              <span className='w-2.5 h-2.5 rounded-full bg-[#C77DFF] absolute -right-1 -top-[4px]'></span>
            </span>

            {/* Roadmap Card Collaboration-Link-span */}
            <span className='w-12 h-[2px] bg-[#C77DFF] absolute left-0 top-[367px]'>
              <span className='w-2.5 h-2.5 rounded-full bg-[#C77DFF] absolute -left-1 -top-[4px]'></span>
            </span>

            {/* Roadmap Card Future Drop-Link-Span */}
            <span className='w-12 h-[2px] bg-[#C77DFF] absolute right-0 top-[520px]'>
              <span className='w-2.5 h-2.5 rounded-full bg-[#C77DFF] absolute -right-1 -top-[4px]'></span>
            </span>
          </div>
        </div>

        {/* Roadmap Card Launch */}
        <div className='min-h-28 w-60 py-2 px-3 absolute left-[53%] top-[2px] bg-[#4E4E561A]/10 ring-2 ring-[#565660] rounded-md flex flex-col justify-start items-start'>
          <h5 className='text-md text-white font-semibold mb-2 uppercase flex justify-center items-center gap-1'>
            <FaTimes />
            <span>launch</span>
          </h5>

          <div className='space-y-1 ml-5'>
            <p className='text-white font-semibold text-[10px]'>
              Launch Twitter
            </p>
            <p className='text-white font-semibold text-[10px]'>
              Launch Telegram
            </p>
            <p className='text-white font-semibold text-[10px]'>
              Release website and logo
            </p>
            <p className='text-white font-semibold text-[10px]'>Mint NFT</p>
          </div>
        </div>

        {/* Roadmap Card Marchandise Drop */}
        <div className='min-h-28 w-60 py-2 px-3 absolute left-[53%] top-[205px] bg-[#C77DFF80]/10 ring-2 ring-[#C77DFF80] rounded-md flex flex-col justify-start items-start'>
          <h5 className='text-md text-white font-semibold mb-2 uppercase'>
            marchandise drop
          </h5>

          <div className='space-y-1 ml-5'>
            <p className='text-white font-semibold text-[10px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan,
            </p>
            <p className='text-white font-semibold text-[10px]'>Launch DAPPS</p>
            <p className='text-white font-semibold text-[10px]'>NFT Pools</p>
            <p className='text-white font-semibold text-[10px]'>
              AMA Travladd Crypto
            </p>
          </div>
        </div>

        {/* Roadmap Card Future Drop */}
        <div className='min-h-28 w-60 py-2 px-3 absolute left-[53%] top-[450px] bg-[#C77DFF80]/10 ring-2 ring-[#C77DFF80] rounded-md flex flex-col justify-start items-start'>
          <h5 className='text-md text-white font-semibold mb-2 uppercase'>
            Future Drops
          </h5>

          <div className='space-y-1 ml-5'>
            <p className='text-white font-semibold text-[10px]'>
              Exclusive MERAKI merchandise release
            </p>
            <p className='text-white font-semibold text-[10px]'>Audit</p>
            <p className='text-white font-semibold text-[10px]'>NFT Pools</p>
            <p className='text-white font-semibold text-[10px]'>
              Listing XT.COM
            </p>
            <p className='text-white font-semibold text-[10px]'>
              Listing KuCoin
            </p>
          </div>
        </div>

        {/* Roadmap Card Community Giveaway */}
        <div className='min-h-28 w-60 py-2 px-3 absolute left-[108%] top-[90px] bg-[#4E4E561A]/10 ring-2 ring-[#565660] rounded-md flex flex-col justify-start items-start '>
          <h5 className='text-md text-white font-semibold mb-2 uppercase flex justify-center items-center gap-1'>
            Community Giveaway
          </h5>

          <div className='space-y-1 ml-5'>
            <p className='text-white font-semibold text-[10px]'>
              Release $MERAKI
            </p>
            <p className='text-white font-semibold text-[10px]'>
              Grow community
            </p>
            <p className='text-white font-semibold text-[10px]'>
              Launch the project
            </p>
            <p className='text-white font-semibold text-[10px]'>
              Social media setup
            </p>
          </div>
        </div>

        {/* Roadmap Card Collaboration */}
        <div className='min-h-28 w-60 py-2 px-3 absolute left-[108%] top-[300px] bg-[#C77DFF80]/10 ring-2 ring-[#C77DFF80] rounded-md flex flex-col justify-start items-start'>
          <h5 className='text-md text-white font-semibold mb-2 uppercase'>
            Collaboration
          </h5>

          <div className='space-y-1 ml-5'>
            <p className='text-white font-semibold text-[10px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <p className='text-white font-semibold text-[10px]'>
              Youtube Marketing
            </p>
            <p className='text-white font-semibold text-[10px]'>
              Coinmarketcap
            </p>
            <p className='text-white font-semibold text-[10px]'>CoinGecko</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
