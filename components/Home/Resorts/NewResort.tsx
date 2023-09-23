import React from "react";
import SectionTitle from "@/components/Shared/SectionTitle";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import Image from "next/image";
import { HiOutlineLocationMarker } from "react-icons/hi";

const NewResort = () => {
  return (
    <ComponentWrapper id="resorts" style="py-10">
      <div className="w-full flex flex-col items-center justify-start gap-10">
        <SectionTitle title="New Resort This Week" />
        <div className="w-full grid grid-cols-4">
          <div className="w-full flex flex-col items-start justify-start gap-2 relative p-3 border rounded-[25px]">
            <div className="w-full h-[226px] relative rounded-[25px]">
              <Image
                className="w-full h-full object-cover rounded-[25px]"
                src={"/Assets/Resorts/Resort1.png"}
                alt=""
                fill
              />
            </div>
            <p className="text-black-main text-[22px] font-medium">
              $99.99/
              <span className="text-lg text-black-main/70 font-normal">
                night
              </span>
            </p>
            <p className="text-black-main text-[22px] leading-7 font-medium">
              Grand Canyon National...
            </p>
            <div className="w-full flex items-center justify-start gap-2">
              <HiOutlineLocationMarker className="text-xl flex-shrink-0  text-black-off" />
              <p className="text-black-off text-lg font-normal">
                Gregorychester, USA
              </p>
            </div>
            <div className="absolute h-[53px] w-[40px] top-[10px] right-8 pointer-events-none z-10">
              <div className="w-full h-full relative">
                <Image
                  className="w-full h-full object-contain"
                  src={"/Assets/Resorts/Badge.png"}
                  alt=""
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default NewResort;
