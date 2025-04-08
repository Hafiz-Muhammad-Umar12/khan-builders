"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"

const ParticlesBackground = dynamic(() => import("./ParticlesBackground"), {
  ssr: false,
})

const projects = [
  {
    id: "building1",
    name: "Building Construction",
    description:
      "A large-scale commercial building project with state-of-the-art designs and sustainable materials.",
    techStack: "AutoCAD, Revit, BIM, Civil Engineering",
    image: "/building.jpg",
  },
  {
    id: "building2",
    name: "Residential Complex",
    description:
      "A modern residential complex with eco-friendly designs, featuring smart home technology.",
    techStack: "SketchUp, Revit, Green Building, Smart Technology",
    image: "/Residential.avif",
  },
  {
    id: "building3",
    name: "Industrial Facility",
    description:
      "Design and construction of a high-tech industrial facility with advanced automation systems.",
    techStack: "AutoCAD, Structural Engineering, Automation",
    image: "/industrial.avif",
  },
  {
    id: "building4",
    name: "Road Construction",
    description:
      "A major road construction project focusing on durability, traffic flow, and sustainability.",
    techStack: "Civil Engineering, Asphalt Technology, Surveying",
    image: "/Road.avif",
  },
  {
    id: "building5",
    name: "Bridge Construction",
    description:
      "Building a bridge with cutting-edge engineering techniques to improve connectivity.",
    techStack: "Structural Engineering, Bridge Design, CAD",
    image: "/Bridge.jpg",
  },
  {
    id: "building6",
    name: "Public Infrastructure",
    description:
      "Construction of public infrastructure, including parks, recreational spaces, and urban design.",
    techStack: "Urban Planning, Landscape Architecture, Civil Engineering",
    image: "/Residential.avif",
  },
]

export default function Projects() {
  return (
    <section className='bg-white py-20 px-6 relative overflow-hidden'>
      <div className='absolute top-0 left-0 w-full overflow-hidden leading-[0] z-0'>
        <svg
          className='relative block w-[calc(100%+1.3px)] h-[100px]'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M321.39 56.18C224.21 74.37 111.6 92.23 0 90.29V0h1200v90.29c-110.86 1.93-221.72-15.91-329.08-35.22-70.62-12.91-143.48-27.36-218.6-30.6-91.56-4.07-180.76 20.41-330.93 31.71z'
            fill='#000000'
          ></path>
        </svg>
      </div>

      {/* ✅ Directly render this without any useEffect or isClient */}
      <ParticlesBackground />

      <div className='max-w-7xl mx-auto text-center relative z-10'>
        <h2 className='text-4xl font-semibold text-black mb-12 font-serif'>
          Our Construction Projects
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className='rounded-xl shadow-lg p-6 bg-white transform hover:-translate-y-2 hover:shadow-black transition-all duration-300 border border-gray-100'
            >
              <div
                className='w-full h-56 bg-cover bg-center rounded-lg shadow-sm'
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className='text-center mt-6'>
                <h3 className='text-2xl font-bold text-gray-800 mb-2 font-serif'>
                  {project.name}
                </h3>
                <p className='text-md text-gray-600 font-light mb-4'>
                  {project.description}
                </p>
                <Link href={`/projects/${project.id}`}>
                  <span className='bg-black text-white py-2 px-6 rounded-full transition hover:bg-yellow-500 cursor-pointer font-medium shadow-md'>
                    View More
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
