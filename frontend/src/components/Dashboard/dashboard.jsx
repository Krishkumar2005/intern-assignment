import React, { useState } from 'react'
import { useBusinessData } from '../../context/businessData'
import { ClipLoader } from "react-spinners"
import axios from 'axios'
import { Loader2 } from 'lucide-react'

export default function DashBoard() {
  const { businessData, isLoading } = useBusinessData()
  const [newHeadline, setNewHeadline] = useState("")
  const [error, setError] = useState("")

  const handleChangeHeadline = async () => {

    if (Object.keys(businessData).length === 0) {
      setError("Please Provide Your Business Information")
      return;
    }

    const queryParameter = new URLSearchParams({
      business_name: businessData.name,
      location: businessData.location
    }).toString()

    console.log("query parameter : ", queryParameter)

    try {
      const newHeadlineRes = await axios.get(`/api/regenerate-headline?${queryParameter}`);
      console.log("new headline :", newHeadlineRes.data.newHeadline)
      if (newHeadline !== newHeadlineRes.data.newHeadline) {
        setNewHeadline(newHeadlineRes.data.newHeadline)
      }

    } catch (error) {
      console.log("Failed to get different headline : ", error)
      throw new Error("Failed to get different headline : ", error.message)
    }
  }


  return (
    <div className='flex justify-center items-center h-screen'>
      {
        !isLoading ? (<div className='w-full flex flex-col justify-center items-center'>
          <div className='p-8 py-12 shadow-2xl flex flex-col ml-10 mr-10 md:w-2xl'>
            <h1 className='text-center text-red-700'>{error.length > 0 ? error : ""}</h1>
            <h1 className='p-3 md:text-xl text-lg text-center font-medium'>{
              newHeadline.length === 0 ? businessData.headline
                : newHeadline
            }
            </h1>

            <h1 className='p-3 md:text-xl text-lg'>Business Name : <span className='font-medium'>{businessData.name ? businessData.name : "***********"}</span></h1>

            <h1 className='p-3 md:text-xl text-lg'>Business Location : <span className='font-medium'>{businessData.location ? businessData.location : "***********"}</span></h1>

            <h1 className='p-3 md:text-xl text-lg'>Reviews : <span className='font-medium'>{businessData.reviews ? businessData.reviews : "***********"}</span></h1>

            <h1 className='p-3 md:text-xl text-lg'>Rating : <span className='font-medium'>{businessData.rating ? businessData.rating : "***********"}</span></h1>

            <h1 className='p-3 md:text-xl text-lg'>Headline : <span className='font-medium'>{
              newHeadline.length === 0 ? (
                businessData.headline ? businessData.headline : "***********"
              )
                : newHeadline
            }</span>
            </h1>

            <button type='button' className=' bg-blue-500  text-white p-2 px-6 mt-8 rounded cursor-pointer outline-none flex items-center' onClick={handleChangeHeadline}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4
                    w-4 animate-spin"/> Please Wait
                </>
              ) : "Change Headline"
              }
            </button>
          </div>
        </div>)
          :
          <ClipLoader size={50} />
      }
    </div>
  )
}

// export default DashBoard