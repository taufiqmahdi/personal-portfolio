import React from "react";

type Props = {};

const Timeline = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 w-7/12">
      <h3 className="text-4xl font-bold">Timeline</h3>
      <div className="flex flex-col gap-2 ">
        <div className="flex gap-4 items-center">
          <h4 className="p-1 px-2 bg-black text-white rounded-lg font-bold">
            2022
          </h4>
          <h4 className="text-lg font-semibold capitalize">
            Web Developer - PT. Pentacode Digital
          </h4>
          <h5 className="text-gray-700">present</h5>
        </div>
        <p className="">
          Developed websites for clients from various industries and purposes.
          Also participates in almost every cycle of the development process,
          such as brainstorming ideas, choosing the best approaches and write
          codes.
        </p>
      </div>
    </div>
  );
};

export default Timeline;
