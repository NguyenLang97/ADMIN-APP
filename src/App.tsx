import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Listuser from './pages/list_users/ListUsers';
import Listproduct from './pages/list_products/ListProducts';
import Single from './pages/single/Single';
import NewUsers from './pages/new_users/NewUsers';
import NewProducts from './pages/new_products/NewProducts';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './style/dark.scss';
import { useSelector } from 'react-redux';

function App() {
    const darkmode = useSelector((state: object) => state.darkModeReducer.darkMode);

    const currentUser = useSelector((state) => state.authReducer.currentUser);

    const RequireAuth = ({ children }) => {
        return currentUser ? children : <Navigate to="/login" />;
    };

    return (
        <div className={darkmode ? 'app dark' : 'app'}>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route path="login" element={<Login />} />
                        <Route
                            index
                            element={
                                <RequireAuth>
                                    <Home />
                                </RequireAuth>
                            }
                        />
                        <Route path="users">
                            <Route
                                index
                                element={
                                    <RequireAuth>
                                        <Listuser />
                                    </RequireAuth>
                                }
                            />
                            <Route
                                path=":userId"
                                element={
                                    <RequireAuth>
                                        <Single />
                                    </RequireAuth>
                                }
                            />
                            <Route
                                path="new"
                                element={
                                    <RequireAuth>
                                        <NewUsers />
                                    </RequireAuth>
                                }
                            />
                        </Route>
                        <Route path="products">
                            <Route
                                index
                                element={
                                    <RequireAuth>
                                        <Listproduct />
                                    </RequireAuth>
                                }
                            />
                            <Route
                                path=":productId"
                                element={
                                    <RequireAuth>
                                        <Single />
                                    </RequireAuth>
                                }
                            />
                            <Route
                                path="new"
                                element={
                                    <RequireAuth>
                                        <NewProducts />
                                    </RequireAuth>
                                }
                            />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
