import React from "react";
import SeeAll from "./Buttons/SeeAll";

type Props = {
  title: string;
};

const SectionTitle: React.FC<Props> = ({ title }: Props) => {
  return (
    <div className="w-full flex md:flex-row flex-col md:items-center items-start md:justify-between justify-start gap-4">
      <h2 className="text-black-main sm:text-[40px] text-4xl font-normal sm:leading-[50px]">
        {title}
      </h2>
      <SeeAll />
    </div>
  );
};

export default SectionTitle;
