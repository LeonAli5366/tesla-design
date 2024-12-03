"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logo, setLogo] = useState("/images/logo-white.png");

  // Detect scroll position and toggle `isScrolled` state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        setLogo("/images/logo-black.png");
      } else {
        setIsScrolled(false);
        setLogo("/images/logo-white.png");
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
      } fixed top-0 h-14 w-full flex items-center justify-between sm:px-16 z-10 transition-all duration-300`}
    >
      <Link href={"/"}>
        <abbr title="Home">
          <Image src={logo} alt="" width={100} height={100} />
        </abbr>
      </Link>
      <ol className="flex items-center justify-center text-sm font-semibold max-sm:hidden">
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
      <div className="flex items-center gap-x-3"></div>
    </header>
  );
}
