import { useState } from "react"
import { NavLink } from "react-router-dom"
import { HomeMovie } from "./HomeMovie"
import { HomeTv } from "./HomeTv"


export const Home = () => {
    const [value, setValue] = useState("day")

    console.log(value);
    
  return (
    <div className="container">
        <img className="mx-auto pt-[120px] h-[400px] mb-4 w-[100%] object-cover" src="https://wallpaperaccess.com/full/8625653.jpg" alt="" />
        <div className="  grid grid-cols-1">
            <div className="flex rounded-lg gap-2 border border-white-50 w-[132px] rounded-[25px]">
           <NavLink  onChange={(e)=>setValue(e.target.innerHTML)} className="p-3 focus:bg-red-800 rounded-[25px]">day</NavLink>
            <NavLink onChange={(e)=>setValue(e.target.innerHTML)} className="p-3 focus:bg-red-800 rounded-[25px]">week</NavLink>
            </div>
            <h1 className="text-2xl">Top Rated Movies</h1>
            <HomeMovie title={value}/>
        </div>
        <div className="grid grid-cols-1">
            <h1 className="text-2xl">Top Rated Tv series</h1>
            <HomeTv/>
        </div>
    </div>
  )
}
