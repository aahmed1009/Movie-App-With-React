import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/movieService";
import { useLanguage } from "../context/languageContext";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const { language } = useLanguage(); // Get selected language (e.g. "en", "ar", "fr")

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const data = await getMovieDetails(id, language); // Pass selected language
        setMovie(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id, language]); // Refetch when language or ID changes

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (!movie) return <div className="text-center mt-5">Movie not found.</div>;

  const {
    title,
    overview,
    poster_path,
    release_date,
    vote_average,
    genres,
    runtime,
    tagline,
  } = movie;

  const imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <img
            src={poster_path ? imageUrl : "/placeholder.jpg"}
            alt={title}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-8">
          <h2>{title}</h2>
          {tagline && <p className="text-muted">{tagline}</p>}
          <p>
            <strong>Release Date:</strong> {release_date}
          </p>
          <p>
            <strong>Rating:</strong> ⭐ {vote_average}
          </p>
          <p>
            <strong>Runtime:</strong> {runtime} min
          </p>
          <p>
            <strong>Genres:</strong> {genres?.map((g) => g.name).join(", ")}
          </p>
          <hr />
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
