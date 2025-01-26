import React from 'react';
import { Leaf, Shield, Zap } from 'lucide-react'; // Changed Plant to Leaf

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About PlantCare</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          PlantCare is an advanced plant disease detection system that helps gardeners and farmers
          identify and treat plant diseases quickly and accurately.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="text-center p-6">
          <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4">
            <Leaf className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Instant Analysis</h3>
          <p className="text-gray-600">
            Upload a photo of your plant and get immediate disease detection results.
          </p>
        </div>

        <div className="text-center p-6">
          <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4">
            <Shield className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Treatment Guidance</h3>
          <p className="text-gray-600">
            Receive detailed treatment recommendations for identified plant diseases.
          </p>
        </div>

        <div className="text-center p-6">
          <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4">
            <Zap className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">AI-Powered</h3>
          <p className="text-gray-600">
            Utilizing advanced AI technology to provide accurate disease identification.
          </p>
        </div>
      </div>

      <div className="bg-green-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            Our platform uses state-of-the-art machine learning models trained on thousands of plant
            disease images. When you upload a photo, our AI analyzes it for signs of common plant
            diseases and provides a detailed analysis including:
          </p>
          <ul className="list-disc list-inside text-gray-600 ml-4">
            <li>Disease identification with confidence score</li>
            <li>Detailed description of the disease</li>
            <li>Treatment recommendations</li>
            <li>Preventive measures</li>
          </ul>
        </div>
      </div>
    </div>
  );
};