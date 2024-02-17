import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getMovies = async ({ abortController }) => {
  const url = 'trending/movie/day?language=en-US';

  const options = {
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmM5NzkwMDk3NWJhZTBjODU1OWViMTdkZjFiZGQwMCIsInN1YiI6IjY1Y2JmYjJjODliNTYxMDEzMDY4NjYwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-uvBUNPF1yj-8ZhvU1re3YrSsGDOOD2AqVbCkxWhm5c',
    },
    signal: abortController.signal,
  };

  const response = await axios.get(url, options);
  return response.data.results;
};

export const getMovieById = async movieId => {
  const url = `movie/${movieId}?language=en-US`;

  const options = {
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmM5NzkwMDk3NWJhZTBjODU1OWViMTdkZjFiZGQwMCIsInN1YiI6IjY1Y2JmYjJjODliNTYxMDEzMDY4NjYwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-uvBUNPF1yj-8ZhvU1re3YrSsGDOOD2AqVbCkxWhm5c',
    },
  };

  const response = await axios.get(url, options);
  return response.data;
};

export const getCreditsById = async movieId => {
  const url = `movie/${movieId}/credits?language=en-US`;

  const options = {
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmM5NzkwMDk3NWJhZTBjODU1OWViMTdkZjFiZGQwMCIsInN1YiI6IjY1Y2JmYjJjODliNTYxMDEzMDY4NjYwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-uvBUNPF1yj-8ZhvU1re3YrSsGDOOD2AqVbCkxWhm5c',
    },
  };

  const response = await axios.get(url, options);
  return response.data;
};

export const getReviewsById = async movieId => {
  const url = `movie/${movieId}/reviews?language=en-US`;

  const options = {
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmM5NzkwMDk3NWJhZTBjODU1OWViMTdkZjFiZGQwMCIsInN1YiI6IjY1Y2JmYjJjODliNTYxMDEzMDY4NjYwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-uvBUNPF1yj-8ZhvU1re3YrSsGDOOD2AqVbCkxWhm5c',
    },
  };

  const response = await axios.get(url, options);
  return response.data;
};

export const getSearchMovieByName = async movieName => {
  const url = `/search/movie?query=${encodeURIComponent(
    movieName
  )}&include_adult=false&language=en-US&page=1`;

  const options = {
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmM5NzkwMDk3NWJhZTBjODU1OWViMTdkZjFiZGQwMCIsInN1YiI6IjY1Y2JmYjJjODliNTYxMDEzMDY4NjYwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-uvBUNPF1yj-8ZhvU1re3YrSsGDOOD2AqVbCkxWhm5c',
    },
  };

  const response = await axios.get(url, options);
  return response.data;
};
