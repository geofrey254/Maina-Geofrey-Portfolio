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
import { Card, CardContent } from "@/components/ui/card";

export default function Design() {
  return (
    <section className="design-projects bg-design py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-main mb-4 tracking-tight">
            DESIGN PROJECTS
          </h2>
          <p className="text-gray-900 text-base font-light italic opacity-70">
            Scroll to view
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-none"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {DESIGN.map((proj) => (
                <CarouselItem
                  key={proj.id}
                  className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-1">
                    <CardContent className="p-0 relative aspect-square">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                      <Image
                        src={proj.img}
                        width={500}
                        height={500}
                        alt={`Design project ${proj.id}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom positioned navigation */}
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white/90 border-2 hover:bg-white hover:scale-110 transition-all duration-200" />
              <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white/90 border-2 hover:bg-white hover:scale-110 transition-all duration-200" />
            </div>

            {/* Mobile navigation */}
            <div className="md:hidden flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-white/90 border-2" />
              <CarouselNext className="static translate-y-0 bg-white/90 border-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
