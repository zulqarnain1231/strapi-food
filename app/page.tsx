import Hero from "@/components/Home/Hero/Hero";
import Navbar from "@/components/Shared/Navigations/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="w-full xl:h-[100dvh] bg-[url('/Assets/Hero/Hero-bg.png')] bg-cover bg-center">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}
