export interface PlantAnalysis {
  disease_name: string;
  confidence: number;
  description: string;
  treatment: string[];
}

export interface PlantIdResponse {
  health_assessment: {
    diseases: Array<{
      name: string;
      probability: number;
      disease_details: {
        description: string;
        treatment: {
          prevention: string[];
          chemical: string[];
          biological: string[];
        };
      };
    }>;
  };
}

export interface AnalysisResponse {
  result: PlantAnalysis;
  status: 'success' | 'error';
  message?: string;
}