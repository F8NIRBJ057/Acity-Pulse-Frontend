import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import AuthPage from './pages/AuthPage'
import Dashboard from './pages/Dashboard'
import EventRegistrationPage from './pages/EventRegistrationPage'
import AdminPage from './pages/AdminPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CalendarPage from './pages/CalendarPage'
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
                <Route path='' element={<AuthPage/>}> 
                <Route path='/' element={<LoginForm/>}/>
                <Route path='/signup' element={<SignUpForm/>}/>
                </Route>


                <Route path='/home' element={<Dashboard/>}></Route>
                <Route path='/event-registration' element={<EventRegistrationPage/>}></Route>
                <Route path='/admin' element={<AdminPage/>}></Route>
                <Route path='/calendar' element={<CalendarPage/>}></Route>
      </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default App
