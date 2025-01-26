import axios from 'axios';
import { AnalysisResponse, PlantIdResponse } from '../types';

const API_KEY = import.meta.env.VITE_PLANT_ID_API_KEY;
const API_URL = 'https://api.plant.id/v2/health_assessment';

export const analyzePlantDisease = async (base64Image: string): Promise<AnalysisResponse> => {
  if (!API_KEY) {
    return {
      status: 'error',
      message: 'Plant.id API key is missing. Please add it to your .env file.'
    };
  }

  try {
    const response = await axios.post<PlantIdResponse>(API_URL, {
      images: [base64Image],
      modifiers: ["disease_details", "disease_similar_images"],
      disease_details: ["description", "treatment"],
    }, {
      headers: {
        'Api-Key': API_KEY,
        'Content-Type': 'application/json',
      },
    });

    const diseases = response.data.health_assessment.diseases;
    
    if (!diseases || diseases.length === 0) {
      return {
        status: 'error',
        message: 'No diseases detected in the image. Please ensure the image shows clear symptoms.'
      };
    }

    const mostLikelyDisease = diseases[0];
    const treatments = [
      ...(mostLikelyDisease.disease_details.treatment.prevention || []),
      ...(mostLikelyDisease.disease_details.treatment.chemical || []),
      ...(mostLikelyDisease.disease_details.treatment.biological || [])
    ];

    return {
      status: 'success',
      result: {
        disease_name: mostLikelyDisease.name,
        confidence: mostLikelyDisease.probability,
        description: mostLikelyDisease.disease_details.description,
        treatment: treatments
      }
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        return {
          status: 'error',
          message: 'Invalid API key. Please check your Plant.id API key.'
        };
      }
      return {
        status: 'error',
        message: `API Error: ${error.response?.data?.message || error.message}`
      };
    }
    return {
      status: 'error',
      message: 'Failed to analyze plant disease. Please try again.'
    };
  }
};