import React from "react";

type Props = {};

const Timeline = (props: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-3xl font-bold underline">Timeline</h3>
      {/* <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
          <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
            <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
              abc
            </span>
            <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
              abc
            </h3>
            <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
              abc
            </div>
          </p>
          <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
            abc
          </p>
        </li>
      </ol> */}
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <h4 className="text-lg p-1 bg-black text-white rounded-lg">year</h4>
          <h4 className="text-xl">title</h4>
          <h5 className="text-gray-700">duration</h5>
        </div>
        <p className="text-lg">description</p>
      </div>
    </div>
  );
};

export default Timeline;
