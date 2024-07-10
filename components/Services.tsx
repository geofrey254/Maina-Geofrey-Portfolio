"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

export default function Services() {
  const [rotate, setRotate] = useState(false);
  const updateRotate = () => {
    setRotate(!rotate);
  };
  return (
    <div className="bg-light-blue justify-center pt-16 md:pt-20">
      <div className="title-services text-center">
        <h2 className="text-main text-4xl md:text-5xl name font-bold font-sora">
          My Quality Services
        </h2>
        <p className="p-4 text-gray-600">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and you customers.
        </p>
      </div>

      {/* SERVICE CARDS */}
      <div className="md:flex columns-1 md:columns-3 gap-32 p-12 md:p-10 space-y-10 md:space-y-0">
        <div>
          <Link href="#">
            <div className={"web text-center p-6"}>
              <h2 className="serv-title font-bold text-2xl serv_card">
                Software Development
              </h2>
              <p className="text-gray-600 mt-6">
                We provide top-notch software development services tailored to
                your unique needs. Our expertise spans web and mobile
                applications, custom software solutions, and seamless
                integration of advanced technologies to drive your business
                forward.
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link href="#">
            <div className="graphic text-center p-6">
              <h2 className="serv-title font-bold text-2xl serv_card">
                Graphic Design
              </h2>
              <p className="text-gray-600 mt-6">
                Transform your ideas into visually stunning designs. We offer
                bespoke branding, logo creation, and marketing materials that
                captivate and engage your audience. Elevate your business with
                our professional graphic design solutions.
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link href="#">
            <div className="video-editing text-center p-6">
              <h2 className="serv-title font-bold text-2xl serv_card">
                Video Editing
              </h2>
              <p className="text-gray-600 mt-6">
                Transform your raw footage into captivating videos with our
                expert video editing services. Whether it is for promotional
                content, social media, or personal projects, we ensure
                professional quality, creativity, and timely delivery to bring
                your vision to life.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
