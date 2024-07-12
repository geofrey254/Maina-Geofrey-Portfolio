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

export default function page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-40 md:py-64 px-8 bg-[#2A9FDE]">
      {SERVICES.map((serv) => (
        <Card key={serv.id}>
          <CardHeader className="flex text-nowrap">
            <CardTitle className="text-[#2A9FDE] text-2xl md:text-base">
              <span className="montserrat rounded-full bg-[#2A9FDE] p-2 text-white">
                {serv.id}
              </span>{" "}
              {serv.name}
            </CardTitle>
            <CardDescription className="pt-5 px-3">{serv.name}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{serv.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
