import React from "react";
import images from "../../assets";

const SubscriptionArea = () => {
  return (
    <div
      className='bg-header background-image bg-fill bg-no-repeat bg-center h-[30vh] py-10 space-y-4 text-center font-gortesk'
      style={{ backgroundImage: images.headerImage }}>
      <h3 className='text-white text-lg font-semibold capitalize'>
        don’t miss out, join now for early access
      </h3>
      <p className='text-sm font-semibold text-white'>
        Maecenas sit pretium, cras in. In quisque sem id eget. In vel gravida ut
      </p>
      <form>
        <input
          type='text'
          className='py-1 px-3 w-80 bg-[#FFFFFF29] outline-none border-2 border-[#C77DFF] rounded-tl-md rounded-bl-md'
        />
        <button className='py-1.5 rounded-tr-md rounded-br-md px-2 bg-[#C77DFF] text-white'>
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscriptionArea;
