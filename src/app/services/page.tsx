"use client";

import { useState, useEffect, Suspense } from "react";
import { ServiceContent } from "@/components/ui/ServiceContent";
import { useSearchParams } from "next/navigation";
// import Image from "next/image";

function ServicesContent() {
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
    { id: "infrastructure", name: "Infrastructure" },
    { id: "building-services", name: "Building Services" },
    { id: "execution", name: "Execution" },
  ];

  return (
    <div className="relative min-h-screen bg-secondary/80 dark:bg-primary/80">
      {/* Content */}
      <div className="relative">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8 pt-10 text-primary dark:text-white">
            Our Services
          </h1>

          {/* Service Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 font-bold">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  selectedService === service.id
                    ? "bg-primary text-white shadow-lg scale-120"
                    : "bg-white text-primary dark:text-black hover:bg-white/30"
                }`}
              >
                {service.name}
              </button>
            ))}
          </div>

          {/* Service Content */}
          <div className="bg-secondary dark:bg-primary dark:text-white rounded-xl p-6 shadow-lg">
            <ServiceContent service={selectedService} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServicesContent />
    </Suspense>
  );
}
