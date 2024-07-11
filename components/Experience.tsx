"use client";
import React from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { EXPERIENCE, EDUCATION, SKILLS, ABOUT } from "@/constants";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

// icons
import { MdSchool } from "react-icons/md";
import { SiJavascript, SiPython, SiC, SiReact } from "react-icons/si";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill, RiFolderUnknowFill } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import { FcAbout } from "react-icons/fc";

export default function Experience() {
  return (
    <motion.div>
      <div className="bg-[#2A9FDE] text-center py-20 md:py-24 md:px-0">
        <div className="container mx-auto">
          <Tabs
            defaultValue="education"
            className="flex flex-col xl:flex-row gap-[60px] p-4"
          >
            <TabsList className="flex flex-col w-full max-w-[340px] mx-auto xl:mx-0 gap-6 md:gap-16">
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
            </TabsList>
            <div className="w-full">
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-4 text-left mb-12">
                  <h2 className="text-4xl font-bold text-white flex gap-6">
                    {EDUCATION.title}
                    <span>
                      <MdSchool size={40} />
                    </span>
                  </h2>
                  <p className="text-white/60">{EDUCATION.description}</p>
                  <span className="text-white text-sm mt-4 font-extralight italic">
                    Scroll to view
                  </span>
                  <hr className="mt-2 md:mt-4" />
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {EDUCATION.items.map((edu) => (
                      <li key={edu.id} className="">
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-left text-white font-semibold flex gap-4">
                          <span>
                            <MdSchool size={30} />
                          </span>
                          {edu.name}
                        </h3>
                        <div className="text-left">
                          <p className="text-white/65">{edu.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </TabsContent>
              {/* EXPERIENCE SECTION */}
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-2 text-left mb-12">
                  <h2 className="text-4xl font-bold text-white">
                    {EXPERIENCE.name}
                  </h2>
                  <p className="text-white/60">{EXPERIENCE.description}</p>
                  <span className="text-white text-sm mt-4 font-extralight italic">
                    Scroll to view
                  </span>
                  <hr className="mt-2 md:mt-4" />
                  <ScrollArea className="h-[400px] mt-4 md:mt-12">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      {EXPERIENCE.items.map((exp) => (
                        <li key={exp.id} className="">
                          <span className="text-sm text-white/65 font-semibold">
                            {exp.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-left text-white font-semibold gap-4">
                            {exp.name}
                          </h3>
                          <div className="text-left">
                            <p className="text-white/65">{exp.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              {/* SKILLS */}
              <TabsContent value="skills" className="w-full">
                <div className="flex flex-col gap-4 text-left mb-12">
                  <h2 className="text-4xl font-bold text-white flex gap-6">
                    {SKILLS.name}
                    <span>
                      <GiSkills size={40} />
                    </span>
                  </h2>
                  <p className="text-white/60">{SKILLS.description}</p>

                  <hr className="mt-2 md:mt-4" />
                  <div className="flex justify-center items-center mx-auto gap-4">
                    <SiJavascript size={30} color="white" />
                    <BiLogoTypescript size={38} color="white" />
                    <SiPython size={30} color="white" />
                    <SiC size={30} color="white" />
                    <BiLogoPostgresql size={40} color="white" />
                    <SiReact size={30} color="white" />
                    <RiNextjsFill size={30} color="white" />
                  </div>
                  <ScrollArea className="h-[400px] mt-4 md:mt-12">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      {SKILLS.items.map((exp) => (
                        <li key={exp.id} className="">
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-left text-white font-semibold gap-4 flex text-nowrap">
                            <span>
                              <GiSkills size={25} />
                            </span>
                            {exp.name}
                          </h3>
                          <div className="text-left">
                            <p className="text-white/65">{exp.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              {/* ABOUT SECTION */}
              <TabsContent value="about" className="w-full">
                <div className="flex flex-col gap-4 text-left mb-12">
                  <h2 className="text-4xl font-bold text-white flex gap-6">
                    {ABOUT.name}
                    <span>
                      <RiFolderUnknowFill size={40} color="white" />
                    </span>
                  </h2>
                  <span className="text-white text-sm mt-4 font-extralight italic flex md:hidden">
                    Scroll to view more...
                  </span>
                  <hr className="mt-2 md:mt-4" />
                  <ScrollArea className="h-[320px] md:h-[380px] mt-4 md:mt-12 bg-[#094260] rounded-xl p-4 md:p-8 shadow-xl shadow-red-200">
                    <p className="text-white shadow-sm text-lg">
                      {ABOUT.description}
                    </p>
                  </ScrollArea>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </motion.div>
  );
}
