// Trip catalogue, transcribed from the All Trips frames in Figma.
const M5 = '+€5/person from Makadi / Sahl Hasheesh';

export const CATEGORIES = [
  ['sea', 'Sea', 'Waves'],
  ['desert', 'Desert Adventures', 'Mountain'],
  ['entertainment', 'Entertainment', 'Building2'],
  ['historical', 'Historical Trips', 'Plane']
];

export const TRIPS = {
  sea: [
    { name: '🚤 Private Speedboat', price: 'From €135', unit: 'Up to 5 persons', duration: '4 hours', badge: 'Most Popular', optionsCommon: ['Dolphin watching', 'Visit to White Island', 'Snorkeling stop', 'Private speedboat experience'], options: [
      { name: 'The Snorkeler Package', price: '€135', duration: '4 hours', highlight: '2 snorkeling stops at beautiful coral reefs' },
      { name: 'The Magawish Package', price: '€145', duration: '4 hours', highlight: '1.5 hours at Magawish Island' },
      { name: 'The Island Vibe Package', price: '€180', duration: '4 hours', highlight: '1.5 hours of free time on your preferred island (Orange Bay or Hula Hula)' }
    ], optionsNote: 'All packages are private and designed for up to 5 guests, offering a relaxed and unforgettable Red Sea adventure.', items: ['Wild dolphin watching', 'White Island visit', 'Snorkeling included'], note: M5, img: 't-speedboat.jpg' },
    { name: '🏝️ Orange Bay Island', price: '€25', unit: 'Per adult', duration: '7–8 hours', items: ['2 hrs on Orange Bay', 'Two snorkeling stops', 'Buffet lunch & drinks'], note: M5, note2: 'Complimentary welcome drink included', img: 't-orangebay.jpg' },
    { name: '🏊 Ozirea Island', price: '€75', unit: 'Per adult (8+)', duration: '7–8 hours', badge: 'Premium', items: ['3 hrs island time + pool', '1-hr snorkeling stop', 'Buffet lunch & drinks'], note: 'Transfer fees vary by area', img: 't-ozirea.jpg' },
    { name: '🌴 Paradise Island', price: '€50', unit: 'Per adult (11+)', duration: '7–8 hours', items: ['Full-day island access', 'Snorkeling included', 'Open-buffet lunch'], note: M5, img: 't-paradise.jpg' },
    { name: '🌺 Eden Island', price: '€70', unit: 'Per adult (11+)', duration: '7–8 hours', items: ['Full-day Eden Island', 'Snorkeling included', 'Buffet lunch & drinks'], note: M5, img: 't-eden.jpg' },
    { name: '🐚 Mahmya Island', price: '€85', unit: 'Per adult (11+)', duration: '7–8 hours', badge: 'Premium', items: ['Full-day Mahmya beach', 'Snorkeling included', 'Buffet lunch & drinks'], note: M5, img: 't-mahmya.jpg' },
    { name: '🐬 Dolphin House Boat', price: '€25', unit: 'Per adult (shared)', duration: '7–8 hours', items: ['Wild dolphin swimming', 'Two snorkeling stops', 'Buffet lunch & drinks'], note: M5, img: 't-dolphinhouse-new.jpg.jpeg' },
    { name: '🔭 Semi-Submarine', price: '€20', unit: 'Per adult (11+)', duration: '2 hours', items: ['45-min panoramic view', 'No swimming needed', 'Optional snorkeling'], note: M5, img: 't-semisub.jpg' },
    { name: '🤿 Scuba Diving', price: 'From €25', unit: 'Per person (10+ yrs)', duration: '7–8 hours', options: true, items: ['All skill levels', 'Two dive sessions', 'Buffet lunch & drinks'], note: 'Transfer fees vary by area', img: 't-scuba.jpg' },
    { name: '🪂 Parasailing', price: '€20', unit: 'Per person', duration: '10–15 min flight', items: ['Single or tandem flight', 'Direct boat takeoff', 'Hotel pickup & drop-off'], note: '+€5 from Makadi / El Gouna; +€10 from Safaga', note2: 'Check availability before booking', img: 't-parasailing.jpg' },
    { name: '🐢 Marsa Alam — Sea Turtles', price: '€90', unit: 'Per adult (Fridays, shared)', duration: '~15 hours', badge: 'Fridays Only', items: ['Wild turtle snorkeling', 'Abu Dabbab beach', 'Optional Dugong (+€35)'], note: 'Transfer fees vary by area', img: 't-marsaalam.jpg' }
  ],
  desert: [
    { name: '🏍️ 3-Hour Quad Bike (60 km)', price: '€25', unit: 'Per adult (11+)', duration: '3 hours + transfer', items: ['60 KM total ride', 'Bedouin village visit', 'Camel ride & tea'], note: M5, img: 't-quad.jpg' },
    { name: '🌵 Super Safari — 6 Hours', price: '€25', unit: 'Per adult (11+)', duration: '6 hours (1pm–7pm)', badge: 'Best Value', items: ['Quad + 4×4 Jeep + Buggy', 'Bedouin village & camel', 'BBQ dinner buffet'], note: M5, img: 't-supersafari.jpg' },
    { name: '🐴 Horse Riding', price: '€25', unit: 'Per adult (9+)', duration: '2 hours + transfer', items: ['30min sea horse ride', 'Desert trail riding', 'Sunset option'], note: '+€5/person from El Gouna / Makadi', img: 't-horse.jpg' },
    { name: '🐫 Sahara Combined Safari', price: '€45', unit: 'Per adult (11+)', duration: 'Evening program', items: ['1hr quad adventure', '30min horse + 30min camel', 'Dinner & oriental show'], note: M5, img: 't-saharacombo.jpg' },
    { name: '🏁 1.5-Hour Desert Buggy', price: '€120', unit: 'Per buggy (2 persons)', duration: '1.5 hours', items: ['1.5hr off-road adventure', 'Morning or afternoon', 'Safety briefing'], note: '+€5/person from El Gouna / Makadi', img: 't-buggy.jpg' }
  ],
  entertainment: [
    { name: '🕌 City Tour Hurghada', price: '€15', unit: 'Per adult (11+)', duration: '3 hours + transfer', items: ['Hurghada Marina', 'Grand Bazaar shopping', 'Fish & vegetable markets'], note: M5, img: 't-cityhurghada.jpg' },
    { name: '⛵ City Tour El Gouna', price: '€30', unit: 'Per adult (11+)', duration: '4–5 hours', items: ['Scenic lagoon ride', 'Abu Tig Marina', 'Tamr Henna Square'], note: 'Available daily', img: 't-elgouna.jpg' },
    { name: '🦈 Grand Aquarium Hurghada', price: '€45', unit: 'Per adult', duration: '1–2 hours + transfer', items: ['24+ marine exhibits', 'Shark tunnel', 'Live feeding shows'], note: M5, img: 't-aquarium.jpg' },
    { name: '🐬 Dolphin Show', price: '€20', unit: 'Per adult (12+)', duration: '2–3 hours (show 3pm)', items: ['1-hour live show', 'Sea lion performances', 'Hotel pickup & drop-off'], note: M5, img: 't-dolphinshow.jpg' },
    { name: '🧖 Hammam & Massage', price: 'From €30', unit: 'Per person', duration: '2 hours', options: true, items: ['Salt Cave + Sauna + Steam', 'Turkish scrub & massage', '45-min body massage'], note: 'Available daily, morning or afternoon', img: 't-hammam.jpg' }
  ],
  historical: [
    { name: '🇪🇬 Cairo Historical Trip', price: 'From €100', unit: 'Per person', duration: '~20 hours (1:30am–10pm)', badge: 'Must Do', options: [
      { name: 'Small Group Tour', price: '€100', duration: 'Sundays & Fridays', highlight: 'Shared mini-van · Price per person' },
      { name: 'Private Tour', price: '€150', duration: 'Daily on request', highlight: 'Private mini-van for up to 8 people · Price per person' }
    ], items: ['Giza Pyramids & Sphinx', 'Grand Egyptian Museum', 'Tutankhamun collection'], note: M5, img: 't-cairohist.jpg' },
    { name: '🏛️ Luxor Historical Trip', price: 'From €80', unit: 'Per person', duration: '~16.5 hours (4:30am–9pm)', options: [
      { name: 'Small Group Tour', price: '€80', duration: 'Tuesdays & Thursdays', highlight: 'Shared mini-van · Price per person' },
      { name: 'Private Tour', price: '€140', duration: 'Daily on request', highlight: 'Private mini-van for up to 8 people · Price per person' }
    ], items: ['Karnak Temple', 'Valley of the Kings', 'Hatshepsut Temple'], note: M5, img: 't-luxorhist.jpg' }
  ]
};
