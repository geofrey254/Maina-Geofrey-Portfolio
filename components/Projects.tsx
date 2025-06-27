"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/constants";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// icons
import { GiClick } from "react-icons/gi";

export default function Projects() {
  return (
    <section className="p-2 bg-image" id="projects">
      <div className="text-center mb-8">
        <h3 className="text-4xl md:text-5xl font-bold text-white">
          WEB PROJECTS
        </h3>
        <span className="text-gray-200 text-sm font-extralight italic">
          Scroll to view
        </span>
      </div>
      <div className="flex justify-center items-center">
        <Carousel
          opts={{
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          orientation="horizontal"
          className="w-full md:max-w-5xl xl:max-w-6xl"
        >
          <CarouselContent className="">
            {PROJECTS.map((proj, id) => (
              <CarouselItem key={id} className="pt-1 md:basis-1/2">
                <div className="p-1">
                  <Card className="">
                    <CardContent className="flex items-center justify-center p-6">
                      <Image
                        src={proj.photo}
                        width={1200}
                        height={1200}
                        alt={proj.name}
                        className="w-full lg:h-60 xl:h-72 border-8 rounded-xl border-[#29afde] shadow-lg shadow-white"
                      ></Image>
                    </CardContent>
                    <CardFooter className="flex justify-center items-center">
                      <Link href={proj.url}>
                        <Button className="w-full bg-white hover:bg-[#2a9fde] text-[#2a9fde] hover:text-white">
                          {proj.name}
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
