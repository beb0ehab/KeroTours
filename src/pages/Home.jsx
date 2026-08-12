import React from 'react';
import { ArrowRight, Check, Waves, Mountain, Building2, Plane, Tag, Languages, BadgeCheck, MessageCircle, Car, BadgeEuro, Star } from 'lucide-react';
import { P, Btn, Head, Flag, TripCard, SPOKEN } from '../shared.jsx';
import { useT } from '../i18n/index.jsx';
import { TRIPS } from '../trips.js';

const STATS = [
  ['10,000+', 'Happy Travellers'],
  ['8', 'Languages Spoken'],
  ['30+', 'Unique Experiences'],
  ['5★', 'Average Rating']
];

const HERO_THUMBS = [
  ['Sea', 'cat-sea.jpg', 'sand', 'sea'],
  ['Desert Adventures', 'cat-desert.jpg', 'navy', 'desert'],
  ['Entertainment', 'cat-entertain.jpg', 'sand', 'entertainment'],
  ['Historical Trips', 'cat-history.jpg', 'teal', 'historical']
];

const PACKAGES = [
  {
    theme: 'sand', tag: 'Private Package', photo: 'pkg-zero-stress.jpg',
    name: 'Zero Stress', price: '€55', unit: 'Up to 5 individuals',
    lede: 'Private welcome for up to 5 — airport to city in complete comfort.',
    featured: [0, 1, 2],
    items: ['Airport pickup from Hurghada', '2 SIM cards with 20 GB each', 'Private Hurghada city tour', 'Private guide throughout', 'Shopping stop at trip end']
  },
  {
    theme: 'navy', tag: 'Sea + City Bundle', photo: 'pkg-fun.jpg',
    name: 'Fun & Relaxation', price: '€175', unit: 'Up to 5 individuals',
    lede: 'Private speedboat, dolphin watching, White Island, and a full city tour.',
    featured: [0, 4],
    items: ['4-hr private speedboat (exclusive)', 'Snorkeling & dolphin watching', 'White Island visit', 'Fruits & drinks on board', 'Full Hurghada city tour', 'Private car transfers']
  },
  {
    theme: 'teal', tag: 'Adventure + Wellness', photo: 'pkg-desert.jpg',
    name: 'Desert & Relaxation', price: '€70', unit: 'Per individual',
    lede: 'Safari, horseback riding between sea and dunes, and a full spa session.',
    featured: [0, 2, 3],
    items: ['Super Safari: Jeep, buggy, quad & camel', 'Bedouin village + dinner & show', '1hr sea + 1hr desert horse ride', '1hr full body massage', '1hr spa, sauna & Jacuzzi', 'Private car + guide throughout']
  }
];

const CATEGORIES = [
  ['Sea', '11 Tours', 'cat-sea.jpg', 'sand', Waves, 'sea'],
  ['Desert Adventures', '5 Tours', 'cat-desert.jpg', 'navy', Mountain, 'desert'],
  ['Entertainment', '5 Tours', 'cat-entertain.jpg', 'teal-d', Building2, 'entertainment'],
  ['Historical Trips', '2 Tours', 'cat-history.jpg', 'teal', Plane, 'historical']
];

const WHY = [
  [Languages, '8 Languages Spoken', 'English, German, Polish, French, Russian, Dutch, Arabic, Italian. Your guide speaks your language fluently — no lost details, no broken English.'],
  [BadgeCheck, 'Licensed & Insured', 'Kero Tours holds all required Egyptian tourism licenses. Every guide is certified, and all activities meet safety standards.'],
  [MessageCircle, 'Instant WhatsApp Booking', 'No booking forms, no waiting. Message us on WhatsApp and get a confirmed booking within minutes — 24/7.'],
  [Car, 'Private Door-to-Door', 'All transfers are private and include hotel pickup and drop-off. No shared minibuses unless you want the shared price.'],
  [BadgeEuro, 'Transparent Pricing', 'What you see is what you pay. No hidden fees, no pressure for extras. We quote the full price upfront.'],
  [Star, '5-Star Experience', 'Over 10,000 satisfied travellers and hundreds of 5-star reviews on Google and TripAdvisor. Your satisfaction is our only KPI.']
];

