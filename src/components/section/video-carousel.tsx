import {
  Movie,
  movies,
  randomMoviesSet1,
  randomMoviesSet2,
} from '../../movies';

export const VideoCarousel = () => {
  return (
    <div className="bg-background pb-8">
      <div className="overflow-clip">
        <div className="flex gap-5 mb-5 left-1/2 -translate-x-1/2">
          <div className="shrink-0 aspect-video w-[60vw] overflow-clip rounded-2xl">
            <img
              className="w-full h-full object-cover"
              src={movies[0].poster}
              alt={movies[0].name}
            />
          </div>
          <div className="shrink-0 w-[60vw] aspect-video overflow-clip rounded-2xl">
            <img
              className="w-full h-full object-cover"
              src={movies[1].poster}
              alt={movies[1].name}
            />
          </div>
          <div className="shrink-0 w-[60vw] aspect-video overflow-clip rounded-2xl">
            <img
              className="w-full h-full object-cover"
              src={movies[2].poster}
              alt={movies[2].name}
            />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <SmallVideoCarousel movies={randomMoviesSet1} />
        <SmallVideoCarousel movies={randomMoviesSet2} />
      </div>
    </div>
  );
};

const SmallVideoCarousel = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="flex gap-3 overflow-clip">
      {movies.map((movie, index) => (
        <div className="w-[23vw] shrink-0" key={`${movie.name}-${index}`}>
          <img
            className="w-full h-full aspect-video object-cover rounded-2xl"
            src={movie.poster}
            alt={movie.name}
          />
        </div>
      ))}
    </div>
  );
};
