"use client";

import { useState, useRef } from "react";

interface HoverVideoPlayerProps {
  videoSrc: string;
  pausedOverlay: React.ReactNode;
  loadingOverlay: React.ReactNode;
}

export const HoverVideoPlayer = ({
  videoSrc,
  pausedOverlay,
  // loadingOverlay,
}: HoverVideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full cursor-pointer"
    >
      <video
        ref={videoRef}
        src={videoSrc}
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full"
      />
      {!isPlaying && pausedOverlay}
      {isPlaying && <div className="absolute inset-0 bg-black/50" />}
    </div>
  );
};
