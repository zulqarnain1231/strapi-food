import React from "react";
import Link from "next/link";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const menu = [
    "Home",
    "About Us",
    "Contact Us",
    "Privacy Policy",
    "Terms & Services",
    "Sitemap",
  ];
  const social = [
    <FaFacebookF className="text-xl text-white-main" />,
    <FaTwitter className="text-xl text-white-main" />,
    <FaLinkedinIn className="text-xl text-white-main" />,
    <FaYoutube className="text-xl text-white-main" />,
  ];
  const year = new Date().getFullYear();
  return (
    <ComponentWrapper style="py-10 bg-black-main">
      <footer className="w-full h-full flex flex-col items-center justify-start gap-6">
        <div className="w-full flex md:flex-nowrap flex-wrap items-center justify-center gap-5">
          {menu.map((item: string, index: number) => (
            <Link
              key={index}
              href={"/"}
              className="text-white-main text-lg font-normal"
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="w-full flex items-center justify-center gap-4">
          {social.map((item: React.ReactNode, index: number) => (
            <span
              key={index}
              className="h-[48px] w-[48px] flex items-center justify-center border border-white-main rounded-[30px] cursor-pointer"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="text-center text-white-main text-lg font-normal">
          Copyright© {year} Cambodia. All right reserved.
        </p>
      </footer>
    </ComponentWrapper>
  );
};

export default Footer;
