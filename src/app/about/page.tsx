"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const teamMembers = [
  {
    name: "John Smith",
    role: "Principal Architect",
    image: "/person.avif", // Add actual image paths
    bio: "With over 15 years of experience in architectural design, John leads our creative vision.",
  },
  {
    name: "Sarah Johnson",
    role: "Design Director",
    image: "/person.avif",
    bio: "Sarah brings innovative design solutions with her extensive background in interior architecture.",
  },
  {
    name: "Michael Chen",
    role: "Project Manager",
    image: "/person.avif",
    bio: "Michael ensures seamless execution of projects with his detail-oriented approach.",
  },
  // Add more team members as needed
];

const projects = [
  {
    name: "Clubhouses",
    type: "Commercial Development",
    image: "/Renders/Clubhouse/Ernika/ernika_1.png", // Corrected path
    description:
      "A sustainable commercial complex featuring modern design and green spaces.",
  },
  {
    name: "Arches",
    type: "Residential Project",
    image: "/Renders/Entrance_Arch/Ernika/1.png",
    description:
      "Luxury waterfront apartments combining comfort with contemporary architecture.",
  },
  {
    name: "Master Plan",
    type: "Mixed-Use Development",
    image: "/Renders/Master_plan/Eternia/Master_plan/1.jpg",
    description:
      "A state-of-the-art facility designed for technology companies and startups.",
  },
  {
    name: "Water tank",
    type: "Mixed-Use Development",
    image: "/Renders/water_tank/1.jpeg",
    description:
      "A state-of-the-art facility designed for technology companies and startups.",
  },
];

function Page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-secondary/80 dark:bg-primary/80">
        {/* About Section */}
        <motion.section
          className="mb-20"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="relative h-[400px] mb-12 w-full">
            <Image
              src="/team.jpg"
              alt="Team background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-5xl font-bold text-white">About Evergrove</h1>
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-4xl mx-auto px-4">
            <p className="text-2xl mb-6">
              At Evergrove, we are passionate about creating digital experiences
              that leave a lasting impact. Our team of dedicated professionals
              combines creativity with technical expertise to deliver
              exceptional solutions for our clients.
            </p>
            <p className="text-2xl mb-6">
              Founded with a vision to transform digital landscapes, we
              specialize in web development, design, and digital strategy. Our
              approach is rooted in understanding our clients&apos; unique needs
              and delivering solutions that exceed expectations.
            </p>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          className="max-w-7xl mx-auto mb-20"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-secondary dark:bg-primary/10 rounded-lg overflow-hidden shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                <div className="aspect-square relative">
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary dark:text-secondary mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          className="max-w-7xl mx-auto mb-20"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-5xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                className="bg-secondary dark:bg-primary/10 rounded-lg overflow-hidden shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                <div className="aspect-video relative">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-lg font-semibold font-italic text-primary dark:text-white mb-3">
                    {project.type}
                  </p>
                  <p className="text-gray-600 dark:text-accent-300">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Form Section */}
        <motion.section
          className="max-w-3xl mx-auto bg-secondary dark:bg-primary/10 p-8 rounded-lg shadow-md"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-center mb-8">
            Get in Touch
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-4 py-2 border rounded-md bg-background dark:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-4 py-2 border rounded-md bg-background dark:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-md bg-background dark:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border rounded-md bg-background dark:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-primary text-white px-8 py-3 rounded-md hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.section>
      </div>
    </motion.div>
  );
}

export default Page;
