import { NavLink } from "react-router-dom"
import "../App.css"
import { FormInput } from "../components/Form";





export const Header = () => {
    const Navbar = [
        {
            title:"Home",
            path: "/"
        },
        {
            title:"Movie",
            path: "/movie"
        },
        {
            title:"People",
            path:"/people"
        },
        {
            title:"Tv",
            path: "/tv"
        }
    ];
   
  return (
 <>
    <div className="container">
      <div className="flex justify-between items-center mb-5 my-5">
     <div className="flex items-center">
     <div className=" text-red-600 mr-[100px] text-3xl">
        <NavLink to={"/"}>
        <img className="w-[130px]" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
        </NavLink>
     </div>
        
        <ul className="flex space-x-10 mr-[100px]">
            {
                Navbar.map((item)=>(
                    <li className="navbar font-bold text-[25px] focus:text-[red]  focus:font-bold " key={item.title}>
                        <NavLink to={item.path}>{item.title}</NavLink>
                    </li>
                ))
            }
        </ul>
     </div>
        <FormInput/>
      </div>
 
    </div>
 </>
  )
}
