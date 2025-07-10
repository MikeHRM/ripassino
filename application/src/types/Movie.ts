export type Movie = {
  _id: string;
  plot: string;
  genres: string[];
  runtime: number;
  cast: string[];
  poster: string;
  title: string;
  fullplot: string;
  languages: string[];
  released: string; // ISO Date string, e.g., "1903-12-01T00:00:00.000Z"
  directors: string[];
  rated: string;
  awards: {
    wins: number;
    nominations: number;
    text: string;
  };
  lastupdated: string; // Date string with possible milliseconds, e.g. "2015-08-13 00:27:59.177000000"
  year: number;
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
  countries: string[];
  type: string; // e.g., "movie"
  tomatoes: {
    viewer: {
      rating: number;
      numReviews: number;
      meter: number;
    };
    fresh: number;
    critic: {
      rating: number;
      numReviews: number;
      meter: number;
    };
    rotten: number;
    lastUpdated: string; // ISO Date string
  };
  num_mflix_comments: number;
};
