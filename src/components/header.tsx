import { Button } from './button';
import { Container } from './container';

export const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast text-white">
        <Container className="flex items-center min-h-[--header-row-height]">
          <a
            href="/"
            className="flex h-[--header-row-height] items-center px-6 -ml-6 text-xl"
          >
            <span className="sr-only">Back to home page</span>
          </a>
        </Container>
      </header>
      <div className="sticky top-0 bg-backgroundContrast z-20 text-white">
        <Container className="flex min-h-[--header-row-height] justify-between items-center">
          <p className="text-xl font-semibold">Apple TV+</p>
          <Button size="small">Stream now</Button>
        </Container>
      </div>
    </>
  );
};
