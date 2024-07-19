import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FaPhone } from "react-icons/fa6";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function page() {
  return (
    <div className="bg-image pt-40 px-12 md:pt-40 md:pb-20 md:px-20">
      <div className="md:grid md:grid-cols-12 gap-32">
        <div className="col-span-4 mb-8 md:mb-0 xl:mt-40">
          <h3 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white poppins mb-4">
            Want to build something?
          </h3>
          <p>
            Whether you{"'"}re looking to debug your life or design a new
            reality, I{"'"}m your go-to geek! Let{"'"}s byte off more than we
            can chew and pixel the world a little brighter, one line of code and
            one stroke of art at a time.
          </p>
        </div>
        <div className="col-span-5 xl:col-span-7 grid md:inline-grid md:grid-cols-2 gap-4 mb-4 md:mb-0">
          <Card className="rounded-xl bg-[#9fd3f0] md:w-[40vh] md:h-[30vh] shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-600 text-xl">
                Collaborate
              </CardTitle>
            </CardHeader>
            <CardContent className="flex gap-4">
              <FaGithub size={30} />
              <Link
                href="https://github.com/geofrey254"
                className="text-xs bg-muted p-2 rounded-xl hover:bg-black hover:text-white"
              >
                Click me
              </Link>
            </CardContent>
          </Card>

          <Card className="rounded-xl bg-[#9fd3f0] md:w-[40vh] md:h-[30vh] shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-600 text-xl">Say hello</CardTitle>
            </CardHeader>
            <CardContent className="">
              <div className="flex items-center">
                <FaPhone className="mr-2 h-4 w-4" />
                <p>+254 742 954513</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-2 h-4 w-4" />
                <p>+254 742 954513</p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl bg-[#dcdedf] md:w-[40vh] md:h-[30vh] shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-600 text-xl">Socials</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-4">
              <FaLinkedin size={40} className="text-[#0077B5]" />
              <FaFacebookF size={40} className="text-[#4267B2]" />
              <FaInstagram size={40} className="text-[#E4405F]" />
              <FaSquareXTwitter size={40} className="text-[#0077B5]" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
