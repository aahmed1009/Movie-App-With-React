import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../services/movieService";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return;
      try {
        setLoading(true);
        const data = await searchMovies(query, page);
        setResults(data.results);
        setTotalPages(data.total_pages);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setLoading(false);
      }
    };

    fetchResults();
  }, [query, page]);

  if (!query)
    return (
      <div className="container mt-4">
        <SearchBar />
        <p>No query provided.</p>
      </div>
    );

  return (
    <div className="container mt-4">
      <SearchBar />
      <h3>
        Search results for: <em>{query}</em>
      </h3>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <>
          <div className="row">
            {results.map((movie) => (
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

export default SearchResults;
