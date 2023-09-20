import React from "react";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import Image from "next/image";
import SearchSnippet from "./SearchSnippet";

const Hero = () => {
  return (
    <ComponentWrapper id="hero" style="w-full min-h-[calc(100dvh-100px)]">
      <div className="w-full h-full grid xl:grid-cols-[1.5fr,1fr] gap-6">
        {/* left section */}
        <aside className="w-full h-full flex flex-col items-start justify-center gap-6">
          <h1 className="text-black-main text-[80px] leading-[115px] font-semibold">
            The Fastest In Delivering{" "}
            <span className="text-white-main">Food</span>
          </h1>
          <p className="text-black-main text-[20px] leading-10 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing Fusce
            condimentum, magna vel interdum gravida, nibh erat tempus lacus, non
            dictum.
          </p>
          <SearchSnippet />
        </aside>
        {/* right section */}
        <aside className="w-full h-full flex flex-col items-center justify-center">
          <div className="w-[500px] h-[500px] relative">
            <Image
              className="w-full h-full object-fill pointer-events-none"
              src={"/Assets/Hero/Plate.png"}
              alt=""
              fill
            />
          </div>
        </aside>
      </div>
    </ComponentWrapper>
  );
};

export default Hero;
