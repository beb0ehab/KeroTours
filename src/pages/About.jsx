import React, { useEffect, useRef } from 'react';
import { Waves, Handshake, Languages, ShieldCheck, Compass, MessageCircle } from 'lucide-react';
import { P, Btn, Head, Flag } from '../shared.jsx';
import { useT } from '../i18n/index.jsx';

const VALUES = [
  [Waves, 'Passion for the Sea', 'We grew up on the Red Sea. We know every reef, every current, every secret snorkeling spot that tour buses miss.'],
  [Handshake, 'Honest & Transparent', 'No hidden fees. No pressure sales. We quote the full price upfront and deliver exactly what we promise.'],
  [Languages, 'Multilingual Team', 'Our guides speak 8 languages natively. We believe the best adventures happen when there’s no language barrier.'],
  [ShieldCheck, 'Safety First', 'All activities meet Egyptian tourism safety standards. We are fully licensed, insured, and regularly inspected.']
];

const TEAM = [
  ['Kirolos Wagdy', 'Head Guide & Founder', 'EN · DE · AR'],
  ['Kirolos Karam', 'Sea Trips Specialist', 'EN · RU · AR']
];

// Figma shows "Years of / Experiences" here — the number is missing in the
// design, so we use the home page's figure.
const STATS = [['30+', 'Experiences'], ['8', 'Languages'], ['40+', 'Countries Served'], ['5★', 'Average Rating']];

const REVIEWS = [
  ['Kero Tours made our holiday unforgettable! The private speedboat was absolutely stunning — dolphins appeared right next to us. Ahmed was so kind and professional.', 'Sophie M.', 'de', 'Germany'],
  ['Super safari was the highlight of our Egypt trip. Great value, well organized, and the Bedouin dinner under the stars was magical. Will book again!', 'Jan K.', 'pl', 'Poland'],
  ['The Cairo day trip was perfectly organized despite the early start. Our guide knew everything about the pyramids and museum. Truly once-in-a-lifetime.', 'Claire B.', 'fr', 'France']
];

export default function About() {
  const t = useT();
  const heroRef = useRef(null);
  const storyRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (hero) {
      hero.classList.add('about-hero-reveal-ready');
      requestAnimationFrame(() => requestAnimationFrame(() => hero.classList.add('about-hero-revealed')));
    }

    const story = storyRef.current;
    if (!story) return;

    story.classList.add('story-reveal-ready');
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      story.classList.add('story-revealed');
      observer.disconnect();
    }, { threshold: .18, rootMargin: '0px 0px -6% 0px' });

    observer.observe(story);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="about-hero">
        <div className="wrap" ref={heroRef}>
          <div>
            <div className="eyebrow">{t('About Kero Tours')}</div>
            <h1>{t('We Make Egypt')}<br /><em>{t('Unforgettable.')}</em></h1>
            <p>{t('Kero Tours is a licensed tour company based in Hurghada, Egypt. Founded by Kerolos — a passionate local guide — our mission is simple: your happiness is our priority.')}</p>
            <Btn>Plan Your Trip</Btn>
          </div>
          <img src={P + 'about-hero.jpg'} alt="Diving in Hurghada" />
        </div>
      </section>

      <section className="tint">
        <div className="wrap story-block" ref={storyRef}>
          <div className="pics">
            <img className="a" src={P + 'about-story1.jpg'} alt="Guests on a Kero Tours trip" loading="lazy" />
            <img className="b" src={P + 'about-story2.jpg'} alt="A Bedouin dinner" loading="lazy" />
            <div className="since"><small>{t('Since 2015')}</small><b>10K+</b><span>{t('Happy travellers')}</span></div>
          </div>
          <div>
            <Head left eyebrow="Our Story" title="Born From a Love of Egypt" />
            <p>{t('Kero Tours started in 2015 when Kerolos — a Hurghada-born guide with a degree in tourism — decided to do things differently. Most tour operators treat guests like tickets to be processed. Kerolos wanted guests to feel like family.')}</p>
            <p>{t('Today, our multilingual team of guides offers over 30 unique experiences — from private speedboat adventures on the Red Sea, to full-day Jeep safaris in the Sahara, to epic day trips to Luxor and Cairo.')}</p>
            <p>{t('We serve guests from Germany, Poland, France, Russia, the Netherlands, the UK, and beyond — always in their own language, always with a smile.')}</p>
            <div className="mini-stats">
              {STATS.map(([n, l]) => <div key={l}><b>{n}</b><span>{t(l)}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="plain values-section">
        <div className="wrap">
          <Head eyebrow="What Drives Us" title="Our Values" />
          <div className="why-grid values-grid">
            {VALUES.map(([Icon, title, copy], index) => (
              <article className="why value-card" key={title}>
                <div className="value-top"><span className="value-icon"><Icon size={23} /></span><span className="value-number">0{index + 1}</span></div>
                <div className="value-content"><h3>{t(title)}</h3><p>{t(copy)}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tint">
        <div className="wrap">
          <Head eyebrow="Meet the Team" title="Your Guides" copy="All licensed, passionate, and ready to make your day extraordinary." />
          <div className="team-grid">
            {TEAM.map(([name, role, langs]) => (
              <article className="member" key={name}>
                <div className="av">{name[0]}</div>
                <h3>{name}</h3>
                <p className="role">{t(role)}</p>
                <span className="langs">{langs}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="plain">
        <div className="wrap">
          <Head left eyebrow="Real Guests" title="What They Say" />
          <div className="review-grid three">
            {REVIEWS.map(([text, who, cc, country]) => (
              <article className="review" key={who}>
                <div className="stars">★★★★★</div>
                <q>{t(text)}</q>
                <div className="who">
                  <div className="av">{who[0]}</div>
                  <div><b>{who}</b><span><Flag c={cc} /> {t(country)}</span></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta about-cta">
        <div className="wrap about-cta-grid">
          <div className="about-cta-title">
            <div className="about-cta-kicker"><Compass size={17} /> {t('Plan Your Trip')}</div>
            <h2>{t('Ready to Meet Your Guide?')}</h2>
          </div>
          <div className="about-cta-panel">
            <p>{t("Message us on WhatsApp and we'll be in touch within minutes. In your language.")}</p>
            <div className="cta-actions">
              <Btn>Book a Trip</Btn>
              <Btn tone="ghost" icon="arrow" href="#/trips">Browse Trips</Btn>
            </div>
            <span className="about-cta-note"><MessageCircle size={15} /> {t('24/7 WhatsApp support')}</span>
          </div>
        </div>
      </section>
    </>
  );
}
