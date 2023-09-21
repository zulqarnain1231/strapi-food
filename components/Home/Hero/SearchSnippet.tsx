import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoChevronDown } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { BsArrowUpRight } from "react-icons/bs";

const SearchSnippet = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start gap-6">
      <div className="w-full flex sm:flex-row flex-col items-center sm:justify-between justify-start sm:h-[100px] bg-white-main rounded-[16px]">
        <div className="h-full w-full sm:w-[calc(100%-221px)] flex items-center justify-start sm:gap-4 gap-4 p-4 sm:py-0 sm:px-6">
          <div className="w-[60px] h-[60px] flex flex-shrink-0 items-center justify-center bg-black-off rounded-[12px]">
            <HiOutlineLocationMarker className="text-white-main text-2xl" />
          </div>
          <div className="h-full flex flex-col items-start justify-center gap-1">
            <div className="flex items-center justify-start gap-2">
              <p className="sm:text-base text-sm text-black-main font-medium font-mullish">
                Destination
              </p>
              <IoChevronDown className="text-black-main text-xl" />
            </div>
            <p className="sm:text-base text-sm text-brand-main font-normal">
              Monaco, Italy
            </p>
          </div>
          {/* divider */}
          <span className="w-[1px] h-[45px] bg-white-off"></span>
          <div className="h-full flex items-center gap-2 justify-start">
            <FiSearch className="sm:text-2xl text-xl text-black-main" />
            <p className="text-black-main sm:text-base text-sm font-mullish font-medium ">
              Sky Bar
            </p>
          </div>
        </div>
        <div className="sm:h-full py-4 w-full sm:w-[221px] flex flex-col items-end justify-center bg-black-main sm:rounded-r-2xl sm:rounded-br-2xl sm:rounded-b-none rounded-b-2xl cursor-pointer">
          <div className="w-full flex items-center justify-center gap-2">
            <p className="text-white-main text-lg sm:text-xl font-normal">
              Search
            </p>
            <BsArrowUpRight className="text-white-main text-2xl" />
          </div>
        </div>
      </div>
      {/* popular searches */}
      <div className="w-full flex sm:flex-row flex-col items-center justify-start gap-4">
        <p className="text-white-main text-[20px] font-normal">
          Popular Search
        </p>
        <button className="h-[50px] w-[150px] flex items-center justify-center border border-white-main rounded-[60px] text-white-main text-base font-normal bg-transparent">
          Steak
        </button>
        <button className="h-[50px] w-[150px] flex items-center justify-center border border-white-main rounded-[60px] text-white-main text-base font-normal bg-transparent">
          Chicken
        </button>
        <button className="h-[50px] w-[150px] flex items-center justify-center border border-white-main rounded-[60px] text-white-main text-base font-normal bg-transparent">
          Camping
        </button>
      </div>
    </div>
  );
};

export default SearchSnippet;
