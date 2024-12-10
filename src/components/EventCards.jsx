import React from 'react'
import { useNavigate } from 'react-router-dom'
const EventCards = ({event}) => {
    const navigate = useNavigate()

    const handleRegister = () => {
        if(localStorage.getItem("User")){
            localStorage.setItem("event", JSON.stringify(event))
            navigate("/event-registration")
        }else{
            navigate("/")
        }
    }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* <img
        src="https://via.placeholder.com/300"
        alt="Course"
        className="w-full h-48 object-cover"
      /> */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{event.name}</h3>
        <p className="mt-2 text-sm text-gray-600">{event.description}</p>
      </div>
      <div className="flex justify-end items-center p-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default EventCards
