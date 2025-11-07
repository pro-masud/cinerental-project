import MovieCard from "./Movie/MovieCard";

const MainContent = () => {
  return (
    <>
      <div class="content">
        <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          <MovieCard />
        </div>
      </div>
    </>
  );
};

export default MainContent;
