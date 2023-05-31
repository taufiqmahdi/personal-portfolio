import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="sticky top-0 p-8 bg-gray-500 overflow-hidden z-10 opacity-90 rounded-b-3xl">
      <ul className="flex gap-16 text-lg">
        <li>
          <button className="relative z-0 p-1 text-center before:bg-gray-700 before:absolute before:-bottom-1 before:left-0 before:-z-[1] before:w-0 before:h-[4px] before:ease-in-out before:transition-all before:duration-300 hover:before:-bottom-1 hover:before:w-full hover:before:origin-left">
            Home
          </button>
        </li>
        <li>
          <button>Portfolio</button>
        </li>
        <li>
          <button>Timeline</button>
        </li>
        <li>
          <button>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
 