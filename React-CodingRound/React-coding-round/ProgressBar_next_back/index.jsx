import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const StepProgressBar = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
  return (
    <div className="step-progress-Bar">
      <h1 className="text-3xl font-bold text-center mt-6 text-red-600">
        Step Progress Bar
      </h1>
      <ProgressBar
        steps={steps}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
    </div>
  );
};

export default StepProgressBar;
