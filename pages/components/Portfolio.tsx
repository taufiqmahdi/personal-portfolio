import React, { useState } from "react";

type Props = {};

const Portfolio = (props: Props) => {
  const [onPortfolioHover, setOnPortfolioHover] = useState(false);

  return (
    <div className="grid grid-cols-3 gap-6">
      <a
        onMouseEnter={() => setOnPortfolioHover(true)}
        onMouseLeave={() => setOnPortfolioHover(false)}
        className={`${
          onPortfolioHover ? "scale-105" : ""
        } border-2 border-black rounded-lg hover:cursor-pointer overflow-hidden hover:shadow-2xl duration-300`}
        href="https://taufiqmahdi.github.io/money-manager/"
        target="_blank"
      >
        <div className="max-h-[200px] h-[200px] w-full">
          <img
            className={`${
              onPortfolioHover ? "scale-110" : ""
            }  max-h-[200px] h-full w-full object-cover duration-300`}
            src="portfolio-1.jpeg"
            alt="image"
          />
        </div>
        <div className="p-4 flex flex-col gap-4">
          <h2 className="text-xl font-semibold capitalize">Money Manager</h2>
          <div className="flex gap-2">
            <div className="p-1 px-2 border-2 border-black rounded-md text-sm font-semibold capitalize">
              React
            </div>
            <div className="p-1 px-2 border-2 border-black rounded-md text-sm font-semibold capitalize">
              Chakra UI
            </div>
            {/* <div className="p-1 px-2 border-2 border-black rounded-md text-sm font-semibold capitalize"></div> */}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Portfolio;
