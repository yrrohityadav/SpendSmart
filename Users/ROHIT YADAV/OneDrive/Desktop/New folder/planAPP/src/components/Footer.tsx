import React from 'react';
import { Leaf } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white mt-12 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-8">
          <Leaf className="h-8 w-8 text-green-600" />
          <span className="ml-2 text-xl font-semibold text-gray-900">PlantCare</span>
        </div>
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} PlantCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};