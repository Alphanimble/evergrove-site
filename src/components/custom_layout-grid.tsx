"use client";
import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import Image from "next/image";
// import { motion } from "framer-motion";

interface CardContent {
  title: string;
  description: string;
  subPoints?: string[];
}

interface Card {
  id: number;
  content: CardContent;
  className: string;
  thumbnail: string;
}

interface FormattedCard {
  id: number;
  content: React.ReactNode;
  className: string;
  thumbnail: React.ReactNode;
}

interface CustomLayoutGridProps {
  cards: Card[];
}

const CardContent = ({ title, description }: CardContent) => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">{title}</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {description}
      </p>
    </div>
  );
};

const HoverCard = ({ card }: { card: Card }) => {
  const subPointsCount = card.content.subPoints?.length || 0;
  
  // Determine grid columns based on number of subpoints
  const gridColumns = 
    subPointsCount <= 2 ? 'grid-cols-1' :
    subPointsCount <= 4 ? 'grid-cols-2' :
    subPointsCount <= 6 ? 'grid-cols-3' : 'grid-cols-2';

  return (
    <div className="group relative w-full h-full cursor-pointer overflow-hidden">
      <Image
        src={card.thumbnail}
        alt={card.content.title}
        fill
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {/* Title that disappears on hover */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4">
          {card.content.title}
        </h3>
      </div>
      {/* Hover Content */}
      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className={`grid ${gridColumns} gap-4 w-full h-full p-6`}>
          {card.content.subPoints?.map((point, index) => (
            <div 
              key={index}
              className="bg-white/10 rounded-lg backdrop-blur-sm flex items-center justify-center p-4"
            >
              <p className="text-white text-lg md:text-2xl lg:text-4xl text-center font-bold">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function CustomLayoutGrid({ cards }: CustomLayoutGridProps) {
  const formattedCards: FormattedCard[] = cards.map((card) => ({
    ...card,
    content: (
      <CardContent
        title={card.content.title}
        description={card.content.description}
      />
    ),
    thumbnail: <HoverCard card={card} />,
  }));

  return (
    <div className="relative">
      <div className="h-screen w-full max-w-[1920px] mx-auto">
        <LayoutGrid cards={formattedCards} />
      </div>
    </div>
  );
}
