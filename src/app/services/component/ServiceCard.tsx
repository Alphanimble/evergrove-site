"use client"

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

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
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // Even index (0, 2, 4...) = Image LEFT, Content slides RIGHT
  // Odd index (1, 3, 5...) = Image RIGHT, Content slides LEFT
  const isEvenIndex = index % 2 === 0;

  // Content panel component with proper animations
  const ContentPanel = () => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key={`content-${index}-${isOpen}`}
          initial={{ 
            width: 0, 
            opacity: 0, 
            x: isEvenIndex ? 50 : -50
          }}
          animate={{ 
            width: "720px", 
            opacity: 1, 
            x: 0
          }}
          exit={{ 
            width: 0, 
            opacity: 0, 
            x: isEvenIndex ? 50 : -50
          }}
          transition={{ 
            duration: 0.5, 
            ease: "easeInOut",
            width: { duration: 0.5 },
            opacity: { duration: 0.4 }
          }}
          className="overflow-hidden bg-white border-l border-gray-100 flex-shrink-0"
        >
          <div className="p-8 h-[300px] overflow-y-auto">
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
              
              <div className="space-y-5">
                {detailedContent?.additionalInfo && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">Overview</h4>
                    <p className="text-gray-700 leading-relaxed">
                      {detailedContent.additionalInfo}
                    </p>
                  </div>
                )}
                
                {detailedContent?.keyPoints && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">Key Features</h4>
                    <ul className="space-y-2 text-gray-700">
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
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">Service Highlights</h4>
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
      )}
    </AnimatePresence>
  );

  // Image panel component without hover effects
  const ImagePanel = () => (
    <div 
      className="w-full md:w-1/2 relative h-[300px] cursor-pointer flex-shrink-0 transition-all duration-300"
      onClick={toggleAccordion}
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover"
      />
      
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Expand/Collapse button */}
      <div className={`absolute top-4 ${isEvenIndex ? 'right-4' : 'left-4'} z-10`}>
        <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2 flex items-center space-x-2 shadow-sm">
          <span className="text-sm font-medium text-gray-700">
            {isOpen ? 'Close' : 'View Details'}
          </span>
          {isEvenIndex ? (
            <ChevronRight 
              className={`w-4 h-4 text-gray-700 transition-transform duration-300 ${
                isOpen ? 'rotate-90' : ''
              }`}
            />
          ) : (
            <ChevronLeft 
              className={`w-4 h-4 text-gray-700 transition-transform duration-300 ${
                isOpen ? '-rotate-90' : ''
              }`}
            />
          )}
        </div>
      </div>
      
      {/* Title overlay - always visible but styled professionally */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
        <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
        {!isOpen && (
          <p className="text-gray-200 text-sm leading-relaxed line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <div className={`rounded-xl overflow-hidden bg-white shadow-lg border border-gray-100 mb-8 ${index % 2 === 1 ? 'ml-auto' : ''}`} style={{maxWidth: '100%'}}>
      <div className={`flex ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
        <ImagePanel />
        <ContentPanel />
      </div>
    </div>
  );
}