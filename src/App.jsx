import { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// import Home from './pages/home';
import SearchResults from './pages/searchResults';
import Detail from './pages/detail';
import NotFound from './pages/notFound/index';

import './App.css';

import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

const HomePage = lazy(() => import('./pages/home'));

function App() {
    return (
        <StaticContext.Provider value={{
            name: 'sadpc',
            suscribeToChannel: true
        }}>
            <Suspense>
                <section>
                    <GifsContextProvider>
                        <Link to="/"><h1>Giffy</h1></Link>
                        <Routes>
                            <Route
                                path='/'
                                element={<HomePage />}
                            />
                            <Route
                                path='/search/:keyword'
                                element={<SearchResults />}
                            />
                            <Route
                                path='/gif/:id'
                                element={<Detail />}
                            />
                            <Route
                                path='*'
                                element={<NotFound />}
                            />
                        </Routes>
                    </GifsContextProvider>
                </section>
            </Suspense>
        </StaticContext.Provider>
    )
}

export default App;