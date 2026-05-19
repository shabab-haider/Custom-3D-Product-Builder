import React from "react";
import ProductCanvas from "./features/canvas/ProductCanvas";
import ModelsBar from "./features/models bar/ModelsBar";

const App = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <ProductCanvas />
      <ModelsBar />
    </div>
  );
};

export default App;
