import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <div className="flex-0 justify-center items-center section-padding-100-70 bg-cta">
      <div className="text-center">
        <h2 className="text-lg md:text-5xl poppins font-semibold text-white">
          Ready to Bring Your Vision to Life?
        </h2>
        <p className="px-8 md:px-80 mt-8 text-xs md:text-base text-gray-800">
          Whether you{"'"}re looking for a skilled software developer to bring
          your digital vision to life, a graphic designer to craft stunning
          visuals, or a video editor to tell compelling stories, I{"'"}m here to
          help. With a passion for creativity and a commitment to excellence, I
          deliver tailored solutions that exceed expectations.
        </p>
      </div>
      <div className="text-center p-12">
        <Link href="/">
          <Button className="bg-[#2A9FDE] text-2xl btn-cool">Contact Me</Button>
        </Link>
      </div>
    </div>
  );
}
