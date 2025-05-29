import React, { useEffect, useState, useCallback } from "react";
import { getPopularMovies } from "../services/movieService";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchMovies = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getPopularMovies(page);
      setMovies(data.results);
      setTotalPages(data.total_pages);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div className="container">
      <h2 className="mb-4 text-center">🔥 Popular Movies</h2>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <>
          <div className="row">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      )}
    </div>
  );
};

export default Home;
