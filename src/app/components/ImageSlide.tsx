"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ImageSlide = () => {
  const images: string[] = [
    "/images/solar-panels-carousel-01-desktop.webp",
    "/images/solar-panels-carousel-02-desktop.webp",
    "/images/solar-panels-carousel-03-desktop.webp",
    "/images/solar-panels-carousel-04-desktop.webp",
  ];

  // Content for each image
  const content = [
    {
      title: "Simple Aesthetic",
      description:
        "Panels and skirts are all black, creating a uniform, monochromatic look.",
    },
    {
      title: "Weather Resistant",
      description:
        "Installation points are sealed to protect against rain, snow and ice.",
    },
    {
      title: "Easy Installation",
      description:
        "Proprietary hardware and streamlined installation help to minimize impact to your roof.",
    },
    {
      title: "Low Profile",
      description:
        "Rail-free mounting keeps panels close to your roof and panel skirts hide hardware and edges from view.",
    },
  ];

  // Step 2: Define the state to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isCycling, setIsCycling] = useState<boolean>(true);

  useEffect(() => {
    if (!isCycling) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [isCycling, images.length]);

  const handleContentClick = (index: number) => {
    setCurrentImageIndex(index); // Set the selected image index
    setIsCycling(true); // Start cycling from the selected image
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-y-8 bg-black">
      <Image
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        width={1130}
        height={480}
        className="rounded"
      />
      <div className="max-w-[1130px] mx-auto flex justify-between gap-7">
        {content.map((section, index) => (
          <div
            key={index}
            onClick={() => handleContentClick(index)} // Clicking the content will update image
            className={`w-full flex flex-col gap-y-3 border-t-2 pt-3 cursor-pointer transition-opacity ${
              currentImageIndex === index ? "opacity-100" : "opacity-50"
            }`} // Active section has full opacity, others have reduced opacity
          >
            <span className="text-lg font-bold text-white">
              {section.title}
            </span>
            <p className="text-[13px] font-medium">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlide;
