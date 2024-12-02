"use client";
import React, { useState } from "react";

const VideoSlide = () => {
  const [videoSrc, setVideoSrc] = useState("/videos/video-slide-1.webm");

  // Handle button click to change video source
  const changeVideo = (newVideoSrc: string) => {
    const videoElement = document.getElementById("videoPlayer");
    videoElement.pause();
    videoElement.load();
    setVideoSrc(newVideoSrc);
  };
  return (
    <div className="w-full h-screen relative">
      <video
        id="videoPlayer"
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src={videoSrc} type="video/webm" />
      </video>
      <div className="absolute top-0 left-0 right-0 bottom-[70%] bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute top-[13%] left-[21%] right-[40%] bottom-3/4 space-y-5">
        <h1 className="text-2xl font-bold text-white">
          Power a Sustainable Home
        </h1>
        <p className="text-sm font-medium opacity-90">
          Generate, use, store and charge—all with one fully integrated clean
          energy ecosystem by Tesla. All of our products work together
          seamlessly, optimizing your energy usage and savings while minimizing
          your impact on the environment.
        </p>
      </div>
      <div className="absolute bottom-20 left-[33%] space-y-1 z-10">
        <div className="flex items-center gap-x-2 mb-4">
          <button
            onClick={() => changeVideo("/videos/video-slide-1.webm")}
            className="size-3 rounded-full bg-[#5C5E62]"
          ></button>
          <button
            onClick={() => changeVideo("/videos/video-slide-2.webm")}
            className="size-3 rounded-full bg-[#5C5E62]"
          ></button>
          <button
            onClick={() => changeVideo("/videos/video-slide-3.webm")}
            className="size-3 rounded-full bg-[#5C5E62]"
          ></button>
          <button
            onClick={() => changeVideo("/videos/video-slide-4.webm")}
            className="size-3 rounded-full bg-[#5C5E62]"
          ></button>
        </div>
        <h1 className="text-lg font-bold text-white">Generate Energy</h1>
        <p className="text-sm font-medium">
          Generate your own clean energy whenever the sun is shining with Tesla
          solar panels.
        </p>
      </div>
      <div className="absolute top-[70%] left-0 right-0 bottom-0 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default VideoSlide;
