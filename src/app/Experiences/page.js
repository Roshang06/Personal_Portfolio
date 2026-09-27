"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'UW Photonics',
      description: 'Interned at the UW Photonics Lab contributing to research in harware accelerated networks for signal equalization.',
      Link: "/UWPhotonics",
      image: '/experimental_setup.jpeg',
      tags: ['SystemVerilog', 'Pytorch']
    },
    {
      title: 'SPARCS',
      description: 'Working on circuitry and firmware (C++ Arduino) for a wireless digital stethescope and EKG.',
      Link: "/SPARCS",
      image: '/stethoscope_conceptsketches_f.png',
      tags: ['C++', 'Python', 'Soldering', 'PCB Design']
    },
    {
      title: 'Simple NN inference engine',
      description: 'Created a lightweight Nueral Network Training and inference class using C++.',
      Link: "/NNInference",
      image: '/network.png',
      tags: ['C++']
    },
    {
      title: "Seema's Cafe",
      description: "A professional landing page for Seema's cafe located on Lake Sammamish Road.",
      Link: "/SeemaCafeWebsite",
      image: '/seema.png',
      tags: ['Next.js', 'Javascript']
    },
    {
      title: '2D Platformer Game',
      description: 'As part of my role as President of Game Design club in HS, we created a 2D platformer using Unity and C#.',
      Link: "/GameDesignClub",
      image: '/g.png',
      tags: ['Unity', 'C#']
    },
    {
      title: 'Hobby RC-Car',
      description: 'Designed an RC-car printed with PLA, with an SG90 servo, 2 brushless motors, and a raspberry pi controlled remotely over Wifi',
      Link: "/RCCar",
      image: '/rccar.png',
      tags: ['OnShape', 'Python']
    },
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-0 md:ml-20 px-6 md:px-12 py-20 mt-12">
      
      <div className="max-w-7xl mx-auto">


        <div>
          <h1 className="flex justify-center text-5xl md:text-6xl font-bold mb-6 text-white">
            Experiences
          </h1>
          <p className="flex justify-center text-xl text-gray-400 mb-16">
            Click each card to learn more
          </p>
        </div>
        

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link href={project.Link} rel="noopener noreferrer" key={project.title}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-300 transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-800 rounded-lg text-sm text-gray-300 border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}