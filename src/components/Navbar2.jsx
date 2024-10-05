import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center px-3 py-3 sm:px-8 lg:py-5 lg:px-16 bg-orange-300">
        <div className="text-2xl font-semibold md:text-[28px] lg:text-[32px]">
               <Link to="/">
                NAVBAR
                </Link></div>
        <div className="md:hidden lg:hidden xl:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <CiMenuFries className="text-xl sm:text-[30px]" />
          </button>
        </div>

        <div className="list-none hidden md:flex lg:flex xl:flex md:text-[16px] lg:text-[20px] items-center md:gap-5 space-x-8 font-semibold">
            <Link to="/home">
            <li>Home</li>
            </Link>
            <Link to="/about-us">
                <li>About Us</li>
                </Link>
          <li className="bg-black w-fit text-white px-2 pb-1 rounded-sm">Contact Us</li>
        </div>
      </div>

      <div
        className={`md:hidden lg:hidden xl:hidden fixed top-0 right-0 h-full w-full bg-orange-300 z-20 text-center transition-all duration-500 ease-in-out ${
          isOpen ? "scale-100" : "scale-0"
        } origin-center`}
        style={{ transformOrigin: "50% 50%" }} // ensures the expansion starts from the center
      >
        <div>
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4">
            <TfiClose className="text-xl sm:text-[20px] mr-5" />
          </button>
        </div>

        <div className="list-none flex flex-col gap-16 mt-28 font-semibold text-xl">
            <Link to="/home">
            <li>Home</li>
            </Link>
            <Link to="/about-us">
                <li>About Us</li>
                </Link>
          <div className="flex justify-center">
            <li className="bg-black w-fit text-white px-3 py-1 rounded-sm">Contact Us</li>
          </div>
        </div>
      </div>
      <div className="h-[89vh] md:h-[89.9vh] lg:h-[86.4vh] bg-orange-200"></div>
    </div>
  );
};

export default Navbar2;
