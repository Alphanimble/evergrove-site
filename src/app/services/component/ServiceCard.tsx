"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  index?: number;
  detailedContent?: {
    keyPoints?: string[];
    highlights?: string[];
    additionalInfo?: string;
  };
}

export function ServiceCard({
  title,
  description,
  imageUrl,
  index = 0,
  detailedContent,
}: ServiceCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Even index (0, 2, 4...) = Image LEFT, Content RIGHT
  // Odd index (1, 3, 5...) = Image RIGHT, Content LEFT
  const isEvenIndex = index % 2 === 0;

  // Content panel component
  const ContentPanel = () => (
    <div className="w-full md:w-1/2">
      <motion.div
        key={`content-${index}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-card text-card-foreground border border-border/30 rounded-lg shadow-sm h-full"
      >
        <div className="p-8 h-[300px] overflow-y-auto">
          <div className="space-y-6">
            <div className="border-b border-border/20 pb-4">
              <h3 className="text-2xl font-semibold text-card-foreground mb-3">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
            </div>
            
            <div className="space-y-5">
              {detailedContent?.additionalInfo && (
                <div>
                  <h4 className="font-semibold text-card-foreground mb-3 text-lg">Overview</h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {detailedContent.additionalInfo}
                  </p>
                </div>
              )}
              
              {detailedContent?.keyPoints && (
                <div>
                  <h4 className="font-semibold text-card-foreground mb-3 text-lg">Key Features</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    {detailedContent.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {detailedContent?.highlights && (
                <div>
                  <h4 className="font-semibold text-card-foreground mb-3 text-lg">Service Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {detailedContent.highlights.map((highlight, idx) => (
                      <span 
                        key={idx}
                        className="bg-blue-50 text-blue-700 px-3 py-2 rounded-md text-sm font-medium border border-blue-100"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-gray-100">
              <div className="flex flex-wrap gap-3">
                <span className="bg-green-50 text-green-700 px-3 py-2 rounded-md text-sm font-medium border border-green-100">
                  ✓ Professional Service
                </span>
                <span className="bg-blue-50 text-blue-700 px-3 py-2 rounded-md text-sm font-medium border border-blue-100">
                  ✓ Quality Assured
                </span>
                <span className="bg-purple-50 text-purple-700 px-3 py-2 rounded-md text-sm font-medium border border-purple-100">
                  ✓ Expert Team
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  // Image panel component
  const ImagePanel = () => (
    <div className="w-full md:w-1/2 relative h-[300px] flex-shrink-0">
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
          <div className="relative h-full cursor-pointer group">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            
            {/* Subtle overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            
            {/* Title overlay - always visible */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
              <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
              <p className="text-gray-200 text-sm leading-relaxed line-clamp-2">
                {description}
              </p>
            </div>

            {/* Click hint overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>
        </DialogTrigger>

        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-transparent border-none shadow-none">
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={imageUrl}
              alt={title}
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain rounded-lg"
              style={{
                width: 'auto',
                height: 'auto',
                maxWidth: '90vw',
                maxHeight: '90vh'
              }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );

  return (
    <div className={`rounded-xl overflow-hidden bg-card/90 backdrop-blur-sm shadow-xl ring-1 ring-gray-100 dark:ring-white/5 mb-8 ${index % 2 === 1 ? 'ml-auto' : ''}`} style={{maxWidth: '100%'}}>
      <div className={`flex ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
        <ImagePanel />
        <ContentPanel />
      </div>
    </div>
  );
}