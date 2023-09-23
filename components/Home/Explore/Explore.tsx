import React from "react";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import SectionTitle from "@/components/Shared/SectionTitle";
import ExploreCard from "./ExploreCard";

const Explore = () => {
  const cities = [
    {
      title: "Painemo Island",
      location: "Raja Ampat, Indon...",
      liked: true,
      likes: "1.2k",
      image: "bg-[url('/Assets/Explore/City1.png')]",
    },
    {
      title: "Kelingking Beach",
      location: "Bali, Indonesia...",
      liked: false,
      likes: "5.0k",
      image: "bg-[url('/Assets/Explore/City2.png')]",
    },
    {
      title: "Maluk Beach",
      location: "Beach in Indonesia",
      liked: false,
      likes: "3.2k",
      image: "bg-[url('/Assets/Explore/City3.png')]",
    },
    {
      title: "Kelingking Beach",
      location: "Bali, Indonesia...",
      liked: false,
      likes: "5.0k",
      image: "bg-[url('/Assets/Explore/City2.png')]",
    },
    {
      title: "Painemo Island",
      location: "Raja Ampat, Indon...",
      liked: true,
      likes: "1.2k",
      image: "bg-[url('/Assets/Explore/City1.png')]",
    },
    {
      title: "Kelingking Beach",
      location: "Bali, Indonesia...",
      liked: false,
      likes: "5.0k",
      image: "bg-[url('/Assets/Explore/City2.png')]",
    },
    {
      title: "Maluk Beach",
      location: "Beach in Indonesia",
      liked: false,
      likes: "3.2k",
      image: "bg-[url('/Assets/Explore/City3.png')]",
    },
    {
      title: "Kelingking Beach",
      location: "Bali, Indonesia...",
      liked: false,
      likes: "5.0k",
      image: "bg-[url('/Assets/Explore/City2.png')]",
    },
  ];
  return (
    <ComponentWrapper id="explore" style="lg:py-16 py-10">
      <div className="w-full flex flex-col items-start justify-start gap-5">
        <SectionTitle title="Explore by Cities" />
        <div className="w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5">
          {cities.map((item: any, index: number) => (
            <ExploreCard
              key={index}
              title={item.title}
              image={item.image}
              liked={item.liked}
              likes={item.likes}
              location={item.location}
            />
          ))}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Explore;
