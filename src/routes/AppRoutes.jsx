import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import SearchResults from "../pages/SearchResults";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/popular" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/search" element={<SearchResults />} />
      {/* Optional: 404 route */}
      <Route
        path="*"
        element={<h2 className="text-center mt-5">404 - Page Not Found</h2>}
      />
    </Routes>
  );
};

export default AppRoutes;
