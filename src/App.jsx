import { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// import Home from './pages/home';
import SearchResults from './pages/searchResults';
import Detail from './pages/detail';
import NotFound from './pages/notFound';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';

import { UserContextProvider } from './context/UserContext';
import { GifsContextProvider } from './context/GifsContext';

import Header from './components/Header';

const HomePage = lazy(() => import('./pages/home'));

function App() {
    return (
        <UserContextProvider>
            <Header />
            <Suspense>
                <section>
                    <GifsContextProvider>
                        <Link to="/"><p className='title'>Giffy</p></Link>
                        <Routes>
                            <Route
                                path='/'
                                element={<HomePage />}
                            />
                            <Route
                                path='/search/:keyword/:rating?/:lang?'
                                element={<SearchResults />}
                            />
                            <Route
                                path='/gif/:id'
                                element={<Detail />}
                            />
                            <Route
                                path='/login'
                                element={<LoginPage />}
                            />
                            <Route
                                path='/register'
                                element={<RegisterPage />}
                            />
                            <Route
                                path='*'
                                element={<NotFound />}
                            />
                        </Routes>
                    </GifsContextProvider>
                </section>
            </Suspense>
        </UserContextProvider>
    )
}

export default App;