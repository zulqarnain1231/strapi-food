import React from "react";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import SectionTitle from "@/components/Shared/SectionTitle";
import * as Icons from "../../../Svg/Icons";
import { BiLike } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
const Explore = () => {
  return (
    <ComponentWrapper id="explore" style="lg:py-16 py-10">
      <div className="w-full flex flex-col items-start justify-start gap-5">
        <SectionTitle title="Explore by Cities" />
        <div className="w-full grid grid-cols-4 gap-5">
          <div className="w-full h-[200px] flex flex-col items-start justify-between p-[15px] rounded-2xl bg-[url('/Assets/Explore/City1.png')] bg-center bg-cover bg-no-repeat">
            <div className="w-full flex items-center justify-end">
              <div className="w-[56px] h-[28px] flex items-center justify-center gap-1 rounded-[20px] bg-white-main/30 cursor-pointer">
                <Icons.Like fill="" stroke="" ClassName="text-base" />
                <p className="text-white-main text-[10px] font-normal">1.2k</p>
              </div>
            </div>
            <div className="w-full flex flex-col items-start justify-start">
              <p className="text-white-main text-lg font-semibold">
                Painemo Island
              </p>
              <div className="w-full flex items-center justify-start gap-2">
                <HiOutlineLocationMarker className="text-lg flex-shrink-0  text-white-main" />
                <p className="text-xs text-white-main font-normal">
                  Raja Ampat, Indon...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Explore;
