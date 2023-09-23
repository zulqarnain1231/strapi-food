import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import Image from "next/image";

const Flash = () => {
  return (
    <ComponentWrapper id="flash" style="lg:py-16 py-10">
      <div className="w-full  rounded-[35px] bg-gradient-to-t from-brand-secondary to-brand-main sm:px-20 sm:py-16 p-12 relative">
        {/* left side */}
        <aside className="xl:w-[65%] w-full flex flex-col md:items-start items-center justify-start md:gap-10 gap-6">
          <h2 className="text-white-main md:text-7xl text-6xl md:text-left text-center font-semibold md:leading-[90px]">
            Don't Flash Your <span className="outlined-text">Valuables</span>
          </h2>
          <p className="text-white-main/80 text-lg md:text-left text-center font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            gravida varius ante nec blandit. Mauris vehicula nulla non neque
            convallis, non porta magna feugiat. Sed et vestibulum quam, ac
            vulputate libero.
          </p>
          <button className="w-[200px] h-[60px] flex items-center justify-center text-white-main text-lg font-medium bg-white-main/30 rounded-[60px]">
            Learn More
          </button>
        </aside>
        {/* right side */}
        <aside className="w-[520px] h-[520px] xl:inline-block hidden absolute bottom-0 right-6 pointer-events-none">
          <div className="w-full h-full relative">
            <Image
              className="w-full h-full object-fill"
              src={"/Assets/Girl.png"}
              alt=""
              fill
            />
          </div>
        </aside>
      </div>
    </ComponentWrapper>
  );
};

export default Flash;
