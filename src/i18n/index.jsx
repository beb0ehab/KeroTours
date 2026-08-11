import React, { createContext, useContext, useEffect, useState } from 'react';
import de from './de.js';
import pl from './pl.js';
import fr from './fr.js';
import nl from './nl.js';
import ru from './ru.js';

/** The six languages Kero Tours guides actually speak. */
export const LANGUAGES = [
  ['en', 'English', 'gb'],
  ['de', 'Deutsch', 'de'],
  ['pl', 'Polski', 'pl'],
  ['fr', 'Français', 'fr'],
  ['nl', 'Nederlands', 'nl'],
  ['ru', 'Русский', 'ru']
];

// English is the source language: dictionaries are keyed by the English string,
// so a missing entry falls back to English instead of showing a raw key.
const DICTS = { en: {}, de, pl, fr, nl, ru };

const STORAGE_KEY = 'kero-lang';
const LangContext = createContext({ lang: 'en', setLang: () => { }, t: s => s });

function detect() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && DICTS[saved]) return saved;
    const nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    if (DICTS[nav]) return nav;
  } catch { /* private mode — fall through to English */ }
  return 'en';
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(detect);

  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* ignore */ }
  }, [lang]);

  const dict = DICTS[lang] || {};
  const t = s => (typeof s === 'string' && dict[s]) || s;

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
export const useT = () => useContext(LangContext).t;
