"use client";

import {
  Camera,
  Gamepad2,
  Headphones,
  Monitor,
  Smartphone,
  Watch,
} from "lucide-react";

const categories = [
  { name: "Phones", icon: Smartphone },
  { name: "Computers", icon: Monitor },
  { name: "SmartWatch", icon: Watch },
  { name: "Camera", icon: Camera },
  { name: "HeadPhones", icon: Headphones },
  { name: "Gaming", icon: Gamepad2 },
];

export default function Categories() {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-4 mb-6 pl-[7%] pr-[7%]">
        <div className="w-5 h-10 bg-red-500 rounded "></div>
        <span className="text-red-500 font-semibold">Categories</span>
      </div>

      <div className="  flex items-center justify-between mb-8 pl-[7%] pr-[7%]">
        <h2 className="text-4xl font-bold">Browse By Category</h2>
      </div>

      <div className="flex gap-6 pl-[7%] pr-[7%]  my-grid ">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-8 border border-gray-200 rounded-lg hover:bg-[#db4444] hover:text-background transition-colors cursor-pointer group w-[100%] mb-6"
            >
              <Icon className="w-12 h-12 mb-4 group-hover:text-white" />
              <span className="font-medium">{category.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
