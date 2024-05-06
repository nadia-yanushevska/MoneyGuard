export const selectUser = state => state.auth.user;
export const selectToken = state => state.auth.token;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsAuthLoading = state => state.auth.isAuthLoading;
export const selectIsAuthError = state => state.auth.isAuthError;
export const selectUserBalance = state => state.auth.user.balance;
