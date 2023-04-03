import React from "react";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="border-2 border-black rounded-lg hover:cursor-pointer overflow-hidden">
        <div className="h-[200px] w-full">
          <img className="max-h-[200px] h-full w-full object-cover" src="untitled2.png" alt="image" />
        </div>
        <div className="p-4 flex flex-col gap-4">
          <h2 className="text-xl font-semibold capitalize">Money Manager</h2>
          <div className="flex gap-2">
            <div className="p-1 px-2 border-2 border-black rounded-md text-sm font-semibold capitalize">React</div>
            <div className="p-1 px-2 border-2 border-black rounded-md text-sm font-semibold capitalize">Chakra UI</div>
            <div className="p-1 px-2 border-2 border-black rounded-md text-sm font-semibold capitalize"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
