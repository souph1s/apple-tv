import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from 'framer-motion';
import {
  Movie,
  movies,
  randomMoviesSet1,
  randomMoviesSet2,
} from '../../movies';
import { useMemo, useRef, useState } from 'react';
import { useWindowSize } from 'react-use';
import { Button } from '../button';

export const VideoCarousel = () => {
  const { width, height } = useWindowSize();
  const carouselWrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ['start start', 'end start'],
  });

  const maximumScale = useMemo(() => {
    const windowYRatio = height / width;
    const xScale = 1.66667;
    const yScale = xScale * (16 / 9) * windowYRatio;
    return Math.max(xScale, yScale);
  }, []);

  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.66],
    [maximumScale * 1.1, maximumScale, 1]
  );

  const postersOpacity = useTransform(scrollYProgress, [0.64, 0.66], [0, 1]);
  const posterTranslateXLeft = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [-20, 0]
  );
  const posterTranslateXRight = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [20, 0]
  );

  const [carouselVariant, setCarouselVariant] = useState<'inactive' | 'active'>(
    'inactive'
  );

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    if (progress >= 0.67) {
      setCarouselVariant('active');
    } else {
      setCarouselVariant('inactive');
    }
  });

  return (
    <motion.div animate={carouselVariant} className="bg-background pb-16">
      <div
        ref={carouselWrapperRef}
        className="overflow-clip mt-[-100vh] h-[300vh]"
      >
        <div className="h-screen sticky top-0 flex items-center">
          <div className="flex gap-5 mb-5 left-1/2 relative -translate-x-1/2">
            <motion.div
              style={{ opacity: postersOpacity, x: posterTranslateXLeft }}
              className="shrink-0 aspect-video w-[60vw] overflow-clip rounded-2xl"
            >
              <img
                className="w-full h-full object-cover"
                src={movies[0].poster}
                alt={movies[0].name}
              />
            </motion.div>

            <motion.div
              style={{ scale, willChange: 'transform' }}
              className="shrink-0 relative w-[60vw] aspect-video overflow-clip rounded-2xl"
            >
              <img
                className="w-full h-full object-cover"
                src={movies[4].poster}
                alt={movies[4].name}
              />
              <motion.div
                variants={{
                  active: { opacity: 1 },
                  inactive: { opacity: 0 },
                }}
                className="absolute p-5 items-center text-white flex justify-between left-0 bottom-0 w-full"
              >
                <p>A New TV Show</p>
                <Button>Watch now</Button>
              </motion.div>
            </motion.div>

            <motion.div
              style={{ opacity: postersOpacity, x: posterTranslateXRight }}
              className="shrink-0 w-[60vw] aspect-video overflow-clip rounded-2xl"
            >
              <img
                className="w-full h-full object-cover"
                src={movies[2].poster}
                alt={movies[2].name}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        variants={{
          active: { opacity: 1, y: 0 },
          inactive: { opacity: 0, y: 20 },
        }}
        transition={{ duration: 0.4 }}
        className="space-y-3 -mt-[calc((100vh-(300px*(16/9)))/2)] pt-4"
      >
        <SmallVideoCarousel movies={randomMoviesSet1} />
        <div className="[--duration:68s] left-[var(--carousel-offset,-32px)]">
          <SmallVideoCarousel movies={randomMoviesSet2} />
        </div>
      </motion.div>
    </motion.div>
  );
};

const SmallVideoCarousel = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="overflow-clip">
      <div className="flex gap-3 animate-carousel-move relative left-[var(--carousel-offset,0px)]">
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
    </div>
  );
};
