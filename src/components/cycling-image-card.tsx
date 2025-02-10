"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface CyclingImageCardProps {
  images: string[];
  title: string;
  description: string;
  interval?: number;
}

export function CyclingImageCard({
  images,
  title,
  description,
  interval = 3000,
}: CyclingImageCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <Card>
      <CardContent className="p-0 flex">
        <div className="w-1/2 relative h-[300px]">
          {images.map((src, index) => (
            <Image
              key={src}
              src={src || "/placeholder.svg"}
              alt={`${title} image ${index + 1}`}
              fill
              className={`object-cover transition-opacity duration-500 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        <div className="w-1/2 p-6 flex flex-col justify-center">
          <h3 className="text-2xl mb-2">{title}</h3>
          <p>{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
