import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../redux/favoritesSlice";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/languageContext";
import { translations } from "../context/uiStrings";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const { language } = useLanguage();
  const t = translations[language];

  const handleRemove = (id) => {
    dispatch(removeFavorite(id));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">❤️ {t.favorites}</h2>

      {favorites.length === 0 ? (
        <div className="text-center">
          <p>{t.noFavorites}</p>
          <Link to="/popular" className="btn btn-primary mt-3">
            {t.browse}
          </Link>
        </div>
      ) : (
        <div className="row">
          {favorites.map((movie) => (
            <div key={movie.id} className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : "/placeholder.jpg"
                  }
                  className="card-img-top"
                  alt={movie.title}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="text-muted mb-1">⭐ {movie.vote_average}</p>
                  <button
                    className="btn btn-outline-danger btn-sm mt-2"
                    onClick={() => handleRemove(movie.id)}
                  >
                    🗑️ {t.remove}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
