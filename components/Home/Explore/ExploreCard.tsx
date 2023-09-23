import React from "react";
import * as Icons from "../../../Svg/Icons";
import { HiOutlineLocationMarker } from "react-icons/hi";

type Props = {
  title: string;
  likes: string;
  liked: boolean;
  location: string;
};
const ExploreCard: React.FC<Props> = ({
  title,
  liked,
  likes,
  location,
}: Props) => {
  return (
    <div className="w-full h-[200px] flex flex-col items-start justify-between p-[15px] rounded-2xl bg-[url('/Assets/Explore/City1.png')] bg-center bg-cover bg-no-repeat">
      <div className="w-full flex items-center justify-end">
        <div className="w-[56px] h-[28px] flex items-center justify-center gap-1 rounded-[20px] bg-white-main/30 cursor-pointer">
          {liked ? (
            <Icons.Liked fill="" stroke="" ClassName="text-base" />
          ) : (
            <Icons.Like fill="" stroke="" ClassName="text-base" />
          )}
          <p className="text-white-main text-[10px] font-normal">{likes}</p>
        </div>
      </div>
      <div className="w-full flex flex-col items-start justify-start">
        <p className="text-white-main text-lg font-semibold">{title}</p>
        <div className="w-full flex items-center justify-start gap-2">
          <HiOutlineLocationMarker className="text-lg flex-shrink-0  text-white-main" />
          <p className="text-xs text-white-main font-normal">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
