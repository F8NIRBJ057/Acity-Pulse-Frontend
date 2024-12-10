import React from 'react'
import NavBar from '../components/NavBar'
import api from '../middleware/api'
import { toast } from 'react-toastify'
import { useState } from 'react'

const EventRegistrationPage = () => {
    const [rsvp, setRsvp] = useState(false)

    const event = JSON.parse(localStorage.getItem("event"))
    const user = JSON.parse(localStorage.getItem("User"))
    // console.log(event)
    
    const handleRsvp = async () => {
        setRsvp(true)
        const response = await api.post("/api/events/confirmrsvp", {event_id: event.id, user_id: user.id})
        if(response.data.msg === "RSVP confirmed successfully"){
            setRsvp(false)
            toast.success("RSVP confirmed successfully")
        }else{
            setRsvp(false)
            toast.error("Error confirming event")
        }
    }
    
    return (
        <div className="min-h-screen bg-gray-100">
            <NavBar />
            
            <div className="container mx-auto px-6 py-8">
                <h1 className="text-3xl font-bold text-center mb-8">Event Registration</h1>
                
                <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
                    <div className="space-y-4">
                        <div className="border-b pb-4">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                                {event.name}
                            </h2>
                            <p className="text-gray-600 mb-4">{event.description}</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="text-gray-700">{event.event_date}</span>
                            </div>
                            
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-gray-700">{event.event_time}</span>
                            </div>
                            
                            <div className="flex items-center md:col-span-2">
                                <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-gray-700">{event.location}</span>
                            </div>
                        </div>
                        
                        <div className="mt-6">
                            <button disabled={rsvp} onClick={handleRsvp} className="w-full bg-yellow-400 text-gray-800 py-2 px-4 rounded-md font-semibold hover:bg-yellow-300 transition duration-300">
                                {rsvp ? "Confirming RSVP..." : "Register for Event"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventRegistrationPage
