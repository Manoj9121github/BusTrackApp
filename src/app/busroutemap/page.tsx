import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bus, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import React from "react";

const BusMap = () => {
  return (
    <div className="">
      <div className="max-w-7xl overflow-hidden  bg-white hover:shadow-xl transition duration-300 ease-in-out">
        <div className="bg-red-200 p-1 md:text-xl ">
          <div className="m-2 ml-3 md:ml-15 flex justify-between mr-3 md:mr-15">
            <div className="">
              <h1>Bus No: 27186</h1>
              <h1>Date: 12 July 2025</h1>
            </div>
            <div>
              <h1>BLR to VSKP</h1>
              <div className="flex">
                <h1>Call Attendent</h1>
                <PhoneCall width={20} height={20} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px]">
        <Image
          className=""
          src="/img-4.jpg" // Ensure the correct path to your image
          alt="img"
          layout="responsive" // Make the image responsive
          objectFit="cover" // Ensure the image covers the area of the container
          width={800} // Image width (this is the original width)
          height={1200} // Image height (this is the original height)
        />
        <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/3 z-10">
          <Bus color="black" className="w-10 h-10 mr-35" />
        </div>

        <div className="absolute bottom-1/8 right-1/7 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <MapPin color="#f00" className="w-10 h-10 mb-10 ml-35" />
        </div>
        <div className="bg-red-200 md:text-xl p-1">
          <div className="m-2 ml-3">
            <h1>Bus Location: Sil Board</h1>
            <h1>Pick up location : HSR LAYOUT</h1>
          </div>
        </div>
      </div>
      <div className="mt-55 md:mt-260">
        <h1 className="mt-5">Enter Bus no:</h1>
        <div className="flex ">
          <Input
            type="text"
            className="m-1"
            placeholder="Search Bus-location"
          />
          <Input className="w-75 m-1" type="date" />
          <Button className="bg-red-200 md:w-xs m-1 rounded">Search</Button>
        </div>
      </div>
    </div>
  );
};

export default BusMap;
