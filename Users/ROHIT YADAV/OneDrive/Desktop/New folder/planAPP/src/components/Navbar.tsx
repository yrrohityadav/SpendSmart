import React from 'react';
import { Leaf } from 'lucide-react';
import { Link } from './Link';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center">
                <Leaf className="h-8 w-8 text-green-600" />
                <span className="ml-2 text-xl font-semibold text-gray-900">PlantCare</span>
              </div>
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/help">Help</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};