const DAY_TRIPS = [
  ['Cairo Day Trip', 'Fri & Sun · Shared from €100 · Private from €150', "Giza Pyramids, Great Sphinx & the Grand Egyptian Museum — Tutankhamun's full treasure in one day.", 'day-cairo.jpg'],
  ['Luxor Day Trip', 'Tue & Thu · Shared from €80 · Private from €140', 'Karnak Temple, Valley of the Kings, Hatshepsut Temple & Colossi of Memnon in one amazing day.', 'day-luxor.jpg']
];

const TAXI_ITEMS = [
  ['✈️', 'Airport pickups — Hurghada & Marsa Alam'],
  ['🏨', 'Hotel to hotel & resort transfers'],
  ['🏙️', 'City rides anywhere in Hurghada'],
  ['🌙', 'Available 24 hours, 7 days a week']
];

const REVIEWS = [
  ['Private Speedboat', 'Kero Tours made our holiday unforgettable! The private speedboat was absolutely stunning — dolphins appeared right next to us. Ahmed was so kind and professional.', 'Sophie M.', 'de', 'Germany'],
  ['Super Safari', 'Super safari was the highlight of our Egypt trip. Great value, well organized, and the Bedouin dinner under the stars was magical. Will book again!', 'Jan K.', 'pl', 'Poland'],
  ['Cairo Day Trip', 'The Cairo day trip was perfectly organized despite the early start. Our guide knew everything about the pyramids and museum. Truly once-in-a-lifetime.', 'Claire B.', 'fr', 'France'],
  ['Hammam & Massage', 'Booked the hammam and massage — pure paradise. Everything was arranged seamlessly, even from the hotel. Kero Tours responds instantly on WhatsApp!', 'Lena V.', 'nl', 'Netherlands'],
  ['Horse Riding', 'Horse riding between the desert and the sea was surreal. Kero Tours speak Russian which made everything so easy. Highly recommended for families.', 'Alexei R.', 'ru', 'Russia'],
  ['Multiple Trips', 'Booked three different trips through Kero Tours. Every single one was flawless — punctual pickup, friendly guides, and fantastic value for money.', 'Emma T.', 'gb', 'UK']
];

const SCORES = [['Guides', 98], ['Value', 96], ['Timing', 97]];

function Package({ p }) {
  const t = useT();
  return (
    <article className={'pkg ' + p.theme}>
      <div className="photo">
        <img src={P + p.photo} alt={p.name} loading="lazy" />
        <span className="tag">{t(p.tag).toUpperCase()}</span>
      </div>
      <div className="body">
        <h3>{t(p.name)}</h3>
        <p className="lede">{t(p.lede)}</p>
        <div className="price"><b>{p.price}</b><span>{t(p.unit)}</span></div>
        <ul>{p.items.map((item, index) => {
          const featured = p.featured.includes(index);
          const Icon = featured ? Star : Check;
          return <li className={featured ? 'primary' : ''} key={item}><Icon size={featured ? 15 : 14} />{t(item)}</li>;
        })}</ul>
        <p className="note">{t("+€5/person from Makadi Bay / Sahl Hasheesh / El Gouna")}</p>
        <Btn tone={p.theme === 'sand' ? 'navy' : 'sand'} block>Book This Package</Btn>
      </div>
    </article>
  );
}

function PackagesCarousel() {
  return (
    <div className="package-slider">
      <div className="pkg-auto-track">
        {[0, 1].map(group => <div className="pkg-grid" key={group} aria-hidden={group === 1}>
          {PACKAGES.map(p => <Package key={p.name} p={p} />)}
        </div>)}
      </div>
    </div>
  );
}

