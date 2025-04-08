'use client';

import Link from 'next/link';
import { FaBuilding, FaHammer, FaProjectDiagram, FaDraftingCompass, FaRoad, FaLeaf } from 'react-icons/fa';

export default function Services() {
  return (
    <section id="services" className="bg-gray-100 py-20">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold text-gray-800">Our Services</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          We offer a wide range of construction and development services. From residential buildings to commercial projects, we have the expertise to bring your construction vision to life.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-6">
        {/* Service 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="p-6 text-center">
            <div className="text-4xl text-yellow-500 mb-4">
              <FaBuilding />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Building Construction</h3>
            <p className="text-gray-600 mb-4">
              We specialize in residential, commercial, and industrial building construction, providing quality and timely delivery.
            </p>
            <Link href="/contact">
          <button className="bg-black cursor-pointer text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-500 hover:text-black transition duration-300">
            View More
          </button>
        </Link>
          </div>
        </div>

        {/* Service 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="p-6 text-center">
            <div className="text-4xl text-yellow-500 mb-4">
              <FaHammer />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Renovation Services</h3>
            <p className="text-gray-600 mb-4">
            Our architects create innovative designs that blend aesthetics with functionality, ensuring every project is unique.
            </p>
            <Link href="/contact">
          <button className="bg-black cursor-pointer text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-500 hover:text-black transition duration-300">
            View More
          </button>
        </Link>
          </div>
        </div>

        {/* Service 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="p-6 text-center">
            <div className="text-4xl text-yellow-500 mb-4">
              <FaProjectDiagram />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Project Management</h3>
            <p className="text-gray-600 mb-4">
            Our architects create innovative designs that blend aesthetics with functionality, ensuring every project is unique.
            </p>
            <Link href="/contact">
          <button className="bg-black cursor-pointer text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-500 hover:text-black transition duration-300">
            View More
          </button>
        </Link>
          </div>
        </div>

        {/* Service 4 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="p-6 text-center">
            <div className="text-4xl text-yellow-500 mb-4">
              <FaDraftingCompass />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Architectural Design</h3>
            <p className="text-gray-600 mb-4">
              Our architects create innovative designs that blend aesthetics with functionality, ensuring every project is unique.
            </p>
            <Link href="/contact">
          <button className="bg-black cursor-pointer text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-500 hover:text-black transition duration-300">
            View More
          </button>
        </Link>
          </div>
        </div>

        {/* Service 5 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="p-6 text-center">
            <div className="text-4xl text-yellow-500 mb-4">
              <FaRoad />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Infrastructure Development</h3>
            <p className="text-gray-600 mb-4">
              We provide comprehensive infrastructure development services, from roads and bridges to utilities and more.
            </p>
            <Link href="/contact">
          <button className="bg-black cursor-pointer text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-500 hover:text-black transition duration-300">
            View More
          </button>
        </Link>
          </div>
        </div>

        {/* Service 6 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="p-6 text-center">
            <div className="text-4xl text-yellow-500 mb-4">
              <FaLeaf />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Sustainable Construction</h3>
            <p className="text-gray-600 mb-4">
              We prioritize eco-friendly and sustainable construction practices to minimize environmental impact.
            </p>
            <Link href="/contact">
          <button className="bg-black cursor-pointer text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-500 hover:text-black transition duration-300">
            View More
          </button>
        </Link>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Ready to Build with Us?
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Contact us today to discuss your construction project and get expert advice on bringing your vision to reality.
        </p>
        <Link href="/contact">
          <button className="bg-black cursor-pointer text-white px-6  py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-500 hover:text-black transition duration-300">
            View More
          </button>
        </Link>
      </div>
    </section>
  );
}
