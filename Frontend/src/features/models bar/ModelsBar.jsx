import React, { useContext } from "react";
import { BuilderDataContext } from "../../../Store/Builder.context";

const availableModels = [
  {
    id: "Hodies_shirt",
    name: "Hodies Shirts",
    glbPath: "/Glbs/HODIES SHIRTS.glb",
    imagePath: "/Pngs/HODIES SHIRTS.png",
  },
  {
    id: "Hodies",
    name: "Hodies",
    glbPath: "/Glbs/HODIES.glb",
    imagePath: "/Pngs/HODIES.png",
  },
  {
    id: "Polo_shirt",
    name: "Polo Shirts",
    glbPath: "/Glbs/POLO SHIRTS.glb",
    imagePath: "/Pngs/POLO SHIRTS.png",
  },
  {
    id: "PullOverLongSleeve",
    name: "Pull Over",
    glbPath: "/Glbs/PULL OVER LONG SLEEVES.glb",
    imagePath: "/Pngs/PULL OVER LONG SLEEVES.png",
  },
  {
    id: "SleevelessHodies",
    name: "Sleeveless",
    glbPath: "/Glbs/SLEEVELESS HODIES.glb",
    imagePath: "/Pngs/SLEEVELESS HODIES.png",
  },
];

const ModelsBar = ({ onSelectModel, activeModelPath }) => {
  const { setActiveModel } = useContext(BuilderDataContext);
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
      <nav className="flex flex-row items-center gap-3 p-2 bg-gray-100 rounded-full border border-gray-300 shadow-sm">
        {availableModels.map((model) => (
          <button
            key={model.id}
            onClick={() => {
              onSelectModel?.(model.glbPath);
              setActiveModel(model.id);
              console.log(model.id);
            }}
            title={model.name}
            className={`relative w-14 h-14 rounded-full overflow-hidden shrink-0 bg-white
              ${
                activeModelPath === model.glbPath
                  ? "border-4 border-blue-500"
                  : "border border-gray-200 hover:border-gray-400"
              }`}
          >
            <img
              src={model.imagePath}
              alt={model.name}
              className=" w-full h-full object-cover top-0 left-0.5"
              onError={(e) => {
                // Fallback just in case the image is missing
                e.target.onerror = null;
                e.target.src = `https://placehold.co/150x150/dddddd/333333?text=${model.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}`;
              }}
            />
          </button>
        ))}
      </nav>
    </div>
  );
};

export default ModelsBar;
