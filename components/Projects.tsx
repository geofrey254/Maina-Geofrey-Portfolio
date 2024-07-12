import React from "react";

import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/constants";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

// icons
import { GiClick } from "react-icons/gi";

export default function Projects() {
  return (
    <div className="p-2 md:p-20 bg-image">
      <div className="web-projects">
        <div className="text-center mb-8">
          <h3 className="text-4xl md:text-6xl font-bold text-white ">
            WEB PROJECTS
          </h3>
          <span className="text-white text-sm font-extralight italic">
            Scroll to view
          </span>
        </div>
        <Carousel className="p-4">
          <CarouselContent className="">
            {PROJECTS.map((proj) => (
              <CarouselItem key={proj.id} className="">
                <Image
                  src={proj.photo}
                  width={1400}
                  height={1400}
                  alt={proj.name}
                  className="w-full md:h-5/6 border-8 border-white"
                />
                <div className="mt-3  flex justify-center items-center">
                  <Link
                    href={proj.url}
                    className="bg-[#ffffff] rounded-xl p-2 text-main font-bold"
                  >
                    {proj.name}
                  </Link>
                  <GiClick size={40} className="text-main ml-4" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
