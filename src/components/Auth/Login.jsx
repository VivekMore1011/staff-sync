import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 
    const submitHandler=(e)=>{
        e.preventDefault()
        console.log("Hello Guys  You are logged in ");
    }


  return (
    <div className='flex h-screen w-screen items-center justify-center '>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                <input required   className=' text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 text-xl placeholder:text-gray-400 m-3 placeholder:text-center' type="email" placeholder='Enter Your Email  ' />
                <input required className=' text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 text-xl placeholder:text-gray-400 placeholder:bg-center placeholder:text-center' type="password" placeholder='Enter Password' />
                <button className=' text-white  outline-none border-none bg-emerald-600 rounded-3xl p-5 text-xl placeholder:text-gray-400 mt-5 '>Login</button>
            </form>

        </div>

    </div>
  )
}

export default Login