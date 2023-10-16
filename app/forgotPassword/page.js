'use client';
import React, { useContext, useState } from 'react'
import star from "../../public/images/star_white.png"
import Image from 'next/image'
import AuthContext from '../context/AuthContext'
import { useRouter } from 'next/navigation'

const ForgotPassword = () => {
    const router = useRouter();
    const { userPassword, newPassword, setNewPassword } = useContext(AuthContext);
    // local auth
    const [ oldPassword , setOldPassword ] = useState("");
    const handlePasswordReset = (e) => {
      e.preventDefault();
      if (oldPassword != userPassword || oldPassword === "") {
        alert("passwords do not match!")
      } else {
        console.log(newPassword);
        alert("password changed successfully!")
        router.push('/Home')
      }
    }

  return (
    <section >
        <form onSubmit={handlePasswordReset} className=' relative md:text-center border-[.1rem] w-[80%] m-auto mt-[17%] md:mt-[7%] text-[#fff] p-11 rounded-2xl'>
        
        <p className='text-[2rem] font-extrabold'>reset your password.</p>

        <p className='mt-[1.5rem] font-semibold mb-[.4rem]'>old Password:</p>
        <input type='number' onChange={(e) => setOldPassword(e.target.value)} placeholder='type old password here...' className='bg-slate-700 border-[.1rem] md:w-[80%] w-[90%] h-[2rem] p-5 focus:scale-105 focus:w-[95%] transition outline-none rounded-md' />

        <p className='mt-[1.5rem] font-semibold mb-[.4rem]'>new Password:</p>
        <input type='password' onChange={(e) => setNewPassword(e.target.value)} placeholder='type new password here...' className='bg-slate-700 border-[.1rem] md:w-[80%] w-[90%] h-[2rem] p-5 focus:scale-105 focus:w-[95%] transition outline-none rounded-md' />

        <button type='submit' className='bg-slate-700 hover:bg-white hover:text-black block mt-[2rem] w-[40%] h-[3rem] md:m-auto md:mt-[2rem] hover:scale-105 transition font-bold rounded-md'>reset Password</button>
        

        

        
        <Image src={star} alt='a star'  className='absolute top-9 left-9 animate-bounce'/>

    </form>
    </section>
  )
}

export default ForgotPassword