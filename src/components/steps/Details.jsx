import React, {useContext} from 'react'
import { StepperContext } from '../../contexts/StepperContext'

function Details() {
  const {userData, setUserData} = useContext(StepperContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  }; 
  return (
    <div className="flex flex-col">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Name
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange = {handleChange}
            value = {userData["name"] || ""}
            name = "name"
            placeholder = "Name"
            className = "p-1 px-2 appearance-none outline-none w-full text-gray-700"
          />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Last Name
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange = {handleChange}
            value = {userData["lastname"] || ""}
            name = "lastname"
            placeholder = "Last Name"
            className = "p-1 px-2 appearance-none outline-none w-full text-gray-700"
          />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Address
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange = {handleChange}
            value = {userData["address"] || ""}
            name = "address"
            placeholder = "Address"
            className = "p-1 px-2 appearance-none outline-none w-full text-gray-700"
          />
        </div>
      </div>
    </div>
  )
}

export default Details