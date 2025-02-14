"use client";
import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { motion } from "framer-motion";

interface CardContent {
  title: string;
  description: string;
}

interface Card {
  id: number;
  content: CardContent;
  className: string;
  thumbnail: string;
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
  return (
    <div className="group relative w-full h-full cursor-pointer overflow-hidden">
      <img
        src={card.thumbnail}
        alt={card.content.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold p-6 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 text-center">
          {card.content.title}
        </h3>
      </div>
    </div>
  );
};

export default function CustomLayoutGrid({ cards }: CustomLayoutGridProps) {
  const formattedCards = cards.map(card => ({
    ...card,
    content: <CardContent title={card.content.title} description={card.content.description} />,
    thumbnail: <HoverCard card={card} />
  }));

  return (
    <div className="h-screen py-1 w-full">
      <LayoutGrid cards={formattedCards} />
    </div>
  );
}
