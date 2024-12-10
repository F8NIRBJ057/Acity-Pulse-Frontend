import React from 'react'
import { logout } from '../middleware/api'
const NavBar = () => {
  return (
    <header className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold">City Pulse</h1>
    <nav>
      {localStorage.getItem("User") ? (
        <ul className="flex space-x-6">
          <li>
          <a href="/home" className="hover:text-yellow-300">Home</a>
        </li>
        <li>
          <a href="/home#upcoming-events" className="hover:text-yellow-300" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#upcoming-events').scrollIntoView({ behavior: 'smooth' });
          }}>Events</a>
        </li>
        <li>
          <a href="/calendar" className="hover:text-yellow-300">Calendar</a>
        </li>

        {JSON.parse(localStorage.getItem("User")).role === "admin" && (
        <li>
          <a href="/admin" className="hover:text-yellow-300">Create Event</a>
        </li>
        )}

        <li>
          <a className="hover:text-yellow-300 cursor-pointer" onClick={logout}>Logout</a>
        </li>

        </ul>
      ) : (
        <ul className="flex space-x-6">
          <li>
          <a href="/" className="hover:text-yellow-300">Login</a>
        </li>
        <li>
          <a href="/signup" className="hover:text-yellow-300">Register</a>
        </li>
        </ul>
      )}
    </nav>
  </header>
  )
}

export default NavBar
