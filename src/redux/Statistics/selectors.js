export const selectSummary = (state) => state.statistics.summary;
export const selectCategories = (state) => state.statistics.categories;

export const selectStatLoading = (state) =>
  state.statistics.isStatisticsLoading;
export const selectStatError = (state) => state.statistics.isStatisticsError;
