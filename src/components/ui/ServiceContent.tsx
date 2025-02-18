import { ServiceCard } from "./ServiceCard";

interface ServiceContentProps {
  service: string;
}

export function ServiceContent({ service }: ServiceContentProps) {
  const contents = {
    "architecture-design": [
      {
        title: "Sustainable Architecture",
        description:
          "We create eco-friendly and sustainable architectural designs that harmonize with the environment while meeting modern living standards.",
        imageUrl: "/images/architecture-1.jpg",
      },
      {
        title: "Interior Planning",
        description:
          "Our interior planning services focus on creating functional and aesthetically pleasing spaces that reflect your unique style.",
        imageUrl: "/images/architecture-2.jpg",
      },
    ],
    "landscape-design": [
      {
        title: "Garden Design",
        description:
          "Transform your outdoor space into a beautiful and functional garden with our expert landscape design services.",
        imageUrl: "/images/landscape-1.jpg",
      },
      {
        title: "Sustainable Landscaping",
        description:
          "We specialize in creating environmentally friendly landscapes that conserve water and support local ecosystems.",
        imageUrl: "/images/landscape-2.jpg",
      },
    ],
    infrastructure: [
      {
        title: "Urban Infrastructure Planning",
        description:
          "Comprehensive urban infrastructure solutions including roads, bridges, and public facilities designed for long-term sustainability.",
        imageUrl: "/images/infra-1.jpg",
      },
      {
        title: "Smart City Development",
        description:
          "Integrating modern technology with infrastructure to create efficient, sustainable, and livable urban environments.",
        imageUrl: "/images/infra-2.jpg",
      },
    ],
    "building-services": [
      {
        title: "Water Resource Management",
        description:
          "Advanced water conservation and management systems, including rainwater harvesting and sustainable drainage solutions.",
        imageUrl: "/images/water-1.jpg",
      },
      {
        title: "MEP Systems",
        description:
          "State-of-the-art mechanical, electrical, and plumbing systems designed for optimal efficiency and sustainability.",
        imageUrl: "/images/mep-1.jpg",
      },
      {
        title: "Green Building Solutions",
        description:
          "Innovative solutions for energy efficiency and environmental sustainability in building services.",
        imageUrl: "/images/green-1.jpg",
      },
    ],
    execution: [
      {
        title: "Project Management",
        description:
          "End-to-end project execution with strict quality control and timeline management to ensure successful delivery.",
        imageUrl: "/images/execution-1.jpg",
      },
      {
        title: "Construction Supervision",
        description:
          "Expert supervision of construction activities ensuring adherence to design specifications and quality standards.",
        imageUrl: "/images/execution-2.jpg",
      },
      {
        title: "Quality Assurance",
        description:
          "Rigorous quality control processes and documentation to maintain the highest standards of construction.",
        imageUrl: "/images/execution-3.jpg",
      },
    ],
  };

  const serviceContent = contents[service as keyof typeof contents] || [];

  return (
    <div className="container mx-auto px-4 py-8">
      {serviceContent.map((item, index) => (
        <ServiceCard
          key={index}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          isReversed={index % 2 !== 0}
        />
      ))}
    </div>
  );
}
