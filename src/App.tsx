import { Button } from './components/button';
import { Header } from './components/header';
import { Hero } from './components/section/hero';
import { Subscriptions } from './components/section/subscriptions';
import { Usps } from './components/section/usps';
import { VideoCarousel } from './components/section/video-carousel';
import './styles.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-background relative z-10">
          <Hero />
          <Usps />
          <Subscriptions />
        </div>
        <VideoCarousel />

        <div>
          <p className="bg-background -mt-2 text-white">
            Created by{' '}
            <Button size="small">
              <a
                href="https://www.linkedin.com/in/sophiamuraro/"
                target="_blank"
              >
                @souphis
              </a>
            </Button>
          </p>
        </div>
      </main>
    </>
  );
}

export default App;
