import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import api from '../middleware/api'

const AdminPage = () => {
  const [eventDetails, setEventDetails] = useState({
    name: '',
    description: '',
    event_date: '',
    event_time: '',
    location: '',
    capacity: '',
    available_seats: '',
    type: '',
    created_by: JSON.parse(localStorage.getItem('User'))?.id || ''
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await api.post('/api/events/createevent', eventDetails)
      if (response.data.msg === "Event created successfully") {
        alert('Event created successfully')
        // Reset form
        setEventDetails({
          name: '',
          description: '',
          event_date: '',
          event_time: '',
          location: '',
          capacity: '',
          available_seats: '',
          type: '',
          created_by: JSON.parse(localStorage.getItem('User'))?.id || ''
        })
      }
    } catch (error) {
      console.error('Error creating event:', error)
      alert('Error creating event')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Create New Event</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Event Name</label>
                <input
                  type="text"
                  value={eventDetails.name}
                  onChange={(e) => setEventDetails({...eventDetails, name: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Event Type</label>
                <select
                  value={eventDetails.type}
                  onChange={(e) => setEventDetails({...eventDetails, type: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                  required
                >
                  <option value="">Select Type</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Seminars">Seminars</option>
                  <option value="Club activities">Club activities</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  value={eventDetails.event_date}
                  onChange={(e) => setEventDetails({...eventDetails, event_date: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Time</label>
                <input
                  type="time"
                  value={eventDetails.event_time}
                  onChange={(e) => setEventDetails({...eventDetails, event_time: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Capacity</label>
                <input
                  type="number"
                  min="0"
                  value={eventDetails.capacity}
                  onChange={(e) => setEventDetails({...eventDetails, capacity: e.target.value, available_seats: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  value={eventDetails.location}
                  onChange={(e) => setEventDetails({...eventDetails, location: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                value={eventDetails.description}
                onChange={(e) => setEventDetails({...eventDetails, description: e.target.value})}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-yellow-400 text-gray-800 px-6 py-2 rounded-md font-semibold hover:bg-yellow-300 transition duration-300 disabled:opacity-50"
              >
                {isLoading ? 'Creating...' : 'Create Event'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminPage
