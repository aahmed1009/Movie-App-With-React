import { createSlice } from "@reduxjs/toolkit";

// Load from localStorage or start with empty array
const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("favorites");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error("Could not load favorites", err);
    return [];
  }
};

const saveToLocalStorage = (favorites) => {
  try {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } catch (err) {
    console.error("Could not save favorites", err);
  }
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: loadFromLocalStorage(),
  reducers: {
    addFavorite: (state, action) => {
      const exists = state.find((m) => m.id === action.payload.id);
      if (!exists) {
        const updated = [...state, action.payload];
        saveToLocalStorage(updated);
        return updated;
      }
      return state;
    },
    removeFavorite: (state, action) => {
      const updated = state.filter((m) => m.id !== action.payload);
      saveToLocalStorage(updated);
      return updated;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
