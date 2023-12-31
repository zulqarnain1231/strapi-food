import Categories from "@/components/Home/Categories/Categories";
import Explore from "@/components/Home/Explore/Explore";
import Flash from "@/components/Home/Flash";
import Hero from "@/components/Home/Hero/Hero";
import NewResort from "@/components/Home/Resorts/NewResort";
import Footer from "@/components/Shared/Navigations/Footer";
import Navbar from "@/components/Shared/Navigations/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="w-full xl:h-[100dvh] bg-[url('/Assets/Hero/Hero-bg.png')] bg-cover bg-center relative">
        <Navbar />
        <Hero />
        <div className="absolute right-0 -bottom-6 z-10">
          <div className="relative h-[116px] w-[134px]">
            <Image
              className="object-contain w-full h-full"
              src={"/Assets/Hero/Dots.png"}
              alt=""
              fill
            />
          </div>
        </div>
      </div>
      <Categories />
      <div className="w-full relative">
        <NewResort />
        <NewResort />
        <div className="h-[105px] w-[110px] md:inline-block hidden absolute left-0 top-[40%] pointer-events-none -z-10">
          <div className="relative w-full h-full">
            <Image
              className="w-full h-full object-contain"
              src={"/Assets/Resorts/Orange.png"}
              alt=""
              fill
            />
          </div>
        </div>
      </div>

      <Flash />
      <Explore />
      <Footer />
    </main>
  );
}
