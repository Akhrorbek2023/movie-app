import React from 'react'
import { NavLink } from 'react-router-dom'

export const PeopleCard = ({id , image, title}) => {
  return (
   <NavLink to={`/single-person/${id}`}>
     <div className=' mb-8 hover:border border-white w-[280px] rounded-lg relative' >
    <img className='w-[280px] h-[400px] rounded-tr-lg rounded-tl-lg' src={image} alt="" />
    <div className='p-3'>
    <h1 className='text-[25px] '>{title}</h1>
    </div>
   </div>
   </NavLink>
  )
}
