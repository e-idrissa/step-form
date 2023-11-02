import React, {useEffect, useState, useRef} from 'react'

function Stepper({steps,currentStep}) {

  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps]
    let count = 0;
    while(count < newSteps.length){
      //current steps
      if(count === stepNumber){
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: false,
        }
        count++;
      }
      //step completed
      else if(count <= stepNumber){
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        }
        count++;
      }
      //step pending
      else{
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        }
        count++;
      }
    }
    return newSteps;
  };

  useEffect(() => {
    //create object
    const stepsState = steps.map((step, index) => Object.assign(
      {},
      {
        description: step,
        completed: false,
        highlighted: index === 0 ? true : false,
        selected: index !== 0 ? true : false,
      }
    ))
    stepRef.current = stepsState;
    const current = updateStep(currentStep-1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) =>{
    return (
      <div
      key = {index}
      className={index !== newStep.length-1 ? `flex items-center justify-center ${index === newStep.length-2 ? "w-fit" : "w-full"}` : "hidden"}
      >
        <div className="relative flex flex-col items-center justify-center text-teal-600">
          <div className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3 
            ${step.selected ? " text-green-600 font-bold border border-green-600 " : "" }`}>
            {/* Display numbers */}
            {step.completed
              ? (<span className="text-white bg-green-600 font-bold text-xl w-12 h-12 flex items-center justify-center rounded-full">{index+1}</span>) 
              : (index+1)
            }
          </div>
          <div className={`absolute top-0 none text-center mt-16 w-32 text-xs font-medium uppercase ${step.highlighted 
            ? "text-gray-700" 
            : "text-gray-400"}`}>
            {/* Display Description */}
            {step.description}
          </div>
        </div>
        <div className={`flex-auto transition duration-500 ease-in-out 
        ${index+1 !== 4 
          ? "border-t-2"
          : "hidden"}
        ${step.selected 
          ? "border-green-600" 
          : "border-gray-300"}`}>
          {/* Display Line */}
        </div> 
      </div>
    );
  });

  return (
    <div className="mx-16 p-4 flex justify-between items-center">
      {displaySteps}
    </div>
  )
}

export default Stepper