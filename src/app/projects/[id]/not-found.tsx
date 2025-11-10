import Link from 'next/link';
import { FaHome, FaArrowLeft } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-700 mb-4">Project Not Found</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          The project you&apos;re looking for doesn&apos;t exist or may have been removed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
          >
            <FaHome />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/#services"
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center space-x-2"
          >
            <FaArrowLeft />
            <span>View All Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

