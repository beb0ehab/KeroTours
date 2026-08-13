import React from 'react';
import { ArrowRight, Check, Star, MessageCircle, Clock, ChevronDown, Globe, Menu, X, Mail, MapPin, Send, Camera, Music } from 'lucide-react';
import { useT, useLang, LANGUAGES } from './i18n/index.jsx';

const BASE = import.meta.env.BASE_URL;
export const P = BASE + 'assets/photos/';
export const LOGO = BASE + 'assets/logo-dark.png';
export const LOGO_LIGHT = BASE + 'assets/logo-light.png';
export const WA = 'https://wa.me/201226333515';
export const EMAIL = 'leotourss11@gmail.com';

export const SOCIAL = {
  facebook: 'https://www.facebook.com/share/1EBGPqXSJp/',
  instagram: 'https://www.instagram.com/kero__tours_hurghada',
  tiktok: 'https://www.tiktok.com/@kerotourshurghada1'
};

export const NAV = [
  ['Home', '#/'],
  ['All Trips', '#/trips'],
  ['About', '#/about'],
  ['Contact', '#/contact']
];

// One source of truth: we only advertise the languages we actually serve.
export const LANGS = LANGUAGES.map(([, name, flag]) => [flag, name]);
export const SPOKEN = LANGUAGES.map(([, , flag]) => flag);

// Windows/Linux browsers do not render regional-indicator flag emoji, so the
// flags in the design are drawn as tiny SVGs instead.
const FLAGS = {
  gb: ['#012169', '#fff', '#c8102e'],
  de: ['#000', '#dd0000', '#ffce00'],
  pl: ['#fff', '#dc143c'],
  fr: ['#0055a4', '#fff', '#ef4135'],
  ru: ['#fff', '#0039a6', '#d52b1e'],
  nl: ['#ae1c28', '#fff', '#21468b'],
  eg: ['#ce1126', '#fff', '#000'],
  it: ['#008c45', '#f4f5f0', '#cd212a']
};
const VERTICAL = new Set(['fr', 'it']);

export function Flag({ c, size = 18 }) {
  const colors = FLAGS[c];
  if (!colors) return null;
  return (
    <svg className="flag" viewBox="0 0 18 12" width={size} height={size * 2 / 3} role="img" aria-label={c.toUpperCase()}>
      {c === 'gb' ? (
        <>
          <rect width="18" height="12" fill="#012169" />
          <path d="M0 0l18 12M18 0L0 12" stroke="#fff" strokeWidth="2.6" />
          <path d="M0 0l18 12M18 0L0 12" stroke="#c8102e" strokeWidth="1.2" />
          <path d="M9 0v12M0 6h18" stroke="#fff" strokeWidth="4" />
          <path d="M9 0v12M0 6h18" stroke="#c8102e" strokeWidth="2" />
        </>
      ) : colors.map((col, i) => (
        VERTICAL.has(c)
          ? <rect key={col + i} x={(18 / colors.length) * i} width={18 / colors.length} height="12" fill={col} />
          : <rect key={col + i} y={(12 / colors.length) * i} width="18" height={12 / colors.length} fill={col} />
      ))}
    </svg>
  );
}

export function Btn({ children, tone = 'sand', block, icon = 'wa', href = WA }) {
  const t = useT();
  const external = href.startsWith('http') || href.startsWith('mailto:');
  return (
    <a className={`btn ${tone}${block ? ' block' : ''}`} href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
      {icon === 'wa' && <MessageCircle size={15} />}
      {typeof children === 'string' ? t(children) : children}
      {icon === 'arrow' && <ArrowRight size={16} />}
    </a>
  );
}

export function Head({ eyebrow, title, copy, left, light }) {
  const t = useT();
  return (
    <div className={'head' + (left ? ' left' : '') + (light ? ' light' : '')}>
      {eyebrow && <div className="eyebrow">{t(eyebrow)}</div>}
      <h2>{typeof title === 'string' ? t(title) : title}</h2>
      {copy && <p>{t(copy)}</p>}
    </div>
  );
}

/** Page banner used by every page except Home. */
export function Banner({ eyebrow, title, copy }) {
  const t = useT();
  return (
    <section className="banner">
      <div className="wrap">
        <div className="eyebrow">{t(eyebrow)}</div>
        <h1>{t(title)}</h1>
        {copy && <p>{t(copy)}</p>}
      </div>
    </section>
  );
}

