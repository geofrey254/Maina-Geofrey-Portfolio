import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { SERVICES } from "@/constants";

import { TfiInstagram } from "react-icons/tfi";

export default function page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-40 md:py-64 px-8 bg-image">
      {SERVICES.map((serv) => (
        <Card key={serv.id} className="bg-[#1d87c0d3] rounded-xl shadow-inner">
          <CardHeader className="flex text-nowrap">
            <CardTitle className="text-white text-2xl">
              <span className="montserrat rounded-full bg-[#6abfec] p-2 text-white">
                {serv.id}
              </span>{" "}
              {serv.name}
            </CardTitle>
            <CardDescription className="pt-5 px-3 text-gray-900">
              {serv.name}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-white/85">{serv.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
