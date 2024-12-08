import { Button } from '../button';
import { Container } from '../container';
import { FadeIn } from '../fade-in';

export const Subscriptions = () => {
  return (
    <Container className="relative z-10 space-y-12 py-36 text-3xl font-bold text-white md:text-4xl">
      <div className="flex flex-col lg:flex-row lg:space-x-12 lg:space-y-0 space-y-12 lg:justify-center lg:items-center">
        <FadeIn>
          <div className="w-full md:w-[40rem] space-y-5">
            <p className="text-lg">Buy an Apple Device</p>
            <p className="text-5xl">3 months free.</p>
            <p className="text-white/60">
              Apple TV+ is included for 3 months when you purchase an Apple
              device and redeem the offer within 90 days.
            </p>
            <Button size="large">Check eligibility</Button>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="w-full md:w-[30rem] space-y-5">
            <p className="text-lg">Free 7-day trial</p>
            <p className="text-5xl">$9.99/mo</p>
            <p className="text-white/60">
              Apple TV+ is included for 3 months when you purchase an Apple
              device and redeem the offer within 90 days.
            </p>
            <Button size="large">Try it free</Button>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="w-full md:w-[30rem] space-y-5">
            <p className="text-lg">Free 1-month trial</p>
            <p className="text-5xl">Apple One</p>
            <p className="text-white/60">
              Apple TV+ is included for 3 months when you purchase an Apple
              device and redeem the offer within 90 days.
            </p>
            <Button size="large">Try Apple One free</Button>
          </div>
        </FadeIn>
      </div>
    </Container>
  );
};
