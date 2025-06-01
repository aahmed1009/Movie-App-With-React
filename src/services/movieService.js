import { fetchMovies, fetchMovieDetails } from "./api";

// Get popular movies (page & language supported)
export const getPopularMovies = async (page = 1, language = "en") => {
  try {
    const response = await fetchMovies({ page, language });
    return response.data;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    throw error;
  }
};

// Get details of a specific movie by ID
export const getMovieDetails = async (id, language = "en") => {
  try {
    const response = await fetchMovieDetails(id, language);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

// Search movies by query & page
export const searchMovies = async (query, page = 1, language = "en") => {
  try {
    const response = await fetchMovies({ page, searchTerm: query, language });
    return response.data;
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
};
