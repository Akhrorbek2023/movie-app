import { useState, useEffect } from 'react'
import axios from 'axios'
import { PeopleCard } from '../components/PeopleCard'
import { MovieCard } from '../components/MovieCard'
import { Spinner } from '../components/Spinner'

export const People = () => {
    const [state, setState] = useState({
        isFetched: false,
        data: [],
        error: false,
       })
       useEffect(()=> {
        axios.get("https://api.themoviedb.org/3/person/popular", {
          params: {
            api_key: "61d9bb14f2c39f4bb995cd58b6816d14"
          }
        })
        .then((res)=> res)
        .then((data)=> { console.log(data)
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
    {
        state.isFetched ?
        (
            <div className=' mb-10 ml-4 grid grid-cols-4 pt-[100px] '>
            {
                state.data.map((item)=>(
                    <PeopleCard 
                    id={item.id}
                    key={item.id}  
                    image={`https://www.themoviedb.org/t/p/w440_and_h660_face${item.profile_path}`} 
                    title={item.name}  />
                ))
            }
           </div>
        ):
        (
            <div className='ml-[45%] pt-[25%]'>
            <Spinner/>
            </div>
        )
    }
  
   </div>
  )
}
