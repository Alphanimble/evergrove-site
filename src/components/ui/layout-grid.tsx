"use client";
// import React, { useState} from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  content: React.ReactNode;
  className: string;
  thumbnail: React.ReactNode;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  return (
    <div className="w-full h-full p-4 md:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-3 max-w-[1920px] mx-auto gap-4 md:gap-6 lg:gap-8">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <div className={cn(
            card.className,
            "relative overflow-hidden bg-white rounded-xl h-full w-full"
          )}>
            <ImageComponent card={card} />
          </div>
        </div>
      ))}
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.div
      layoutId={`image-${card.id}-image`}
      className={cn(
        "absolute inset-0 h-full w-full transition duration-200"
      )}
    >
      {card.thumbnail}
    </motion.div>
  );
};
