"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useGlobalContext } from '../context/AuthContext'

const Homepage = () => {
  const router = useRouter();
  const { userEmail  } = useGlobalContext();


  return (
    
    <div className=' relative md:text-center border-[.1rem] w-[80%] m-auto mt-[17%] md:mt-[7%] text-[#fff] p-11 rounded-2xl'> 
      
      <p>Hello {userEmail} </p>
      <p></p>
      <button onClick={() => router.push('/Login')}>Back</button>
    </div>

  )
}

export default Homepage