import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa";
import { TfiInstagram } from "react-icons/tfi";

export default function Footer() {
  const d = new Date();
  let date = d.getFullYear();
  return (
    <div className="flex flex-col p-4 md:p-20">
      <div className="flex justify-center items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            width={200}
            height={200}
            alt="Geofrey Maina's logo"
            className="scale-75 md:scale-75"
          />
        </Link>
      </div>
      <div className="mt-2 mb-2">
        <h4 className="text-lg md:text-3xl w-full text-center">
          Empower users through <br /> thoughtful creation.
        </h4>
      </div>
      <div className="mt-2 mb-2">
        <p className="text-sm w-full text-center">Handcrafted by me</p>
      </div>
      <hr className="mt-8 mb-2" />
      <div className="flex justify-between items-center">
        <div className="date-script">
          <p className="text-xs md:text-sm text-center">
            &copy; {date} Maina Geofrey
          </p>
        </div>
        <div className="links">
          <ul className="flex gap-4 text-[#2a9fde] scale-75 md:scale-100">
            <li>
              <Link href="#" className="">
                <FaGithub size={25} />
              </Link>
            </li>
            <li>
              <Link href="#" className="">
                <FaLinkedinIn size={25} />
              </Link>
            </li>
            <li>
              <Link href="#" className="">
                <TfiInstagram size={25} />
              </Link>
            </li>
            <li>
              <Link href="#" className="">
                <FaFacebookF size={25} />
              </Link>
            </li>
          </ul>
        </div>
        <div className="neb">
          <h3>Nebula</h3>
        </div>
      </div>
    </div>
  );
}
