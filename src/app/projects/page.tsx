"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { TextReveal } from "@/components/ui/text-reveal"
import { Sparkles } from "@/components/ui/sparkles"
import { Particles } from "@/components/ui/particles"
import { ArrowRight, Leaf, Building2, Users, Waves, TreePine, Zap } from "lucide-react"
import ProjectCard from "@/app/projects/component/ProjectCard"
import ClubhouseCard from "@/app/projects/component/ClubhouseCard"
import GalleryModal from "@/app/projects/component/GalleryModal"

const layoutProjects = [
	{
		id: 1,
		name: "Eternia",
		area: "10 Acres",
		plots: 170,
		theme: "Nature & Sustainability",
		icon: Leaf,
		color: "from-green-500 to-emerald-600",
		description:
			"This project is a masterful fusion of thoughtful design and expert execution, carefully crafted to ensure that modern living aligns perfectly with the tranquillity of nature. From the initial concept to the final execution, every detail has been meticulously planned to create spaces that blend seamlessly with their natural surroundings. The design embraces sustainability, with eco-friendly materials, energy-efficient systems, and green spaces that encourage a harmonious connection with the environment. The careful execution brings these elements to life, resulting in homes that not only provide comfort and convenience but also offer a peaceful sanctuary where nature and modernity coexist in perfect harmony.",
		scope: ["Master Plan", "Entrance Arch", "MEP Services", "Landscape Design"],
		images: [
			"/Renders/Master_plan/Eternia/Master_plan/1.jpg",
			"/Renders/Entrance_Arch/Eternia/1.jpg",
			"/Renders/Entrance_Arch/Eternia/2.jpg",
			"/Renders/Entrance_Arch/Eternia/3.jpg",
		],
	},
	{
		id: 2,
		name: "Etasha",
		area: "13 Acres",
		plots: 191,
		theme: "Island Paradise",
		icon: Waves,
		color: "from-blue-500 to-cyan-600",
		description:
			"This project is a celebration of island life, bringing the serene beauty of tropical islands into every aspect of its design and construction. The entrance features a striking arch designed to resemble an island-themed tree, instantly immersing visitors in the natural, laid-back atmosphere of a coastal paradise. Every amenity has been thoughtfully crafted to align with the island theme, from open, airy spaces that mimic beachfront living to vibrant landscaping that evokes the lushness of island flora. With attention to detail in every corner, this project offers a harmonious blend of nature, comfort, and relaxation, creating a truly immersive island experience for all who visit.",
		scope: ["Master Plan", "Entrance Arch", "MEP Services", "Landscape Design"],
		images: [
			"/Renders/Entrance_Arch/Etasha/1.jpeg",
			"/Renders/Entrance_Arch/Etasha/2.jpeg",
			"/Renders/Entrance_Arch/Etasha/3.jpeg",
			"/Renders/Clubhouse/Etasha/Renders/entry.png",
		],
	},
	{
		id: 3,
		name: "Ernika",
		area: "12 Acres",
		plots: 220,
		theme: "Amazon Rainforest",
		icon: TreePine,
		color: "from-emerald-500 to-green-700",
		description:
			"Inspired by the vibrant biodiversity of the Amazon Rainforest, this project blends the beauty of nature with functional design. The design features lush greenery, flowing water elements, and organic forms that evoke the rainforest's rich ecosystem. A striking entrance arch, designed with a parametric structure, gives visitors a sense of walking into the heart of a forest, with its fluid, tree-like form symbolizing the natural environment. In addition to these natural elements, the project includes modern amenities, such as specially designed rugby and baseball courts, creating a dynamic space for both relaxation and sport. Through sustainable construction practices and innovative design, this project celebrates the Amazon’s natural wonder while offering a space for active living.",
		scope: ["Master Plan", "Entrance Arch", "MEP Services", "Landscape Design"],
		images: [
			"/Renders/Entrance_Arch/Ernika/1.png",
			"/Renders/Entrance_Arch/Ernika/2.png",
			"/Renders/Entrance_Arch/Ernika/3.png",
			"/Renders/Clubhouse/Ernika/ernika_1.png",
		],
	},
	{
		id: 4,
		name: "Evara",
		area: "8 Acres",
		plots: 114,
		theme: "Sustainable Living",
		icon: Zap,
		color: "from-amber-500 to-orange-600",
		description:
			"Project is designed with a strong focus on sustainability, offering residents an eco-friendly living environment that harmonizes with nature. The layout maximizes green spaces, ensuring that each plot benefits from ample natural surroundings, while promoting energy-efficient design through thoughtful placement and orientation. Sustainable infrastructure, such as rainwater harvesting systems, solar energy solutions, and efficient waste management, are integrated throughout the development. By prioritizing environmentally conscious building practices and creating a balanced relationship between nature and modern living, this project aims to provide long-term value for both residents and the planet, creating a community that thrives in harmony with its surroundings.",
		scope: ["Master Plan", "Entrance Arch", "MEP Services", "Landscape Design"],
		images: [
			"/Renders/Entrance_Arch/Evara/1.png",
			"/Renders/Entrance_Arch/Evara/2.png",
			"/Renders/Entrance_Arch/Evara/3.png",
			"/Renders/Entrance_Arch/Evara/4.png",
		],
	},
]

