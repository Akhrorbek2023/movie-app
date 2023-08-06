import React from 'react'
import { MovieCard } from './MovieCard'

export const PeopleSingleCard = ({image, title, date, season, runtime, overview}) => {
  return (
    <div>  <div className={`container pt-[100px] flex text-[20px] px-[50px]`}>
    <img className='w-[370px] h-[500px]' src={image} alt="" />
     <div className='ml-[60px]'>
      <div className='flex py-1'>
          <h1 className='w-[140px] mr-[20px] bg-slate-800 px-2 py-2'>Name</h1>
          <h1 className='bg-slate-800 w-[100%] px-2 py-2 hover:bg-slate-700'>{title}</h1>
      </div>
      <div className='flex py-1'>
          <h1 className='w-[140px] mr-[20px] bg-slate-800 px-2 py-2'>Age</h1>
          <h1 className='bg-slate-800 w-[100%] px-2 py-2 hover:bg-slate-700'>{date}</h1>
      </div>
     
      {
           season?.map((item)=>(
           <div className='flex py-1'>
               <h1 className='w-[140px] mr-[20px] bg-slate-800 px-2 py-2'>Season</h1>
               <h1 className='bg-slate-800 w-[100%] px-2 py-2 hover:bg-slate-700'>{item.name} </h1>
           </div> 
              ))
      }  
      <div className='flex py-1'>
          <h1 className='w-[140px] mr-[20px] bg-slate-800 px-2 py-2'>Country</h1>
          <h1 className='bg-slate-800 w-[100%] px-2 py-2 hover:bg-slate-700'>{runtime}</h1>
      </div>
      <p className='text-[22px] font-mono mt-10 mb-4 h-[300px] text-red-700 overflow-scroll overflow-hiddin'>{overview}</p>
      <div className='flex py-1 text-red-600'>
       
      </div>
     </div>
  </div> 
  <div>
    
  </div>
  </div>
  )
}
