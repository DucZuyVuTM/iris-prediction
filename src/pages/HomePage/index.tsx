import { useState } from "react";
import { PredictForm } from "../../features/predict-flower/ui/PredictForm";
import { ResultDisplayer } from "../../features/predict-flower/ui/ResultDisplayer";

export default function HomePage() {
  const [results, setResults] = useState<string[] | null>(null);

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 border rounded shadow">
          <h3 className="px-4 text-lg font-bold text-center">Enter Iris data to predict</h3>
          <PredictForm onSetResults={setResults} />
          {results &&
            <ResultDisplayer results={results} />
          }
        </div>
      </div>
    </div>
  );
}
