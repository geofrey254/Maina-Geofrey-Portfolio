import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { TfiInstagram } from "react-icons/tfi";

export default function CTA() {
  return (
    <div className="bg-cta flex-0 md:flex justify-around items-center text-left px-12 md:px-9 xl:px-9 py-0 md:py-20 mb-12">
      <div className="right-side">
        <h2 className="text-2xl md:text-5xl poppins font-semibold text-white w-full md:w-4/6 ">
          Ready to Bring Your Vision to Life?
        </h2>
        <div className="mt-8 md:mt-12">
          <Link href="/contact" className="">
            <Button className="bg-[#2a9fde] text-sm md:text-xl poppins font-bold scale-95 md:scale-100">
              <FaPhone className="mr-2 h-4 w-4" /> Contact Me
            </Button>
          </Link>
        </div>
      </div>
      <div className="left-side mt-8 md:mt-0">
        <ul className="flex gap-8 text-[#2a9fde] md:text-white/90 scale-115 md:scale-150">
          <li>
            <Link
              href="https://github.com/geofrey254"
              className="hover:text-white md:hover:text-[#2a9fde]"
            >
              <FaGithub className="" size={25} />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/geoffrey-maina-5888a31b4/"
              className="hover:text-white md:hover:text-[#2a9fde]"
            >
              <FaLinkedinIn className="" size={25} />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/_njuguna_wa_mainah/"
              className="hover:text-white md:hover:text-[#2a9fde]"
            >
              <TfiInstagram className="" size={25} />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.facebook.com/profile.php?id=100004500649132"
              className="hover:text-white md:hover:text-[#2a9fde]"
            >
              <FaFacebookF className="" size={25} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
