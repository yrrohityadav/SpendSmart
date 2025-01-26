import React from 'react';
import { PlantAnalysis } from '../types';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface AnalysisResultProps {
  analysis: PlantAnalysis | null;
  isLoading: boolean;
}

export const AnalysisResult: React.FC<AnalysisResultProps> = ({ analysis, isLoading }) => {
  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton height={24} />
        <Skeleton count={3} />
        <Skeleton height={100} />
      </div>
    );
  }

  if (!analysis) return null;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          {analysis.disease_name}
        </h2>
        <div className="mt-1">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Confidence: {(analysis.confidence * 100).toFixed(1)}%
          </span>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900">Description</h3>
        <p className="mt-2 text-gray-600">{analysis.description}</p>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900">Treatment</h3>
        <ul className="mt-2 list-disc list-inside space-y-2">
          {analysis.treatment.map((step, index) => (
            <li key={index} className="text-gray-600">{step}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};