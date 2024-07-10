import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-light-blue text-center py-20 px-6 md:py-24 md:px-96">
      <h2 className="font-bold text-4xl text-start mb-12 text-main text-shad">
        ABOUT
      </h2>
      <div className="description text-start">
        <p className="about-p text-gray-600">
          Hello! I{"'"}m
          <span className="text-xl font-bold"> Geofrey Maina</span>, a
          passionate self-taught software developer hailing from the vibrant
          city of Nairobi, Kenya. My journey into the world of coding began in
          2019, and since then, I{"'"}ve been continuously honing my skills and
          expanding my expertise. Currently, I{"'"}m pursuing a degree in
          Computer Science at St. Paul{"'"}s University, where I{"'"}m deepening
          my understanding of the theoretical foundations of computing. In the
          realm of software development, my primary tools of the trade are React
          and Next.js, which I utilize to create dynamic, high-performance web
          applications. Additionally, I am proficient in Python and Django,
          enabling me to build robust and scalable backend systems. My portfolio
          as a freelancer showcases a wide array of projects that highlight my
          versatility and commitment to delivering top-notch solutions. Beyond
          coding, I have a creative streak that I channel through graphic design
          and video editing. I{"'"}m adept with Adobe tools, which I use to
          craft visually appealing graphics and compelling video content.
          Whether I{"'"}m developing a complex web application or designing a
          captivating graphic, I approach each project with enthusiasm and a
          dedication to excellence. I invite you to explore my portfolio and see
          the diverse range of work that defines my journey as a developer and
          designer. Thank you for visiting my site! Feel free to reach out if
          you{"'"}d like to collaborate or just want to say hello.
        </p>
      </div>
    </div>
  );
}
