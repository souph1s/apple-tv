export type Movie = {
  poster: string;
  name: string;
};
export const movies = [
  { poster: 'img/apple-tv-rebuild/posters/airplane.webp', name: 'Airplane' },
  { poster: 'img/apple-tv-rebuild/posters/coffee.webp', name: 'Coffee' },
  {
    poster: 'img/apple-tv-rebuild/posters/fishermans.webp',
    name: 'Fishermans',
  },
  {
    poster: 'img/apple-tv-rebuild/posters/library.webp',
    name: 'Library',
  },
  {
    poster: 'img/apple-tv-rebuild/posters/laboratory.webp',
    name: 'Laboratory',
  },
  { poster: 'img/apple-tv-rebuild/posters/napoleon.webp', name: 'Napoleon' },
  {
    poster: 'img/apple-tv-rebuild/posters/person-in-darkness.webp',
    name: 'Person in Darkness',
  },
  {
    poster: 'img/apple-tv-rebuild/posters/scary-building.webp',
    name: 'Scary Building',
  },
  { poster: 'img/apple-tv-rebuild/posters/character.webp', name: 'Character' },
];
export const randomMoviesSet1 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5));
export const randomMoviesSet2 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5);
