import React, { useEffect, useRef, useState } from 'react';
import { Waves, Mountain, Building2, Plane } from 'lucide-react';
import { Banner, TripCard, themeAt, CustomTripCta } from '../shared.jsx';
import { useT } from '../i18n/index.jsx';
import { TRIPS } from '../trips.js';

const TABS = [
  ['sea', 'Sea', Waves],
  ['desert', 'Desert Adventures', Mountain],
  ['entertainment', 'Entertainment', Building2],
  ['historical', 'Historical Trips', Plane]
];

export default function AllTrips({ tab: initial }) {
  const t = useT();
  const [tab, setTab] = useState(TRIPS[initial] ? initial : 'sea');
  const tabsRef = useRef(null);
  const tripsRef = useRef(null);
  const list = TRIPS[tab];
  const label = TABS.find(t => t[0] === tab)[1];

  useEffect(() => {
    const slider = tabsRef.current;
    if (!slider) return;
    let frame;
    let paused = false;
    let resumeTimer;
    let lastTime = performance.now();
    const loopWidth = () => slider.scrollWidth / 3;
    const pause = () => { paused = true; clearTimeout(resumeTimer); };
    const release = () => {
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => { paused = false; lastTime = performance.now(); }, 1200);
    };
    const tick = now => {
      const width = loopWidth();
      if (width && slider.scrollLeft < width * .45) slider.scrollLeft += width;
      else if (width && slider.scrollLeft > width * 2.45) slider.scrollLeft -= width;
      if (!paused && width) slider.scrollLeft += Math.min(now - lastTime, 32) * .03;
      lastTime = now;
      frame = requestAnimationFrame(tick);
    };
    slider.scrollLeft = loopWidth();
    slider.addEventListener('pointerdown', pause);
    slider.addEventListener('pointerup', release);
    slider.addEventListener('pointercancel', release);
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(resumeTimer);
      slider.removeEventListener('pointerdown', pause);
      slider.removeEventListener('pointerup', release);
      slider.removeEventListener('pointercancel', release);
    };
  }, []);

  useEffect(() => {
    const grid = tripsRef.current;
    if (!grid) return;
    grid.classList.add('reveal-ready');
    const cards = grid.querySelectorAll('.trip');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle('is-revealed', entry.isIntersecting);
      });
    }, { threshold: .12, rootMargin: '-3% 0px -7% 0px' });
    cards.forEach((card, index) => {
      card.style.setProperty('--trip-reveal-order', index % 2);
      observer.observe(card);
    });
    return () => observer.disconnect();
  }, [tab]);

  return (
    <>
      <Banner eyebrow="Explore Everything" title="All Our Trips"
        copy="Years of experiences — sea, desert, city & ancient Egyptian. Every single one bookable directly on WhatsApp." />

      <div className="tabbar">
        <div className="tabbar-loop" ref={tabsRef}>
          <div className="tab-track">
            {[0, 1, 2].map(group => (
              <div className="tab-group" key={group} aria-hidden={group !== 1}>
                {TABS.map(([key, name, Icon]) => (
                  <button key={key} tabIndex={group === 1 ? undefined : -1} className={'tab' + (key === tab ? ' on' : '')} onClick={() => setTab(key)}>
                    <Icon size={16} />{t(name)}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="plain">
        <div className="wrap">
          <div className="cat-head">
            <h2>{t(label)}</h2>
            <p>{list.length} {t('experiences available')}</p>
          </div>
          <div className="trip-grid" ref={tripsRef}>
            {list.map((t, i) => <TripCard key={t.name} t={t} theme={themeAt(i)} />)}
          </div>
        </div>
      </section>

      <CustomTripCta />
    </>
  );
}
