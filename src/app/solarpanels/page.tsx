import React from "react";
import VideoSlide from "../components/VideoSlide";
import Image from "next/image";

const about = () => {
  return (
    <>
      <div className="w-full h-screen relative">
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src="/videos/video1.webm" type="video/webm" />
        </video>
        <div className="absolute top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-between my-16">
          <div className="text-center space-y-2 mt-24">
            <h1 className="text-4xl font-semibold text-white">Solar Panels</h1>
            <h1 className="text-sm font-semibold text-white">
              Save on Energy, Power Your Home
            </h1>
          </div>
          <div className="flex items-center gap-x-7">
            <button className="w-64 h-10 bg-white rounded text-[#393C41] font-semibold text-sm">
              Order Now
            </button>
            <button className="w-64 h-10 hover:bg-white rounded border-[3px] text-white hover:text-[#393C41] border-white text-sm font-semibold transition-all duration-300">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
      <div className="text-center bg-white text-black pt-[120px] px-[48px] pb-[40px] space-y-2">
        <h1 className="text-2xl text-[#171A20] font-semibold">
          Save With Solar Over Time
        </h1>
        <p className="max-w-2xl mx-auto text-sm text-gray-700 font-medium">
          Generate your own clean energy from the sun for free with solar. Add
          Powerwall to store your energy for use anytime you need it. Tax
          incentives and flexible financing options ensure you get the best
          price for your solar system.
        </p>
      </div>
      <div className="w-full h-screen bg-image4 bg-cover bg-center"></div>
      <div className="flex justify-center bg-black">
        <div className="flex justify-center max-w-6xl mx-auto my-20 gap-x-32">
          <div className="w-full space-y-2">
            <h1 className="text-2xl font-bold text-white">
              Sustainable Energy
            </h1>
            <p className="text-sm font-medium opacity-90 text-white">
              Power your home with emissions-free, renewable energy directly
              from the sun.
            </p>
          </div>
          <div className="w-full space-y-2">
            <h1 className="text-2xl font-bold text-white">Tax Incentives</h1>
            <p className="text-sm font-medium opacity-90 text-white">
              You may qualify for{" "}
              <span className="underline underline-thickness underline-offset-4 cursor-pointer">
                federal, state and local tax incentives
              </span>{" "}
              that can help cut your installation costs.
            </p>
          </div>
          <div className="w-full space-y-2">
            <h1 className="text-2xl font-bold text-white">
              Monthly Bill Savings
            </h1>
            <p className="text-sm font-medium opacity-90 text-white">
              Generating energy from the sun is free—using it to power your home
              can help protect you from rising energy costs.
            </p>
          </div>
        </div>
      </div>
      <VideoSlide />
      <div className="h-screen flex flex-col items-center justify-center gap-y-8">
        <Image
          src={"https://i.postimg.cc/Zqv54Qsw/sleek-durable-desktop.avif"}
          alt=""
          width={1130}
          height={580}
          className="rounded"
        />
        <div className="max-w-[1130px] mx-auto flex justify-between">
          <h1 className="text-2xl font-bold text-white w-[70%]">
            Sleek and Durable
          </h1>
          <p className="w-full text-[13px] font-medium">
            Tesla uses solar panels that offer a sleek and modern take on
            traditional panels. With our proprietary mounting hardware, panels
            can be installed close to your roof without the need for rails, so
            they blend in with your roofline. Durable and weatherproof, they can
            power your home for decades to come.
          </p>
        </div>
      </div>
      <div className="h-screen flex flex-col items-center justify-center gap-y-8">
        <Image
          src={
            "https://i.postimg.cc/x8mCpmvc/solar-panels-carousel-01-desktop.avif"
          }
          alt=""
          width={1130}
          height={480}
          className="rounded"
        />
        <div className="max-w-[1130px] mx-auto flex justify-between gap-7">
          <div className="flex flex-col gap-y-3 border-t-2 pt-3 opacity-50">
            <span className="text-lg font-bold text-white">
              Simple Aesthetic
            </span>
            <p className="text-[13px] font-medium">
              Panels and skirts are all black, creating a uniform, monochromatic
              look.
            </p>
          </div>
          <div className="flex flex-col gap-y-3 border-t-2 pt-3">
            <span className="text-lg font-bold text-white">
              Simple Aesthetic
            </span>
            <p className="text-[13px] font-medium">
              Panels and skirts are all black, creating a uniform, monochromatic
              look.
            </p>
          </div>
          <div className="flex flex-col gap-y-3 border-t-2 pt-3">
            <span className="text-lg font-bold text-white">
              Simple Aesthetic
            </span>
            <p className="text-[13px] font-medium">
              Panels and skirts are all black, creating a uniform, monochromatic
              look.
            </p>
          </div>
          <div className="flex flex-col gap-y-3 border-t-2 pt-3">
            <span className="text-lg font-bold text-white">
              Simple Aesthetic
            </span>
            <p className="text-[13px] font-medium">
              Panels and skirts are all black, creating a uniform, monochromatic
              look.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
