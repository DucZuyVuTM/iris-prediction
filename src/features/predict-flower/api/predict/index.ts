import { apiInstance } from '../../../../shared/api';
import { FlowerMeasurements, PredictionResponse } from '../../../../entities/flower/model/types';

export const predictFlower = async (data: FlowerMeasurements[]): Promise<PredictionResponse> => {
  const response = await apiInstance.post<PredictionResponse>('/api/predict/', data);
  return response.data;
};
