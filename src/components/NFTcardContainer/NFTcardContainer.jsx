import React from "react";
import images from "../../assets";
import NFTcard from "./NFTcard";

const NFTcardContainer = () => {
  const nftArr = [
    {
      image: images.nft1,
    },
    {
      image: images.nft2,
    },
    {
      image: images.nft3,
    },
    {
      image: images.nft4,
    },
    {
      image: images.nft5,
    },
    {
      image: images.nft6,
    },
  ];
  return (
    <div className='h-[110vh] w-4/5 mx-auto pt-10 font-syne'>
      <h4 className='text-white text-3xl font-semibold uppercase mb-10 text-center'>
        featured
      </h4>
      <div className='w-4/5 mx-auto flex justify-center items-center flex-wrap gap-10'>
        {nftArr.map((item, i) => (
          <NFTcard key={i} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default NFTcardContainer;
