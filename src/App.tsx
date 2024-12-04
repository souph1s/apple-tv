import { Container } from './components/container';
import { Header } from './components/header';
import { Hero } from './components/section/hero';
import './styles.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div>
          <Container>USPS</Container>
        </div>
        <div>
          <Container>3 columns</Container>
        </div>
        <div>
          <Container>Carousel With Posters</Container>
        </div>
      </main>
    </>
  );
}

export default App;
