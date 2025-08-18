import ProjectsClient from "../../components/projects/ProjectsClient"

const layoutProjects = [
	{
		id: 1,
		name: "Eternia",
		area: "10 Acres",
		plots: 170,
		theme: "Nature & Sustainability",
		icon: "Leaf",
		color: "from-green-500 to-emerald-600",
		description:
			"This project is a masterful fusion of thoughtful design and expert execution, carefully crafted to ensure that modern living aligns perfectly with the tranquillity of nature. From the initial concept to the final execution, every detail has been meticulously planned to create spaces that blend seamlessly with their natural surroundings. The design embraces sustainability, with eco-friendly materials, energy-efficient systems, and green spaces that encourage a harmonious connection with the environment.",
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
		icon: "Waves",
		color: "from-blue-500 to-cyan-600",
		description:
			"This project is a celebration of island life, bringing the serene beauty of tropical islands into every aspect of its design and construction. The entrance features a striking arch designed to resemble an island-themed tree, instantly immersing visitors in the natural, laid-back atmosphere of a coastal paradise. Every amenity has been thoughtfully crafted to align with the island theme, from open, airy spaces that mimic beachfront living to vibrant landscaping that evokes the lushness of island flora.",
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
		icon: "TreePine",
		color: "from-emerald-500 to-green-700",
		description:
			"Inspired by the vibrant biodiversity of the Amazon Rainforest, this project blends the beauty of nature with functional design. The design features lush greenery, flowing water elements, and organic forms that evoke the rainforest's rich ecosystem. A striking entrance arch, designed with a parametric structure, gives visitors a sense of walking into the heart of a forest, with its fluid, tree-like form symbolizing the natural environment.",
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
		icon: "Zap",
		color: "from-amber-500 to-orange-600",
		description:
			"Project is designed with a strong focus on sustainability, offering residents an eco-friendly living environment that harmonizes with nature. The layout maximizes green spaces, ensuring that each plot benefits from ample natural surroundings, while promoting energy-efficient design through thoughtful placement and orientation. Sustainable infrastructure, such as rainwater harvesting systems, solar energy solutions, and efficient waste management, are integrated throughout the development.",
		scope: ["Master Plan", "Entrance Arch", "MEP Services", "Landscape Design"],
		images: [
			"/placeholder.svg?height=400&width=600&text=Evara+Master+Plan",
			"/placeholder.svg?height=400&width=600&text=Evara+Entrance",
			"/placeholder.svg?height=400&width=600&text=Evara+Landscape",
			"/placeholder.svg?height=400&width=600&text=Evara+Amenities",
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
			"The clubhouse at the Eternia Project, where refined luxury meets sustainable design. Anchored by a sculptural waffle-slab ceiling and framed by a striking terracotta jali wall that doubles as a living green façade, the space filters light and invites nature in. Inside, residents enjoy a gym, indoor games, coworking spaces, an AMTC room, and a rooftop restaurant—each space designed to meet modern lifestyle needs.",
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
			"Island-inspired retreat designed to foster community and relaxation. Surrounded by water and lush greenery, it features a warm Mangalore tile roof and fluid, coastal-style architecture. Inside, residents enjoy a modern gym, indoor games area, co-working space, and a terrace restaurant with panoramic views. With an AMTC room for efficient management, the Clubhouse blends natural charm with everyday functionality.",
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
			"The clubhouse at the Ernika project, Where Nature Meets Contemporary Living is a vibrant, biophilic hub designed to seamlessly blend nature with modern amenities, fostering wellness, community, and connection. Featuring lush greenery throughout, including vertical gardens, stepped balconies, and landscaped terraces, the architecture emphasizes natural light, ventilation, and organic forms through curved walls and layered elevations.",
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
	return <ProjectsClient layoutProjects={layoutProjects} clubhouseProjects={clubhouseProjects} />
}
