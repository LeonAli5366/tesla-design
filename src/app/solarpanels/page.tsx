import React from "react";
import VideoSlide from "../components/VideoSlide";

const about = () => {
  return (
    <>
      <div className="w-full h-screen relative">
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src="/videos/video1.webm" type="video/webm" />
        </video>
        <div className="absolute top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-between my-16">
          <div className="text-center space-y-2 mt-24">
            <h1 className="text-4xl font-semibold">Solar Panels</h1>
            <h1 className="text-sm font-semibold">
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
            <h1 className="text-2xl font-bold">Sustainable Energy</h1>
            <p className="text-sm font-medium opacity-90">
              Power your home with emissions-free, renewable energy directly
              from the sun.
            </p>
          </div>
          <div className="w-full space-y-2">
            <h1 className="text-2xl font-bold">Tax Incentives</h1>
            <p className="text-sm font-medium opacity-90">
              You may qualify for{" "}
              <span className="underline underline-thickness underline-offset-4 cursor-pointer">
                federal, state and local tax incentives
              </span>{" "}
              that can help cut your installation costs.
            </p>
          </div>
          <div className="w-full space-y-2">
            <h1 className="text-2xl font-bold">Monthly Bill Savings</h1>
            <p className="text-sm font-medium opacity-90">
              Generating energy from the sun is free—using it to power your home
              can help protect you from rising energy costs.
            </p>
          </div>
        </div>
      </div>
      <VideoSlide/>
    </>
  );
};

export default about;
