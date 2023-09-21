import React from "react";
import Image from "next/image";

type Props = {
  title: string;
};

const CategoryCard: React.FC<Props> = ({ title }: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 px-[62px] py-9 rounded-[30px] bg-white-main shadow-md hover:bg-gradient-to-t from-brand-secondary to-brand-main hover:duration-100 cursor-pointer text-black-main hover:text-white-main">
      <div className="relative w-[106px] h-[106px]">
        <Image
          className="w-full h-full object-contain pointer-events-none"
          src={"/Assets/Categories/Cloud.png"}
          alt=""
          fill
        />
      </div>
      <p className="text-center font-medium text-xl whitespace-nowrap">
        {title}
      </p>
    </div>
  );
};

export default CategoryCard;
