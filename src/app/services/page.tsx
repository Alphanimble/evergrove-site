"use client";

import { useState, useEffect } from "react";
import { ServiceContent } from "@/components/ui/ServiceContent";
import { useSearchParams } from "next/navigation";

export default function ServicesPage() {
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState("architecture-design");

  // Update selected service when URL parameter changes
  useEffect(() => {
    const service = searchParams.get("service");
    if (service) {
      setSelectedService(service);
    }
  }, [searchParams]);

  const services = [
    { id: "architecture-design", name: "Architecture Design" },
    { id: "landscape-design", name: "Landscape Design" },
    { id: "construction", name: "Construction" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 pt-10">
          Our Services
        </h1>

        {/* Service Selection */}
        {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`px-6 py-3 rounded-full transition-all ${
                selectedService === service.id
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {service.name}
            </button>
          ))}
        </div> */}

        {/* Service Content */}
        <ServiceContent service={selectedService} />
      </div>
    </div>
  );
}
