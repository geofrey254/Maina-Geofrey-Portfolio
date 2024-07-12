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
    <div className=" p-2 md:p-40 bg-image">
      <div className="web-projects">
        <div className="text-center mb-8">
          <h3 className="text-4xl md:text-6xl font-bold text-white ">
            WEB PROJECTS
          </h3>
          <span className="text-white text-sm font-extralight italic">
            Scroll to view
          </span>
        </div>
        <Carousel className="">
          <CarouselContent className="">
            {PROJECTS.map((proj) => (
              <CarouselItem
                key={proj.id}
                className="basis-5/6 md:basis-5/6 lg:basis-3/4"
              >
                <Image
                  src={proj.photo}
                  width={1400}
                  height={1400}
                  alt={proj.name}
                  className="w-full md:h-fit border-8 border-[#2A9FDE]"
                />
                <div className="mt-3 flex justify-center items-center">
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
