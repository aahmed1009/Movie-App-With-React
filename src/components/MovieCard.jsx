import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { id, title, vote_average, poster_path, release_date } = movie;

  const imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 shadow-sm">
        <Link to={`/movie/${id}`}>
          <img
            src={poster_path ? imageUrl : "/placeholder.jpg"}
            className="card-img-top"
            alt={title}
          />
        </Link>
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-muted">Release: {release_date}</p>
        </div>
        <div className="card-footer bg-white border-top-0 d-flex justify-content-between align-items-center">
          <span className="badge bg-primary">⭐ {vote_average.toFixed(1)}</span>
          <Link to={`/movie/${id}`} className="btn btn-sm btn-outline-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
