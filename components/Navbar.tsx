"use client";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaFileContract,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

// Icons
import { BsMenuButtonWideFill, BsDownload } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import { BiDownload, BiWindowClose } from "react-icons/bi";
import { CgMenuOreos, CgWebsite } from "react-icons/cg";
import { MdContactMail, MdOutlineConnectWithoutContact } from "react-icons/md";
import { GiSkills } from "react-icons/gi";

export default function Navbar() {
  const [menuOpen, setmenuOpen] = useState(false);
  const handleNav = () => {
    setmenuOpen(!menuOpen);
  };
  const handleLinkClick = () => {
    setmenuOpen(false);
  };
  return (
    <nav className="navbar fixed w-full h-24 z-5 bg-special z-40">
      <div className="flex justify-between items-center h-full w-full">
        {/* Left side of the navbar */}
        <div className="left-side pr-4 md:pr-6 2xl:px-16 flex">
          <Link href="/" onClick={handleLinkClick}>
            <Image
              src="/logo.png"
              width={200}
              height={200}
              alt="Geofrey Maina's logo"
              className="scale-75 md:scale-75"
            />
          </Link>
        </div>
        {/* Center of Navbar */}
        <div className="center-nav hidden sm:flex">
          <ul className="flex space-x-16 text-gray-600">
            <li className="font-semibold hover:text-gray-900">
              <Link href="/services" className="cursor-default flex">
                <FaFileContract className="mr-2" size={25} />
                Services
              </Link>
            </li>
            <li className="font-semibold hover:text-gray-900">
              <Link href="/#projects" className="cursor-default flex">
                <CgWebsite className="mr-2" size={25} />
                Works
              </Link>
            </li>

            <li className="font-semibold hover:text-gray-900">
              <Link href="/#skills" className="cursor-default flex">
                <GiSkills className="mr-2" size={25} />
                Skills
              </Link>
            </li>
            <li className="font-semibold hover:text-gray-900">
              <Link href="/contact" className="cursor-default flex">
                <MdOutlineConnectWithoutContact className="mr-2" size={25} />
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Right side nav */}
        <div className="right-side flex">
          <Link
            href="resume.pdf"
            className="nav-btn flex text-white name font-bold mr-4"
          >
            Resume <BiDownload className="text-xl ml-2 p-.5" />
          </Link>
          <div onClick={handleNav} className="sm:hidden cursor-pointer mr-4 ">
            <div>
              <CgMenuOreos
                size={40}
                className={!menuOpen ? "flex text-main ease-in" : "hidden"}
              />

              <BiWindowClose
                size={40}
                className={
                  menuOpen
                    ? "flex text-main transition ease-out delay-100"
                    : "hidden"
                }
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={
            menuOpen
              ? "fixed nav-top-1 w-[100%] h-96 transition duration-700 ease-in-out bg-nav"
              : "fixed collapse h-1/2 transition duration-700 ease-in-out"
          }
        >
          <ul className="flex flex-col text-xl space-y-12 pt-14 pl-6 text-white">
            <li className="font-semibold">
              <Link
                href="/services"
                className="cursor-default flex"
                onClick={handleLinkClick}
              >
                <FaFileContract className="mr-2" size={25} />
                Services
              </Link>
            </li>
            <li className="font-semibold">
              <Link
                href="/#projects"
                className="cursor-default flex"
                onClick={handleLinkClick}
              >
                <CgWebsite className="mr-2" size={25} />
                Works
              </Link>
            </li>
            <li className="font-semibold">
              <Link
                href="/#skills"
                className="cursor-default flex"
                onClick={handleLinkClick}
              >
                <GiSkills className="mr-2" size={25} />
                Skills
              </Link>
            </li>
            <li className="font-semibold">
              <Link
                href="/contact"
                className="cursor-default flex"
                onClick={handleLinkClick}
              >
                <MdOutlineConnectWithoutContact className="mr-2" size={25} />
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
