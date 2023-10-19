import React, {useContext} from 'react'
import { StepperContext } from '../../contexts/StepperContext'

function Payments() {

  const {userData, setUserData} = useContext(StepperContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  }

  return (
    <div className="flex flex-col">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Credit Card
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange = {handleChange}
            value = {userData["creditcard"] || ""}
            name = "creditcard"
            placeholder = "Credit Card Number"
            className = "p-1 px-2 appearance-none outline-none w-full text-gray-700"
          />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Exp
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange = {handleChange}
            value = {userData["exp"] || ""}
            name = "exp"
            type = "date"
            placeholder = "YY/MM/DD"
            className = "p-1 px-2 appearance-none outline-none w-full text-gray-700"
          />
        </div>
      </div>
    </div>
  )
}

export default Payments