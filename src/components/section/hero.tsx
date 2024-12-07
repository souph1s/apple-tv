import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../button';
import { Container } from '../container';
import { useRef } from 'react';

export const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ['start start', 'end end'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <div className="bg-background relative text-white h-[300vh]">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute left-0 -top-[--header-height] h-[200vh] w-full"
      >
        <img
          src="/img/apple-tv-rebuild/posters/napoleon.webp"
          className="w-full top-0 h-screen object-cover sticky"
        />
      </motion.div>
      <Container className="relative z-10 pb-7 h-[--hero-height]">
        <motion.div
          className="flex flex-col h-full items-start justify-end"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.9 }}
        >
          <h1 className="text-5xl font-bold mb-10">
            All Apple Originals. <br />
            Only on AppleTV+
          </h1>
          <Button className="mb-16" size="large">
            Stream now
          </Button>
          <p className="font-semibold">Watch on the 📺 app.</p>
        </motion.div>
      </Container>
    </div>
  );
};
