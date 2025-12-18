import * as motion from "motion/react-client";
import { useState } from "react";

const boxStyle = {
  width: 100,
  height: 100,
  backgroundColor: "#ff0088",
  borderRadius: 8,
};

const RotatingBoxWithControls = () => {
  const [degree, setDegree] = useState(10);

  const handleRangeChange = (e) => {
    setDegree(Number(e.target.value));
  };

  return (
    <div className="bg-green-50 min-h-screen flex flex-col items-center justify-center gap-6">
      <motion.div
        style={boxStyle}
        animate={{ rotate: degree }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 14,
        }}
      />

      <label className="flex flex-col gap-2">
        <span className="text-sm text-gray-600">Rotation: {degree}°</span>
        <input
          type="range"
          min={0}
          max={360}
          step={1}
          value={degree}
          onChange={handleRangeChange}
        />
      </label>
    </div>
  );
};

export default RotatingBoxWithControls;
