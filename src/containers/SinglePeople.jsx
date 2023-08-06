import { useParams  } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { PeopleSingleCard } from '../components/PeopleSingleCard'
import { Spinner } from '../components/Spinner'

export const SinglePeople = () => {
 const {id} = useParams()

 
 const [state, setState] = useState({
    isFetched: false,
    data: [],
    error: false,
   })

   useEffect(()=> {
    axios.get(`https://api.themoviedb.org/3/person/${id}`, {
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
  const title = state.data
//   const birthdayNum = 2023-title.birthday.slice(0,4)
  
  return (
 <div>
    {
        state.isFetched ? (
            <>
            <PeopleSingleCard 
            image={`https://www.themoviedb.org/t/p/w440_and_h660_face${title.profile_path}`} 
            title={title.name} date= {title.birthday} budget={title.budget/ 1000000} 
            runtime={title.place_of_birth} 
            overview={title.biography} 
            genres={title.genres} 
            languages={title.spoken_languages}
            />
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
