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
    <Card className="overflow-hidden h-[50vh]">
      <CardContent className="p-0 h-full">
        <div className="flex flex-col md:flex-row h-full">
          <div className="w-full md:w-2/3 relative h-full overflow-hidden">
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
          <div className="w-full md:w-1/3 p-8 flex flex-col justify-center">
            <h3 className="text-3xl mb-4">{title}</h3>
            <p className="text-lg">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
