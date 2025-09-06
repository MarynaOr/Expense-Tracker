import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './components/About';
import HomePage from './components/HomePage';
import React, { lazy, Suspense, type FC } from 'react';

// interface HomeProps{
//   title:string,
// }

const Home = lazy(() => import('./pages/Home'));

const App: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <header>
        <HomePage />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </header>
    </Suspense>
  );
};

export default App;
