"use client";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryCard from "./CategoryCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function CustomNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button
      className="absolute -top-24 md:right-[15%] sm:right-[5%]  right-[2%] h-[60px] w-[60px] flex items-center justify-center rounded-full bg-transparent hover:bg-brand-main/20 hover:duration-300 hover:transition-all text-black"
      onClick={onClick}
    >
      <FiChevronRight className="text-2xl" />
    </button>
  );
}

function CustomPrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button
      className="absolute -top-24 md:right-[20%] right-[15%]  h-[60px] w-[60px] flex items-center justify-center rounded-full bg-transparent hover:bg-brand-main/20 hover:duration-300 hover:transition-all text-black"
      onClick={onClick}
    >
      <FiChevronLeft className="text-2xl" />
    </button>
  );
}

const Categories = () => {
  const settings = {
    dots: false,
    infinite: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    speed: 500,
    autoplay: true,
    slidesToShow: 5.5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <ComponentWrapper id="categories" style="lg:py-20 py-10">
      <div className="w-full flex flex-col items-center justify-start gap-10">
        <div className="w-full flex md:flex-row flex-col md:items-center items-start md:justify-between justify-start gap-4">
          <h2 className="text-black-main sm:text-[40px] text-4xl font-normal sm:leading-[50px]">
            Browse By Categories
          </h2>
          <button className="h-[54px] w-[161px] flex items-center justify-center gap-2 text-white-main text-xl font-normal bg-gradient-to-t from-brand-secondary to-brand-main rounded-[60px]">
            See All
            <BsArrowUpRight className="text-white-main text-2xl" />
          </button>
        </div>
        <div className="w-full">
          <Slider {...settings}>
            {[
              "Food",
              "Travel",
              "Stays",
              "Cafe",
              "Eco Toursim",
              "Camping",
              "Food",
              "Travel",
              "Stays",
              "Cafe",
              "Eco Toursim",
              "Camping",
            ].map((item: string, index: number) => (
              <CategoryCard key={index} title={item} />
            ))}{" "}
          </Slider>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Categories;
