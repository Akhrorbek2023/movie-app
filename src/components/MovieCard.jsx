import React from 'react'
import { NavLink } from 'react-router-dom'

export const MovieCard = ({id , image, title, date, vote}) => {
  return (
   <NavLink to={`/single-movie/${id}`}>
     <div className=' mb-8 hover:border border-white w-[280px] rounded-lg relative' >
    <img className='w-[280px] h-[400px] rounded-tr-lg rounded-tl-lg' src={image} alt="" />
    <div className='p-3'>
    <h1 className='text-[25px] '>{title}</h1>
    <span className='absolute bg-green-900 text-white top-2 p-2 rounded'>{vote } %</span>
    <p className='absolute  bg-green-900 text-white top-2 right-3 p-2 rounded'>{date}</p>
    </div>
   </div>
   </NavLink>
  )
}
