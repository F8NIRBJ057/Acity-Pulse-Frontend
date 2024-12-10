
import React, { useState } from 'react';
import Select from 'react-select';
import { Link, useNavigate } from 'react-router-dom';
import api from "../middleware/api"
import { toast } from "react-toastify"

const SignUpForm = () => {
    const navigate= useNavigate()
  const [userDetails, setUserDetails] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    eventPreferences:[]
  });

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalDetails = {
        name:userDetails.name,
        email:userDetails.email,
        password:userDetails.password,
        role:"user",
        preferences:userDetails.eventPreferences
    }

    setIsLoading(true)

    if(userDetails.password !== userDetails.confirmPassword){
        setIsLoading(false)
        toast.error("Passwords don't match")
    }

    try{
        const response = await api.post("/api/auth/register",finalDetails)
        if(response.data.msg === "User register succesfully"){
            setIsLoading(false)
            toast.success(response.data.msg)
            localStorage.setItem("User", JSON.stringify(response.data.user))
            navigate("/home")
        }
        
        if(response.data.error){
            setIsLoading(false)
            toast.error(response.data.error)
        }

    }catch(error){
        setIsLoading(false)
        toast.error("An error occured")
        console.error(error)
    }
    // console.log(userDetails)
  };

  const options = [
    { value: 'Workshop', label: 'Workshop' },
    { value: 'Seminars', label: 'Seminars' },
    { value: 'Club activities', label: 'Club activities' }
  ]

  const handlePreferencesChange = (selectedOptions) => {
    // Map selected options to their values
    const preferences = selectedOptions.map(option => option.value);
    setUserDetails({ ...userDetails, eventPreferences: preferences });
};

  return (
    <div  className='h-screen w-screen flex justify-center items-center text-black' >
      
      <div className='bg-white p-4 flex flex-col gap-4 w-5/12 rounded-md'>
            <h1 className='text-center'>SignUp</h1>

            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                <div className='flex flex-col'>
                    <label htmlFor="name">Name:</label>
                    <input onChange={e=> setUserDetails({...userDetails,name:e.target.value})} className='p-2 bg-gray-200' type="test"  />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="email">Email:</label>
                    <input onChange={e=> setUserDetails({...userDetails,email:e.target.value})} className='p-2 bg-gray-200' type="email"  />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="password">Password:</label>
                    <input onChange={e=> setUserDetails({...userDetails,password:e.target.value})}  className='p-2 bg-gray-200' type="password"/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="ConfirmPassword">Password:</label>
                    <input onChange={e=> setUserDetails({...userDetails,confirmPassword:e.target.value})}  className='p-2 bg-gray-200' type="password" />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="EventPrefences">Preferenes:</label>
                    <Select
                            isMulti
                            name="colors"
                            options={options}
                            onChange={handlePreferencesChange}
                            className='bg-transparent border-slate-900 w-full p-2'
                            />
                </div>

                <button disabled={isLoading} type="submit" className='bg-black text-white px-4 py-3'>{isLoading?"Submiting...":"SignUp"}</button>
                <p>Already have an account?<Link className='text-blue-200 font-bold' to="/">Login</Link></p>
            </form>
      </div>
    </div>
  );
};

export default SignUpForm;

