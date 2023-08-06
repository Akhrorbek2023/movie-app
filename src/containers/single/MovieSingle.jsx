
import { useParams  } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { MovieSingleCard } from '../../components/MovieSingleCard'
import { Spinner } from '../../components/Spinner'


export const MovieSingle = () => {
 const {id} = useParams()

 const [state, setState] = useState({
    isFetched: false,
    data: [],
    error: false,
   })

   useEffect(()=> {
    axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
      params: {
        api_key: "61d9bb14f2c39f4bb995cd58b6816d14"
      }
    })
    .then((res)=> res)
    .then((data)=> {console.log(data);
      setState({
        isFetched: true,
        data: data.data,
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
   console.log("state",state.data);
  const title = state.data;
  
  
  return (
   <div>
    {
        state.isFetched?(
            <>
            <div>
            <MovieSingleCard 
             image={`https://www.themoviedb.org/t/p/w440_and_h660_face${title.backdrop_path}`}
             title={title.title} date={title.release_date} budget={title.budget/ 1000000} 
             runtime={title.runtime} 
             overview={title.overview} 
             genres={title.genres} 
             languages={title.spoken_languages} />
            </div>
             </>
        ):(
            <div className='ml-[45%] pt-[25%]'>
            <Spinner/>
            </div>
        )
    }
   </div>
  )
}
