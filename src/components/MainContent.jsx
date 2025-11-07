import { getAllMovies } from "../faker/movie";
import MovieCard from "./Movie/MovieCard";

const MainContent = () => {
  const movies = getAllMovies();
  return (
    <>
      <div className="content">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {movies.map((singleMovie) => (
            <MovieCard key={singleMovie.id} movie={singleMovie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MainContent;