const clubhouseProjects = [
	{
		id: 1,
		name: "Eternia Clubhouse",
		area: "10,600 Sqft",
		theme: "Refined Luxury",
		color: "from-purple-500 to-indigo-600",
		description:
			"The clubhouse at the Eternia Project, where refined luxury meets sustainable design. Anchored by a sculptural waffle-slab ceiling and framed by a striking terracotta jali wall that doubles as a living green façade, the space filters light and invites nature in. Inside, residents enjoy a gym, indoor games, coworking spaces, an AMTC room, and a rooftop restaurant—each space designed to meet modern lifestyle needs. Blending greenery with clean lines and natural textures, this is a serene, contemporary retreat that redefines eco-conscious living.",
		amenities: ["Gym", "Indoor Games", "Coworking Spaces", "AMTC Room", "Rooftop Restaurant"],
		images: [
			"/Renders/Clubhouse/Eternia/eternia_1.png",
			"/Renders/Clubhouse/Eternia/eternia_2.png",
			"/Renders/Clubhouse/Eternia/eternia_3.png",
		],
	},
	{
		id: 2,
		name: "Etasha Clubhouse",
		area: "9,700 Sqft",
		theme: "Island Retreat",
		color: "from-teal-500 to-blue-600",
		description:
			"Island-inspired retreat designed to foster community and relaxation. Surrounded by water and lush greenery, it features a warm Mangalore tile roof and fluid, coastal-style architecture. Inside, residents enjoy a modern gym, indoor games area, co-working space, and a terrace restaurant with panoramic views. With an AMTC room for efficient management, the Clubhouse blends natural charm with everyday functionality—serving as the vibrant heart of the Etasha community.",
		amenities: ["Modern Gym", "Indoor Games", "Co-working Space", "Terrace Restaurant", "AMTC Room"],
		images: [
			"/Renders/Clubhouse/Etasha/Renders/entry.png",
			"/Renders/Clubhouse/Etasha/Renders/a.png",
			"/Renders/Clubhouse/Etasha/Renders/gym_1.png",
		],
	},
	{
		id: 3,
		name: "Ernika Clubhouse",
		area: "10,200 Sqft",
		theme: "Biophilic Design",
		color: "from-green-500 to-emerald-600",
		description:
			"The clubhouse at the Ernika project, Where Nature Meets Contemporary Living is a vibrant, biophilic hub designed to seamlessly blend nature with modern amenities, fostering wellness, community, and connection. Featuring lush greenery throughout, including vertical gardens, stepped balconies, and landscaped terraces, the architecture emphasizes natural light, ventilation, and organic forms through curved walls and layered elevations. This thoughtfully crafted space houses a fully equipped gym, indoor games area, co-working space, an AMTC room for facility management, and a scenic terrace restaurant.",
		amenities: ["Fully Equipped Gym", "Indoor Games", "Co-working Space", "AMTC Room", "Scenic Terrace Restaurant"],
		images: [
			"/Renders/Clubhouse/Ernika/ernika_1.png",
			"/Renders/Clubhouse/Ernika/ernika_2.png",
			"/Renders/Clubhouse/Ernika/ernika_3.png",
			"/Renders/Clubhouse/Ernika/ernika_4.png",
		],
	},
]

