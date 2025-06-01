import axios from "axios";

const apiKey = "9b743af1d4fde1d65af33c40dcccce87";
const baseUrl = "https://api.themoviedb.org/3";

export const fetchMovies = async ({
  page = 1,
  searchTerm = "",
  language = "en",
}) => {
  const url = searchTerm
    ? `${baseUrl}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
        searchTerm
      )}&page=${page}&language=${language}`
    : `${baseUrl}/movie/popular?api_key=${apiKey}&page=${page}&language=${language}`;

  return axios.get(url);
};

export const fetchMovieDetails = async (id, language = "en") => {
  const url = `${baseUrl}/movie/${id}?api_key=${apiKey}&language=${language}`;
  return axios.get(url);
};
