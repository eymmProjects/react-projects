import React, { useState } from "react";

// function Step({ step, activeStep }) {
//   return (
//     <div
//       className={`step ${
//         activeStep === step
//           ? "bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center"
//           : ""
//       } bg-gray-500 text-white rounded-full w-12 h-12 flex items-center justify-center`}
//     >
//       <div className="">
//         <h2 className="text-2xl font-bold"> {step}</h2>
//       </div>
//     </div>
//   );
// }

function Step({ step, activeStep }) {
  return (
    <div className={`flex flex-col items-center w-24 m-4`}>
      <div
        className={`${
          activeStep === step
            ? "bg-blue-500 text-white"
            : "bg-gray-500 text-gray-200"
        } rounded-full w-12 h-12 flex items-center justify-center`}
      >
        <h2 className="font-bold text-lg">{step}</h2>

        {/* {activeStep === step && (
          <h1 className="mt-2 text-4x1 text-center  text-gray-500">
            {description}
          </h1>
        )} */}
      </div>
    </div>
  );
}

export const StepProcess = () => {
  const [activeStep, setActiveStep] = useState(1);
  const content = [
    { step: 1, description: "Learn React" },
    { step: 2, description: "Create Project" },
    { step: 3, description: "Find Job" },
  ];
  const currentStep = content.find((step) => step.step === activeStep);

  return (
    <div className="bg-gray-200 p-10 w-[500px]">
      <div className="flex justify-between px-10   space-x-4">
        {content.map((step) => (
          <Step key={step} step={step.step} activeStep={activeStep} />
        ))}
      </div>
      <h1 className="mt-2 text-6x1 text-center font-bold text-gray-500">
        {currentStep.description}
      </h1>

      <div className="flex justify-between mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          disabled={activeStep === 1}
          onClick={() => setActiveStep((prev) => prev - 1)}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          disabled={activeStep === 3}
          onClick={() => setActiveStep((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
