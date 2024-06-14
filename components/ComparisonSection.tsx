import React from "react";
import Image from "next/image";
import { ImgComparisonSlider } from "@img-comparison-slider/react";

export default function ComparisonSection() {
  return (
    <div className="h-screen max-sm:h-auto max-sm:pb-20 w-full flex flex-col px-4lg:px-24 pt-0 justify-center items-center">
      <div className="flex items-end my-10">
        <h3 className="text-xl font-bold tracking-tighter sm:text-5xl">
          Rattrapez
        </h3>
        <span className="text-sm font-extralight tracking-normal">
          (presque)
        </span>{" "}
        <h3 className="text-xl font-bold tracking-tighter sm:text-5xl">
          Tous les défauts
        </h3>
      </div>
      <ImgComparisonSlider>
        <div slot="first">
          <Image
            src="/landscape-pixelized.webp"
            alt="Before"
            width={800}
            height={330}
          />
        </div>
        <div slot="second">
          <Image src="/landscape.webp" alt="After" width={800} height={330} />
        </div>
      </ImgComparisonSlider>
    </div>
  );
}
