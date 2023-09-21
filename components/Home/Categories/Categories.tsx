import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";
const Categories = () => {
  return (
    <ComponentWrapper id="categories" style="lg:py-20 py-10">
      <div className="w-full flex flex-col items-center justify-start gap-10">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-black-main sm:text-[40px] text-4xl font-normal sm:leading-[50px]">
            Browse By Categories
          </h2>
          <button className="h-[54px] w-[161px] flex items-center justify-center gap-2 text-white-main text-xl font-normal bg-gradient-to-t from-brand-secondary to-brand-main rounded-[60px]">
            See All
            <BsArrowUpRight className="text-white-main text-2xl" />
          </button>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-full flex flex-col items-center justify-center gap-4 px-[62px] py-9 rounded-[30px] bg-white-main shadow-xl hover:bg-gradient-to-t from-brand-secondary to-brand-main hover:duration-100 cursor-pointer text-black-main hover:text-white-main">
            <div className="relative w-[106px] h-[106px]">
              <Image
                className="w-full h-full object-contain pointer-events-none"
                src={"/Assets/Categories/Cloud.png"}
                alt=""
                fill
              />
            </div>
            <p className="text-center font-medium text-xl">Food</p>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Categories;
