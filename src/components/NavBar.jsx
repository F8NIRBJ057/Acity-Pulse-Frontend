import React from 'react'
import { logout } from '../middleware/api'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate();

  const user = localStorage.getItem("User");
  const parsedUser = user ? JSON.parse(user) : null;

  return (
    <header className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">City Pulse</h1>
      <nav>
        {parsedUser ? (
          <ul className="flex space-x-6">
            <li>
              <button onClick={() => navigate('/home')} className="hover:text-yellow-300">Home</button>
            </li>
            <li>
              <button onClick={(e) => {
                e.preventDefault();
                document.querySelector('#upcoming-events').scrollIntoView({ behavior: 'smooth' });
              }} className="hover:text-yellow-300">Events</button>
            </li>
            <li>
              <button onClick={() => navigate('/calendar')} className="hover:text-yellow-300">Calendar</button>
            </li>
            {parsedUser?.role === "admin" && (
              <li>
                <button onClick={() => navigate('/admin')} className="hover:text-yellow-300">Create Event</button>
              </li>
            )}
            <li>
              <button onClick={logout} className="hover:text-yellow-300 cursor-pointer">Logout</button>
            </li>
          </ul>
        ) : (
          <ul className="flex space-x-6">
            <li>
              <button onClick={() => navigate('/')} className="hover:text-yellow-300">Login</button>
            </li>
            <li>
              <button onClick={() => navigate('/signup')} className="hover:text-yellow-300">Register</button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}

export default NavBar
