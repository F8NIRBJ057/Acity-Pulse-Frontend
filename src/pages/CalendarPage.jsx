import React, { useState, useEffect } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import NavBar from '../components/NavBar'
import api from '../middleware/api'

const locales = {
  'en-US': import('date-fns/locale/en-US')
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const CalendarPage = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get("/api/events/allevents")
        // Transform the events data to match the calendar format
        const formattedEvents = response.data.events.map(event => ({
          title: event.name,
          start: new Date(event.event_date + 'T' + event.event_time),
          end: new Date(event.event_date + 'T' + event.event_time),
          description: event.description,
          location: event.location,
          allDay: false
        }))
        setEvents(formattedEvents)
      } catch (error) {
        console.error("Error fetching events:", error)
      }
    }

    fetchEvents()
  }, [])

  const eventStyleGetter = (event) => {
    return {
      style: {
        backgroundColor: '#FCD34D', // Yellow background to match theme
        color: '#1F2937', // Dark gray text
        border: 'none',
        borderRadius: '4px'
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Event Calendar</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 'calc(100vh - 250px)' }}
            eventPropGetter={eventStyleGetter}
            tooltipAccessor={event => `${event.title}\nLocation: ${event.location}\n${event.description}`}
          />
        </div>
      </div>
    </div>
  )
}

export default CalendarPage
