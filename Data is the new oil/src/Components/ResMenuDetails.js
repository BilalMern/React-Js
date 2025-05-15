import { useState } from "react";
import resCardData from "../utils/mockData";
import ResMenuDetailsBody from "./ResMenuDetailsBody";

const ResMenuDetails = () => {
  const [activeId, setActiveId] = useState(null);

  const handleToggle = (id) => {
    setActiveId(prev => (prev === id ? null : id)); // toggle logic
  };

  return (
    <div className="ResMenuDetails flex flex-col items-center gap-5 mb-10">
      <h2 className="font-bold text-2xl">
        <span className="text-red-500">Recommended</span>
      </h2>

      {resCardData.map((res) => (
        <div
          key={res.id}
          className="px-4 shadow-md bg-gray-300 w-6/12 text-center rounded-md py-1.5"
        >
          <div className="flex justify-between items-center">
            <h1 className="font-bold">{res.cuisine}</h1>
            <button onClick={() => handleToggle(res.id)}>⬇️</button>
          </div>

          {activeId === res.id && (
            <div className="mt-2">
              <ResMenuDetailsBody data={res} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ResMenuDetails;

