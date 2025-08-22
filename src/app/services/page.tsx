"use client"

import { useState, useEffect, Suspense } from "react"
import { ServiceContent } from "@/app/services/component/ServiceContent"
import { ServiceCard } from "@/app/services/component/ServiceCard"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"

function ServicesContent() {
  const searchParams = useSearchParams()
  const [selectedService, setSelectedService] = useState("architecture-design")

  useEffect(() => {
    const service = searchParams.get("service")
    if (service) {
      setSelectedService(service)
    }
  }, [searchParams])

  const services = [
    { id: "architecture-design", name: "Architecture & Design" },
    { id: "structural-design", name: "Structural Design" },
    { id: "landscape-design", name: "Landscape Design" },
    { id: "infrastructure", name: "Infrastructure" },
    { id: "building-services", name: "Building Services" },
    { id: "execution", name: "Project Execution" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image src="/team.jpg" alt="Our services" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive architectural solutions tailored to your vision and needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Service Selection */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                  selectedService === service.id
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "bg-secondary hover:bg-secondary/80 text-foreground hover:scale-105"
                }`}
              >
                {service.name}
              </button>
            ))}
          </motion.div>

          {/* Service Content */}
          <motion.div
            key={selectedService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl shadow-lg overflow-hidden"
          >
            {selectedService === "architecture-design" ? (
              <div className="container mx-auto px-4 py-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Architecture & Interior Design</h2>
                  <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                    We offer innovative and sustainable architecture design services tailored to plotted
                    developments and buildings, creating spaces that are both functional and visually appealing.
                  </p>
                </div>

                {/* Services Grid */}
                <div className="space-y-8">
                  <ServiceCard
                    title="Conceptual Design and Master Planning"
                    description="We create compelling design concepts and master plans for plotted developments, ensuring that the layout, spatial distribution, and design elements align with the client's vision and the surrounding environment."
                    imageUrl="/Renders/Master_plan/Ernika/Masterplan and parks detail with pictures (2).pdf"
                    
                    index={0}
                    detailedContent={{
                      additionalInfo: "Our conceptual design process begins with understanding your vision and site characteristics. We develop comprehensive master plans that optimize land use, integrate infrastructure, and create sustainable communities.",
                      keyPoints: [
                        "Site analysis and feasibility studies",
                        "Zoning compliance and regulatory coordination",
                        "Community layout optimization",
                        "Infrastructure integration planning",
                        "Environmental impact assessment",
                        "Future expansion considerations"
                      ],
                      highlights: ["Master Planning", "Site Analysis", "Zoning Compliance", "Sustainability"]
                    }}
                  />

                  <ServiceCard
                    title="Residential and Commercial Architecture"
                    description="We design residential homes, townhouses, apartments, and commercial buildings, blending aesthetics with functionality. Each design is thoughtfully crafted to enhance user experience while optimizing space and light."
                    imageUrl="/Renders/Entrance_Arch/Ernika/1.png"
                    
                    index={1}
                    detailedContent={{
                      additionalInfo: "Our architectural designs focus on creating spaces that are both beautiful and functional. We consider natural lighting, ventilation, space optimization, and sustainable materials in every project.",
                      keyPoints: [
                        "Multi-story buildings and villas",
                        "Townhouses and apartment complexes",
                        "Commercial and mixed-use buildings",
                        "Space optimization techniques",
                        "Natural lighting integration",
                        "Sustainable material selection"
                      ],
                      highlights: ["Residential Design", "Commercial Architecture", "Space Optimization", "Sustainability"]
                    }}
                  />

                  <ServiceCard
                    title="Interior Design and Spatial Planning"
                    description="We offer interior design services that complement the architectural design, focusing on layouts, materials, color schemes, and finishes to create functional, comfortable, and visually harmonious interiors."
                    imageUrl="/Renders/Clubhouse/Ernika/ernika_1.png"
                    
                    index={2}
                    detailedContent={{
                      additionalInfo: "Our interior design approach creates cohesive spaces that reflect your lifestyle and functional needs. We carefully select materials, colors, and finishes that enhance the architectural design.",
                      keyPoints: [
                        "Space planning and layout optimization",
                        "Material and finish selection",
                        "Color scheme development",
                        "Furniture and fixture coordination",
                        "Lighting design integration",
                        "Accessibility considerations"
                      ],
                      highlights: ["Interior Planning", "Material Selection", "Color Design", "Functionality"]
                    }}
                  />

                  <ServiceCard
                    title="Facade and Elevation Design"
                    description="Our expertise includes designing striking facades and elevations, considering both aesthetics and environmental factors, to create visually dynamic buildings that blend with their surroundings."
                    imageUrl="/Renders/Entrance_Arch/Eternia/1.jpg"
                    
                    index={3}
                    detailedContent={{
                      additionalInfo: "We create facades that are not only visually striking but also environmentally responsive. Our designs consider climate, orientation, and surrounding context to create harmonious buildings.",
                      keyPoints: [
                        "Climate-responsive facade design",
                        "Material durability and maintenance",
                        "Energy efficiency considerations",
                        "Architectural character development",
                        "Integration with landscape",
                        "Cultural and contextual sensitivity"
                      ],
                      highlights: ["Facade Design", "Environmental Response", "Aesthetic Appeal", "Durability"]
                    }}
                  />

                  <ServiceCard
                    title="3D Visualization and Renderings"
                    description="We provide realistic 3D models and renderings to help clients visualize the design concepts before construction, ensuring clarity in the design process and facilitating better decision-making."
                    imageUrl="/Renders/Clubhouse/Eternia/eternia_1.png"
                    
                    index={4}
                    detailedContent={{
                      additionalInfo: "Our advanced 3D visualization services bring your project to life before construction begins. We create photorealistic renderings, virtual tours, and detailed models for better project understanding.",
                      keyPoints: [
                        "Photorealistic exterior renderings",
                        "Interior visualization and walkthroughs",
                        "Virtual reality experiences",
                        "Animation and fly-through videos",
                        "Material and lighting studies",
                        "Design iteration and refinement"
                      ],
                      highlights: ["3D Modeling", "Photorealistic Renders", "Virtual Tours", "Design Clarity"]
                    }}
                  />

                  <ServiceCard
                    title="Compliance with Local Codes and Regulations"
                    description="We ensure that all architectural designs meet local zoning regulations, building codes, and safety standards. We also handle the necessary approvals and permits for the project."
                    imageUrl="/Renders/Entrance_Arch/Etasha/1.jpeg"
                    
                    index={5}
                    detailedContent={{
                      additionalInfo: "Our team stays current with all local building codes, zoning requirements, and safety regulations. We handle the entire approval process to ensure your project meets all legal requirements.",
                      keyPoints: [
                        "Building code compliance review",
                        "Zoning regulation adherence",
                        "Safety standard implementation",
                        "Permit application and processing",
                        "Regulatory approval coordination",
                        "Documentation and record keeping"
                      ],
                      highlights: ["Code Compliance", "Permit Processing", "Safety Standards", "Regulatory Approval"]
                    }}
                  />
                </div>
              </div>
            ) : selectedService === "structural-design" ? (
              <div className="container mx-auto px-4 py-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Structural Design</h2>
                  <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                    We offer comprehensive structural design services tailored to both plotted developments and
                    buildings, ensuring safety, durability, and aesthetic appeal.
                  </p>
                </div>

                {/* Services Grid */}
                <div className="space-y-8">
                  <ServiceCard
                    title="Residential and Commercial Buildings"
                    description="Design of safe, efficient, and cost-effective structural systems for both residential and commercial properties, including multi-story buildings, villas, townhouses, Entrance Arches, and Water tanks."
                    imageUrl="/Renders/Entrance_Arch/Ernika/2.png"
                    index={0}
                  />

                  <ServiceCard
                    title="Structural Systems Integration"
                    description="Efficient integration of structural systems with mechanical, electrical, and plumbing systems to ensure a cohesive design that supports the functionality of the building."
                    imageUrl="/Renders/water_tank/1.jpeg"
                    index={1}
                  />

                  <ServiceCard
                    title="Site-Specific Solutions"
                    description="Customized design solutions based on the specific requirements of the plot, including addressing unique site challenges such as varying topography, seismic zones, and load-bearing capacities."
                    imageUrl="/Renders/Entrance_Arch/Eternia/2.jpg"
                    index={2}
                  />

                  <ServiceCard
                    title="Construction Detailing"
                    description="Preparation of detailed construction drawings, specifications, and structural calculations to guide the construction process and ensure compliance with all building codes."
                    imageUrl="/Renders/Entrance_Arch/Etasha/2.jpeg"
                    index={3}
                  />
                </div>
              </div>
            ) : selectedService === "landscape-design" ? (
              <div className="container mx-auto px-4 py-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Landscape Design</h2>
                  <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                    We offer expert landscape design solutions for plotted developments and residential projects.
                    Our services are tailored to enhance outdoor spaces, blending aesthetics with functionality.
                    We handle every aspect of landscape planning, from conceptual design to final implementation.
                  </p>
                </div>

                {/* Services Grid */}
                <div className="space-y-8">
                  <ServiceCard
                    title="Custom Landscape Planning"
                    description="Designing functional and visually appealing layouts that complement the natural environment and architecture of the development."
                    imageUrl="/Renders/Clubhouse/Ernika/ernika_2.png"
                    index={0}
                  />

                  <ServiceCard
                    title="Hardscape Design"
                    description="Creating durable outdoor elements such as pathways, patios, retaining walls, and fences."
                    imageUrl="/Renders/Entrance_Arch/Eternia/3.jpg"
                    index={1}
                  />

                  <ServiceCard
                    title="Softscape Design"
                    description="Selecting and arranging plants, trees, shrubs, and turf to enhance the beauty and sustainability of outdoor spaces."
                    imageUrl="/Renders/Clubhouse/Eternia/eternia_2.png"
                    index={2}
                  />

                  <ServiceCard
                    title="Irrigation Systems"
                    description="Designing efficient irrigation systems to ensure the long-term health and maintenance of landscapes."
                    imageUrl="/Renders/water_tank/1.jpeg"
                    index={3}
                  />

                  <ServiceCard
                    title="Lighting Design"
                    description="Adding strategic lighting to highlight key features, improve safety, and create ambiance in outdoor spaces."
                    imageUrl="/Renders/Clubhouse/Ernika/ernika_3.png"
                    index={4}
                  />

                  <ServiceCard
                    title="Sustainable Practices"
                    description="Integrating eco-friendly practices like water conservation, native plant species, and energy-efficient lighting to create sustainable landscapes."
                    imageUrl="/Renders/Clubhouse/Eternia/eternia_3.png"
                    index={5}
                  />

                  <ServiceCard
                    title="Maintenance Plans"
                    description="Offering tailored maintenance schedules to keep landscapes vibrant and healthy over time."
                    imageUrl="/Renders/Clubhouse/Ernika/ernika_4.png"
                    index={6}
                  />
                </div>
              </div>
            ) : selectedService === "infrastructure" ? (
              <div className="container mx-auto px-4 py-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Infrastructure Engineering</h2>
                  <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                    We offer comprehensive planning and engineering services across all aspects of infrastructure engineering. 
                    Leveraging our expertise in planning and design, we manage projects from feasibility studies to concept 
                    development, and both preliminary and final design stages. Our collaborative approach is enhanced by advanced 
                    3D modeling techniques, such as Building Information Modeling (BIM), which enables design teams to collaborate 
                    using an intelligent virtual prototype of the project.
                  </p>
                </div>

                {/* Services Grid */}
                <div className="space-y-8">
                  <ServiceCard
                    title="Master Plan Development"
                    description="Creating master plan designs for plotted developments is a crucial step in ensuring a well-organized, functional, and aesthetically pleasing community. We carefully consider the unique characteristics of the site, local regulations, and the future needs of residents and businesses. Our team works collaboratively to develop a strategic layout that optimizes land use, enhances accessibility, and integrates essential infrastructure such as roads, utilities, and green spaces."
                    imageUrl="/Renders/Master_plan/Eternia/Master_plan/1.jpg"
                    index={0}
                  />

                  <ServiceCard
                    title="Earthwork and Site Grading"
                    description="We have contributed to a wide range of development projects, including residential, and mixed-use developments. Our scope of work includes utilizing raw survey data to assess existing ground conditions, evaluating architectural layouts for engineering feasibility, and creating site grading plans. We also calculate cut/fill quantities and propose modifications to optimize earthwork efficiency."
                    imageUrl="/Renders/Entrance_Arch/Ernika/3.png"
                    index={1}
                  />

                  <ServiceCard
                    title="Roadway Engineering"
                    description="We have designed both major and minor roads, as well as driveways, for a variety of developments. Our road design process includes planning the horizontal layout, designing horizontal and vertical grades, and creating curves, alignments, and profiles to ensure optimal functionality and safety."
                    imageUrl="/Renders/Entrance_Arch/Eternia/4.jpg"
                    index={2}
                  />

                  <ServiceCard
                    title="Traffic Engineering"
                    description="We conduct traffic engineering analysis to design roads and intersections that facilitate smooth vehicular movement within a development. Our services include analyzing and designing master plans to accommodate transit vehicles, service vehicles, and pedestrians. We also implement traffic calming measures for residential neighbourhoods to enhance safety and comfort."
                    imageUrl="/Renders/Clubhouse/Etasha/Renders/1.2.png"
                    index={3}
                  />

                  <ServiceCard
                    title="Public Health Engineering"
                    description="We specialize in designing water and sewer distribution/collection networks for mixed-use developments and integrated townships. Our expertise also extends to storm drain system design, based on catchment area evaluations for roads and open spaces. We create comprehensive site utility plans, sanitary sewer, and storm drain layouts."
                    imageUrl="/Renders/water_tank/1.jpeg"
                    index={4}
                  />

                  <ServiceCard
                    title="Electrical Engineering"
                    description="Our services includes demand assessments, supply and system resilience, utilities consultancy, and sustainable electrical engineering design. Our electrical experts collaborate closely with mechanical and public health engineers to deliver comprehensive building services solutions. Going beyond traditional areas of overlap, our electrical engineers play a creative role, actively contributing to the design process."
                    imageUrl="/Renders/Clubhouse/Ernika/ernika_5.png"
                    index={5}
                  />
                </div>
              </div>
            ) : selectedService === "building-services" ? (
              <div className="container mx-auto px-4 py-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Building Services & Water Resource Management</h2>
                  <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                    We provide effective design services for utilities including electric, HVAC, gas, water, sewer,
                    telephone, fiber optic, and cable lines. We also provide water resource services. By leveraging
                    cutting-edge technologies and a creative problem-solving approach, we deliver practical, cost-
                    efficient solutions to the challenges in the ever-evolving utilities industry.
                  </p>
                </div>

                {/* Services Grid */}
                <div className="space-y-8">
                  <ServiceCard
                    title="Plumbing"
                    description="We provide efficient plumbing solutions, including water supply, drainage, and sewage systems, ensuring reliability and compliance with all standards while promoting water conservation."
                    imageUrl="/Renders/water_tank/1.jpeg"
                    index={0}
                  />

                  <ServiceCard
                    title="Fire Fighting"
                    description="Our fire fighting services include the design and installation of fire detection, suppression, and emergency systems, ensuring complete safety and compliance with fire safety regulations."
                    imageUrl="/Renders/Clubhouse/Ernika/ernika_6.png"
                    index={1}
                  />

                  <ServiceCard
                    title="Electrical"
                    description="We offer safe and energy-efficient electrical systems, including power distribution, lighting, and backup solutions, ensuring all electrical needs are met with reliability and safety."
                    imageUrl="/Renders/Clubhouse/Etasha/Renders/a.png"
                    index={2}
                  />

                  <ServiceCard
                    title="Mechanical"
                    description="Our mechanical services include HVAC design, piping, and ventilation systems, focusing on energy efficiency and long-term comfort for residential and commercial spaces."
                    imageUrl="/Renders/Clubhouse/Eternia/eternia_1.png"
                    index={3}
                  />

                  <ServiceCard
                    title="Security"
                    description="We provide integrated security systems, including CCTV, access control, and alarms, to protect your property and enhance safety across all building types."
                    imageUrl="/Renders/Entrance_Arch/Etasha/3.jpeg"
                    index={4}
                  />

                  <ServiceCard
                    title="Communication"
                    description="Our communication services include telecommunication, networking, and public address systems, ensuring seamless connectivity and efficient communication within your development."
                    imageUrl="/Renders/Clubhouse/Etasha/Renders/entry.png"
                    index={5}
                  />
                </div>
              </div>
            ) : selectedService === "execution" ? (
              <div className="container mx-auto px-4 py-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Execution</h2>
                  <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                    We specialize in delivering comprehensive construction execution services for both plotted
                    developments and buildings. Our team ensures that every project is completed efficiently, to
                    the highest standards of quality, and within the agreed timeline.
                  </p>
                </div>

                {/* Services Grid */}
                <div className="space-y-8">
                  <ServiceCard
                    title="Structural Construction"
                    description="Our structural construction services focus on building the core framework of the project, including foundations, floors, walls, and roofs. We use high-quality materials to guarantee the long-term strength and durability of the structure."
                    imageUrl="/Renders/Entrance_Arch/Ernika/2.png"
                    index={0}
                  />

                  <ServiceCard
                    title="Mechanical, Electrical, and Plumbing (MEP) Installations"
                    description="We specialize in mechanical, electrical, and plumbing (MEP) installations, ensuring all systems—such as electrical wiring, plumbing, and HVAC—are correctly installed for functionality and comfort in the finished building."
                    imageUrl="/Renders/Clubhouse/Etasha/Renders/1.2.png"
                    index={1}
                  />

                  <ServiceCard
                    title="Interior and Exterior Finishing"
                    description="Interior and exterior finishing is an essential part of the construction process. From flooring and painting to cladding and facades, we ensure every detail is carefully executed to create aesthetically pleasing and high-quality spaces."
                    imageUrl="/Renders/Clubhouse/Ernika/ernika_1.png"
                    index={2}
                  />

                  <ServiceCard
                    title="Project Management and Coordination"
                    description="Throughout the construction, we provide project management and coordination to ensure smooth execution. Our team oversees scheduling, budgeting, and communication with subcontractors to keep everything on track."
                    imageUrl="/Renders/Entrance_Arch/Eternia/1.jpg"
                    index={3}
                  />

                  <ServiceCard
                    title="Quality Control and Post Construction Services"
                    description="Quality control is a priority for us. We conduct regular inspections to ensure the project meets all building codes and quality standards, delivering a final product that is safe and well-constructed. Once the construction is complete, we provide post-construction services including final inspections and handover to ensure the project meets client expectations, with ongoing support if needed."
                    imageUrl="/Renders/Clubhouse/Eternia/eternia_3.png"
                    index={4}
                  />
                </div>
              </div>
            ) : (
              <ServiceContent service={selectedService} />
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ServicesContent />
    </Suspense>
  )
}
