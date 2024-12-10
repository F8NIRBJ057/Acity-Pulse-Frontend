import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthPage = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center' style={{
        backgroundImage: "url(acity-campus.jpg)",
        backgroundSize: "fit", // Ensures the image covers the entire header
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat",
    }}>
      <Outlet/>
    </div>
  )
}

export default AuthPage
