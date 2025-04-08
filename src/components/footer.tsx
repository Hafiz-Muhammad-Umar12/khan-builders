// components/Footer.tsx
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-extrabold text-yellow-400 mb-4">Khan Constructions</h2>
            <p className="text-gray-400 mb-4">Building the future with excellence.</p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="p-2 bg-yellow-400 text-gray-900 rounded-full hover:bg-yellow-300 transition"><FaFacebookF /></a>
              <a href="#" className="p-2 bg-yellow-400 text-gray-900 rounded-full hover:bg-yellow-300 transition"><FaInstagram /></a>
              <a href="#" className="p-2 bg-yellow-400 text-gray-900 rounded-full hover:bg-yellow-300 transition"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/" className="hover:text-yellow-400 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-yellow-400 transition">About</Link></li>
              <li><Link href="/services" className="hover:text-yellow-400 transition">Services</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Web Development</li>
              <li>Graphic Design</li>
              <li>Marketing</li>
              <li>Photography</li>
              <li>Video Production</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3"><FaPhoneAlt className="text-yellow-400" /> (+92) 3072502073</li>
              <li className="flex items-center gap-3"><FaEnvelope className="text-yellow-400" /> khanconstruction12@gmail.com</li>
              <li className="flex items-start gap-3"><FaMapMarkerAlt className="text-yellow-400 mt-1" />
                <span>10 Suna House, 65 Rivington Street, London EC2A 3QQ</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-16 pt-8 text-center text-sm text-gray-500">
          © 2025 Khan Brothers. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}