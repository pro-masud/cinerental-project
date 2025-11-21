import { useState } from "react";
import { ImageURL } from "../../helper/helper";
import MovieDetails from "./MovieDetails";
import Review from "./Review";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectMovie, setSelectMovie] = useState(null);

  const handleCloseMovie = () => {
    setSelectMovie(null);
    setShowModal(false);
  };

  const handleSelectedMovie = (movie) => {
    setSelectMovie(movie);
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <MovieDetails movie={movie} closeMovie={handleCloseMovie} />
      )}

      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleSelectedMovie(movie)}>
          <img
            className="w-full object-cover"
            src={ImageURL(`${movie.cover}`)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <Review ratting={movie.rating} />
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
