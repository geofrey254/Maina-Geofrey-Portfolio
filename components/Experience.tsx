"use client";
import React from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { EXPERIENCE, EDUCATION, SKILLS, SERVICES } from "@/constants";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Experience() {
  return (
    <motion.div
      animate={{ x: 100 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="bg-white text-center py-20 px-6 md:py-24 md:px-96">
        <div className="container mx-auto">
          <Tabs
            defaultValue="account"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
            </TabsList>
            <TabsContent value="education">
              <ScrollArea className="h-64 rounded-md border p-4">
                {EDUCATION.map((edu) => (
                  <div className="" key={edu.id}>
                    <h2 className="font-bold text-main text-xl">
                      <span>
                        {edu.id}. {""}
                      </span>
                      {edu.name}
                    </h2>
                    <p className="">{edu.description}</p>
                  </div>
                ))}
              </ScrollArea>
            </TabsContent>
            <TabsContent value="experience"></TabsContent>
            <TabsContent value="skills"></TabsContent>
            <TabsContent value="services"></TabsContent>
          </Tabs>
        </div>
      </div>
    </motion.div>
  );
}
