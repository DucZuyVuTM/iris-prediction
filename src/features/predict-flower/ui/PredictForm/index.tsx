import React, { useState } from 'react';
import { predictFlower } from '../../api/predict';
import { FlowerMeasurements } from '../../../../entities/flower/model/types';
import { Plus, Search, Trash2 } from 'lucide-react';

interface PredictFormProps {
  onSetResults: (results: string[]) => void;
}

export const PredictForm = ({ onSetResults }: PredictFormProps) => {
  const [flowers, setFlowers] = useState([
    { sepal_length: '', sepal_width: '', petal_length: '', petal_width: '' } as FlowerMeasurements
  ]);  

  const addFlower = () => {
    setFlowers([...flowers, { sepal_length: '', sepal_width: '', petal_length: '', petal_width: '' }]);
  };

  const removeFlower = (index: number) => {
    const newFlowers = flowers.filter((_, i) => i !== index);
    setFlowers(newFlowers);
  };

  const handleInputChange = (index: number, field: keyof FlowerMeasurements, value: string) => {
    const newFlowers = [...flowers];
    newFlowers[index][field] = parseFloat(value) || '';
    setFlowers(newFlowers);
  };

  const handlePredict = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const sanitizedData = flowers.map(flower => ({
        sepal_length: flower.sepal_length === '' ? 0 : flower.sepal_length,
        sepal_width: flower.sepal_width === '' ? 0 : flower.sepal_width,
        petal_length: flower.petal_length === '' ? 0 : flower.petal_length,
        petal_width: flower.petal_width === '' ? 0 : flower.petal_width,
      }));

      const response = await predictFlower(sanitizedData);
      onSetResults(response.predictions);
    } catch (error) {
      console.error("AI Error:", error);
    }
  };

  return (
    <form onSubmit={handlePredict} className="p-4 space-y-4">
      {flowers.map((flower, index) => (
        <div key={index} className="flex flex-wrap items-center gap-2 p-3 border rounded bg-gray-50 relative">
          <span className="font-bold mr-2 text-gray-600">#{index + 1}</span>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 flex-1">
            <input
              type="number" step="0.1" placeholder="Sepal Length" id="sepal_length"
              value={flower.sepal_length}
              onChange={(e) => handleInputChange(index, 'sepal_length', e.target.value)}
              className="border p-2 rounded"
              required
            />
            <input
              type="number" step="0.1" placeholder="Sepal Width" id="sepal_width"
              value={flower.sepal_width}
              onChange={(e) => handleInputChange(index, 'sepal_width', e.target.value)}
              className="border p-2 rounded"
              required
            />
            <input
              type="number" step="0.1" placeholder="Petal Length" id="petal_length"
              value={flower.petal_length}
              onChange={(e) => handleInputChange(index, 'petal_length', e.target.value)}
              className="border p-2 rounded"
              required
            />
            <input
              type="number" step="0.1" placeholder="Petal Width" id="petal_width"
              value={flower.petal_width}
              onChange={(e) => handleInputChange(index, 'petal_width', e.target.value)}
              className="border p-2 rounded"
              required
            />
          </div>

          {/* Delete button - Only display if there is more than 1 line */}
          {flowers.length > 1 && (
            <button
              type="button"
              onClick={() => removeFlower(index)}
              className="flex items-center gap-2 bg-red-500 text-white px-2 self-stretch sm:px-3 sm:self-center sm:py-1 rounded hover:bg-red-600"
            >
              <Trash2 className="w-4 h-4" />
              <p className="hidden sm:inline">Delete</p>
            </button>
          )}
        </div>
      ))}

      <div className="flex gap-4 mt-6 justify-center">
        <button
          type="button"
          onClick={addFlower}
          className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <p>Add<span className="hidden sm:inline"> Flower Data</span></p>
        </button>

        <button
          type="submit"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-bold"
        >
          <Search className="w-5 h-5 hidden sm:inline" />
          <p className="inline">Predict All</p>
        </button>
      </div>
    </form>
  );
};
