import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineBars3 } from "react-icons/hi2";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center box-border bg-[#09262c91]">
      <div className="mx-[8.125rem] md:ml-5 lg:mx-[3.625rem] w-full h-16 md:h-[4.895rem]">
        <div className="flex justify-between text-white text-sm">
          <div className="md:hidden block">
            <div
              tabIndex={0}
              role="button"
              onClick={toggleDropdown}
              className="h-12 w-8 mr-10 fixed left-2 top-1 z-50"
            >
              <HiOutlineBars3 className="h-full w-full" />
            </div>

            {isOpen && (
              <div className="absolute top-12 left-0 w-full shadow-lg z-50 bg-[#082125]">
                <div className="bg-[#082125] text-black font-bold h-24 flex items-center gap-4 mx-7">
                  <button className="btn text-black p-1 bg-[#d1ff00]">
                    LOG IN
                  </button>
                  <button className="btn text-black p-1 bg-[#d1ff00]">
                    SIGN UP
                  </button>
                </div>
                <ul className="list-none p-4 m-0 bg-[#021114]  text-white">
                  <li className="p-2 hover:bg-[#061E22]">
                    <a href="#" className="">
                      HOME
                    </a>
                  </li>
                  <li className="p-2 hover:bg-[#061E22]">
                    <a href="#" className="">
                      SHOWS
                    </a>
                  </li>
                  <li className="p-2 hover:bg-[#061E22]">
                    <a href="#" className="">
                      MOVIES
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="flex items-center mt-2 md:mt-5">
            <div className="w-[7.913rem] flex">
              <img
                src="https://lgi-img-cdn-lb.lionsgateplay.com/prd-peg-data/default/web3/resources/images/channels/voucher-thankyou-page/rebrand-lionsgateplay.png"
                alt="LIONSGATEPLAY"
                className="h-full object-contain"
              />
            </div>
            <div className="hidden md:block">
              <ul className="flex gap-16 md:gap-4 lg:gap-12 md:mx-3 lg:mx-7 md:text-md font-bold">
                <li className="">
                  <a href="#" className="hover:text-[#B2B2B2] ">
                    HOME
                  </a>
                </li>
                <li className="">
                  <a href="#" className="hover:text-[#B2B2B2]">
                    SHOWS
                  </a>
                </li>
                <li className="">
                  <a href="#" className="hover:text-[#B2B2B2]">
                    MOVIES
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="hidden md:block md:-mr-24 lg:mr-8">
            <ul className="flex gap-10 md:gap-8 mt-8 items-center ">
              <li className="flex items-center md:gap-4 lg:gap-12">
                <CiSearch className="h-5 w-5 md:mx-5 lg:-mx-9" />
                <span className="md:hidden lg:text-md  lg:block">SEARCH</span>
              </li>
              <li className="font-bold ">
                <a href="#" className="hover:text-[#B2B2B2] ">
                  LOG IN
                </a>
              </li>
              <a href="#" className="hover:text-[#B2B2B2]">
                <li className="font-bold">SIGN UP</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
