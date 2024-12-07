import { Button } from '../button';
import { Container } from '../container';

export const Subscriptions = () => {
  return (
    <Container className="text-white items-center gap-8 justify-center pb-64 flex pt-40">
      <div className="w-[30rem] space-y-5">
        <p className="text-lg">Buy an Apple Device</p>
        <p className="text-5xl">3 months free.</p>
        <p className="text-white/60">
          Apple TV+ is included for 3 months when you purchase an Apple device
          and redeem the offer within 90 days.
        </p>
        <Button size="large">Check eligibility</Button>
      </div>

      <div className="w-[30rem] space-y-5">
        <p className="text-lg">Free 7-day trial</p>
        <p className="text-5xl">$9.99/mo</p>
        <p className="text-white/60">
          Apple TV+ is included for 3 months when you purchase an Apple device
          and redeem the offer within 90 days.
        </p>
        <Button size="large">Try it free</Button>
      </div>

      <div className="w-[30rem] space-y-5">
        <p className="text-lg">Free 1-month trial</p>
        <p className="text-5xl">Apple One</p>
        <p className="text-white/60">
          Apple TV+ is included for 3 months when you purchase an Apple device
          and redeem the offer within 90 days.
        </p>
        <Button size="large">Try Apple One free</Button>
      </div>
    </Container>
  );
};
