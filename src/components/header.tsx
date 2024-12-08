import { Search, ShoppingBag } from 'lucide-react';
import { Button } from './button';
import { Container } from './container';

export const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast relative z-20 text-white">
        <Container className="flex min-h-[--header-row-height] justify-around items-center">
          <a
            href="/"
            className="-ml-6 flex h-[--header-row-height] items-center px-6 text-xl"
          >
             <span className="sr-only">Back to homepage</span>
          </a>
          <p>Store</p>
          <p>Mac</p>
          <p>iPad</p>
          <p>iPhone</p>
          <Search className="h-6 w-6" />
          <ShoppingBag className="w-6 h-6" />
        </Container>
      </header>
      <div className="bg-backgroundContrast p-4 sticky top-0 z-20 text-white">
        <Container className="flex items-center justify-between">
          <p className="text-3xl font-semibold">Apple TV+</p>
          <Button size="medium">Stream now</Button>
        </Container>
      </div>
    </>
  );
};
