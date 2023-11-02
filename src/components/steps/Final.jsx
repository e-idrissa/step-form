import React, {useContext} from 'react'
import { StepperContext } from '../../contexts/StepperContext'

function Final() {

  const userData = useContext(StepperContext);
  console.log(userData);

  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">
        <div className="text-green-500">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 -960 960 960"
            fill="currentColor"
            className="w-24 h-24"
          >
            <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
          </svg>
        </div>
        <div className="mt-3 text-xl font-semi-bold uppercase text-green-500">
          Congratulations!
        </div>
        <div className="text-lg font-semibold text-gray-500">
          Your Account has been created.
        </div>
        <a href="/" className="mt-10">
          <button className="h-10 px-5 capitalize text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100">
            close
          </button>
        </a>
      </div>
    </div>
  )
}

export default Final