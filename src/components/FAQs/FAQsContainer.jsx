import React from "react";
import FAQs from "./FAQs";

const FAQsContainer = () => {
  const faqArr = [1, 2, 3];
  return (
    <div className='w-4/5 mx-auto py-20 space-y-5'>
      <h4 className='text-white text-3xl font-semibold mb-10 text-center font-syne'>
        Frequently Asked Questions
      </h4>
      {faqArr.map((item) => (
        <FAQs key={item} />
      ))}
    </div>
  );
};

export default FAQsContainer;
