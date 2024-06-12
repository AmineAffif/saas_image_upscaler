import React from "react";
import Image from "next/image";
import { ImgComparisonSlider } from "@img-comparison-slider/react";

export default function ComparisonSection() {
  return (
    <div className="h-screen w-full px-4lg:px-24 pt-0 pb-20 flex flex-col lg:flex-row justify-center items-center">
      <ImgComparisonSlider>
        <div slot="first">
          <Image
            src="/landscape-pixelized.webp"
            alt="Before"
            width={980}
            height={551}
          />
        </div>
        <div slot="second">
          <Image src="/landscape.webp" alt="After" width={980} height={551} />
        </div>
      </ImgComparisonSlider>
      <div className="flex flex-col items-start mt-10 lg:mt-0 ml-0 lg:ml-10">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Rattrapez
        </h2>
        <span className="text-sm font-extralight tracking-normal">
          (presque)
        </span>{" "}
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Tous les défauts
        </h2>
      </div>
    </div>
  );
}
