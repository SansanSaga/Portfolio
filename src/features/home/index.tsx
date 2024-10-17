import EmblaCarousel from "@/components/EmblaCarousel";
import NavbarTabs from "@/components/NavbarTabs";
import React from "react";
import { Rubik, Lora } from "next/font/google";
import Image from "next/image";

const rubik = Rubik({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });

const HomePage = () => {
  const SLIDE_COUNT = 3;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className="bg-gray-300">
      <NavbarTabs />
      <div className="max-w-4xl mx-auto p-4 grid grid-cols-2 px-2">
        <Image
          src="/Fotoavif.avif"
          alt="Foto Samboga"
          height="500"
          width="500"
          // fill
          className="object-cover rounded-3xl border-4 border-gray-500"
        />
        <div className="ml-4 content-center">
          <p className={`${lora.className} text-4xl`}>Hi there!</p>
          <p className={`${lora.className} text-xl my-2`}>My name is <span className="font-bold">Samboga Aradhana Ngusman</span> and I am a Fullstack Web Developer.</p>
          <p className={`${lora.className} text-xl my-2`}>My earliest experience with the world of computer science and software development is me modifying the maps in Warcraft 3 when I was 11 years old.</p>
          <p className={`${lora.className} text-xl my-2`}>And as time goes on I learned more bit by bit informally, and then on 2016 I begun formally learning computer science.</p>
        </div>
        
      </div>
      <EmblaCarousel slides={SLIDES} options={{ loop: true }} />
    </div>
  );
};

export default HomePage;
