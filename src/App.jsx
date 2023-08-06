
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from './containers/Home'
import { Movie } from './containers/Movie'
import { Tv } from './containers/Tv'
import { Header } from './containers/Header'
import { MovieSingle } from './containers/single/MovieSingle'
import { TvSingle } from './containers/single/TvSingle'
import { People } from './containers/People'
import { SinglePeople } from './containers/SinglePeople'
import { Search } from './containers/Search'



function App() {


  return (
    <>
     <Router>
      <div className='fixed z-10 bg-black w-[100%]'><Header/></div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/movie" element={<Movie/>}/>
                <Route path="/search/movie" element={<Search/>}/>
                <Route path="/single-movie/:id" element={<MovieSingle/>}/>
                <Route path="/tv" element={<Tv/>}/>
                <Route path="/single-tv/:id" element={<TvSingle/>}/>
                <Route path="/people" element={<People/>}/>
                <Route path="/single-person/:id" element={<SinglePeople/>}/>
                
            </Routes>
        </Router>
    </>
  )
}

export default App
