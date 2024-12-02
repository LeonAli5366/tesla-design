"use client";
import { useEffect, useState } from "react";
import { BsQuestionCircle } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll position and toggle `isScrolled` state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`${
        isScrolled ? "bg-white text-black shadow" : "bg-transparent text-white"
      } fixed top-0 h-14 w-full flex items-center justify-between px-16 z-10 transition-all duration-300`}
    >
      <h1 className=""></h1>
      <ol className="flex items-center justify-center text-sm font-semibold">
        <li>
          <button className="transition-all duration-300 rounded py-1 px-5 hover:backdrop-blur-lg">
            Vehicles
          </button>
        </li>
        <li>
          <button className="transition-all duration-300 rounded py-1 px-5 hover:backdrop-blur-lg">
            Energy
          </button>
        </li>
        <li>
          <button className="transition-all duration-300 rounded py-1 px-5 hover:backdrop-blur-lg">
            Charging
          </button>
        </li>
        <li>
          <button className="transition-all duration-300 rounded py-1 px-5 hover:backdrop-blur-lg">
            Discover
          </button>
        </li>
        <li>
          <button className="transition-all duration-300 rounded py-1 px-5 hover:backdrop-blur-lg">
            Shop
          </button>
        </li>
        <li>
          <button className="transition-all duration-300 rounded py-1 px-5 hover:backdrop-blur-lg">
            We, Robot
          </button>
        </li>
      </ol>
      <div className="flex items-center gap-x-3">
        <BsQuestionCircle size={20} />
        <CiGlobe size={24} />
        <RxAvatar size={24} />
      </div>
    </header>
  );
}
