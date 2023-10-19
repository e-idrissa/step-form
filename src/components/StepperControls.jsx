import React from 'react'

const StepperControls = ({ handleClick, currentStep, steps }) => {
  return (
    <div className="container flex justify-around mt-4 mb-8">
      {/* back button */}
      <button 
      onClick = {() => handleClick()}
      className={`bg-white text-salte-400 uppercase py-2 px-4 rounded-xl font-semibold opacity-50 cursor-not-allowed border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${currentStep !== 1 
        ? " opacity-100 cursor-pointer " 
        : ""}`}>
        back
      </button>
      {/* next button */}
      <button 
      onClick = {() => handleClick("next")}
      className="bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out">
        {currentStep === steps.length-1 ? "Confirm" : "Next"}
      </button>
    </div>
  )
}

export default StepperControls