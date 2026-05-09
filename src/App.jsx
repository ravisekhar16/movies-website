import React,{ useState, useEffect } from 'react'
import './App.css';
import mockMovies from "./data/mockMovies";
import MovieCard from './components/MovieCard';
import MovieModal from './components/MovieModal';
import Header from './components/Header';

const MOVIES_INITIAL = 20;
const MOVIES_PER_LOAD = 10;

function App() {
  const [movies,setMovies] = useState([]);
  const [visibleCount, setVisibleCount] = useState(MOVIES_INITIAL);
  const [modalMovie,setModalMovie] = useState(null);
  const [searchTerm,setSearchTerm] = useState("");

  useEffect(()=>{
    setMovies(mockMovies);
  }, []);
  console.log(movies);
  const handleMoreMovies = ()=>{
    setVisibleCount((prev)=>prev + MOVIES_PER_LOAD);
  };

  const filterMovies = movies.filter((movie)=>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()))

  const displayedMovies = filterMovies.slice(0,visibleCount);
  

  return (
    <div className="app">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="movies-list">
        {
          displayedMovies.map((movie)=>(
            <MovieCard key={movie.id} movie={movie} 
            openModal = {setModalMovie}
            />
          ))}
      </div>
      {
        visibleCount < movies.length 
        &&
        (
        <div className="load-more-container">
        <button onClick={handleMoreMovies} className="load-more-btn" >show more</button>
      </div>
        )}
      {
        modalMovie && (
          <MovieModal movie={modalMovie} closeModal={()=>setModalMovie(null)}/>

        )}

    </div>
  )
}

export default App