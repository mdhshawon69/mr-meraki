import React from "react";

const JoinCommunity = () => {
  return (
    <div className='w-3/4 mx-auto py-10'>
      <div className='py-7 w-full bg-[#C77DFF1A] space-y-4 text-center rounded-3xl'>
        <h3 className='text-white text-lg font-gortesk font-semibold'>
          Join Our Community
        </h3>
        <p className='font-gortesk text-sm font-semibold text-white'>
          Meet the Team, artists and collections for problem updates,
          announcements, and more
        </p>
        <button className='bg-btnGradient py-2 px-4 text-white rounded-md ring-1 ring-white'>
          Take Me To Discord
        </button>
      </div>
    </div>
  );
};

export default JoinCommunity;
