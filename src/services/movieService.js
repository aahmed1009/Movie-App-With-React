import api from "./api";

//  popular movies
export const getPopularMovies = (page = 1) => {
  return api
    .get("/movie/popular", {
      params: { page },
    })
    .then((res) => res.data);
};

//  information about a specific movie by ID
export const getMovieDetails = (id) => {
  return api.get(`/movie/${id}`).then((res) => res.data);
};

// Search movies by name and optionally by page
export const searchMovies = (query, page = 1) => {
  return api
    .get("/search/movie", {
      params: {
        query,
        page,
      },
    })
    .then((res) => res.data);
};
