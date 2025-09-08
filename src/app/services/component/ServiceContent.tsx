import { ServiceCard } from "@/app/services/component/ServiceCard";

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
        imageUrl: "/Renders/Entrance_Arch/Ernika/1.png",
      },
      {
        title: "Interior Planning",
        description:
          "Our interior planning services focus on creating functional and aesthetically pleasing spaces that reflect your unique style.",
        imageUrl: "/Renders/Entrance_Arch/Eternia/1.jpg",
      },
    ],
    "landscape-design": [
      {
        title: "Garden Design",
        description:
          "Transform your outdoor space into a beautiful and functional garden with our expert landscape design services.",
        imageUrl: "/Renders/Clubhouse/Ernika/ernika_1.png",
      },
      {
        title: "Sustainable Landscaping",
        description:
          "We specialize in creating environmentally friendly landscapes that conserve water and support local ecosystems.",
        imageUrl: "/Renders/Clubhouse/Eternia/eternia_1.png",
      },
    ],
    infrastructure: [
      {
        title: "Urban Infrastructure Planning",
        description:
          "Comprehensive urban infrastructure solutions including roads, bridges, and public facilities designed for long-term sustainability.",
        imageUrl: "/Renders/Master plan/Eternia/Master plan/1.jpg",
      },
      {
        title: "Smart City Development",
        description:
          "Integrating modern technology with infrastructure to create efficient, sustainable, and livable urban environments.",
        imageUrl: "/Renders/Entrance_Arch/Etasha/1.jpeg",
      },
    ],
    "building-services": [
      {
        title: "Water Resource Management",
        description:
          "Advanced water conservation and management systems, including rainwater harvesting and sustainable drainage solutions.",
        imageUrl: "/Renders/water_tank/1.jpeg",
      },
      {
        title: "MEP Systems",
        description:
          "State-of-the-art mechanical, electrical, and plumbing systems designed for optimal efficiency and sustainability.",
        imageUrl: "/Renders/Clubhouse/Etasha/Renders/entry.png",
      },
      {
        title: "Green Building Solutions",
        description:
          "Innovative solutions for energy efficiency and environmental sustainability in building services.",
        imageUrl: "/Renders/Clubhouse/Etasha/Renders/a.png",
      },
    ],
    execution: [
      {
        title: "Project Management",
        description:
          "End-to-end project execution with strict quality control and timeline management to ensure successful delivery.",
        imageUrl: "/Renders/Entrance_Arch/Ernika/2.png",
      },
      {
        title: "Construction Supervision",
        description:
          "Expert supervision of construction activities ensuring adherence to design specifications and quality standards.",
        imageUrl: "/Renders/Entrance_Arch/Eternia/2.jpg",
      },
      {
        title: "Quality Assurance",
        description:
          "Rigorous quality control processes and documentation to maintain the highest standards of construction.",
        imageUrl: "/Renders/Entrance_Arch/Eternia/3.jpg",
      },
    ],
  };

  const serviceContent = contents[service as keyof typeof contents] || [];

  return (
    <div className="container mx-auto px-4 py-8">
      {serviceContent.map((item) => (
        <ServiceCard
          key={item.title + item.imageUrl}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
}
