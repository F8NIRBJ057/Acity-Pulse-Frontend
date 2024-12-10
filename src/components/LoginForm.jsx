import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from "../middleware/api"
import { toast } from "react-toastify"
const LoginForm = () => {
    const navigate= useNavigate()
    const [userDetails, setUserDetails] = useState({
        email:"",
        password:""
    })
    const [isLoading, setIsLoading] = useState(false)

    // const handleLogin = async (e) =>{
    //     e.preventDefafult()

    //     setIsLoading(true)
    //     try{
    //        const response = await api.post("/api/auth/login",userDetails)
    //        if(response.data.msg === "User login succesfully"){
    //         isLoading(false)
    //         alert(response.data.msg)
    //        }

    //        if(response.data.error){
    //         isLoading(false)
    //         alert(response.data.msg)
    //        }
    //     }catch(error){
    //         setIsLoading(false)
    //         alert("Error Logging in")
    //         console.error("Error Login",error)
    //     }
    // }

    const handleLogin = async (e) =>{
        e.preventDefault()
        setIsLoading(true)
            try{
               const response = await api.post("/api/auth/login",userDetails)
               if(response.data.msg === "User login succesfully"){
                setIsLoading(false)
                toast.success(response.data.msg)
                localStorage.setItem("User",JSON.stringify(response.data.userDetails))
                navigate("/home")
               }
    
               if(response.data.error){
                setIsLoading(false)
                toast.error(response.data.msg)
               }
            }catch(error){
                setIsLoading(false)
                toast.error(error.response.data.error || "Error Logging in")
                console.error("Error Login",error)
            }
        // console.log(userDetails)
    }
  return (
    <div  className='h-screen w-screen flex justify-center items-center text-black'>
      
      <div className='bg-white p-4 flex flex-col gap-4 w-5/12 rounded-md'>
            <h1 className='text-center'>Login</h1>

            <form onSubmit={handleLogin} className='flex flex-col gap-5'>
                <div className='flex flex-col'>
                    <label htmlFor="email">Email:</label>
                    <input onChange={e=> setUserDetails({...userDetails,email:e.target.value})} className='p-2 bg-gray-200' type="email"  />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="password">Password:</label>
                    <input onChange={e=> setUserDetails({...userDetails,password:e.target.value})} className='p-2 bg-gray-200' type="password" />
                </div>

                <button disabled={isLoading} type="submit" className='bg-black text-white px-4 py-3'>{isLoading?"Logging in...":"Login"}</button>
                <p>Don't have an account?<Link className="text-blue-200 font-bold" to="signup">Signup</Link></p>
            </form>
      </div>
    </div>
  )
}

export default LoginForm
