interface ResultDisplayerProps {
  results: string[];
}

export const ResultDisplayer = ({ results }: ResultDisplayerProps) => {
  return (
    <div className="flex flex-col">
      {/* Display general results title */}
      <div className="text-center py-2 border-t border-gray-300">
        <p className="font-medium">
          <p className="inline">Results: </p>
          <strong className="text-blue-600">
            {results.length} prediction{results.length !== 1 ? 's' : ''}
          </strong>
        </p>
      </div>

      {/* Traverse the results array */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 flex-1">
        {results.map((result, index) => (
          <div 
            key={index} 
            className="flex flex-wrap items-center gap-2 p-3 border rounded bg-green-50 border-green-200 relative animate-in fade-in duration-300"
          >
            <span className="font-bold mr-2 text-gray-600">
              #{index + 1}
            </span>
            <span className="text-gray-800">
              Prediction: <strong>{result}</strong>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
