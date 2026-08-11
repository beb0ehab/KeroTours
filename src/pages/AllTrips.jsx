import React, { useState } from 'react';
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
  const list = TRIPS[tab];
  const label = TABS.find(t => t[0] === tab)[1];

  return (
    <>
      <Banner eyebrow="Explore Everything" title="All Our Trips"
        copy="Years of experiences — sea, desert, city & ancient Egyptian. Every single one bookable directly on WhatsApp." />

      <div className="tabbar">
        <div className="wrap">
          {TABS.map(([key, name, Icon]) => (
            <button key={key} className={'tab' + (key === tab ? ' on' : '')} onClick={() => setTab(key)}>
              <Icon size={16} />{t(name)}
            </button>
          ))}
        </div>
      </div>

      <section className="plain">
        <div className="wrap">
          <div className="cat-head">
            <h2>{t(label)}</h2>
            <p>{list.length} {t('experiences available')}</p>
          </div>
          <div className="trip-grid">
            {list.map((t, i) => <TripCard key={t.name} t={t} theme={themeAt(i)} />)}
          </div>
        </div>
      </section>

      <CustomTripCta />
    </>
  );
}
