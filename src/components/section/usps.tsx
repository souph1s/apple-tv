import { Container } from '../container';
import { FadeIn } from '../fade-in';

export const Usps = () => {
  return (
    <Container className="text-4xl z-10 relative max-w-[68rem] space-y-12 font-bold text-white">
      <FadeIn>
        <p>New Apple Originals every month — always ad‑free.</p>
      </FadeIn>

      <FadeIn>
        <p>
          Stream on the Apple TV app on Apple devices, smart TVs, consoles, or
          sticks.
        </p>
      </FadeIn>

      <FadeIn>
        <p>Watch in 4K HDR video with immersive Spatial Audio.</p>
      </FadeIn>

      <FadeIn>
        <p>Share a single subscription with up to five people.</p>
      </FadeIn>
    </Container>
  );
};