export function Header({ route }) {
  const t = useT();
  const [menu, setMenu] = React.useState(false);
  return (
    <header>
      <div className="bar">
        <a className="logo" href="#/"><img src={LOGO} alt="Kero Tours" /></a>
        <nav className={menu ? 'open' : ''} onClick={() => setMenu(false)}>
          {NAV.map(([label, href]) => (
            <a key={label} href={href} className={href === route ? 'active' : ''}>{t(label)}</a>
          ))}
        </nav>
        <Btn>Book Now</Btn>
        <button className="burger" onClick={() => setMenu(!menu)} aria-label="Menu">
          {menu ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

export function Footer() {
  const t = useT();
  return (
    <footer>
      <div className="wrap">
        <div className="cols">
          <div>
            <img className="logo" src={LOGO_LIGHT} alt="Kero Tours" />
            <p>{t('Licensed tour guides in Hurghada, Egypt. We speak your language — literally.')}</p>
            <div className="socials">
              <a href={SOCIAL.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Send size={16} /></a>
              <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Camera size={16} /></a>
              <a href={SOCIAL.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok"><Music size={16} /></a>
            </div>
          </div>
          <div>
            <h4>{t('Navigate')}</h4>
            <nav>{NAV.map(([l, h]) => <a key={l} href={h}>{t(l)}</a>)}</nav>
          </div>
          <div>
            <h4>{t('Contact')}</h4>
            <div className="line"><MessageCircle size={15} /><span className="nb">+20 122 633 3515</span><span className="sub">{t('WhatsApp · 24/7')}</span></div>
            <div className="line"><Mail size={15} /><span>{EMAIL}</span></div>
            <div className="line"><MapPin size={15} /><span>{t('Hurghada, Red Sea, Egypt')}</span></div>
          </div>
          <div>
            <h4>{t('We Speak')}</h4>
            <div className="langs">{LANGS.map(([c, l]) => <span key={l}><Flag c={c} /> {l}</span>)}</div>
          </div>
        </div>
        <div className="bottom">
          <span>{t('© 2026 Kero Tours. All rights reserved.')}</span>
          <span>{t('Licensed tour operators · Hurghada, Red Sea Governorate, Egypt')}</span>
        </div>
      </div>
    </footer>
  );
}

export function Floats() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = React.useState(false);
  const current = LANGUAGES.find(l => l[0] === lang) || LANGUAGES[0];

  return (
    <div className="floats">
      <div className="lang-wrap">
        {open && (
          <div className="lang-menu">
            {LANGUAGES.map(([code, name, flag]) => (
              <button key={code} className={code === lang ? 'on' : ''}
                onClick={() => { setLang(code); setOpen(false); }}>
                <Flag c={flag} /> {name}
              </button>
            ))}
          </div>
        )}
        <button className="lang-pill" onClick={() => setOpen(!open)} aria-expanded={open}>
          <Globe size={15} /> <Flag c={current[2]} /> {current[1]}
        </button>
      </div>
      <a className="wa" href={WA} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={24} /></a>
    </div>
  );
}

/** The trip card, shared by the home page and the All Trips tabs. */
export function TripCard({ t: trip, theme }) {
  const t = useT();
  const [open, setOpen] = React.useState(false);
  const optionsId = React.useId();
  return (
    <article className={'trip ' + theme}>
      <div className="pic">
        <img src={P + trip.img} alt={t(trip.name)} loading="lazy" />
        {trip.badge && <span className="badge">{t(trip.badge).toUpperCase()}</span>}
      </div>
      <div className="in">
        <h3>{t(trip.name)}</h3>
        <div className="price"><b>{t(trip.price)}</b><span>{t(trip.unit)}</span></div>
        <div className="meta"><Clock size={13} />{t(trip.duration)}</div>
        {trip.options && (
          <button type="button" className={'meta opts' + (open ? ' open' : '')}
            onClick={() => setOpen(!open)} aria-expanded={open} aria-controls={optionsId}>
            <ChevronDown size={14} />
            {t('Pricing options')}
          </button>
        )}
        {trip.options && open && (
          <div className="price-options" id={optionsId} role="region" aria-label={t('Pricing options')}>
            {Array.isArray(trip.options) ? (
              <div className="price-options-list">
                {trip.optionsCommon && <div className="options-common"><b>{t('Included in every package')}</b><ul>{trip.optionsCommon.map(item => <li key={item}><Check size={12} />{t(item)}</li>)}</ul></div>}
                {trip.options.map((option, index) => (
                  <article key={option.name}>
                    <span className="option-number">0{index + 1}</span>
                    <div className="option-copy">
                      <b>{t(option.name)}</b>
                      <span className="price-options-time"><Clock size={12} /> {t(option.duration)}</span>
                      {option.highlight && <span className="option-highlight"><Star size={12} />{t(option.highlight)}</span>}
                    </div>
                    <strong className="option-price">{option.price}</strong>
                  </article>
                ))}
                <p className="options-note">{t(trip.optionsNote)}</p>
                <Btn tone={theme === 'sand' ? 'navy' : 'sand'} block>{t('Book on WhatsApp')}</Btn>
              </div>
            ) : (
              <>
                <div className="price-options-main"><b>{t(trip.price)}</b><span>{t(trip.unit)}</span></div>
                <div className="price-options-time"><Clock size={13} /> {t(trip.duration)}</div>
                <Btn tone={theme === 'sand' ? 'navy' : 'sand'} block>{t('Book on WhatsApp')}</Btn>
              </>
            )}
          </div>
        )}
        <ul>{trip.items.map(i => <li key={i}><Check size={13} />{t(i)}</li>)}</ul>
        <p className="note">{t(trip.note)}{trip.note2 && <><br />{t(trip.note2)}</>}</p>
        <Btn tone={theme === 'sand' ? 'navy' : 'sand'} block>Book on WhatsApp</Btn>
      </div>
    </article>
  );
}

export const themeAt = i => ['sand', 'navy', 'teal'][i % 3];

/** "Can't find what you're looking for" block that closes every trips tab. */
export function CustomTripCta() {
  const t = useT();
  return (
    <section className="custom-cta">
      <div className="wrap">
        <div className="star">✨</div>
        <h2>{t("Can't Find What You're Looking For?")}</h2>
        <p>{t("We build custom itineraries every day. Tell us your group size, budget, and dates — we'll craft the perfect Hurghada experience just for you.")}</p>
        <Btn>Build a Custom Trip</Btn>
      </div>
    </section>
  );
}