export default function ProjectsPage() {
	const [activeTab, setActiveTab] = useState<"layouts" | "clubhouses">("layouts")
	const [modalOpen, setModalOpen] = useState(false)
	const [modalImages, setModalImages] = useState<string[]>([])
	const [modalTitle, setModalTitle] = useState("")

	// Handlers for opening modals
	const handleViewProjectDetails = (project: typeof layoutProjects[number]) => {
		setModalImages(project.images)
		setModalTitle(project.name)
		setModalOpen(true)
	}
	const handleExploreClubhouse = (clubhouse: typeof clubhouseProjects[number]) => {
		setModalImages(clubhouse.images)
		setModalTitle(clubhouse.name)
		setModalOpen(true)
	}

	return (
		<div className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="relative h-[70vh] overflow-hidden">
				<Image src="/team.jpg" alt="Our Projects" fill className="object-cover" priority />
				<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
				<Particles count={25} className="opacity-30" />

				<div className="absolute inset-0 flex items-center justify-center">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className="text-center"
					>
						<Sparkles>
							<TextReveal className="font-display text-6xl md:text-8xl font-bold text-white mb-6">
								Our Projects
							</TextReveal>
						</Sparkles>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5, duration: 0.8 }}
							className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed"
						>
							Discover our portfolio of extraordinary developments that redefine luxury living and sustainable design
						</motion.p>
					</motion.div>
				</div>
			</section>

			{/* Project Categories */}
			<section className="py-20 bg-secondary/30">
				<div className="container mx-auto px-6 lg:px-8">
					{/* Tab Navigation */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="flex justify-center mb-16"
					>
						<div className="bg-card rounded-2xl p-2 shadow-lg">
							<button
								onClick={() => setActiveTab("layouts")}
								className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
									activeTab === "layouts"
										? "bg-primary text-white shadow-lg"
										: "text-muted-foreground hover:text-foreground"
								}`}
							>
								<Building2 className="inline-block w-5 h-5 mr-2" />
								Layout Projects
							</button>
							<button
								onClick={() => setActiveTab("clubhouses")}
								className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
									activeTab === "clubhouses"
										? "bg-primary text-white shadow-lg"
										: "text-muted-foreground hover:text-foreground"
								}`}
							>
								<Users className="inline-block w-5 h-5 mr-2" />
								Clubhouses
							</button>
						</div>
					</motion.div>

					{/* Layout Projects */}
					{activeTab === "layouts" && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="space-y-20"
						>
							{layoutProjects.map((project, index) => (
								<ProjectCard
									key={project.id}
									project={project}
									index={index}
									onViewDetails={() => handleViewProjectDetails(project)}
								/>
							))}
						</motion.div>
					)}

					{/* Clubhouse Projects */}
					{activeTab === "clubhouses" && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
						>
							{clubhouseProjects.map((clubhouse, index) => (
								<ClubhouseCard
									key={clubhouse.id}
									clubhouse={clubhouse}
									index={index}
									onExplore={() => handleExploreClubhouse(clubhouse)}
								/>
							))}
						</motion.div>
					)}
				</div>

				{/* Gallery Modal */}
				<GalleryModal
					open={modalOpen}
					onClose={() => setModalOpen(false)}
					images={modalImages}
					title={modalTitle}
				/>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 relative overflow-hidden">
				<Sparkles>
					<div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
						>
							<TextReveal className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
								Ready to Start Your Project?
							</TextReveal>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3, duration: 0.8 }}
								viewport={{ once: true }}
								className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
							>
								Let&apos;s discuss how we can bring your vision to life with our expertise in luxury development and
								sustainable design.
							</motion.p>
							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.5, duration: 0.6 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Button
									size="lg"
									className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-primary/25 transition-all duration-300"
								>
									Schedule Consultation
									<ArrowRight className="ml-2 h-5 w-5" />
								</Button>
							</motion.div>
						</motion.div>
					</div>
				</Sparkles>
			</section>
		</div>
	)
}
