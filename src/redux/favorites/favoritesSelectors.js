export const selectFavorites = (state) => state.favorites.items;

export const selectIsFavorite = (carId) => (state) =>
  state.favorites.items.some((item) => item.id === carId);