export default function Home() {
  const t = useT();
  return (
    <>
      <section className="hero">
        <div className="inner">
          <div>
            <div className="kicker"><span>{t("Hurghada Escapes")}</span><span>{t("Desert Safaris")}</span><span>{t("Fun History")}</span></div>
            <h1>{t("Spend your vacation")}<br />{t("with our activities")}</h1>
            <div className="thumbs">
              <div className="thumb-track">
                {[0, 1].map(group => <div className="thumb-group" key={group} aria-hidden={group === 1}>
                  {HERO_THUMBS.map(([label, photo, tone, slug]) => (
                    <a className={'thumb ' + tone} href={'#/trips/' + slug} key={label} tabIndex={group === 1 ? -1 : undefined}>
                      <img src={P + photo} alt={group === 0 ? t(label) : ''} />
                      <b>{t(label)}</b>
                    </a>
                  ))}
                </div>)}
              </div>
            </div>
          </div>
          <div className="art" aria-hidden="true">
            <img className="lockup" src={P + 'hero-logo.png'} alt="" />
            <img className="boat" src={P + 'hero-boat.png'} alt="" />
          </div>
        </div>
      </section>

      <div className="stats">
        <div className="inner">
          {STATS.map(([n, l]) => <div key={l}><b>{n}</b><span>{t(l)}</span></div>)}
        </div>
      </div>

      <section className="tint">
        <div className="wrap">
          <Head eyebrow="Curated Bundles" title="Special Package Offers"
            copy="Hand-picked combinations for the best Hurghada experience — private, all-inclusive, zero hassle." />
          <PackagesCarousel />
        </div>
      </section>

      <section className="plain">
        <div className="wrap">
          <Head eyebrow="Explore All Trips" title="Every Kind of Adventure" />
          <div className="cat-grid">
            {CATEGORIES.map(([name, count, photo, tone, Icon, slug]) => (
              <a className={'cat ' + tone} href={'#/trips/' + slug} key={name}>
                <div className="col">
                  <span className="icon"><Icon size={22} /></span>
                  <h3>{t(name)}</h3>
                  <p className="count">{count.replace("Tours", "").trim()} {t("Tours")}</p>
                  <span className="explore">{t("Explore")} <ArrowRight size={16} /></span>
                </div>
                <img src={P + photo} alt={name} loading="lazy" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="tint why-section">
        <div className="wrap">
          <Head eyebrow="Why Kero Tours" title="Why Travellers Choose Us"
            copy="We've hosted guests from 40+ countries. Here's why they keep coming back." />
          <div className="why-grid why-bento">
            {WHY.map(([Icon, title, copy], index) => (
              <article className="why why-feature" key={title}>
                <div className="why-feature-top"><span className="why-feature-icon"><Icon size={22} /></span><span>0{index + 1}</span></div>
                <div className="why-feature-copy"><h3>{t(title)}</h3><p>{t(copy)}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="plain">
        <div className="wrap">
          <div className="trips-head">
            <Head left eyebrow="Most Popular" title="Top Sea Trips" />
            <a className="all-trips" href="#/trips">{t("All trips")} <ArrowRight size={16} /></a>
          </div>
          <div className="trip-grid">
            {TRIPS.sea.slice(0, 3).map((t, i) => <TripCard key={t.name} t={t} theme={i % 2 === 0 ? 'sand' : 'navy'} />)}
          </div>
        </div>
      </section>

      <section className="sahara">
        <div className="inner">
          <div>
            <Head left light eyebrow="Desert Adventures" title="Into the Sahara" />
            <p>{t("Quad bikes, 4×4 Jeeps, Bedouin villages, camel rides and starlit dinners — 5 desert experiences from Hurghada.")}</p>
          </div>
          <Btn icon="arrow" href="#/trips/desert">See Desert Trips</Btn>
        </div>
      </section>

      <section className="tint">
        <div className="wrap">
          <Head eyebrow="Beyond Hurghada" title="Ancient Egypt Day Trips"
            copy="Step back 5,000 years — Giza Pyramids, Karnak Temple, Valley of the Kings, all from Hurghada." />
          <div className="day-grid">
            {DAY_TRIPS.map(([name, pill, copy, photo]) => (
              <article className="day" key={name}>
                <img src={P + photo} alt={name} loading="lazy" />
                <div className="c">
                  <span className="pill">{t(pill).toUpperCase()}</span>
                  <h3>{t(name)}</h3>
                  <p>{t(copy)}</p>
                  <Btn>Book Now</Btn>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="taxi">
            <div className="pic">
              <img src={P + 'taxi.jpg'} alt="Kero Tours taxi service" loading="lazy" />
              <div className="badge"><small>{t("Prices from")}</small><b>€5</b></div>
              <div className="chips"><span>✓ {t("On Time")}</span><span>✓ {t("Private")}</span><span>✓ {t("Door to Door")}</span></div>
            </div>
            <div className="c">
              <div className="eyebrow">{t("Taxi Service")}</div>
              <h2>🚕 Kero Tours<em>{t("Taxi Service")}</em></h2>
              <p>Safe, comfortable &amp; always on time. Whether it's airport pickup, hotel transfers, or a ride around Hurghada — we're your private driver whenever you need us.</p>
              <ul>{TAXI_ITEMS.map(([e, line]) => <li key={line}><span>{e}</span>{t(line)}</li>)}</ul>
              <div className="actions">
                <Btn>Book a Taxi Now</Btn>
                <span className="from"><Tag size={15} /> {t("From")} <b>€5</b> {t("anywhere")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tint">
        <div className="wrap">
          <Head eyebrow="Guest Reviews" title="What Our Travellers Say" copy="Real guests. Real words. No scripts." />
          <div className="review-grid">
            {REVIEWS.map(([chip, text, who, cc, country]) => (
              <article className="review" key={who}>
                <div className="top">
                  <div className="stars">★★★★★</div>
                  <span className="chip">{t(chip)}</span>
                </div>
                <q>{t(text)}</q>
                <div className="who">
                  <div className="av">{who[0]}</div>
                  <div><b>{who}</b><span><Flag c={cc} /> {t(country)}</span></div>
                </div>
              </article>
            ))}
          </div>
          <div className="score">
            <div className="big">
              <b>5.0</b>
              <div className="stars">★★★★★</div>
              <span>{t("Average across Google & TripAdvisor")}</span>
            </div>
            <div className="bars">
              {SCORES.map(([label, pct]) => (
                <div className="row" key={label}>
                  <span>{t(label)}</span>
                  <span className="track"><i style={{ width: pct + '%' }} /></span>
                  <b>{pct}%</b>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="plain">
        <div className="wrap">
          <div className="story">
            <div className="pic">
              <img src={P + 'diver.jpg'} alt="Diving in Hurghada" loading="lazy" />
              <div className="speak">
                <b>{t("We Speak")}</b>
                <div className="flags">{SPOKEN.map(c => <Flag key={c} c={c} />)}</div>
              </div>
            </div>
            <div>
              <Head left eyebrow="Our Story" title={<>Your Happiness is<em>Our Priority</em></>} />
              <p>At Kero Tours, we are licensed guides whose single mission is to make sure you leave Hurghada with memories that last a lifetime — whether you're diving into crystal-clear waters, riding quad bikes across golden dunes, or standing in awe before the Pharaohs' monuments.</p>
              <Btn tone="navy" icon="arrow" href="#/about">Our Story</Btn>
            </div>
          </div>
        </div>
      </section>

      <section className="cta home-cta">
        <div className="wrap home-cta-inner">
          <div className="home-cta-copy">
            <span className="home-cta-line" aria-hidden="true" />
            <h2>{t("Ready to Explore Hurghada?")}</h2>
            <p>{t("Message us on WhatsApp — we reply instantly, 24/7. Tell us your dates and we'll build your perfect Egypt itinerary.")}</p>
            <Btn>Start Planning Now</Btn>
          </div>
          <img className="home-cta-art" src={P + 'cta/hurghada-travel-cutout.png'} alt="" aria-hidden="true" loading="lazy" />
        </div>
      </section>
    </>
  );
}
