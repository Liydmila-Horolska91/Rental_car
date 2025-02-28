import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import carsReducer from "./carsSlice";
import favoritesReducer from "./favoritesSlice";
import filtersReducer from "./filtersSlice";

const persistConfig = {
  key: "favorites",
  storage,
};

const persistedFavoritesReducer = persistReducer(persistConfig, favoritesReducer);

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorites: persistedFavoritesReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
