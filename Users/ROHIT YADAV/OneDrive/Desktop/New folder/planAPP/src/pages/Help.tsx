import React from 'react';
import { HelpCircle, Image, Leaf, MessageCircle } from 'lucide-react';

export const Help: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Help Center</h1>
        <p className="mt-4 text-xl text-gray-600">
          Find answers to common questions and learn how to use PlantCare effectively
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Image className="h-5 w-5 mr-2 text-green-600" />
            Taking Good Photos
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li>• Ensure good lighting conditions</li>
            <li>• Focus on the affected area of the plant</li>
            <li>• Include both healthy and diseased parts for comparison</li>
            <li>• Keep the image clear and in focus</li>
            <li>• Avoid shadows or glare</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <HelpCircle className="h-5 w-5 mr-2 text-green-600" />
            Common Issues
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li>• Image upload fails: Ensure file is under 16MB</li>
            <li>• No disease detected: Try a clearer photo</li>
            <li>• Low confidence score: Provide multiple angles</li>
            <li>• Analysis takes too long: Check your internet connection</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Leaf className="h-5 w-5 mr-2 text-green-600" />
            Best Practices
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li>• Regular monitoring of plants</li>
            <li>• Early detection is crucial</li>
            <li>• Follow treatment recommendations carefully</li>
            <li>• Document the treatment progress</li>
            <li>• Prevention is better than cure</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <MessageCircle className="h-5 w-5 mr-2 text-green-600" />
            Contact Support
          </h2>
          <p className="text-gray-600 mb-4">
            Need additional help? Our support team is here to assist you.
          </p>
          <a
            href="mailto:support@plantcare.com"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};