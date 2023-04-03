import React from "react";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <div className="grid grid-cols-3 gap-6 w-full px-36">
      <div className="border-2 border-black rounded-lg hover:cursor-pointer">
        <div className="h-[200px] w-full">image</div>
        <div className="p-4 flex flex-col gap-4">
          <h2 className="text-2xl capitalize">description</h2>
          <div className="flex gap-2">
            <div className="p-1 border-2 border-black rounded-md text-md capitalize">abc</div>
            <div className="p-1 border-2 border-black rounded-md text-md capitalize">abc</div>
            <div className="p-1 border-2 border-black rounded-md text-md capitalize">abc</div>
          </div>
        </div>
      </div>
      <div className="border border-black">abc</div>
      <div className="border border-black">abc</div>
    </div>
  );
};

export default Portfolio;
