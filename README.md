# 🎮 MovieApp

A modern React application for exploring movies using The Movie Database (TMDB) API.
Users can view now-playing and popular movies, explore details, search titles, and browse with pagination.

---

##  Features

*  movies on the Home page
*  Popular movies section
*  Search movies by title
*  Movie Details with genres, ratings, and overview
*  Pagination support
*  Clean UI with Bootstrap 5

---

##  Tech Stack

*  React (Vite)
*  Bootstrap 5
*  React Router DOM
*  Axios (with interceptor)
*  TMDB API

---

## 🔧 Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-username/movie-app.git
   cd movie-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

---



##  Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Navbar.jsx
│   ├── MovieCard.jsx
│   ├── Pagination.jsx
│   └── SearchBar.jsx
├── pages/            # Route-based pages
│   ├── Home.jsx
│   ├── Popular.jsx
│   ├── MovieDetails.jsx
│   └── SearchResults.jsx
├── services/         # API logic and Axios config
│   ├── api.js
│   └── movieService.js
├── routes/           # App routing
│   └── AppRoutes.jsx
├── styles/           # Custom CSS files
│   ├── Navbar.css
│   └── Pagination.css
├── App.jsx
└── main.jsx
```

---

##  APIs Used


* **Popular Movies**: `/movie/popular`
* **Movie Details**: `/movie/{id}`
* **Search Movies**: `/search/movie`
* **Images**: `https://image.tmdb.org/t/p/w500/{poster_path}`

TMDB Docs: [https://developers.themoviedb.org/3](https://developers.themoviedb.org/3)

---


##  Screenshots


### Popular Movies Page
![Search Results](screenshots/Screenshot%20from%202025-05-29%2017-46-26.png)
### Pagination

![Movie Details](screenshots/Screenshot%20from%202025-05-29%2017-46-31.png)

### Movie Details Page


![Pagination](screenshots/Screenshot%20from%202025-05-29%2017-46-44.png)


### Search Results

![Popular Movies](screenshots/Screenshot%20from%202025-05-29%2017-47-14.png)

---


