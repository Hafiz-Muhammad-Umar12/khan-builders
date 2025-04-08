'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const ParticlesBackground = dynamic(() => import('../components/ParticlesBackground'), {
  ssr: false,
});

interface Testimonial {
  name: string;
  role: string;
  company?: string;
  image: string;
  feedback: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sir Zia Ullah Khan',
    role: 'CEO',
    company: 'Khan Builders',
    image: '/zia.jpg',
    feedback:
      'This team exceeded my expectations! The attention to detail and commitment to delivering quality work was incredible. commitment to delivering quality work.',
  },
  {
    name: 'Jane Smith',
    role: 'Founder',
    company: 'Business Y',
    image: '/zia.jpg',
    feedback:
      'The service was outstanding, and the team really listened to our needs. They delivered a beautiful product.',
  },
  {
    name: 'Michael Brown',
    role: 'CTO',
    company: 'Tech Corp',
    image: '/zia.jpg',
    feedback:
      'Reliable and innovative — that’s how I’d describe this team. Their solutions helped our company scale fast.',
  },
  {
    name: 'Emily White',
    role: 'Interior Designer',
    company: 'DecorPro',
    image: '/zia.jpg',
    feedback:
      'From start to finish, the project was seamless. The attention to detail was impressive!',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section className="relative bg-black py-20 px-6 md:px-10 overflow-hidden text-white">
      <ParticlesBackground />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold bg-yellow-500 inline-block text-transparent bg-clip-text mb-16"
        >
          What Our Clients Say
        </motion.h2>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md border border-yellow-400/20 p-6 sm:p-10 rounded-2xl shadow-lg hover:shadow-yellow-300 transition-all duration-300 flex flex-col sm:flex-row gap-8 justify-between items-center min-h-[380px]"
          >
            <div className="mx-4 text-center sm:text-left">
              <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] rounded-full overflow-hidden border-4 border-yellow-400 shadow-md mx-auto sm:mx-0">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={250}
                  height={250}
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Heading & Role moved down */}
            <div className="absolute top-20 left-0 right-0 text-center py-4">
              <p className="text-xl font-semibold">{testimonial.name}</p>
              <p className="text-gray-300">{testimonial.role}, {testimonial.company}</p>
            </div>

            {/* Feedback Text with Full Centering */}
            <div className="text-gray-200 text-base italic leading-relaxed sm:max-w-[60%] text-center sm:text-left mt-12 mx-auto">
              <p>{testimonial.feedback}</p>
            </div>
          </motion.div>

          <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4">
            <button
              onClick={prevTestimonial}
              className="bg-yellow-500 p-3 rounded-full text-white text-xl shadow-md hover:bg-yellow-400 transition-all"
            >
              &#8592;
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-yellow-500 p-3 rounded-full text-white text-xl shadow-md hover:bg-yellow-400 transition-all"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
