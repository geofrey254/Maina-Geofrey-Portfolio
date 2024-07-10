import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa";
import { TfiInstagram } from "react-icons/tfi";

export default function Hero() {
  return (
    <div className="bg-white bg-cool md:flex grid-cols-12 section-padding-100-70 place-content-center items-center">
      {/* right side */}
      <div className="right-side pl-4 md:pl-8 md:space-y-8 col-span-12 md:col-span-5 z-30">
        <div className="salute">
          <h4 className="text-main name font-bold text-sm md:text-2xl">
            Hi, I am Geofrey
          </h4>
        </div>
        <div className="career text-main name">
          <h2 className="text-3xl md:text-6xl font-bold">
            Software Developer + <br /> Graphic Designer
          </h2>
        </div>
        <div className="image-phone sm:flex md:hidden">
          <div className="photo">
            <Image
              src="/jay.jpg"
              width={500}
              height={500}
              alt="Geofrey Maina's Photo"
              className="photo-phone scale-75"
            />
          </div>
        </div>
        <div className="description">
          <p className="text-gray-900 text-lg md:text-lg font-montserrat">
            Dedicated Software Developer and Graphic Designer with a passion for
            creating innovative and visually stunning solutions.
          </p>
        </div>
        <div className="links mt-8 flex md:gap-24">
          <div className="hire-me">
            <Link
              href="#"
              className="hire-link py-2 pl-4 pr-2 color-1 font-semibold flex text-white"
            >
              Hire me!
              <MdKeyboardDoubleArrowRight className="ml-6" size={25} />
            </Link>
          </div>
          {/* Socials */}
          <div className="socials text-main flex items-center md:space-x-12">
            <Link href="#" className="">
              <FaLinkedinIn className="ml-6" size={25} />
            </Link>
            <Link href="#" className="">
              <TfiInstagram className="ml-6" size={25} />
            </Link>
            <Link href="#" className="">
              <FaFacebookF className="ml-6" size={25} />
            </Link>
            <Link href="#" className="">
              <FaGithub className="ml-6" size={25} />
            </Link>
          </div>
        </div>
      </div>

      {/* left side */}
      <div className="left-side col-span-12 md:col-span-5 hidden md:flex">
        <div className="photo">
          <Image
            src="/jay.jpg"
            width={500}
            height={500}
            alt="Geofrey Maina's Photo"
            className="photo-hero rotate-12 scale-50 md:scale-75"
          />
        </div>
      </div>
    </div>
  );
}
