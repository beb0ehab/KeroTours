import React from 'react';
import { MessageCircle, Send, Camera, Music, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { Banner, Btn, Head, Flag, WA, EMAIL, SOCIAL } from '../shared.jsx';
import { useT } from '../i18n/index.jsx';

const CHANNELS = [
  ['whatsapp', MessageCircle, 'WhatsApp', '+20 122 633 3515', 'Instant reply · 24/7', WA],
  ['facebook', Send, 'Facebook', 'Kero Tours', 'Follow for deals & news', SOCIAL.facebook],
  ['instagram', Camera, 'Instagram', '@kero__tours_hurghada', 'Photos & reels from the Red Sea', SOCIAL.instagram],
  ['tiktok', Music, 'TikTok', '@kerotourshurghada1', 'Behind-the-scenes adventures', SOCIAL.tiktok],
  ['email', Mail, 'Email', EMAIL, 'We reply within a few hours', 'mailto:' + EMAIL]
];

const INFO = [
  [MapPin, 'Location', ['Hurghada, Red Sea Governorate', 'Egypt', 'All tours depart from your hotel']],
  [Clock, 'Availability', ['Open 7 days a week', '24/7 WhatsApp support', 'Most tours depart daily']],
  [Mail, 'Email', ['leotourss11@gmail.com', 'We reply within a few hours']],
  [MessageCircle, 'Languages', ['English · Deutsch · Polski', 'Français · Русский · Nederlands']]
];

const SPEAK = [
  ['gb', 'English', 'English'], ['de', 'Deutsch', 'German'], ['pl', 'Polski', 'Polish'],
  ['fr', 'Français', 'French'], ['ru', 'Русский', 'Russian'], ['nl', 'Nederlands', 'Dutch']
];

const REVIEWS = [
  ['Hammam & Massage', 'Booked the hammam and massage — pure paradise. Everything was arranged seamlessly, even from the hotel. Kero Tours responds instantly on WhatsApp!', 'Lena V.', 'nl', 'Netherlands'],
  ['Horse Riding', 'Horse riding between the desert and the sea was surreal. Kero Tours speak Russian which made everything so easy. Highly recommended for families.', 'Alexei R.', 'ru', 'Russia']
];

export default function Contact() {
  const t = useT();
  return (
    <>
      <Banner eyebrow="Get in Touch" title="Contact Us"
        copy="We reply on WhatsApp within minutes — day or night. Send us your dates, group size and what you'd like to do in Hurghada." />

      <section className="plain">
        <div className="wrap">
          <div className="fastest">
            <div className="fastest-copy">
              <div className="fastest-icon"><MessageCircle size={25} /></div>
              <div>
                <h2>{t('The Fastest Way to Book')}</h2>
                <p>{t('Skip the forms. Message us directly on WhatsApp in your language — English, German, Polish, French, Russian or Dutch.')}</p>
              </div>
            </div>
            <div className="fastest-action">
              <Btn tone="navy">Open WhatsApp Chat</Btn>
              <small>{t('Average response time: under 5 minutes · 24/7')}</small>
              <div className="fastest-meta">
                <span><Clock size={14} /> {t('24/7 WhatsApp support')}</span>
                <span><MessageCircle size={14} /> {t('We Speak Your Language')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tint">
        <div className="wrap">
          <Head eyebrow="Find Us" title="All Our Channels" />
          <div className="channel-grid">
            {CHANNELS.map(([key, Icon, name, handle, sub, href]) => (
              <a className={'channel ' + key} key={name} href={href}
                {...(key === 'email' ? {} : { target: '_blank', rel: 'noreferrer' })}>
                <div className="channel-top">
                  <span className="channel-icon"><Icon size={20} /></span>
                  <span className="channel-arrow"><ArrowUpRight size={18} /></span>
                </div>
                <div className="channel-body">
                  <h3>{name}</h3>
                  <b>{handle}</b>
                  <span>{t(sub)}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="info-grid">
            {INFO.map(([Icon, title, lines]) => (
              <article key={title}>
                <Icon size={18} />
                <h4>{t(title)}</h4>
                {lines.map(l => <p key={l}>{t(l)}</p>)}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="plain">
        <div className="wrap">
          <Head eyebrow="No Language Barrier" title="We Speak Your Language" />
          <div className="speak-grid">
            {SPEAK.map(([cc, native, english]) => (
              <article key={cc}>
                <Flag c={cc} size={28} />
                <b>{native}</b>
                <span>{t(english)}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tint">
        <div className="wrap">
          <Head eyebrow="Trusted by Thousands" title="Recent Reviews" />
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
        </div>
      </section>
    </>
  );
}
