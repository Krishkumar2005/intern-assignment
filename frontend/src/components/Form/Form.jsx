import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useBusinessData } from '../../context/businessData'
import { Loader2 } from 'lucide-react'

function Form() {
    const navigate = useNavigate()
    const { setBusinessData, setIsLoading, isLoading } = useBusinessData()
    const [business_name, setBusinessName] = useState("")
    const [location, setLocation] = useState("")
    const [nameError, setNameError] = useState("")
    const [locationError, setLocationError] = useState("")

    const fetchBusinessData = async () => {

        try {


            if (business_name.length === 0) {
                setNameError("Business Name is Required *")
                return;
            }


            if (location.length === 0) {
                setLocationError("Business Location is Required *")
                return;
            }
            setNameError("")
            setLocationError("")

            setIsLoading(true)
            setBusinessName("")
            setLocation("")
            const response = await axios.post("/api/business-data", {
                business_name,
                location
            })
            console.log("business res : ", response.data.response)

            setBusinessData(response.data.response)

            navigate("/dashboard")

        } catch (error) {
            console.log("Failed to fetch business data : ", error)
            throw new Error("Failed to fetch business data : ", error.message)
        } finally {
            setIsLoading(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchBusinessData()
    }

    return (
        <div className='h-screen p-4'>

            <div className='w-full flex justify-center mt-28'>
                <form onSubmit={handleSubmit} className='p-8 md:h-auto shadow-2xl px-14 md:px-8'>
                    <h1 className='text-2xl mt-0 -mb-2 text-center font-semibold md:mb-6 md:text-5xl'>Get Business Data</h1>
                    <div className='flex flex-col items-start mb-6'>
                        <label htmlFor='business-name' className=' mt-8 md:mt-12 md:text-xl mb-2'>Business Name</label>
                        <input
                            className='md:w-md w-60 p-2 md:-ml-2 shadow outline-none'
                            id='business-name'
                            type='text'
                            placeholder='Enter Business Name'
                            value={business_name}
                            onChange={(e) => setBusinessName(e.target.value)}
                        />
                        {nameError.length > 0 ? <p className='text-red-700 text-xs mt-2'>{nameError}</p> : ""}
                    </div>
                    <div className='flex flex-col items-start'>
                        <label htmlFor='location' className='md:text-xl mb-2'>Business Location</label>
                        <input
                            className='md:w-md w-60 p-2 md:-ml-2 shadow outline-none'
                            id='location'
                            type='text'
                            placeholder='Enter Business Location Name'
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                        {locationError.length > 0 ? <p className='text-red-700 text-xs mt-2'>{locationError}</p> : ""}
                    </div>
                    <button type='submit' className='bg-blue-500  text-white p-2 px-6 mt-8 rounded cursor-pointer outline-none flex items-center'>{
                     isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4
                    w-4 animate-spin"/> Please Wait
                            </>
                        ) : "Search"

                    }</button>
                </form>

            </div>
        </div>
    )
}

export default Form