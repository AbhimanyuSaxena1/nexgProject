"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
function page() {
  const router = useRouter()
  const [user,setUser] = useState({
    email:'',
    password:'',
    username:'',
  })
  const [buttonDisabled,setButtonDisabled] = useState(false)
const [Loading,setLoading] = useState(false)
  const onSignUp = async ()=>{
    try{
      setLoading(true)
      const  response =  await axios.post("api/users/signup",user)
      console.log("signup success",response.data)
      router.push("/Login")
    }
    catch(error:any){
      console.log("signup failed");
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0){
      setButtonDisabled(false)
    }
    else{
      setButtonDisabled(true)
    }
  },[user])

   return (
    <div className='flex flex-col  justify-center items-center min-h-screen py-2'>
      <div className='border-white border-2 flex flex-col justify-center items-center rounded-md p-4 bg-zinc-900'>
      <h1>{Loading ? "Processing" : "Sign Up"}</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input 
      className='border-2 border-zinc-800  rounded-md p-2 m-2 bg-zinc-900'
      id='username'
      value={user.username}
      onChange={(e)=>setUser({...user,username: e.target.value})}
      placeholder='username'
      type="text" />
      
      <label htmlFor="username">Email id</label>
      <input 
      className='border-2 border-zinc-800  rounded-md p-2 m-2 bg-zinc-900'
      id='email'
      value={user.email}
      onChange={(e)=>setUser({...user,email: e.target.value})}
      placeholder='email id'
      type="email" />
      
      <label htmlFor="username">Password</label>
      <input 
      className='border-2 border-zinc-800  rounded-md p-2 m-2 bg-zinc-900'
      id='username'
      value={user.password}
      onChange={(e)=>setUser({...user,password: e.target.value})}
      placeholder='password'
      type="password" />
      <button
       onClick={onSignUp}
       className='bg-zinc-900 text-zinc-400 border-2 border-zinc-800 rounded-md px-4  py-2 m-2 hover:bg-zinc-200 hover:text-zinc-900' >
        {buttonDisabled ? "Disabled" : "Sign Up"}
      </button>
      <Link href={"/Login"}><h1 className=' text-xs'>Already have an Account?  <span className='ml-2  text-center text-blue-800 text-sm'>Login.</span></h1></Link>
   
      </div>
       </div>
  )
}

export default page