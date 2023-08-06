
import axios from 'axios'
import { useEffect, useState } from 'react'
import { MovieCard } from '../components/MovieCard'
import { Spinner } from '../components/Spinner'
import {useParams,useSearchParams}  from 'react-router-dom';

export const Search = () => {
    const [searchParams] = useSearchParams();

    console.log(searchParams.get('query'));

    const [state, setState] = useState({
        isFetched: false,
        data: [],
        error: false,
       })
       useEffect(()=> {
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchParams.get('query')}`, {
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
    <div className='container'>
       {state.isFetched ? (
        <>
         <div className=' mb-10 ml-4 grid grid-cols-4 pt-[100px] '>
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
  )
}
