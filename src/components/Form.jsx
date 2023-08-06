import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export const FormInput = () => {
    const [input,  setInput] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault()
        navigate(`/search/movie?query=${input}`);
        console.log(input);

    }
  return (
    <div>
        
        <form onSubmit={handleSubmit}>
        <input onChange={(e)=>setInput(e.target.value)} className="text-green-900 px-10 py-2 border-[none] w-[300px]" type="search" />
        </form>
        
    </div>
  )
}
