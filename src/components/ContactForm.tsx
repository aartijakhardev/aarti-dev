'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  fullName: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission - In production, replace with actual API call
    try {
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', data);
      setSubmitStatus('success');
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Don't settle for technology that holds you back
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-700 leading-relaxed"
              >
                Your business's future is too important to trust to just any development shop. 
                Hand over your challenges to the team that's helped organizations like yours turn 
                operational bottlenecks into sustainable growth.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900">Why Choose Me?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Proven Track Record</h4>
                    <p className="text-gray-600">Experience with CRMs and healthcare systems</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Affordable Pricing</h4>
                    <p className="text-gray-600">Starting freelance career with competitive rates</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">End-to-End Support</h4>
                    <p className="text-gray-600">From development to deployment and beyond</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-10"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Request a Consultation</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="FULL NAME"
                  {...register('fullName', { required: 'Name is required' })}
                  className={`w-full px-6 py-4 bg-gray-100 border-2 ${
                    errors.fullName ? 'border-red-500' : 'border-transparent'
                  } rounded-xl focus:outline-none focus:border-primary-500 transition-colors placeholder-gray-400`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="EMAIL"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className={`w-full px-6 py-4 bg-gray-100 border-2 ${
                    errors.email ? 'border-red-500' : 'border-transparent'
                  } rounded-xl focus:outline-none focus:border-primary-500 transition-colors placeholder-gray-400`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <textarea
                  placeholder="MESSAGE"
                  rows={6}
                  {...register('message', { required: 'Message is required' })}
                  className={`w-full px-6 py-4 bg-gray-100 border-2 ${
                    errors.message ? 'border-red-500' : 'border-transparent'
                  } rounded-xl focus:outline-none focus:border-primary-500 transition-colors placeholder-gray-400 resize-none`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-primary-400 hover:bg-primary-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Request a Consultation'}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl"
                >
                  Thank you! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl"
                >
                  Something went wrong. Please try again or email me directly.
                </motion.div>
              )}
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-center">
                Or reach out directly at{' '}
                <a href="mailto:your.email@example.com" className="text-primary-600 font-semibold hover:underline">
                  your.email@example.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

