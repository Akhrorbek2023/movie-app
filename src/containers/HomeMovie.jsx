
import { useState, useEffect } from 'react'
import axios from 'axios'
import { MovieCard } from '../components/MovieCard'
import { Spinner } from '../components/Spinner'

export const HomeMovie = ({title}) => {
    console.log(title)
    const [state, setState] = useState({
        isFetched: false,
        data: [],
        error: false,
       })
       useEffect(()=> {
        axios.get(`https://api.themoviedb.org/3/trending/movie/${title}?`, {
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
   <>
    
    <div className='container'>
        {
            state.isFetched ? (
                <>
                <div className='flex mb-3 ml-4 pt-[20px] overflow-hidden overflow-scroll gap-3 gap-3'>
        {
            state.data.map((item)=>(
                <MovieCard key={item.id} id={item.id} image={`https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`} title={item.original_title} vote={item.vote_average* 10} date={item.release_date} />
            ))
        }
        </div>
                </>
            ):(
                <>
                <div className='ml-[45%] pt-[25%]'>
                <Spinner/>
                </div>
               </>
            )
        }
    </div>
   </>
  )
}
