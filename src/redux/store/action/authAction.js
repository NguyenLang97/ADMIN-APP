export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const authLogin = (user) => ({
    type: LOGIN,
    payload: user,
});
export const authLogout = (user) => ({
    type: LOGIN,
    payload: user,
});
