import React from "react";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import Image from "next/image";
import SearchSnippet from "./SearchSnippet";

const Hero = () => {
  return (
    <ComponentWrapper id="hero" style="w-full xl:h-[calc(100dvh-100px)]">
      <div className="w-full h-full grid xl:grid-cols-[1.5fr,1fr] gap-6">
        {/* left section */}
        <aside className="w-full h-full flex flex-col items-start justify-center gap-6">
          <h1 className="text-black-main xl:text-left text-center sm:text-[80px] text-6xl sm:leading-[115px] sm:mt-0 mt-6 font-semibold">
            The Fastest In Delivering{" "}
            <span className="text-white-main">Food</span>
          </h1>
          <p className="text-black-main sm:text-[20px] text-lg xl:text-left text-center leading-10 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing Fusce
            condimentum, magna vel interdum gravida, nibh erat tempus lacus, non
            dictum.
          </p>
          <SearchSnippet />
        </aside>
        {/* right section */}
        <aside className="w-full h-full flex flex-col items-center justify-center">
          <div className="sm:w-[500px] w-full sm:h-[500px] h-[400px] relative">
            <Image
              className="w-full h-full sm:object-fill object-contain pointer-events-none"
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
