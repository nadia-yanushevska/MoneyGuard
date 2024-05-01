export const selectIsLogIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.name;
export const selectUserEmail = state => state.auth.user.email;
export const selectToken = state => state.auth.token;
export const selectError = state => state.auth.error;
