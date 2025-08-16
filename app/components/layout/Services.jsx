"use client";

import { Truck, Headphones, Shield } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    icon: Headphones,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    icon: Shield,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
  },
];

export default function Services() {
  return (
    <section className="mb-16 mx-auto w-[70%] service">
      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className="text-center ">
              <div className="w-20 h-20 sm:w-14 sm:h-14 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-14 h-14 sm:w-10 sm:h-10 bg-black rounded-full flex items-center justify-center background">
                  <Icon className="w-8 h-8 sm:w-5 sm:h-5 text-white " />
                </div>
              </div>

              <h3 className="font-bold text-lg sm:text-base mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-xs">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
