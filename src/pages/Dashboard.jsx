import React from "react";
import NavBar from "../components/NavBar";
import EventCards from "../components/EventCards";
import Banner from "../components/Banner";
import { useState, useEffect } from "react"
import api from "../middleware/api"

const Dashboard = () => {
  const [events, setEvents] = useState([])

  const fetchEvents = async () => {
    const response = await api.get("/api/events/allevents")
    setEvents(response.data.events)
  }
  useEffect(() => {
    fetchEvents()
  }, [])

  return (
    <div className="font-sans">
      {/* Header */}
     <NavBar/>
      {/* Hero Section */}
      <Banner/>
        

      {/* Features Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-green-500 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3">Acity Premier League</h3>
              <p className="mt-2 leading-relaxed">
                Asare emerged as the Top Goal Scorer of this semester's Acity Premier League.
              </p>
            </div>
            <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3">FIE Business Fair</h3>
              <p className="mt-2 leading-relaxed">
                Level 100's & 200's hosted an FIE business fair to end the semester, exhibiting their innovative business ideas.
              </p>
            </div>
            <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3">Midnight Munchies</h3>
              <p className="mt-2 leading-relaxed">
                Midnight Munchies satisfies your late-night cravings every Wednesday and weekend.
              </p>
            </div>
            <div className="bg-pink-500 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3">PG Boba Delivery</h3>
              <p className="mt-2 leading-relaxed">
                PG Boba Delivery is a service that delivers boba to your door on wednesdays and weekends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 id="upcoming-events" className="text-2xl font-bold text-center mb-8">
            Upcoming Events
          </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {events.map((event) => (
                  <EventCards event={event} />
                ))}
              
              </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
