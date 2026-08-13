import React, { useState, useEffect, useLayoutEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Header, Footer, Floats } from './shared.jsx';
import { LangProvider } from './i18n/index.jsx';
import Home from './pages/Home.jsx';
import AllTrips from './pages/AllTrips.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import './styles.css';

/** Hash routing: '#/', '#/trips', '#/trips/<category>', '#/about', '#/contact'. */
function useHash() {
  const [hash, setHash] = useState(() => window.location.hash || '#/');
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    const onChange = () => {
      const root = document.documentElement;
      const previousBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      setHash(window.location.hash || '#/');
      requestAnimationFrame(() => { root.style.scrollBehavior = previousBehavior; });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return hash;
}

function App() {
  const hash = useHash();
  const [, section, sub] = hash.replace(/^#/, '').split('/');

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [hash]);

  let page, route;
  switch (section) {
    case 'trips': page = <AllTrips key={sub || 'sea'} tab={sub} />; route = '#/trips'; break;
    case 'about': page = <About />; route = '#/about'; break;
    case 'contact': page = <Contact />; route = '#/contact'; break;
    default: page = <Home />; route = '#/';
  }

  return (
    <LangProvider>
      <div className="site">
        <Header route={route} />
        {/* keyed so the page-in transition replays on every route change */}
        <main key={hash}>{page}</main>
        <Footer />
        <Floats />
      </div>
    </LangProvider>
  );
}

createRoot(document.getElementById('root')).render(<App />);
