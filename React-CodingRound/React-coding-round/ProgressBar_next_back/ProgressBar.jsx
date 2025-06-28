import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ steps, activeStep, setActiveStep }) => {
  const handlePrevStep = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleNextStep = () => {
    setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const calculateCurrentWidth = () => {
    return `${(100 / (steps.length - 1)) * activeStep}%`;
  };

  return (
    <div className="my-6">
      <div className="flex w-4/5 justify-between items-center mx-auto bg-slate-200 rounded-lg">
        {steps && steps.length > 0
          ? steps.map((stepItem, index) => (
              <div
                key={index}
                style={{ width: calculateCurrentWidth() }}
                className={`step ${index <= activeStep ? "active" : ""}`}
              >
                {stepItem}
              </div>
            ))
          : null}
      </div>
      <div className="btn-wrapper flex justify-center items-center mt-6 gap-4">
        <button
          onClick={handlePrevStep}
          disabled={activeStep === 0}
          className="pagination-btn relative inline-flex items-center px-4 py-2 text-sm font-semibold hover:text-black 
           text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 bg-yellow-700"
        >
          Previous Step
        </button>
        <button
          onClick={handleNextStep}
          disabled={activeStep === steps.length - 1}
          className="pagination-btn relative inline-flex items-center px-4 py-2 text-sm font-semibold hover:text-black 
           text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 bg-yellow-700"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
