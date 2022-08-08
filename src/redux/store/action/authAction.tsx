export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const authLogin = (user: string) => ({
    type: LOGIN,
    payload: user,
});
export const authLogout = (user: string) => ({
    type: LOGIN,
    payload: user,
});
