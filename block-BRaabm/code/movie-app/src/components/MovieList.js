import data from "../data.json";
import Movie from "./Movie";

function MovieList(){
   return (
    <ul className="flex justify-start align-start">
      {data.map((movie, index)=>{
          return <>
          
          <Movie key={movie.Title} id={index} details={movie} />
        
          </>
      })}
        </ul>
   );
}

export default MovieList;