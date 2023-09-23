import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const SeeAll = () => {
  return (
    <button className="h-[54px] w-[161px] flex items-center justify-center gap-2 text-white-main text-xl font-normal bg-gradient-to-t from-brand-secondary to-brand-main rounded-[60px]">
      See All
      <BsArrowUpRight className="text-white-main text-2xl" />
    </button>
  );
};

export default SeeAll;
