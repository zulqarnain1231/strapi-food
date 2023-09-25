import React from "react";
import Image from "next/image";
import { HiOutlineLocationMarker } from "react-icons/hi";
import * as Icons from "../../../Svg/Icons";
type Props = {
  image: string;
};

const ResortCard: React.FC<Props> = ({ image }: Props) => {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-2 relative p-[10px] border rounded-[20px] bg-white-main z-10">
      <div className="w-full h-[216px] relative rounded-[20px]">
        <Image
          className="w-full h-full aspect-[4/3] rounded-[20px]"
          src={image}
          alt=""
          fill
        />
      </div>
      <p className="text-black-main text-[20px] font-semibold">
        $99.99/
        <span className="text-lg text-black-main/70 font-normal">night</span>
      </p>
      <p className="text-black-main text-[20px] leading-7 font-semibold">
        Grand Canyon National...
      </p>
      <div className="w-full flex items-center justify-start gap-2">
        <HiOutlineLocationMarker className="text-xl flex-shrink-0  text-black-off" />
        <p className="text-black-off text-lg font-normal">
          Gregorychester, USA
        </p>
      </div>
      <div className="absolute h-[53px] w-[40px] top-[8px] right-8 pointer-events-none z-10">
        <Icons.Badge stroke="" fill="" ClassName="h-full w-full" />
      </div>
    </div>
  );
};

export default ResortCard;
