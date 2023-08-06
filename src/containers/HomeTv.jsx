import { useState, useEffect } from 'react'
import axios from 'axios'
import { TvCard } from '../components/TvCard'
import { Spinner } from '../components/Spinner'

export const HomeTv = () => {
    const [state, setState] = useState({
        isFetched: false,
        data: [],
        error: false,
       })
       useEffect(()=> {
        axios.get("https://api.themoviedb.org/3/tv/top_rated", {
          params: {
            api_key: "61d9bb14f2c39f4bb995cd58b6816d14"
          }
        })
        .then((res)=> res)
        .then((data)=> {
          setState({
            isFetched: true,
            data: data.data.results,
            error: false,
          })
        })
        .catch((err)=>{
          useState({
            isFetched:true,
            data:[],
            error:true
          })
        })
       }, []) 
       console.log(state);
  return (
   <div>
    {
        state.isFetched ? (
            <div className='container'>
     <div className='flex mb-3 ml-4 pt-[20px] overflow-hidden overflow-scroll gap-3 '>
        {
            state.data.map((item)=>(
                <TvCard key={item.id} id={item.id} image={`https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`} title={item.name} vote={item.vote_average* 10} date={item.first_air_date}/>
            ))
        }
           </div>
   
      </div>
        ):(
            <>
            <div className='ml-[45%] pt-[25%]'>
            <Spinner/>
            </div>
            </>
        )
        
    }
   </div>
  )
}
