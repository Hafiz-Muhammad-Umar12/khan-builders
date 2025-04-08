"use client"

import Link from "next/link"
// import dynamic from "next/dynamic"
import { motion } from "framer-motion"

// const ParticlesBackground = dynamic(() => import("./ParticlesBackground"), {
//   ssr: false,
// })

const projects = [
  {
    id: "building1",
    name: "Building Construction",
    description:
      "A large-scale commercial building project with state-of-the-art designs and sustainable materials.",
    techStack: "AutoCAD, Revit, BIM, Civil Engineering",
    image: "/building1.avif",
  },
  {
    id: "building2",
    name: "Residential Complex",
    description:
      "A modern residential complex with eco-friendly designs, featuring smart home technology.",
    techStack: "SketchUp, Revit, Green Building, Smart Technology",
    image: "/building2.avif",
  },
  {
    id: "building3",
    name: "Industrial Facility",
    description:
      "Design and construction of a high-tech industrial facility with advanced automation systems.",
    techStack: "AutoCAD, Structural Engineering, Automation",
    image: "/building3.avif",
  },
  {
    id: "building4",
    name: "Road Construction",
    description:
      "A major road construction project focusing on durability, traffic flow, and sustainability.",
    techStack: "Civil Engineering, Asphalt Technology, Surveying",
    image: "/building4.avif",
  },
  {
    id: "building5",
    name: "Bridge Construction",
    description:
      "Building a bridge with cutting-edge engineering techniques to improve connectivity.",
    techStack: "Structural Engineering, Bridge Design, CAD",
    image: "/building5.avif",
  },
  {
    id: "building6",
    name: "Public Infrastructure",
    description:
      "Construction of public infrastructure, including parks, recreational spaces, and urban design.",
    techStack: "Urban Planning, Landscape Architecture, Civil Engineering",
    image: "/building6.avif",
  },
]

export default function Projects() {
  return (
    <section className="bg-white py-20 px-6 relative overflow-hidden">
      {/* ✅ Directly render this without any useEffect or isClient */}
      {/* <ParticlesBackground /> */}

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-semibold text-black mb-12 font-serif">
          Our Construction Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-xl shadow-lg p-6 bg-white transform hover:-translate-y-2 hover:shadow-black transition-all duration-300 border border-gray-100"
            >
              <div
                className="w-full h-56 bg-cover bg-center rounded-lg shadow-sm"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 font-serif">
                  {project.name}
                </h3>
                <p className="text-md text-gray-600 font-light mb-4">
                  {project.description}
                </p>
                <Link href={`/projects/${project.id}`}>
  <button className="mt-4 inline-block px-4 py-2 bg-black text-white rounded-lg shadow-md hover:bg-yellow-500 cursor-pointer">
    View More
  </button>
</Link>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
