export interface FlowerMeasurements {
  sepal_length: number | '';
  sepal_width: number | '';
  petal_length: number | '';
  petal_width: number | '';
}

export interface PredictionResponse {
  predictions: string[];
}
