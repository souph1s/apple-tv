import { Button } from '../button';
import { Container } from '../container';

export const Hero = () => {
  return (
    <div className="bg-background relative text-white h-[300vh]">
      <div className="absolute left-0 -top-[--header-height] h-[200vh] w-full">
        <img
          src="/img/apple-tv-rebuild/posters/napoleon.webp"
          className="w-full top-0 h-screen object-cover sticky"
        />
      </div>
      <Container className="relative z-10 pb-7 min-h-[--hero-height] flex flex-col justify-end items-start">
        <h1 className="text-5xl font-bold mb-10">
          All Apple Originals. <br />
          Only on AppleTV+
        </h1>
        <Button className="mb-16" size="large">
          Stream now
        </Button>
        <p className="font-semibold">Watch on the 📺 app.</p>
      </Container>
    </div>
  );
};
