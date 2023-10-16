"use client"
import React from 'react'
import { useContext } from 'react'
import { useGlobalContext } from '../context/AuthContext'
import Image from 'next/image'
import star from "../../public/images/star_white.png"
import { useRouter } from 'next/navigation'

const Login = () => {
    const router = useRouter();
    const { userEmail, setUserEmail, userPassword, setUserPassword} = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userEmail == "" || userPassword == "") {
            alert("please fill out all fields.")
        } else {
            
            console.log("email:", userEmail)
            console.log("password:", userPassword);
            alert('login successful');
            router.push('/Home');
        }
        
    }
    const handleEmailChange = (e)  => {
        setUserEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setUserPassword(e.target.value);
    }

  return (
    <form onSubmit={handleSubmit} className=' relative md:text-center border-[.1rem] w-[80%] m-auto mt-[17%] md:mt-[7%] text-[#fff] p-11 rounded-2xl'>

        <p className='text-[2rem] font-extrabold'>Login to X.</p>

        <p className='mt-[1.5rem] font-semibold mb-[.4rem]'>Email:</p>
        <input type='email' placeholder='type email here...' className='bg-slate-700 border-[.1rem] md:w-[80%] w-[90%] h-[2rem] p-5 focus:scale-105 focus:w-[95%] transition outline-none rounded-md' value={userEmail} onChange={handleEmailChange}/>

        <p className='mt-[1.5rem] font-semibold mb-[.4rem]'>Password:</p>
        <input type='password' placeholder='type password here...' className='bg-slate-700 border-[.1rem] md:w-[80%] w-[90%] h-[2rem] p-5 focus:scale-105 focus:w-[95%] transition outline-none rounded-md'value={userPassword} onChange={handlePasswordChange}/>

        <button type='submit' className='bg-slate-700 hover:bg-white hover:text-black block mt-[2rem] w-[40%] h-[3rem] md:m-auto md:mt-[2rem] hover:scale-105 transition font-bold rounded-md'>Login </button>

        <p className='mt-[1rem] text-sm underline hover:text-slate-700 '><a href='#' onClick={() => router.push('/forgotPassword')}>forgot password</a></p>
        <Image src={star} alt='a star'  className='absolute top-9 left-9 animate-bounce'/>

        <p className='cursor-pointer mt-[1rem] text-sm underline hover:text-slate-700' onClick={() => router.push('/SignUp')}>don't have an account ? <span>signUp</span></p>
    </form>
  )
}

export default Login;
