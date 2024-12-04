"use client";
import React, { useState } from "react";

const VideoSlide = () => {
  const [videoSrc, setVideoSrc] = useState("/videos/video-slide-1.webm");
  const [isActive, setIsActive] = useState("/videos/video-slide-1.webm");

  // Handle button click to change video source
  const changeVideo = (newVideoSrc: string) => {
    const videoElement = document.getElementById(
      "videoPlayer"
    ) as HTMLVideoElement | null;
    // Check if videoElement is not null before calling methods
    if (videoElement) {
      videoElement.pause();
      videoElement.load();
    }
    setVideoSrc(newVideoSrc);
  };
  const changeActive = (active: string) => {
    setIsActive(active);
  };
  return (
    <div className="w-full sm:h-screen h-[120vh] relative">
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
      <div className="absolute top-28 left-0 w-full h-auto">
        <div className="max-w-[1100px] mx-auto flex flex-col gap-y-5 max-sm:px-5">
          <h1 className="text-2xl font-bold text-white">
            Power a Sustainable Home
          </h1>
          <p className="text-[13px] font-medium opacity-90 text-white">
            Generate, use, store and charge—all with one fully integrated clean
            energy ecosystem by Tesla. All of our{" "}
            <br className="sm:block hidden" /> products work together
            seamlessly, optimizing your energy usage and savings while
            minimizing your impact <br className="sm:block hidden" /> on the
            environment.
          </p>
        </div>
      </div>
      <div className="absolute sm:bottom-20 bottom-10 left-0 w-full max-sm:px-5 z-10">
        <div className="max-w-[700px] mx-auto space-y-2">
          <div className="flex items-center gap-x-2 mb-4">
            <button
              onClick={() => {
                changeVideo("/videos/video-slide-1.webm");
                changeActive("/videos/video-slide-1.webm");
              }}
              className={`size-3 rounded-full transition-all duration-500 ${
                isActive === "/videos/video-slide-1.webm"
                  ? "bg-white"
                  : "bg-[#5C5E62]"
              }`}
            ></button>
            <button
              onClick={() => {
                changeVideo("/videos/video-slide-2.webm");
                changeActive("/videos/video-slide-2.webm");
              }}
              className={`size-3 rounded-full transition-all duration-500 ${
                isActive === "/videos/video-slide-2.webm"
                  ? "bg-white"
                  : "bg-[#5C5E62]"
              }`}
            ></button>
            <button
              onClick={() => {
                changeVideo("/videos/video-slide-3.webm");
                changeActive("/videos/video-slide-3.webm");
              }}
              className={`size-3 rounded-full transition-all duration-500 ${
                isActive === "/videos/video-slide-3.webm"
                  ? "bg-white"
                  : "bg-[#5C5E62]"
              }`}
            ></button>
            <button
              onClick={() => {
                changeVideo("/videos/video-slide-4.webm");
                changeActive("/videos/video-slide-4.webm");
              }}
              className={`size-3 rounded-full transition-all duration-500 ${
                isActive === "/videos/video-slide-4.webm"
                  ? "bg-white"
                  : "bg-[#5C5E62]"
              }`}
            ></button>
          </div>
          {/* tile & des 1 */}
          <div
            className={`space-y-2 ${
              isActive === "/videos/video-slide-1.webm" ? "block" : "hidden"
            }`}
          >
            <h1 className="sm:text-lg sm:font-bold font-semibold text-white">
              Generate Energy
            </h1>
            <p className="text-[13px] font-medium text-white">
              Generate your own clean energy whenever the sun is shining with
              Tesla solar panels.
            </p>
          </div>
          {/* tile & des 2 */}
          <div
            className={`space-y-2 ${
              isActive === "/videos/video-slide-2.webm" ? "block" : "hidden"
            }`}
          >
            <h1 className="sm:text-lg sm:font-bold font-semibold text-white">
              Use Energy
            </h1>
            <p className="text-[13px] font-medium text-white">
              Power everything from your TV to the internet with solar energy.
            </p>
          </div>
          {/* tile & des 3 */}
          <div
            className={`space-y-2 ${
              isActive === "/videos/video-slide-3.webm" ? "block" : "hidden"
            }`}
          >
            <h1 className="sm:text-lg sm:font-bold font-semibold text-white">
              Store Any Extra
            </h1>
            <p className="text-[13px] font-medium text-white">
              Save excess solar energy in Powerwall for use during storms and
              outages, or when utility prices are high.
            </p>
          </div>
          {/* tile & des 4 */}
          <div
            className={`space-y-2 ${
              isActive === "/videos/video-slide-4.webm" ? "block" : "hidden"
            }`}
          >
            <h1 className="sm:text-lg sm:font-bold font-semibold text-white">
              Charge Your EV
            </h1>
            <p className="text-[13px] font-medium text-white">
              Charge your electric vehicle with clean energy at home using
              Mobile Connector or Wall Connector.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-[70%] left-0 right-0 bottom-0 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default VideoSlide;
