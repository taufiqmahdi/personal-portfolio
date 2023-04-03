import React from "react";

type Props = {};

const Timeline = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 w-7/12">
      <h3 className="text-4xl font-bold">Timeline</h3>
      <div className="flex flex-col gap-2 ">
        <div className="flex gap-4 items-center">
          <h4 className="p-1 px-2 bg-black text-white rounded-lg font-bold">2022</h4>
          <h4 className="text-lg font-semibold capitalize">Web Developer</h4>
          <h5 className="text-gray-700">present</h5>
        </div>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quasi,
          repellat, aspernatur numquam earum tenetur sunt eligendi dolor placeat
          natus sint quas! Molestiae omnis delectus optio ullam odit tempore
          mollitia?
        </p>
      </div>
    </div>
  );
};

export default Timeline;
