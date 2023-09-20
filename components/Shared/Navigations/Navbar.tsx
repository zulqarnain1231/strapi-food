import React from "react";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { BsChevronCompactDown } from "react-icons/bs";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const menu = [
    {
      name: "Home",
      route: "#",
    },
    {
      name: "Food",
      route: "#",
    },
    {
      name: "Explore",
      route: "#",
    },
    {
      name: "Stays",
      route: "#",
    },
    {
      name: "Events",
      route: "#",
    },
  ];
  return (
    <ComponentWrapper id="navbar" style="bg-transparent h-[100px]">
      <nav className="w-full h-full flex  items-center xl:justify-start justify-between gap-6">
        <Link
          href={"/"}
          className="relative sm:h-[60px] h-[50px] sm:w-[280px] w-[240px]"
        >
          <Image
            className="w-full h-full object-contain"
            src={"/Assets/logo.png"}
            alt=""
            fill
          />
        </Link>
        <div className="h-[60px] w-[450px] xl:flex hidden items-center justify-start px-4 bg-transparent rounded-[60px] border-[1px] border-white-main">
          <FiSearch className="text-2xl text-white-main" />
          <input
            type="text"
            autoComplete="off"
            placeholder="Search"
            className="w-full h-full flex items-center justify-start px-3 border-none focus:outline-none text-lg text-white-main font-normal placeholder:text-white-main placeholder:text-lg bg-transparent"
          />
        </div>
        <div className="h-full lg:flex hidden items-center justify-center gap-7">
          {menu.map((item: any, index: number) => (
            <Link
              key={index}
              href={item.route}
              className="text-black-main text-lg font-normal"
            >
              {item.name}
            </Link>
          ))}
          <div className="h-[60px] px-4 flex items-center justify-center gap-3 bg-brand-main rounded-[60px]">
            <div className="relative h-[32px] w-[32px]">
              <Image
                className="w-full h-full object-contain"
                src={"/Assets/Hero/Uk.png"}
                alt=""
                fill
              />
            </div>
            <BsChevronCompactDown className="text-2xl text-[#565656]" />
          </div>
        </div>
        <button className="flex lg:hidden items-center justify-center">
          <RiMenu3Fill className="text-white-main text-3xl" />
        </button>
      </nav>
    </ComponentWrapper>
  );
};

export default Navbar;
