import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DESIGN } from "@/constants";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// icons
import { GiClick } from "react-icons/gi";

export default function Design() {
  return (
    <div className="design-projects bg-design">
      <div className="text-center mb-8">
        <h3 className="text-4xl md:text-6xl font-bold text-main">
          DESIGN PROJECTS
        </h3>
        <span className="text-gray-900 text-sm font-extralight italic">
          Scroll to view
        </span>
      </div>
      <div className="flex justify-center items-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full md:max-w-3xl xl:max-w-5xl"
        >
          <CarouselContent className="-mt-1 h-[300px] md:h-[400px] xl:h-[600px]">
            {DESIGN.map((proj) => (
              <CarouselItem key={proj.id} className="pt-1 md:basis-1/2">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image
                        src={proj.img}
                        width={500}
                        height={500}
                        alt="photo"
                        className="w-full md:h-fit border-8 border-white"
                      />
                    </CardContent>
                  </Card>
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
