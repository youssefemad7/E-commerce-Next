import Image from "next/image";
import Services from "../components/layout/Services";

import { Truck, Headphones, Shield } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "10.5k ",
    description: "Sallers active our site",
  },
  {
    icon: Headphones,
    title: "33k",
    description: "Mopnthly Produduct Sale",
  },
  {
    icon: Shield,
    title: "45.5k",
    description: "Customer active in our site",
  },
  {
    icon: Headphones,
    title: "25k",
    description: "Anual gross sale in our site",
  },
];

function about() {
  return (
    <div>
      <div className="flex justify-between px-[5%] py-10 mt-[3%] mb-[6%] pl-[13%] ">
        <div>
          Home / <span className="font-bold">About</span>
        </div>
      </div>
      <section className="sec-1">
        <div className="grid grid-cols-10 pl-[12%]  justify-center items-center about">
          <div className="col-span-4 mr-5">
            <h1 className="font-bold text-[3rem] mb-5 ">Our Story</h1>
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p className="mt-5 mr-5">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="col-span-6 ">
            <Image
              src="/E-commerce.jpg"
              alt="PlayStation.png"
              width={850}
              height={250}
              className=" rounded-md mr-4"
            />
          </div>
        </div>
      </section>

      <section className="sec-2 mb-16 mx-auto w-[70%] service mt-[10%]">
        <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-3 gap-8 text-center about">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="text-center border px-6 py-6">
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
      <section className="sec-3 grid grid-cols-6 w-[100%] pl-[5%] pt-[5%] pb-[1%] about">
        <div className="col-span-2 mb-5">
          <Image
            src="/FirstMen.png"
            alt="Man.png"
            width={350}
            height={150}
            className="w-[90%] rounded-md mr-4 bg-gray-200 px-8"
          />
          <h1 className="text-2xl font-bold mt-5">Tom Cruise</h1>
          <p>Founder & Chairman</p>
        </div>
        <div className="col-span-2 mb-5">
          <Image
            src="/FirstMen.png"
            alt="Woman.png"
            width={350}
            height={250}
            className="w-[90%] rounded-md mr-4 bg-gray-200 px-8"
          />
          <h1 className="text-2xl font-bold mt-5">Jonas Watson</h1>
          <p>Managing Director</p>
        </div>
        <div className="col-span-2 ">
          <Image
            src="/SecondMen.png"
            alt="Man.png"
            width={350}
            height={250}
            className="w-[90%] h-[77%] rounded-md mr-4 bg-gray-200 px-8 abouth"
          />
          <h1 className="text-2xl font-bold mt-5">Will Smith</h1>
          <p>Product Designer</p>
        </div>
      </section>
      <section className="sec4 mt-[5%] mb-[10%] ">
        <Services />
      </section>
    </div>
  );
}

export default about;
