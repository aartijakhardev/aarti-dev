'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">Aarti Jakhar</h3>
            <p className="text-gray-400 mb-4">
              Full Stack Developer specializing in building modern web applications,
              CRM systems, and custom solutions for businesses and educational institutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/aartiJakhar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://in.linkedin.com/in/aarti-jakhar-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:aarti.jakhar.dev@gmail.com"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <FaEnvelope className="mr-2" />
                <a href="mailto:aarti.jakhar.dev@gmail.com" className="hover:text-primary-400 transition-colors">
                  aarti.jakhar.dev@gmail.com
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <FaPhone className="mr-2" />
                <a href="tel:+919999999999" className="hover:text-primary-400 transition-colors">
                  +91 99999 99999
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} All rights reserved. Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

