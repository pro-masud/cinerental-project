import movie from "../../assets/movie-1.png";
import Review from "./Review";

const MovieCard = () => {
  return (
    <>
      <figure class="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <img class="w-full object-cover" src={movie} alt="" />
        <figcaption class="pt-4">
          <h3 class="text-xl mb-1">Iron Man</h3>
          <p class="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
          <Review />
          <a
            class="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
          >
            <img src="./assets/tag.svg" alt="" />
            <span>$100 | Add to Cart</span>
          </a>
        </figcaption>
      </figure>
    </>
  );
};

export default MovieCard;
