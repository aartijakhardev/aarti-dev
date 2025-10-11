'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Don&apos;t Settle for Technology That Holds You Back
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Your business&apos;s future is too important to trust to just any development shop. 
            Hand over your challenges to a developer who&apos;s helped organizations turn operational 
            bottlenecks into sustainable growth.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-white text-primary-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-2xl"
            >
              Request a Consultation
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

