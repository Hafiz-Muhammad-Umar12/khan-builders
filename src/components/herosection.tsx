'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

const slides = [
  { image: '/hero.jpg', text: 'Welcome to Our Website', subtext: 'Building the future with innovation and technology.' },
  { image: '/building1.jpg', text: 'Empowering Ideas', subtext: 'Transforming visions into reality.' },
  { image: '/building2.jpg', text: 'Innovate & Lead', subtext: 'Pioneering the next generation of solutions.' }
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    AOS.init(); // Initialize AOS for animations

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <Image
            key={index}
            src={slide.image}
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-110'}`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-2xl p-5 transition-opacity duration-1000">
        <h1
          className="text-5xl md:text-6xl font-bold"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {slides[currentIndex].text}
        </h1>
        <p
          className="mt-4 text-lg text-white md:text-xl"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {slides[currentIndex].subtext}
        </p>
        <Link href="/contact">
        <button
          className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md transition-all hover:scale-105 hover:bg-yellow-600"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          Get Started
        </button>
        </Link>
      </div>
    </div>
  );
}
