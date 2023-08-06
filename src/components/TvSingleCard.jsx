import React from 'react'

export const TvSingleCard = ({image, title, date, season, runtime, overview,  genres, languages}) => {
  return (
    <div>  <div className={`container pt-[100px] flex text-[20px] px-[50px]`}>
    <img className='w-[370px]' src={image} alt="" />
     <div className='ml-[60px]'>
      <div className='flex py-1'>
          <h1 className='w-[140px] mr-[20px] bg-slate-800 px-2 py-2'>Name</h1>
          <h1 className='bg-slate-800 w-[100%] px-2 py-2 hover:bg-slate-700'>{title}</h1>
      </div>
      <div className='flex py-1'>
          <h1 className='w-[140px] mr-[20px] bg-slate-800 px-2 py-2'>Date</h1>
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
          <h1 className='w-[140px] mr-[20px] bg-slate-800 px-2 py-2'>RunTime</h1>
          <h1 className='bg-slate-800 w-[100%] px-2 py-2 hover:bg-slate-700'>{runtime} min</h1>
      </div>
      
      <p className='text-[22px] font-mono mt-10 mb-4 text-red-700'>{overview}</p>
      <div className='flex py-1 text-red-600'>
          <h1 className='w-[120px] mr-[20px] px-2 py-2'>Genre :</h1>
          {
              genres?.map((genre)=>(
                  
                 <div className=' px-2 py-2 '><span className='inline-block'>{genre.name}</span></div>
                
              ))
          }
      </div>
      <div className='flex py-1 text-red-600'>
          <div><h1 className=' mr-[20px] px-2 py-2'>Spoken Languages :</h1></div>
          {
              languages?.map((lang)=>(
                  
                 <div className=' px-2 py-2 '><span className='inline-block'>{lang.english_name}</span></div>
                
              ))
          }
      </div>
     </div>
  </div> </div>
  )
}

