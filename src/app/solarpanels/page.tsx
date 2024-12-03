import React from "react";
import VideoSlide from "../components/VideoSlide";
import Image from "next/image";
import ImageSlide from "../components/ImageSlide";
import SideImageSlide from "../components/SideImageSlide";

const about = () => {
  return (
    <>
      <div className="w-full h-screen relative">
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src="/videos/video1.webm" type="video/webm" />
        </video>
        <div className="absolute top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-between sm:my-16 my-10">
          <div className="text-center space-y-2 mt-24">
            <h1 className="xl:text-4xl text-2xl font-bold text-white">Solar Panels</h1>
            <h1 className="text-[13px] font-semibold text-white">
              Save on Energy, Power Your Home
            </h1>
          </div>
          <div className="flex max-sm:flex-col items-center justify-between gap-5 max-w-[544px] w-full sm:h-[40px] h-[100px] max-sm:px-5">
            <button className="w-full h-full bg-white rounded text-[#393C41] font-semibold text-sm">
              Order Now
            </button>
            <button className="w-full h-full hover:bg-white rounded border-[3px] text-white hover:text-[#393C41] border-white text-sm font-semibold transition-all duration-300">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
      <div className="text-center bg-white text-black sm:pt-[120px] pt-10 sm:px-[48px] px-5 pb-[40px] space-y-2">
        <h1 className="sm:text-2xl text-[22px] text-[#171A20] font-bold opacity-90">
          Save With Solar Over Time
        </h1>
        <p className="max-w-2xl mx-auto text-sm text-gray-700 font-medium opacity-90">
          Generate your own clean energy from the sun for free with solar. Add
          Powerwall to store your energy for use anytime you need it. Tax
          incentives and flexible financing options ensure you get the best
          price for your solar system.
        </p>
      </div>
      <div className="w-full h-screen bg-image4 bg-cover bg-center"></div>
      <div className="flex sm:justify-center bg-black">
        <div className="flex max-sm:flex-col justify-center max-w-6xl mx-auto my-20 sm:gap-x-32 gap-10 max-sm:px-5">
          <div className="w-full space-y-2">
            <h1 className="sm:text-2xl text-lg font-bold text-white">
              Sustainable Energy
            </h1>
            <p className="text-sm font-medium opacity-90 text-white">
              Power your home with emissions-free, renewable energy directly
              from the sun.
            </p>
          </div>
          <div className="w-full space-y-2">
            <h1 className="sm:text-2xl text-lg font-bold text-white">Tax Incentives</h1>
            <p className="text-sm font-medium opacity-90 text-white">
              You may qualify for{" "}
              <span className="underline underline-thickness underline-offset-4 cursor-pointer">
                federal, state and local tax incentives
              </span>{" "}
              that can help cut your installation costs.
            </p>
          </div>
          <div className="w-full space-y-2">
            <h1 className="sm:text-2xl text-lg font-bold text-white">
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
      <div className="h-screen flex flex-col items-center justify-center gap-y-8 bg-black">
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
      <ImageSlide />
      <div className="py-20 bg-black relative">
        <div className="absolute top-0 left-0 right-0 bottom-[78%] bg-gradient-to-b from-black to-transparent"></div>
        <div className="w-full h-screen bg-image5 bg-cover bg-center flex items-end">
          <div className="max-w-[1100px] mx-auto flex mb-10 gap-x-10 z-10">
            <h1 className="text-2xl font-bold w-[40%] text-white">
              Grid Goes Down, Lights Stay On
            </h1>
            <p className="w-full text-[13px] font-medium pr-20 text-white">
              Solar panels generate energy for you to use in your home. When
              paired with{" "}
              <span className="underline underline-offset-2">Powerwall</span>,
              you can store your excess energy for use whenever you want. As
              severe weather becomes more common and the grid less reliable,
              Powerwall can keep your lights on when outages occur.
            </p>
          </div>
        </div>
        <div className="absolute top-[70%] left-0 right-0 bottom-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      <div className="h-screen bg-black">
        <div className="flex flex-col justify-between max-w-[1100px] mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            <div className="flex flex-col gap-y-5">
              <h1 className="text-2xl font-semibold text-white">
                24/7 Monitoring,
                <br /> Maximum Control
              </h1>
              <p className="text-sm font-medium pr-10 text-white">
                When you install solar with Powerwall, the Tesla app gives you
                control over all the products in your Tesla ecosystem.
              </p>
            </div>
            <Image
              src={"/images/24-7-monitoring-app-desktop.webp"}
              alt="24-7-monitoring-app-desktop"
              width={728}
              height={728}
            />
          </div>
          <div className="flex justify-between mb-20 gap-x-40">
            <div className="flex flex-col gap-y-2">
              <h1 className="text-xl font-semibold text-white">
                Customize Preferences
              </h1>
              <p className="text-[13px] font-medium text-white">
                Decide if you want to optimize your generated energy for
                savings, backup protection—or both.
              </p>
            </div>
            <div className="flex flex-col gap-y-3">
              <h1 className="text-xl font-semibold text-white">
                Monitor Energy Flow
              </h1>
              <p className="text-[13px] font-medium text-white">
                See how much energy your system is generating, how it’s being
                used and how much it’s helping you save.
              </p>
            </div>
            <div className="flex flex-col gap-y-3">
              <h1 className="text-xl font-semibold text-white">
                Get Urgent Alerts
              </h1>
              <p className="text-[13px] font-medium text-white">
                Receive updates on your system status and get alerts about grid
                outages or severe weather.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black pb-20">
        <div className="h-screen bg-image6 bg-cover bg-center flex items-end">
          <div className="max-w-[1100px] mx-auto flex items-center gap-x-24 mb-10">
            <h1 className="text-2xl font-semibold text-white text-nowrap">
              Getting to Power On
            </h1>
            <p className="text-[13px] font-medium text-white">
              With half a million solar installations to date, Tesla takes care
              of all the details for you, from order to power on.{" "}
              <span className="underline underline-offset-4">
                Schedule a virtual consultation
              </span>{" "}
              with a Tesla Advisor to learn more.
            </p>
          </div>
        </div>
      </div>
      <SideImageSlide />
      {/* specs */}
      <div className="bg-black py-[108px]">
        <div className="max-w-[1100px] mx-auto">
          <h1 className="text-2xl font-bold">
            Solar Panel System <span className="font-semibold">Specs</span>
          </h1>
          {/* line 1 */}
          <div className="pt-16 space-y-5">
            <span className="text-lg font-semibold">Design</span>
            <div className="flex gap-x-24 pb-[32px]">
              <div>
                <small className="opacity-50">Dimensions</small>
                <p className="text-sm font-medium">
                  74.4” x 41.2” x 1.57”
                  <br />
                  (including frame)
                </p>
              </div>
              <div>
                <small className="opacity-50">Inverter Dimensions</small>
                <p className="text-sm font-medium">26” x 16” x 6”</p>
              </div>
              <div>
                <small className="opacity-50">Materials</small>
                <p className="text-sm font-medium">
                  Black anodized aluminum <br /> alloy frame, black backsheet,
                  <br /> glass and solar cells
                </p>
              </div>
            </div>
            <div className="w-full h-[0.5px] bg-white opacity-15"></div>
          </div>
          {/* line 2 */}
          <div className="pt-10 space-y-5">
            <span className="text-lg font-semibold">Features</span>
            <div className="flex gap-x-24 pb-[32px]">
              <div>
                <small className="opacity-50">Wattage</small>
                <p className="text-sm font-medium">405 W</p>
              </div>
              <div>
                <small className="opacity-50">Operating Temperature</small>
                <p className="text-sm font-medium">-40°F up to +185°F</p>
              </div>
              <div className="flex gap-x-10">
                <div>
                  <small className="opacity-50">Inverter Power</small>
                  <p className="text-sm font-medium">
                    7.6 kW / 5.7 kW / 5 kW / 3.8 <br /> kW <br /> 98% efficiency
                  </p>
                </div>
                <div>
                  <small className="opacity-50">Certification</small>
                  <p className="text-sm font-medium">
                    IEC / UL 61730, CEC Listed,
                    <br /> IEC 61215
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-[0.5px] bg-white opacity-15 mb-[40px]"></div>
          </div>
          {/* line 3 */}
          <div className="pt-10 space-y-5">
            <span className="text-lg font-semibold">Warranty</span>
            <div className="flex gap-x-24 pb-[32px]">
              <div>
                <small className="opacity-50">Warranty</small>
                <p className="text-sm font-medium">
                  25-year performance <br /> guarantee
                </p>
              </div>
              <div>
                <small className="opacity-50">Inverter Warranty</small>
                <p className="text-sm font-medium">12.5 years</p>
              </div>
            </div>
            <div className="w-full h-[0.5px] bg-white opacity-15 mb-[40px]"></div>
          </div>
          {/* line 4 */}
          <div className="pt-10 flex flex-col gap-y-5">
            <span className="text-lg font-semibold">Other</span>
            <small className="underline underline-offset-4 underline-thickness cursor-pointer">
              Owner&apos;s Manual
            </small>
          </div>
        </div>
      </div>
      <div className="h-screen bg-black">
        <div className="max-w-[1100px] mx-auto h-full flex items-center justify-between gap-x-20">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-2xl font-bold">Install Solar Panels</h1>
            <p className="text-[13px] font-medium text-white opacity-90">
              Design your solar system or schedule a virtual consultation with a
              Tesla Advisor to learn more.
            </p>
            <div className="flex justify-between gap-x-7 pr-3">
              <button className="w-full hover:bg-white border-white hover:text-black border-[3px] py-2 rounded text-[13px] font-semibold transition-colors duration-300 ease-in-out">
                Order Now
              </button>
              <button className="w-full py-2 rounded text-white text-[13px] font-semibold bg-[#202123] hover:bg-[#393C41] transition-colors duration-300 ease-in-out">
                Schedule a Consultation
              </button>
            </div>
          </div>
          <div className="relative">
            <Image
              src={"/images/install-solar-desktop.webp"}
              alt=""
              width={742}
              height={421}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
