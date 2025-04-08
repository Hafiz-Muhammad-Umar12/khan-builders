'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="bg-white">
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src="/build.webp"
          alt="Background Image"
          fill
          priority
          quality={100}
          className="object-cover"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Empowering businesses with innovative web solutions
          </p>
        </div>
      </div>

      {/* About Us Content Section */}
      <div className="max-w-4xl mx-auto py-16 px-6 md:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Who We Are
        </h2>
        
        <div className="prose prose-lg text-gray-700">
          <p className="mb-6">
            We are a passionate team of web developers dedicated to providing innovative solutions that help businesses grow and succeed. 
            Our mission is to create modern, functional, and scalable web applications that enhance user experiences and drive results.
          </p>
          
          <p className="mb-6">
            With expertise in a variety of web technologies, we are committed to delivering high-quality products that meet the needs of our clients. 
            Whether youre a small startup or a large corporation, we are here to help you build the future of your business online.
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-black text-white font-medium rounded-md hover:bg-yellow-500 transition-colors">
            Start Free Trial
          </button>
          <button className="px-8 py-3 bg-white text-black font-medium border border-yellow-500 rounded-md hover:bg-blue-50 transition-colors">
            Log In
          </button>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Meet Our Team
          </h2>

          {/* CEO */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="w-48 h-48 rounded-full overflow-hidden shrink-0">
              <Image
                src="/zia.jpg"
                alt="CEO"
                width={192}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">John Doe</h3>
              <p className="text-lg text-yellow-500 mb-4">CEO & Founder</p>
              <p className="text-gray-700">
                John is the visionary behind our company, bringing years of experience in web development and leadership.
              </p>
            </div>
          </div>

          {/* Assistant Manager */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="w-48 h-48 rounded-full overflow-hidden shrink-0">
              <Image
                src="/zia.jpg"
                alt="Assistant"
                width={192}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Jane Smith</h3>
              <p className="text-lg text-yellow-500 mb-4">Assistant Manager</p>
              <p className="text-gray-700">
                Jane is our dedicated assistant, managing projects and ensuring smooth operations across the team.
              </p>
            </div>
          </div>

          {/* Director */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="w-48 h-48 rounded-full overflow-hidden shrink-0">
              <Image
                src="/zia.jpg"
                alt="Director"
                width={192}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Emily Clark</h3>
              <p className="text-lg text-yellow-500 mb-4">Director of Operations</p>
              <p className="text-gray-700">
                Emily oversees the operations, ensuring everything runs efficiently and projects are delivered on time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full Team Section */}
      {/* <div className="max-w-6xl mx-auto py-16 px-6 md:px-8">
        <div className="mb-8">
          <Image
            src="/zia.jpg"
            alt="Team Group"
            width={1200}
            height={600}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Our Full Team
        </h3>
        <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
          A passionate and skilled group of individuals working together to achieve excellence in web development.
        </p>
      </div> */}
    </section>
  );
}