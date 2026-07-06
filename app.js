/* ===================================================================
   Yapı Kredi Mobil — Prototip uygulama mantığı
   Saf JavaScript. İleride React/Vite'a taşınabilecek şekilde
   ekranlar fonksiyon (component) olarak, durum tek bir state'te.
   =================================================================== */

/* ---------- SVG ikonlar ---------- */
const I = {
  menu: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
  search: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
  searchBig: '<svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
  mail: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  refresh: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-2.64-6.36"/><path d="M21 4v5h-5"/></svg>',
  user: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6v1H4z"/></svg>',
  calendar: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4.5" width="12.5" height="12.5" rx="2"/><path d="M2.5 8.5h12.5M6 3v3M11.5 3v3"/><circle cx="6" cy="12" r=".7" fill="currentColor" stroke="none"/><circle cx="9" cy="12" r=".7" fill="currentColor" stroke="none"/><path d="M13.5 11h7v10l-1.4-1-1.4 1-1.4-1-1.4 1V11z"/><path d="M15.3 14h3.4M15.3 16.5h3.4" stroke-width="1"/></svg>',
  yklogo: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#0098cb"/><path d="M7 7l3.2 5v5M13.5 7l-3 4.6M14 16.5c1.6 0 2.8-1.2 2.8-2.8S15.6 11 14 11" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  bell: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg>',
  back: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',
  chevDown: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="m6 9 6 6 6-6"/></svg>',
  chevR: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m9 18 6-6-6-6"/></svg>',
  trendUp: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17 9 11l4 4 8-8"/><path d="M17 4h4v4"/></svg>',
  target: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/></svg>',
  info: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="9.2"/><path d="M12 11v5" stroke-linecap="round"/><circle cx="12" cy="7.8" r="1.1" fill="currentColor" stroke="none"/></svg>',
  arrowUp: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="m6 11 6-6 6 6"/></svg>',
  send: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3.4 20.4l17.45-7.48a1 1 0 0 0 0-1.84L3.4 3.6a.993.993 0 0 0-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"/></svg>',
  stop: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="3"/></svg>',
  copy: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  thumbUp: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v11H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3zm0 0 4.2-7.4a2 2 0 0 1 2.3-.9 2.3 2.3 0 0 1 1.5 2.6L14.3 8H19a2 2 0 0 1 2 2.4l-1.5 7.6a2 2 0 0 1-2 1.6H7"/></svg>',
  thumbDown: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="transform:rotate(180deg)"><path d="M7 10v11H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3zm0 0 4.2-7.4a2 2 0 0 1 2.3-.9 2.3 2.3 0 0 1 1.5 2.6L14.3 8H19a2 2 0 0 1 2 2.4l-1.5 7.6a2 2 0 0 1-2 1.6H7"/></svg>',
  check: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  checkBig: '<svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  lock: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
  card: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>',
  star: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.3 6.9.6-5.2 4.5 1.6 6.7L12 17l-6.2 3.6 1.6-6.7L2.2 8.9l6.9-.6z"/></svg>',
  bank: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h18M4 10h16M5 10l7-6 7 6M6 10v11M18 10v11M10 10v11M14 10v11"/></svg>',
  shield: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
  faceid: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><path d="M9 9v1M15 9v1M12 9v3l-1 1"/><path d="M9 15s1 1 3 1 3-1 3-1"/></svg>',
  // Menü ikonları
  home: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10l9-7 9 7v9a2 2 0 0 1-2 2h-3v-6H8v6H5a2 2 0 0 1-2-2z"/></svg>',
  wallet: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M16 12h.01M3 10h18"/></svg>',
  transfer: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h13l-3-3M17 17H4l3 3"/></svg>',
  invest: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l5-5 4 4 8-8M21 8v5h-5"/></svg>',
  payments: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M14.5 9.5C14 8.5 13 8 12 8c-1.5 0-2.5 1-2.5 2s1 1.6 2.5 2 2.5 1 2.5 2-1 2-2.5 2c-1 0-2-.5-2.5-1.5M12 6.5v11"/></svg>',
  loan: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/></svg>',
  insurance: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  world: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"/></svg>',
  grid: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
  gear: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 7 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0-1.1-2.7H1a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 2.6 7a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H7a1.6 1.6 0 0 0 1-1.5V1a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 2.7 1.1 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V7a1.6 1.6 0 0 0 1.5 1H23a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/></svg>',
  power: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 3v9M6.4 6.4a8 8 0 1 0 11.2 0"/></svg>',
  pie: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="8.5"/><path d="M12 12 L12 3.5 A8.5 8.5 0 0 1 19.4 8.2 Z" fill="currentColor" stroke="none"/></svg>',
  // Harcamalarım — yükselen çubuk grafiği + taban çizgisi (indirilen app-icon'un tema-uyarlı hali)
  bars: '<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="11" width="3.2" height="7" rx="1.6"/><rect x="10.4" y="7.3" width="3.2" height="10.7" rx="1.6"/><rect x="16.8" y="3.8" width="3.2" height="14.2" rx="1.6"/><rect x="3.4" y="20" width="17.2" height="2.2" rx="1.1"/></svg>',
  qr: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="2.5" width="8.5" height="8.5" rx="1.2"/><rect x="5" y="5" width="3.5" height="3.5" rx=".5" fill="currentColor" stroke="none"/><rect x="8.5" y="11.5" width="13" height="9" rx="1.5"/><circle cx="15" cy="16" r="2.1"/><path d="M11 11.5v9M19 11.5v9" stroke-width="1"/></svg>',
  guide: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 17v.01M12 13.5a2.5 2.5 0 1 0-2.5-2.9"/></svg>',
  sun: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"/></svg>',
  moon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
  spark: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8z"/><path d="M19 14l.9 2.6L22.5 17l-2.6.9L19 20l-.9-2.6L15.5 17l2.6-.9z"/></svg>',
  pin: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  plus: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  doc: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>',
  close: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  truck: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/></svg>',
  box: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/></svg>',
  receipt: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3v18l2-1.5L9 21l2-1.5L13 21l2-1.5L17 21l2-1.5V3l-2 1.5L15 3l-2 1.5L11 3 9 4.5 7 3z"/><path d="M8 8h8M8 12h8"/></svg>',
  undo: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14 4 9l5-5"/><path d="M4 9h11a5 5 0 0 1 0 10h-3"/></svg>',
  wallet2: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="13" rx="2.5"/><path d="M16 12h.5M3 10h18"/></svg>',
  pause: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1.4"/><rect x="14" y="5" width="4" height="14" rx="1.4"/></svg>',
  play: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13a1 1 0 0 0 1.5.87l11-6.5a1 1 0 0 0 0-1.74l-11-6.5A1 1 0 0 0 8 5.5z"/></svg>',
};

/* ---------- Veri ---------- */
const PRODUCTS = [
  {
    id: 'p1', emoji: '🤖', img: 'assets/fakir.webp',
    name: 'Fakir Robert RS 700 Robot Süpürge',
    desc: 'Paspaslama + güçlü emiş · 120 dk çalışma · sessiz mod',
    price: '2.199,00 TL', priceNum: '2.199', old: '2.799,00 TL',
    rating: '4.7', reviews: '1.284',
    inst: '6 Taksit', instSub: '6 x 366,50 TL',
    puan: '+220 Worldpuan', store: 'Koçtaş',
    stock: 'Son 4 ürün', delivery: 'Yarın kargoda', shipping: 'Ücretsiz kargo', warranty: '2 yıl garanti',
    specs: { tip: 'Robot süpürge', guc: '120 dk şarj', paspas: true },
  },
  {
    id: 'p2', emoji: '🧹', img: 'assets/arzum.webp',
    name: 'Arzum Cleanart Elegance Toz Torbalı Süpürge',
    desc: '2000 W güç · HEPA filtre · sessiz çalışma',
    price: '2.499,00 TL', priceNum: '2.499', old: '2.999,00 TL',
    rating: '4.5', reviews: '932',
    inst: '9 Taksit', instSub: '9 x 277,67 TL',
    puan: '+250 Worldpuan', store: 'Koçtaş',
    stock: 'Stokta', delivery: '2-3 iş günü', shipping: 'Ücretsiz kargo', warranty: '3 yıl garanti',
    specs: { tip: 'Toz torbalı', guc: '2000 W', paspas: false },
  },
  {
    id: 'p3', emoji: '🌀', img: 'assets/karcher.png',
    name: 'Kärcher VC 4s Cordless Dikey Şarjlı Süpürge',
    desc: 'Dikey + el tipi · hafif gövde · 40 dk çalışma',
    price: '1.899,00 TL', priceNum: '1.899', old: '2.299,00 TL',
    rating: '4.8', reviews: '2.041',
    inst: '3 Taksit', instSub: '3 x 633,00 TL',
    puan: '+190 Worldpuan', store: 'Koçtaş',
    stock: 'Son 2 ürün', delivery: 'Yarın kargoda', shipping: 'Ücretsiz kargo', warranty: '2 yıl garanti',
    specs: { tip: 'Dikey şarjlı', guc: '40 dk şarj', paspas: false },
  },
];

/* ---------- Otonom (agentic) Setur tatil akışı ----------
   Kullanıcı agent'a yetki verir; agent arka planda arar, uygun seçeneği
   bulduğunda BİLDİRİM gönderir, kullanıcı son onayı verince rezervasyon yapılır. */
const SETUR_AUTH = {
  dates: '15 – 20 Temmuz',
  nights: 5,
  guests: '2 yetişkin',
  budget: 40000,                 // üst bütçe (TL)
  region: 'Ege & Akdeniz kıyıları',
  criteria: ['Havuz', 'Deniz manzarası', 'Kahvaltı dahil', 'Ücretsiz iptal'],
  // Ödeme otonom: agent, kartlarım arasından en avantajlısını seçme yetkisi alır.
  cardPool: 'Kartlarım',           // ödeme yetkisinin kapsamı (sınır)
  maxInst: 9,                      // izin verilen en yüksek taksit
  match: 94,                       // bulunan teklifin kriterlerle uyum skoru (%)
  // Agent'ın yetkiyle seçtiği sonuç — teklif popup'ında gerekçesiyle gösterilir.
  card: 'Worldcard **** 3333',
  inst: '6 Taksit',
  cardWhy: 'Kartların arasından Worldcard’ı seçtim — Setur’da en yüksek Worldpuan ve 6 taksit avantajı bu kartta.',
  rule: 'Tutar 40.000 TL’yi aşmasın, ödemede en avantajlı kart/taksiti sen seç ve rezervasyon yapmadan önce mutlaka onayımı al.',
};
/* Otonom akış için sade kullanıcı talebi (Setur'u kullanıcı söylemez — agent bulur) */
const SETUR_REQUEST = 'Temmuzun ikinci haftası 5 gün, 2 kişi denize gitmek istiyoruz. Havuzu ve deniz manzarası olan, kahvaltı dahil bir otel olsun; bütçemiz 40 bin lira. Sen benim için uygun bir yer bulup ayarlar mısın?';
/* Setur'a özel KISA düşünme adımları (Koçtaş katalog taraması değil) */
const SETUR_THINK = [
  { t: 'Düşünüyor…', d: 450 },
  { t: 'Tatil tercihlerini çıkarıyorum…', d: 950 },
];
const SETUR_HOTELS = [
  {
    id: 's1', emoji: '🏖️', img: 'assets/bodrum-hotel.webp',
    name: 'Le Méridien Bodrum Beach Resort',
    loc: 'Torba, Bodrum · Muğla',
    rating: '4.6', reviews: '2.140',
    board: 'Yarım Pansiyon', view: 'Deniz manzarası',
    nights: 5, priceNum: 37500, old: '44.900',
    cancel: '13 Temmuz’a kadar ücretsiz iptal',
    inst: '6 Taksit', instSub: '6 x 6.250,00 TL', puan: '+1.875 Worldpuan',
  },
  {
    id: 's2', emoji: '🏝️',
    name: 'Çeşme Marina Hotel',
    loc: 'Ilıca, Çeşme · İzmir',
    rating: '4.7', reviews: '1.508',
    board: 'Oda & Kahvaltı', view: 'Deniz manzarası',
    nights: 5, priceNum: 39200, old: '46.500',
    cancel: '12 Temmuz’a kadar ücretsiz iptal',
    inst: '6 Taksit', instSub: '6 x 6.533,33 TL', puan: '+1.960 Worldpuan',
  },
];
function seturHotel() { return SETUR_HOTELS[state.seturOptionIdx % SETUR_HOTELS.length]; }

const WORLDCARD_IMG = 'assets/worldcard.png';

// Tutar formatı: "10.000" -> "10.000<span>,00 TL</span>" (büyük rakam + küçük kuruş/TL)
function money(intPart) {
  return `${intPart}<span class="kurus">,00 TL</span>`;
}

// Görsel + emoji fallback (dosya yoksa emoji'li gradient kutu gösterilir)
function imgOrFallback(src, emoji, cls) {
  return `<img src="${src}" alt="" class="${cls}" loading="lazy"
    onerror="this.style.display='none';this.nextElementSibling.style.display='grid';">
    <span class="img-fallback" style="display:none">${emoji}</span>`;
}

const ASSISTANT_PROMPT = 'Evim için güçlü ama sessiz çalışan, paspaslama özelliği de olan bir robot süpürge arıyorum. Bütçem 2.500 TL. World kampanyası ve taksit avantajı olan Koçtaş seçeneklerini gösterir misin?';

/* Asistan sohbet metinleri — animasyonlu akış ve anlık dolu görünüm (deeplink) aynı kaynağı kullanır */
const GREET = 'Merhaba! 👋 Ben Yapı Kredi Alışveriş Asistanı. World üye iş yerlerindeki kampanya ve taksit avantajlarıyla sana en uygun ürünleri buluyorum. Ne aramıştın?';
const CHAT_REPLY = 'Elbette! Bütçene uygun, World kampanyalı ve taksit avantajlı 3 seçenek buldum. Kartları sağa kaydırarak inceleyebilirsin 👇';
function recFollowup() {
  const rec = PRODUCTS.find(p => p.id === REC_ID);
  return `Önerim Fakir Robert RS 700 — paspaslama yapan tek model ve 2.500 TL bütçenin altında (${rec.price.replace(',00 TL', ' TL')}). 6 taksit imkanı ve ${rec.puan.replace('+', '')} hediyesi var. Hazır olduğunda "World Pay ile Al" ile ödemeye geçebilirsin 💳`;
}

/* Öneri çipleri — Koç Grubu markaları. Yalnızca robot süpürge akışı uçtan uca hazır. */
const CHIPS = [
  { key: 'robot', label: '🤖 Robot süpürge önerisi' },
  { key: 'setur', label: '🏖️ Setur ile tatil planla' },
  { key: 'boyner', label: '👕 Boyner kombin önerisi' },
  { key: 'opet', label: '⛽ Opet yakıt kampanyaları' },
];
const CHIP_FLOWS = {
  setur: {
    user: 'Setur ile yaz tatili planlamak istiyorum.',
    reply: 'Harika fikir! 🏖️ Setur ile tatil planlama deneyimi üzerinde çalışıyoruz, çok yakında burada olacak. Bu prototipte World kampanyalı robot süpürge alışverişini uçtan uca deneyimleyebilirsin — istersen hemen önerileri getireyim.',
  },
  boyner: {
    user: 'Boyner\'den kombin önerisi alabilir miyim?',
    reply: 'Stil önerileri yakında! 👕 Boyner kombin asistanı bu prototipte henüz aktif değil. Şimdilik sana Koçtaş\'tan World kampanyalı robot süpürge önerilerinde yardımcı olabilirim.',
  },
  opet: {
    user: 'Opet yakıt kampanyalarını gösterir misin?',
    reply: 'Opet kampanyaları çok yakında burada olacak! ⛽ Bu prototipte robot süpürge alışveriş akışını deneyimleyebilirsin — World\'e özel taksit ve Worldpuan avantajlarıyla.',
  },
};

/* Demo bölümleri — her biri kendi hash'iyle doğrudan açılır (bütün akışı tekrarlamadan) */
const SECTIONS = [
  { hash: 'home',      icon: 'home',     t: 'Ana Ekran',           d: 'Kartlar, hızlı işlemler, asistan girişi' },
  { hash: 'assistant', icon: 'spark',    t: 'Koçtaş Senaryosu — Tamamlandı', d: 'Robot süpürge sohbeti + öneriler (dolu görünüm)' },
  { hash: 'setur',     icon: 'sun',      t: 'Setur Senaryosu — Tamamlandı',  d: 'Otonom agent tatili buldu — sonucuyla dolu sohbet' },
  { hash: 'chat',      icon: 'guide',    t: 'Asistan — Boştan',    d: 'Sohbeti baştan, animasyonlu dene' },
  { hash: 'payment',   icon: 'card',     t: 'Ödeme Ekranı',        d: 'Adres, kargo, taksit, Worldpuan, sözleşme' },
  { hash: 'success',   icon: 'check',    t: 'Ödeme Başarılı',      d: 'Onay, Worldpuan, dekont' },
  { hash: 'tracking',  icon: 'box',      t: 'Sipariş Takibi',      d: 'Durum çizgisi, YK Kargo, fatura, iade/cayma' },
  { hash: 'roundup',    icon: 'wallet2', t: 'Yuvarla Biriktir — Başvur', d: 'Kart, kural (10/50/100 TL), hesap, talimat onayı → Aktifleştir' },
  { hash: 'roundup-jar', icon: 'pie',    t: 'Yuvarla Biriktir — Yönet',  d: 'Kumbara, aylık grafik, hedef, duraklat/durdur (dolu)' },
  { hash: 'roundup-history', icon: 'receipt', t: 'Yuvarla Biriktir — Hareketler', d: 'Aya göre gruplu tüm birikim hareketleri' },
  { hash: 'insights',   icon: 'pie',      t: 'Harcama Analizi',      d: 'Aylık toplam, kategori dağılımı, işyeri kırılımı' },
  { hash: 'limits',     icon: 'target',   t: 'Harcama Limitlerim',   d: 'Kategoriye tutar girerek aylık limit koy' },
  { hash: 'search',    icon: 'search',   t: 'Arama',               d: 'Arama ekranı' },
  { hash: 'settings',  icon: 'gear',     t: 'Ayarlar',             d: 'Tema ve bildirimler' },
];

const MENU = [
  { id: 'home', label: 'Ana Sayfa', icon: 'home' },
  { id: 'accounts', label: 'Hesaplarım', icon: 'wallet' },
  { id: 'cards', label: 'Kartlarım', icon: 'card' },
  { id: 'transfer', label: 'Para Transferleri', icon: 'transfer' },
  { id: 'invest', label: 'Yatırımlar', icon: 'invest' },
  { id: 'payments', label: 'Ödemeler', icon: 'payments' },
  { id: 'loan', label: 'Krediler', icon: 'loan' },
  { id: 'insurance', label: 'Sigortalar ve BES', icon: 'insurance' },
  { id: 'world', label: 'Benim Dünyam', icon: 'world' },
  { id: 'other', label: 'Diğer İşlemler', icon: 'grid' },
];

/* ---------- Durum ---------- */
const state = {
  screen: 'home',
  chatStarted: false,
  selectedProduct: null,
  payMethod: null,      // 'worldcard' | 'worldpuan' | 'bank'
  installment: 'single', // 'single' | 't3' | 't6' — varsayılan tek çekim
  // Mesafeli ödeme deneyimi
  addressId: 'a1',           // seçili teslimat adresi
  billingSame: true,         // faturamı aynı adrese gönder (varsayılan açık)
  preInfoOk: false,          // Ön Bilgilendirme Formu onayı
  contractOk: false,         // Mesafeli Satış Sözleşmesi onayı
  usePuan: false,            // Worldpuan ile kısmi ödeme
  nav: [],                   // geri (back) yığını — gerçek uygulama gibi geri davranışı
  theme: localStorage.getItem('ykm-theme') || 'dark',
  // Otonom Setur akışı
  seturOptionIdx: 0,         // gösterilen tatil seçeneği (0/1 arası dönüşümlü)
  seturAuthorized: false,    // agent'a yetki verildi mi
  seturSeed: false,          // sohbeti Setur sonucuyla anında kur
  // Harcama analizi & limit
  spendCat: 'market',        // seçili kategori (detay ekranı)
  spendCard: 'all',          // harcama/limit filtresi: 'all' | 'worldcard' | 'tlcard'
  totalLimit: 20000,         // ayrı, düzenlenebilir toplam aylık limit
  limits: { market: 4000, yeme: 2000, giyim: 3000, akaryakit: 2500, eglence: 1500 },   // kategori → aylık limit (TL)
  // Yuvarla Biriktir (işlem başına round-up)
  roundup: {
    active: false,           // kural kurulu mu
    source: null,            // seçili kaynak kart: 'worldgold' | 'tlcard' | null
    account: null,           // seçili birikim hesabı: 'sav' | 'sav2' | null
    agreed: false,           // Yuvarla Biriktir Talimat Formu onayı
    goal: null,              // birikim hedefi: { id, emoji, name, amount } | null
    jar: 1842.35,            // toplam biriken (TL)
    monthChange: 15,         // geçen aya göre % değişim
    txns: [],                // {merchant, emoji, spent, add, date, month} — en yeni başta
  },
};

/* ---------- Mock teslimat adresleri (kişisel veri yok, tamamen örnek) ---------- */
const ADDRESSES = [
  { id: 'a1', title: 'Ev',     name: 'Selçuk İmre', line: 'Zincirlidere Cad. No:1 Daire:1 Kat:1', city: 'Şişli / İstanbul',    phone: '0 (5••) ••• •• 24' },
  { id: 'a2', title: 'İş',     name: 'Selçuk İmre', line: 'Yapı Kredi Bankacılık Üssü, Rahmi Dibek Cad. No:1', city: 'Çayırova / Kocaeli', phone: '0 (5••) ••• •• 24' },
  { id: 'a3', title: 'Yazlık', name: 'Selçuk İmre', line: 'Güzeloba Mah. Lara Cad. No:42 D:7', city: 'Muratpaşa / Antalya', phone: '0 (5••) ••• •• 24' },
];
function getAddress() { return ADDRESSES.find(a => a.id === state.addressId) || ADDRESSES[0]; }

/* ---------- Mock kullanıcı finansal profili (örnek veriler) ---------- */
const USER = {
  name: 'Selçuk',
  limit: 18500,          // Worldcard kullanılabilir limit (TL)
  worldpuan: 1250,       // mevcut Worldpuan bakiyesi
  balance: 10000,        // Vadesiz TL hesap bakiyesi
};
const PUAN_VALUE = 0.1;  // 1 Worldpuan = 0,10 TL (örnek değerleme)

function fmtTL(n) { return n.toLocaleString('tr-TR') + ',00 TL'; }
// Küsuratlı TL biçimi — round-up tutarları için (ör. "0,50 TL")
function fmtTL2(n) { return n.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' TL'; }

/* ---------- Yuvarla Biriktir yardımcıları ---------- */
// Özelliğin logosu — dairesel oklar + ₺ jeton (tema-uyumlu, currentColor)
function ruLogo(size) {
  return `<svg class="ru-logo-svg" width="${size}" height="${size}" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M9 20.5 A16 16 0 0 1 33.5 11.2" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/>
    <path d="M33.5 11.2 l-6.2 -1.1 l3 5.5 z" fill="currentColor"/>
    <path d="M39 27.5 A16 16 0 0 1 14.5 36.8" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/>
    <path d="M14.5 36.8 l6.2 1.1 l-3 -5.5 z" fill="currentColor"/>
    <circle cx="24" cy="24" r="8.6" fill="currentColor"/>
    <text x="24" y="28.4" text-anchor="middle" font-size="12.5" font-weight="800" fill="#fff" font-family="Ubuntu, system-ui, sans-serif">₺</text>
  </svg>`;
}
// Kart seç alanının katalogu (Yapı Kredi kredi / banka kartları)
const RU_CARDS = [
  { id: 'worldgold', name: 'World Gold', num: '5400 61** **** 1234', kind: 'Kredi Kartı', detail: 'Kullanılabilir Limit 18.500 TL' },
  { id: 'tlcard',    name: 'TLcard',     num: '4506 34** **** 8842', kind: 'Banka Kartı', detail: 'Vadesiz TL · Bakiye 10.000 TL' },
];
function ruCard() { return RU_CARDS.find(c => c.id === state.roundup.source) || null; }
function ruCardLabel() { const c = ruCard(); return c ? `${c.name} ${c.num}` : 'Seçilmedi'; }
// Kart görseli — World Gold gerçek kart fotoğrafı, TLcard tema renkli çizilmiş mini kart
function ruCardArt(c) {
  if (c.id === 'worldgold') return `<img src="${WORLDCARD_IMG}" class="ru-card-img" alt="" onerror="this.outerHTML='💳'">`;
  return `<span class="ru-card-art"><i>TLcard</i><b></b></span>`;
}
// Birikim (hedef) hesabı katalogu — yalnızca getirili birikim hesapları
const RU_ACCOUNTS = [
  { id: 'sav',  name: 'Birikim Hesabım',     iban: 'TR•••• 1234', detail: 'Vadesiz TL · günlük getirili' },
  { id: 'sav2', name: 'Yardımcı Birikim',    iban: 'TR•••• 9012', detail: 'Vadesiz TL · günlük getirili' },
];
function ruAccount() { return RU_ACCOUNTS.find(a => a.id === state.roundup.account) || null; }
function ruAccountLabel() { const a = ruAccount(); return a ? `${a.name} ${a.iban}` : 'Seçilmedi'; }
// Yuvarlama kuralı sabit: her harcama sonraki 100 TL'ye tamamlanır
const RU_UNIT = 100;
const RU_EST = '~250 TL';               // kaba aylık birikim tahmini (mock)
const RU_SAMPLES = [225, 386];          // "Nasıl çalışır?" örnek harcamaları
function ruNextUnit(v, unit) { return Math.ceil(v / (unit || RU_UNIT)) * (unit || RU_UNIT); }
// Hedef önerileri (birikim hedefi sheet'i)
const RU_GOAL_PRESETS = [
  { id: 'tatil', emoji: '🏖️', name: 'Tatil',           amount: 10000 },
  { id: 'tech',  emoji: '📱', name: 'Yeni Telefon',    amount: 25000 },
  { id: 'fon',   emoji: '🛟', name: 'Acil Durum Fonu', amount: 20000 },
];
// Aylık birikim grafiği — geçmiş 5 ay sabit, içinde bulunulan ay state'ten türetilir
const RU_CUR_MONTH = 'Mayıs 2026';
const RU_MONTHS = [
  { m: 'Ara', v: 96.5 }, { m: 'Oca', v: 141.2 }, { m: 'Şub', v: 128.4 },
  { m: 'Mar', v: 189.75 }, { m: 'Nis', v: 214.6 },
];
// Bu ayın işlemleri / toplamı — hep hareket listesinden türetilir (tutarsızlık olmasın)
function ruMonthTxns() { return state.roundup.txns.filter(t => t.month === RU_CUR_MONTH); }
function ruMonthTotal() { return ruMonthTxns().reduce((s, t) => s + t.add, 0); }
// Kumbara ilk açıldığında geçmiş dolu görünsün diye örnek hareketler (add = birime tamamlanan fark)
const RU_SEED_TXNS = [
  { merchant: 'Market alışverişi', emoji: '🛒', spent: 225,  add: 75, date: '24 Mayıs 09:41',  month: 'Mayıs 2026' },
  { merchant: 'Kahve Dünyası',     emoji: '☕', spent: 390,  add: 10, date: '23 Mayıs 14:12',  month: 'Mayıs 2026' },
  { merchant: 'Trendyol',          emoji: '🛍️', spent: 645,  add: 55, date: '22 Mayıs 20:05',  month: 'Mayıs 2026' },
  { merchant: 'Opet',              emoji: '⛽', spent: 612,  add: 88, date: '21 Mayıs 08:30',  month: 'Mayıs 2026' },
  { merchant: 'Getir',             emoji: '🛵', spent: 269,  add: 31, date: '20 Mayıs 19:47',  month: 'Mayıs 2026' },
  { merchant: 'Migros',            emoji: '🛒', spent: 843,  add: 57, date: '17 Mayıs 12:20',  month: 'Mayıs 2026' },
  { merchant: 'BKM Kitap',         emoji: '📚', spent: 176,  add: 24, date: '14 Mayıs 21:03',  month: 'Mayıs 2026' },
  { merchant: 'Koçtaş',            emoji: '🔧', spent: 1240, add: 60, date: '29 Nisan 16:45',  month: 'Nisan 2026' },
  { merchant: 'Kahve Dünyası',     emoji: '☕', spent: 285,  add: 15, date: '26 Nisan 09:12',  month: 'Nisan 2026' },
  { merchant: 'A101',              emoji: '🛒', spent: 458,  add: 42, date: '22 Nisan 18:33',  month: 'Nisan 2026' },
  { merchant: 'Boyner',            emoji: '👕', spent: 2320, add: 80, date: '18 Nisan 15:27',  month: 'Nisan 2026' },
  { merchant: 'Opet',              emoji: '⛽', spent: 954,  add: 46, date: '12 Nisan 10:08',  month: 'Nisan 2026' },
];
function productTotal() { return parseInt(state.selectedProduct.priceNum.replace('.', '')); }
function puanDiscount() { return state.usePuan ? Math.round(USER.worldpuan * PUAN_VALUE) : 0; }
function payableNum() { return productTotal() - puanDiscount(); }
function payableStr() { return fmtTL(payableNum()); }
function earnedPuan() { return parseInt((state.selectedProduct.puan.match(/\d+/) || [0])[0]); }

/* ---------- DOM kısayolları ---------- */
const app = document.getElementById('app');
const drawerEl = document.getElementById('drawer');
const scrimEl = document.getElementById('scrim');
const sheetEl = document.getElementById('sheet');
const sheetScrimEl = document.getElementById('sheet-scrim');
const toastEl = document.getElementById('toast');
const lockEl = document.getElementById('lockscreen');

/* ===================================================================
   EKRANLAR
   =================================================================== */

function HomeScreen() {
  return `
  <div class="screen anim-fade">
    <div class="topbar">
      <div class="topbar-card">
        <button class="icon-btn menu-ico" data-action="open-drawer" aria-label="Menü">${I.menu}</button>
        <div class="search-pill" data-action="open-search"><span>Yapı Kredi Mobil'de Ara</span></div>
        <div class="icon-wrap"><button class="icon-btn bell-ico" data-action="toast" data-msg="Bildirimler prototipte aktif değil">${I.bell}</button></div>
        <button class="avatar-btn" data-action="toast" data-msg="Profil prototipte aktif değil">${I.user}</button>
      </div>
    </div>

    <div class="bank-tabs">
      <button class="bank-tab active">Yapı Kredi</button>
      <button class="bank-tab" data-action="toast" data-msg="Diğer Bankalarım prototipte aktif değil">Diğer Bankalarım<span class="tab-new">Yeni</span></button>
    </div>

    <div class="screen-scroll">
      <div class="section-title">Hesaplarım</div>
      <div class="acard-scroll">
        <div class="acard">
          <div class="acard-top">
            <div class="acard-logo wallet wallet-tl"><img src="assets/tl-white.png" class="tl-img" alt="₺" onerror="this.outerHTML='<span class=\\'wallet-glyph\\'>₺</span>'"><span class="wallet-dot"></span></div>
            <div>
              <div class="acard-name">Vadesiz TL Hesabım</div>
              <div class="acard-sub">12345678</div>
            </div>
            <div class="acard-more" data-action="toast" data-msg="Hesap detayı prototipte aktif değil">⋮</div>
          </div>
          <div class="acard-figs">
            <div class="acard-fig"><div class="val">${money('10.000')}</div><div class="lbl">Kullanılabilir Bakiye</div></div>
            <div class="acard-fig"><div class="val">${money('10.000')}</div><div class="lbl">Güncel Bakiye</div></div>
          </div>
        </div>

        <div class="acard">
          <div class="acard-top">
            <div class="acard-logo wallet wallet-eur"><span class="wallet-glyph">€</span><span class="wallet-dot"></span></div>
            <div>
              <div class="acard-name">Vadesiz Euro Hesabım</div>
              <div class="acard-sub">12345679</div>
            </div>
            <div class="acard-more" data-action="toast" data-msg="Hesap detayı prototipte aktif değil">⋮</div>
          </div>
          <div class="acard-figs">
            <div class="acard-fig"><div class="val">1.250<span class="kurus">,00 EUR</span></div><div class="lbl">Kullanılabilir Bakiye</div></div>
            <div class="acard-fig"><div class="val">1.250<span class="kurus">,00 EUR</span></div><div class="lbl">Güncel Bakiye</div></div>
          </div>
        </div>

        <div class="acard">
          <div class="acard-top">
            <div class="acard-logo wallet wallet-gold"><span class="wallet-bar"></span><span class="wallet-dot"></span></div>
            <div>
              <div class="acard-name">Altın Hesabım</div>
              <div class="acard-sub">12345680</div>
            </div>
            <div class="acard-more" data-action="toast" data-msg="Hesap detayı prototipte aktif değil">⋮</div>
          </div>
          <div class="acard-figs">
            <div class="acard-fig"><div class="val">25,40<span class="kurus"> gr</span></div><div class="lbl">Kullanılabilir Bakiye</div></div>
            <div class="acard-fig"><div class="val">25,40<span class="kurus"> gr</span></div><div class="lbl">Güncel Bakiye</div></div>
          </div>
        </div>
      </div>

      <div class="section-title">Kartlarım</div>
      <div class="acard worldcard">
        <div class="acard-top">
          <div class="acard-cardimg">${imgOrFallback(WORLDCARD_IMG, '💳', 'wc-photo')}</div>
          <div>
            <div class="acard-name">Worldcard</div>
            <div class="acard-sub">1234 56** **** 3333</div>
          </div>
          <div class="acard-more" data-action="toast" data-msg="Kart detayı prototipte aktif değil">⋮</div>
        </div>
        <div class="acard-figs">
          <div class="acard-fig"><div class="val">${money('1.000')}</div><div class="lbl">Güncel Borç</div></div>
          <div class="acard-fig"><div class="val">${money('5.000')}</div><div class="lbl">Kullanılabilir Limit</div></div>
        </div>
      </div>

      ${HomeRoundupCard()}

      <div class="home-lower">
        <div class="quick-row4">
          <div class="quick4" data-action="sp-open"><div class="q4-ico">${I.bars}</div><span>Harcamalarım</span></div>
          <div class="quick4" data-action="toast" data-msg="Para Çek/Yatır prototipte aktif değil"><div class="q4-ico">${I.qr}</div><span>Para Çek/<br>Yatır</span></div>
          <div class="quick4" data-action="toast" data-msg="Son Hareketler prototipte aktif değil"><div class="q4-ico">${I.transfer}</div><span>Son<br>Hareketler</span></div>
          <div class="quick4" data-action="toast" data-msg="Aylık Ödeme Planım prototipte aktif değil"><div class="q4-ico">${I.calendar}</div><span>Aylık Ödeme<br>Planım</span></div>
        </div>

        <div class="limit-banner" data-action="toast" data-msg="Hazır Limit prototipte aktif değil">
          <span class="lb-ico">💵</span>
          <span class="lb-title">Hazır Limitim</span>
          <span class="lb-link">Limitini İncele ${I.chevR}</span>
        </div>

        <div class="section-title">Yapı Kredi Step</div>
        <div class="promo-scroll">
          <div class="step-card">
            <button class="step-x" data-action="step-close" aria-label="Kapat">✕</button>
            <div class="step-txt">Yeni sürdürülebilirlik programımız Step ile daha güzel bir geleceğe adım atalım.</div>
            <div class="step-art">🌱</div>
          </div>
          <div class="step-card" data-action="toast" data-msg="Otomatik talimat prototipte aktif değil">
            <div class="step-txt">Otomatik fatura talimatı verin, faturalarınız yerinize ödensin.</div>
            <div class="step-art">🧾</div>
          </div>
        </div>

        <div class="login-foot">
          <div class="lf-row">${I.lock}<span class="lf-lbl">Son Giriş</span><span class="lf-date">11/06/2026 09:41</span></div>
          <div class="lf-row">${I.lock}<span class="lf-lbl">Son Başarısız Giriş</span><span class="lf-date">—</span></div>
        </div>
      </div>
    </div>
  </div>`;
}

// Home'daki Yuvarla Biriktir kartı — kural yoksa promo, varsa durum kartı
function HomeRoundupCard() {
  const r = state.roundup;
  if (r.active) {
    const g = r.goal;
    const pct = g ? Math.min(100, Math.round(r.jar / g.amount * 100)) : 0;
    return `
      <div class="section-title">Birikim</div>
      <div class="ru-home-card active" data-action="ru-open">
        <div class="ru-home-top"><span class="ru-logo">${ruLogo(30)}</span>
          <div><div class="ru-home-t">Yuvarla Biriktir</div><div class="ru-home-s">Toplam biriken</div></div>
          <span class="chev-r">${I.chevR}</span></div>
        <div class="ru-home-amt">${fmtTL2(r.jar)}</div>
        ${g ? `<div class="ru-goal-track home"><div class="ru-goal-fill" style="width:${pct}%"></div></div>
        <div class="ru-home-mini"><span>${g.emoji} ${g.name} hedefi</span><span><b>%${pct}</b></span></div>`
        : `<div class="ru-home-mini"><span>${I.trendUp} Bu ay <b>+${fmtTL2(ruMonthTotal())}</b></span><span>${ruMonthTxns().length} işlem</span></div>`}
      </div>`;
  }
  return `
    <div class="section-title">Birikim</div>
    <div class="ru-home-card promo" data-action="ru-open">
      <span class="ru-logo">${ruLogo(38)}</span>
      <div class="ru-home-promo-txt">
        <div class="ru-home-t">Yuvarla Biriktir</div>
        <div class="ru-home-s">Her harcamanı bir sonraki 100 TL'ye yuvarla, aradaki farkı otomatik biriktir.</div>
      </div>
      <span class="ru-home-cta">Başvur ${I.chevR}</span>
    </div>`;
}

function SearchScreen() {
  return `
  <div class="screen anim-up">
    <div class="search-head">
      <div class="search-field">
        ${I.search}
        <input id="search-input" type="text" placeholder="Ara" autocomplete="off" />
      </div>
      <span class="search-cancel" data-action="close-search">Vazgeç</span>
    </div>
    <div class="screen-scroll" id="search-content">
      ${SearchEmpty()}
    </div>
  </div>`;
}

function SearchEmpty() {
  return `
    <div class="search-empty">
      <div class="big-ico">${I.searchBig}</div>
      <p>İşlemleri, akıllı rehber kayıtlarınızı, ödeme yapmak istediğiniz faturaların kurumlarını arayabilirsiniz ve arama sonuçlarından işlem yapabilirsiniz.</p>
    </div>
    <div class="result-group-title">Önerilenler</div>
    ${AssistantResult()}`;
}

function AssistantResult(query) {
  let name = 'Yapı Kredi Alışveriş Asistanı';
  if (query) {
    const re = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'i');
    name = name.replace(re, '<em>$1</em>');
  }
  return `
    <div class="result assistant" data-action="open-assistant">
      <div class="result-ico">${I.spark}</div>
      <div>
        <div class="result-name">${name}</div>
        <div><span class="ai-tag">YAPAY ZEKA</span></div>
        <div class="result-sub">Yapay zeka destekli alışveriş ve kampanya asistanı</div>
      </div>
      <span class="chev-r">${I.chevR}</span>
    </div>`;
}

function searchResultsFor(q) {
  const query = q.trim();
  if (!query) return SearchEmpty();
  const keys = ['yapı kredi alışveriş asistanı', 'asistan', 'alışveriş', 'yapay zeka', 'kampanya', 'world', 'robot', 'koçtaş', 'asistanı'];
  const match = keys.some(k => k.includes(query.toLowerCase()) || query.toLowerCase().includes(k) || k.startsWith(query.toLowerCase()));
  if (match) {
    return `<div class="result-group-title">Arama Sonuçları</div>${AssistantResult(query)}`;
  }
  return `<div class="search-empty"><p>"${query}" için sonuç bulunamadı.</p></div>`;
}

function ChatScreen() {
  return `
  <div class="screen anim-right">
    <div class="nav-head">
      <button class="icon-btn" data-action="nav-back">${I.back}</button>
      <div class="ai-avatar">${I.spark}</div>
      <div>
        <div class="nav-title">Alışveriş Asistanı</div>
        <div class="nav-sub ai" id="chat-status">Yapay zeka destekli</div>
      </div>
    </div>

    <div class="chat-scroll" id="chat-scroll"></div>

    <div class="chat-foot">
      <div class="chat-input">
        <textarea id="chat-text" rows="1" placeholder="Mesaj yaz..."></textarea>
        <button class="send-btn" id="send-btn" data-action="chat-send">${I.send}</button>
      </div>
      <div class="ai-disclaimer">Alışveriş Asistanı yapay zekadır, hata yapabilir. Fiyat ve stok bilgisini satıcıdan doğrula.</div>
    </div>
  </div>`;
}

/* Stok rozeti — az stokta kırmızı (aciliyet), stokta sakin yeşil */
function stockBadge(p) {
  if (/^Son/.test(p.stock)) return `<span class="tag stock low">${p.stock}</span>`;
  return `<span class="tag stock ok">${I.box} Stokta</span>`;
}
function ProductCardHTML(p) {
  return `
    <div class="pcard">
      <div class="pcard-img">
        ${imgOrFallback(p.img, p.emoji, 'p-photo')}
        <span class="tag world">World'e Özel</span>
        ${stockBadge(p)}
      </div>
      <div class="pcard-body">
        <div class="pcard-store"><img src="assets/koctas.png" alt="Koçtaş" class="koctas-logo"
          onerror="this.outerHTML='<span class=\\'koctas-text\\'>Koçtaş</span>'"></div>
        <div class="pcard-name">${p.name}</div>
        <div class="pcard-rating">★ ${p.rating} <span>(${p.reviews} değerlendirme)</span></div>
        <div class="pcard-old">${p.old}</div>
        <div class="pcard-price">${p.price}</div>
        <div class="pcard-meta">
          <span class="mtag inst">${I.card} ${p.inst}</span>
          <span class="mtag puan"><img src="assets/world.webp" class="puan-logo" alt="World"> ${p.puan}</span>
        </div>
        <div class="pcard-ship">
          <span class="ship-i">${I.truck} ${p.delivery}</span>
          <span class="ship-dot">·</span>
          <span class="ship-i free">${p.shipping}</span>
        </div>
        <button class="pcard-buy" data-action="buy" data-id="${p.id}">${I.card} World Pay ile Al</button>
      </div>
    </div>`;
}

/* Taksit seçenekleri — varsayılan: Tek Çekim */
function instOptions(p) {
  const total = parseInt(p.priceNum.replace('.', ''));
  return [
    { id: 'single', label: 'Tek Çekim', badge: '', right: p.price },
    { id: 't3', label: '3 Taksit', badge: '', right: `3 x ${Math.round(total / 3).toLocaleString('tr-TR')},00 TL` },
    { id: 't6', label: p.inst, badge: `World'e Özel`, note: 'Vade farkı yok', right: p.instSub },
  ];
}
function instLabel() {
  const p = state.selectedProduct;
  if (state.payMethod === 'bank' || state.installment === 'single') return 'Tek Çekim';
  if (state.installment === 't3') return '3 Taksit';
  return p.inst;
}
function InstBoxHTML(p) {
  return instOptions(p).map(o => `
    <div class="inst-opt ${state.installment === o.id ? 'active' : ''}" data-action="select-inst" data-inst="${o.id}">
      <span class="io-l"><span class="io-radio"></span><span class="io-text"><span class="io-name">${o.label}${o.badge ? `<span class="io-badge">${o.badge}</span>` : ''}</span>${o.note ? `<span class="io-note">${I.check} ${o.note}</span>` : ''}</span></span>
      <span class="io-r">${o.right}</span>
    </div>`).join('');
}

/* Teslimat adresi kartı — başlık + seçili adres + "faturamı aynı adrese" tiki */
function AddressCardHTML() {
  const a = getAddress();
  return `
  <div class="addr-card" id="addr-card">
    <div class="addr-head">
      <span class="addr-title">Teslimat Adresi</span>
      <button class="addr-edit" data-action="open-address">Değiştir ${I.chevR}</button>
    </div>
    <div class="addr-body" data-action="open-address">
      <div class="addr-pin">${I.pin}</div>
      <div class="addr-info">
        <div class="addr-name"><span class="addr-tag">${a.title}</span>${a.name}</div>
        <div class="addr-line">${a.line}</div>
        <div class="addr-city">${a.city} · ${a.phone}</div>
      </div>
    </div>
    <div class="addr-billing ${state.billingSame ? 'on' : ''}" data-action="toggle-billing">
      <span class="cbx">${I.check}</span>
      <span>Faturamı aynı adrese gönder</span>
    </div>
  </div>`;
}

/* Hesap bilgisi kutusu — Vadesiz TL'den ödeme (Worldpuan indirimini de yansıtır) */
function BankBoxHTML() {
  const pay = payableNum();
  const after = USER.balance - pay;
  return `
  <div class="bank-box" id="bank-box">
    <div class="ib-title">Hesap Bilgisi</div>
    <div class="bb-row"><span class="bb-l">Kullanılabilir Bakiye</span><span class="bb-r">${fmtTL(USER.balance)}</span></div>
    <div class="bb-row"><span class="bb-l">Ödeme Tutarı</span><span class="bb-r">- ${fmtTL(pay)}</span></div>
    <div class="bb-row total"><span class="bb-l">İşlem Sonrası Bakiye</span><span class="bb-r">${fmtTL(after)}</span></div>
    <div class="bb-note">${I.lock} Tutar hesabından tek çekimde, masrafsız tahsil edilir.</div>
  </div>`;
}

/* Worldpuan ile öde — sade form tiki (puanın TL karşılığını gösterir) */
function FinanceBoxHTML() {
  const tl = fmtTL(Math.round(USER.worldpuan * PUAN_VALUE));
  return `
  <label class="puan-row ${state.usePuan ? 'on' : ''}" id="fin-box" data-action="toggle-puan">
    <span class="cbx">${I.check}</span>
    <span class="puan-txt">Worldpuan'larımı kullan <b>(${tl} indirim)</b></span>
  </label>`;
}

/* Mesafeli ödeme yasal onayları — iki ayrı checkbox (ön bilgilendirme + sözleşme) */
function ContractBoxHTML() {
  return `
  <div class="contract-box">
    <label class="contract-row ${state.preInfoOk ? 'on' : ''}" data-action="toggle-contract" data-key="preInfoOk">
      <span class="cbx">${I.check}</span>
      <span class="contract-txt"><a data-action="open-preinfo">Ön Bilgilendirme Formu</a>'nu okudum, onaylıyorum.</span>
    </label>
    <label class="contract-row ${state.contractOk ? 'on' : ''}" data-action="toggle-contract" data-key="contractOk">
      <span class="cbx">${I.check}</span>
      <span class="contract-txt"><a data-action="open-contract">Mesafeli Satış Sözleşmesi</a>'ni okudum, onaylıyorum.</span>
    </label>
  </div>`;
}

/* Tahmini teslimat tarih aralığı (bugünden +min/+max gün) */
const AYLAR = ['Oca','Şub','Mar','Nis','May','Haz','Tem','Ağu','Eyl','Eki','Kas','Ara'];
function deliveryRange(minD, maxD) {
  const a = new Date(); a.setDate(a.getDate() + minD);
  const b = new Date(); b.setDate(b.getDate() + maxD);
  return `${a.getDate()} ${AYLAR[a.getMonth()]} - ${b.getDate()} ${AYLAR[b.getMonth()]}`;
}
function DeliveryStripHTML(p) {
  const range = p.delivery === 'Yarın kargoda' ? deliveryRange(1, 2) : deliveryRange(2, 4);
  return `
  <div class="del-line">
    <span class="del-i">${I.truck}</span>
    <span>Tahmini teslimat <b>${range}</b> · ${p.shipping} · YK Kargo</span>
  </div>`;
}

function PaymentScreen() {
  const p = state.selectedProduct;
  return `
  <div class="screen anim-right">
    <div class="nav-head">
      <button class="icon-btn" data-action="nav-back">${I.back}</button>
      <div class="wp-brand"><img src="assets/worldpay.png" alt="World Pay" class="wp-img wp-light"><img src="assets/worldpay-dark.png" alt="World Pay" class="wp-img wp-dark"></div>
    </div>

    <div class="screen-scroll">
      <div class="pay-summary">
        <div class="thumb">${imgOrFallback(p.img, p.emoji, 'ps-photo')}</div>
        <div>
          <div class="ps-name">${p.name}</div>
          <div class="ps-store">${p.store} · World üye iş yeri</div>
        </div>
        <div class="ps-price">${p.price}</div>
      </div>

      ${AddressCardHTML()}

      ${DeliveryStripHTML(p)}

      <div class="pay-section-title">Ödeme Yöntemi</div>

      <div class="method" data-action="select-method" data-method="worldcard">
        <div class="m-ico card-ico">${imgOrFallback(WORLDCARD_IMG, '💳', 'm-cardimg')}</div>
        <div><div class="m-name">Worldcard ile öde</div><div class="m-sub">**** 3333 · ${p.inst} imkanı · Worldpuan kazan</div></div>
        <div class="m-check">${I.check}</div>
      </div>

      <div class="method" data-action="select-method" data-method="bank">
        <div class="m-ico tl-ico"><img src="assets/tl-white.png" class="tl-img" alt="₺" onerror="this.outerHTML='<span class=\\'tl-glyph\\'>₺</span>'"></div>
        <div><div class="m-name">Vadesiz TL Hesabım'dan öde</div><div class="m-sub">Banka kartı · 12345678 · Tek çekim</div></div>
        <div class="m-check">${I.check}</div>
      </div>

      <div class="inst-box" id="inst-box">
        <div class="ib-title">Taksit Seçeneği</div>
        <div class="ib-note">Sana en uygun taksit seçeneğini seç</div>
        ${InstBoxHTML(p)}
      </div>

      ${BankBoxHTML()}

      ${FinanceBoxHTML()}

      ${ContractBoxHTML()}
    </div>

    <div class="pay-foot">
      <button class="pay-btn" id="pay-btn" data-action="pay" disabled>
        <span>Öde</span><span class="div"></span><span id="pay-amt">${payableStr()}</span>
      </button>
      <div class="secure-note">${I.lock} 256-bit güvenli ödeme</div>
    </div>
  </div>`;
}

/* Sipariş kaydı — yoksa (örn. derin bağlantı) anlık üretilir */
function getOrder() {
  if (!state.lastOrder) {
    state.lastOrder = {
      no: 'YKM' + String(Math.floor(100000000 + Math.random() * 900000000)),
      date: new Date(), productId: state.selectedProduct && state.selectedProduct.id,
      addressId: state.addressId, payable: payableStr(),
      bank: state.payMethod === 'bank', inst: instLabel(),
      cargo: 'YK Kargo', track: 'YK' + String(Math.floor(100000000000 + Math.random() * 899999999999)),
    };
  }
  return state.lastOrder;
}
function orderDateStr(d) {
  return `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}.${d.getFullYear()} · ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
}

function SuccessScreen() {
  const p = state.selectedProduct;
  const bank = state.payMethod === 'bank';
  const order = getOrder();
  const dateStr = orderDateStr(order.date);
  const txnNo = order.no;
  const totalPuan = USER.worldpuan - (state.usePuan ? USER.worldpuan : 0) + earnedPuan();
  return `
  <div class="screen anim-fade">
    <div class="screen-scroll">
      <div class="success">
        <div class="success-check"><div class="ring">${I.checkBig}</div></div>
        <h2>Ödemeniz Başarıyla Gerçekleşti</h2>
        <div class="succ-date">${dateStr}</div>
        <div class="amt">${payableStr()}</div>
        <div class="prod">${p.name}</div>

        <div class="puan-card">
          <div class="pc-logo"><img src="assets/world.webp" alt="World" onerror="this.outerHTML='🎉'"></div>
          <div>
            <div class="pc-val">+${earnedPuan()} Worldpuan</div>
            <div class="pc-lbl">hesabına eklendi · Toplam: ${totalPuan.toLocaleString('tr-TR')} Worldpuan</div>
          </div>
        </div>

        ${order.ruAdd ? `
        <div class="puan-card ru-succ" data-action="ru-open">
          <div class="pc-logo ru-logo">${ruLogo(26)}</div>
          <div style="flex:1">
            <div class="pc-val">+${fmtTL2(order.ruAdd)}</div>
            <div class="pc-lbl">Yuvarla Biriktir kumbarana eklendi</div>
          </div>
          <span class="chev-r">${I.chevR}</span>
        </div>` : ''}

        <div class="receipt">
          <div class="r-row"><span class="r-l">İşlem No</span><span class="r-r">${txnNo}</span></div>
          <div class="r-row"><span class="r-l">İş Yeri</span><span class="r-r">${p.store} · World Pay</span></div>
          <div class="r-row"><span class="r-l">Ödeme Yöntemi</span><span class="r-r">${bank ? 'Vadesiz TL Hesabım · 12345678' : 'Worldcard **** 3333'}</span></div>
          <div class="r-row"><span class="r-l">Taksit</span><span class="r-r">${instLabel()}</span></div>
          <div class="r-row"><span class="r-l">Teslimat Adresi</span><span class="r-r">${getAddress().title} · ${getAddress().city}</span></div>
          ${state.usePuan ? `<div class="r-row"><span class="r-l">Worldpuan İndirimi</span><span class="r-r">- ${fmtTL(puanDiscount())}</span></div>` : ''}
          <div class="r-row"><span class="r-l">Tutar</span><span class="r-r">${payableStr()}</span></div>
        </div>

        <div class="success-actions">
          <button class="btn-primary" data-action="go-tracking">${I.box} Siparişimi Takip Et</button>
          <button class="btn-outline" data-action="go-home">Ana Sayfaya Dön</button>
        </div>
      </div>
    </div>
  </div>`;
}

/* Sipariş takibi — durum çizgisi (stepper) + kargo + fatura/iade aksiyonları */
function TrackingScreen() {
  const order = getOrder();
  const p = PRODUCTS.find(x => x.id === order.productId) || state.selectedProduct || PRODUCTS[0];
  const a = ADDRESSES.find(x => x.id === order.addressId) || getAddress();
  const range = p.delivery === 'Yarın kargoda' ? deliveryRange(1, 2) : deliveryRange(2, 4);
  // 4 adımlı durum: 2. adım (Hazırlanıyor) aktif
  const steps = [
    { t: 'Sipariş Alındı', s: 'done', d: orderDateStr(order.date) },
    { t: 'Hazırlanıyor', s: 'active', d: `${p.store} siparişini paketliyor` },
    { t: 'Kargoya Verildi', s: 'todo', d: order.cargo },
    { t: 'Teslim Edildi', s: 'todo', d: `Tahmini ${range}` },
  ];
  return `
  <div class="screen anim-right">
    <div class="nav-head">
      <button class="icon-btn" data-action="nav-back">${I.back}</button>
      <div class="nav-title">Sipariş Takibi</div>
    </div>
    <div class="screen-scroll">
      <div class="trk-head">
        <div class="trk-thumb">${imgOrFallback(p.img, p.emoji, 'ps-photo')}</div>
        <div>
          <div class="trk-name">${p.name}</div>
          <div class="trk-meta">Sipariş No: ${order.no}</div>
          <div class="trk-meta">${orderDateStr(order.date)}</div>
        </div>
      </div>

      <div class="trk-eta">
        <div class="del-ico">${I.truck}</div>
        <div><div class="del-main">Tahmini teslimat: <b>${range}</b></div>
        <div class="del-sub">${p.shipping} · ${order.bank ? 'Vadesiz TL Hesabı' : 'Worldcard'} ile ödendi</div></div>
      </div>

      <div class="cargo-row">
        <div class="cargo-logo"><img src="assets/yk-kargo.png" alt="YK Kargo" onerror="this.parentElement.textContent='YK Kargo'"></div>
        <div class="cargo-info">
          <div class="cargo-name">${order.cargo}</div>
          <div class="cargo-track">Takip No: ${order.track}</div>
        </div>
        <button class="cargo-btn" data-action="toast" data-msg="Kargo takibi prototipte aktif değil">Takip Et</button>
      </div>

      <div class="pay-section-title">Sipariş Durumu</div>
      <div class="stepper">
        ${steps.map((st, i) => `
          <div class="step ${st.s}">
            <div class="step-dot">${st.s === 'done' ? I.check : ''}</div>
            ${i < steps.length - 1 ? '<div class="step-line"></div>' : ''}
            <div class="step-body"><div class="step-t">${st.t}</div><div class="step-d">${st.d}</div></div>
          </div>`).join('')}
      </div>

      <div class="addr-card" style="margin-top:6px">
        <div class="addr-head"><span class="addr-title">Teslimat Adresi</span></div>
        <div class="addr-body" style="cursor:default">
          <div class="addr-pin">${I.pin}</div>
          <div class="addr-info">
            <div class="addr-name"><span class="addr-tag">${a.title}</span>${a.name}</div>
            <div class="addr-line">${a.line}</div>
            <div class="addr-city">${a.city} · ${a.phone}</div>
          </div>
        </div>
      </div>

      <div class="trk-actions">
        <button class="trk-btn" data-action="open-invoice">${I.receipt} Faturayı Görüntüle</button>
        <button class="trk-btn" data-action="open-return">${I.undo} İade / Cayma Talebi</button>
        <button class="trk-btn" data-action="toast" data-msg="Tekrar sipariş prototipte aktif değil">${I.refresh} Tekrar Sipariş Ver</button>
      </div>
    </div>
  </div>`;
}

/* Fatura görüntüleme sheet'i */
function openInvoiceSheet() {
  const order = getOrder();
  const p = PRODUCTS.find(x => x.id === order.productId) || PRODUCTS[0];
  const a = ADDRESSES.find(x => x.id === order.addressId) || getAddress();
  sheetEl.innerHTML = `
    <div class="sheet-handle"></div>
    <div class="sheet-bar"><h3>e-Fatura</h3><button class="sheet-x" data-action="close-sheet">${I.close}</button></div>
    <div class="legal-scroll">
      <h4>${p.store} · World Pay</h4>
      <p>Fatura No: ${order.no.replace('YKM','FT')}<br>Tarih: ${orderDateStr(order.date)}</p>
      <h4>Alıcı</h4>
      <p>${a.name}<br>${a.line}, ${a.city}</p>
      <h4>Ürün</h4>
      <p>${p.name}<br>Ödeme: ${order.bank ? 'Vadesiz TL Hesabı · Tek Çekim' : 'Worldcard · ' + order.inst}</p>
      <div class="inv-total"><span>Genel Toplam (KDV dahil)</span><b>${order.payable}</b></div>
      <p style="margin-top:12px">Bu belge prototip amaçlı örnek bir e-faturadır.</p>
    </div>
    <button class="sheet-btn ghost" data-action="toast" data-msg="Fatura PDF indirme prototipte aktif değil">PDF Olarak İndir</button>`;
  sheetEl.classList.add('open');
  sheetScrimEl.classList.add('open');
}

/* İade / cayma talebi sheet'i (14 günlük cayma hakkı) */
function openReturnSheet() {
  sheetEl.innerHTML = `
    <div class="sheet-handle"></div>
    <div class="sheet-bar"><h3>İade / Cayma Talebi</h3><button class="sheet-x" data-action="close-sheet">${I.close}</button></div>
    <div class="sheet-ico" style="background:rgba(226,0,26,.12);color:var(--world)">${I.undo}</div>
    <p>Mesafeli Satış Sözleşmesi kapsamında, ürünü teslim aldıktan sonra <b>14 gün</b> içinde gerekçe göstermeden cayma hakkını kullanabilirsin. Talebin oluşturulduğunda kargo kodu tarafına iletilir, iade onayında ödemen aynı yönteme iade edilir.</p>
    <button class="sheet-btn" data-action="confirm-return">${I.undo} Cayma Talebi Oluştur</button>
    <button class="sheet-btn ghost" data-action="close-sheet">Vazgeç</button>`;
  sheetEl.classList.add('open');
  sheetScrimEl.classList.add('open');
}
function confirmReturn() {
  closeSheet();
  toast('Cayma talebin alındı, e-posta ile bilgilendirileceksin 💙');
}

/* Bölümler hub'ı — tüm ekranlara tek dokunuşla atlama (demo için) */
function SectionsScreen() {
  return `
  <div class="screen anim-right">
    <div class="nav-head">
      <button class="icon-btn" data-action="nav-back">${I.back}</button>
      <div class="nav-title">Bölümler</div>
    </div>
    <div class="screen-scroll">
      <div class="sec-intro">Full prototip akışı aynen çalışır. Buradan herhangi bir bölümü tek dokunuşla, baştan akış yapmadan açabilirsin. Linkler paylaşılabilir — tarayıcı adresindeki <b>#etiketi</b> ile (ör. <b>#tracking</b>).</div>
      ${SECTIONS.map(s => `
        <a class="sec-card" href="#${s.hash}" data-action="route" data-hash="${s.hash}">
          <span class="sec-ico">${I[s.icon]}</span>
          <span class="sec-txt"><span class="sec-t">${s.t}</span><span class="sec-d">${s.d}</span></span>
          <span class="sec-hash">#${s.hash}</span>
          <span class="sec-chev">${I.chevR}</span>
        </a>`).join('')}
    </div>
  </div>`;
}

function SettingsScreen() {
  const dark = state.theme === 'dark';
  return `
  <div class="screen anim-right">
    <div class="nav-head">
      <button class="icon-btn" data-action="nav-back">${I.back}</button>
      <div class="nav-title">Ayarlarım</div>
    </div>
    <div class="screen-scroll">
      <div class="set-group-title">Görünüm</div>
      <div class="set-row">
        <span class="s-ico">${dark ? I.moon : I.sun}</span>
        <div><div class="s-name">Tema</div><div class="s-sub">Uygulama görünümünü seç</div></div>
        <div class="right theme-seg">
          <button class="${dark ? 'active' : ''}" data-action="set-theme" data-theme="dark">${I.moon} Koyu</button>
          <button class="${!dark ? 'active' : ''}" data-action="set-theme" data-theme="light">${I.sun} Açık</button>
        </div>
      </div>

      <div class="set-group-title">Bildirimler</div>
      <div class="set-row">
        <span class="s-ico">${I.bell}</span>
        <div><div class="s-name">Kampanya bildirimleri</div><div class="s-sub">World fırsatlarından haberdar ol</div></div>
        <div class="right switch on" data-action="toggle-switch"></div>
      </div>
      <div class="set-row">
        <span class="s-ico">${I.spark}</span>
        <div><div class="s-name">Asistan önerileri</div><div class="s-sub">Alışveriş asistanı önerileri göster</div></div>
        <div class="right switch on" data-action="toggle-switch"></div>
      </div>

      <div class="set-group-title">Güvenlik</div>
      <div class="set-row">
        <span class="s-ico">${I.faceid}</span>
        <div><div class="s-name">Face ID ile giriş</div><div class="s-sub">Giriş ve onaylarda Face ID kullan</div></div>
        <div class="right switch on" data-action="toggle-switch"></div>
      </div>
    </div>
  </div>`;
}

/* ===================================================================
   YUVARLA BİRİKTİR — ekranlar
   =================================================================== */

// Başvur — tek ekran: tanıtım + 1.Kart 2.Kural (10/50/100) 3.Birikim hesabı + talimat onayı + Aktifleştir
function RoundupApply() {
  const r = state.roundup;
  const c = ruCard();
  const a = ruAccount();
  const ready = r.source && r.account && r.agreed;
  return `
  <div class="screen anim-right">
    <div class="nav-head">
      <button class="icon-btn" data-action="nav-back">${I.back}</button>
      <div class="nav-title">Yuvarla Biriktir'e Başvur</div>
      <button class="icon-btn" data-action="toast" data-msg="Bilgilendirme prototipte aktif değil">${I.info}</button>
    </div>
    <div class="screen-scroll ru-form">
      <div class="ru-hero">
        <div class="ru-hero-logo ru-logo">${ruLogo(58)}</div>
        <h1 class="ru-hero-title">Yuvarla Biriktir ile<br>her harcamada biriktir.</h1>
        <p class="ru-hero-sub">Seçtiğin kartla yaptığın harcamalar bir sonraki ${RU_UNIT} TL'ye tamamlanır. Aradaki fark birikim hesabına aktarılır.</p>
      </div>

      <div class="ru-sec">
        <div class="ru-sec-h"><span class="ru-sec-n">1</span> Kart Seçimi</div>
        <div class="ru-select-field ${c ? 'filled' : 'empty'}" data-action="ru-open-cardpick">
          ${c
            ? `${ruCardArt(c)}<div class="ru-sf-mid"><div class="ru-sf-name">${c.name}</div><div class="ru-sf-sub">${c.num}</div></div><span class="ru-sf-tick">${I.check}</span>`
            : `<span class="ru-sf-ico">${I.card}</span><span class="ru-sf-label">Banka veya kredi kartı seçiniz</span>`}
          <span class="ru-sf-chev">${I.chevR}</span>
        </div>
      </div>

      <div class="ru-sec">
        <div class="ru-sec-h"><span class="ru-sec-n">2</span> Yuvarlama Kuralı</div>
        ${ruRuleBoxHTML()}
      </div>

      <div class="ru-sec">
        <div class="ru-sec-h"><span class="ru-sec-n">3</span> Birikim Hesabı Seç</div>
        <div class="ru-select-field ${a ? 'filled' : 'empty'}" data-action="ru-open-acctpick">
          ${a
            ? `<span class="ru-sf-ico">${I.bank}</span><div class="ru-sf-mid"><div class="ru-sf-name">${a.name}</div><div class="ru-sf-sub">${a.iban} · ${a.detail}</div></div><span class="ru-sf-tick">${I.check}</span>`
            : `<span class="ru-sf-ico">${I.bank}</span><span class="ru-sf-label">Birikim hesabı seçiniz</span>`}
          <span class="ru-sf-chev">${I.chevR}</span>
        </div>
        <div class="ru-lock-note">${I.lock} Birikimlerin seçtiğin hesapta güvenle birikir.</div>
      </div>

      <div class="ru-sec">
        <label class="contract-row ru-agree ${r.agreed ? 'on' : ''}" data-action="ru-agree">
          <span class="cbx">${I.check}</span>
          <span class="contract-txt"><a data-action="ru-open-form">Yuvarla Biriktir Talimat Formu</a>'nu okudum, onaylıyorum.</span>
        </label>
      </div>
    </div>
    <div class="screen-cta">
      <button class="btn-primary ${ready ? '' : 'disabled'}" id="ru-activate-btn" data-action="ru-activate">Aktifleştir</button>
      <div class="ru-ssl">${I.lock} Bilgilerin 256 bit SSL ile korunmaktadır.</div>
    </div>
  </div>`;
}

// Kural bölümü — sabit 100 TL kuralı, örnekler ve aylık tahmin tek kartta bütünleşik
function ruRuleBoxHTML() {
  return `
    <div class="ru-rule-card">
      <div class="ru-rule-head">
        <span class="ru-rule-badge">${RU_UNIT}${I.arrowUp}</span>
        <div class="ru-rule-mid"><div class="ru-rule-t">Sonraki ${RU_UNIT} TL'ye yuvarla</div><div class="ru-rule-s">Her uygun harcamada otomatik uygulanır.</div></div>
      </div>
      <div class="ru-rule-ex">
        ${RU_SAMPLES.map(s => {
          const to = ruNextUnit(s, RU_UNIT);
          return `<div class="ru-how-row"><span>${s} TL harcama</span><span class="ru-how-arw">→ ${to} TL'ye tamamlanır</span><b>+${to - s} TL</b></div>`;
        }).join('')}
      </div>
      <div class="ru-est">${I.trendUp} Bu kuralla ayda yaklaşık <b>${RU_EST}</b> biriktirebilirsin.</div>
    </div>
    <div class="ru-rule-note">${I.info} Nakit çekimler, kredi kartı ödemeleri ve bazı işlemler hariçtir. <b>Detaylar</b></div>`;
}

// Yönet — kumbara + aylık grafik + hedef + ayar özeti + hareketler + duraklat/durdur
function RoundupJar() {
  const r = state.roundup;
  const c = ruCard();
  const a = ruAccount();
  return `
  <div class="screen anim-right">
    <div class="nav-head ru-nav-accent">
      <button class="icon-btn" data-action="nav-back">${I.back}</button>
      <div class="nav-title">Yuvarla Biriktir</div>
      <button class="icon-btn" data-action="toast" data-msg="Bilgilendirme prototipte aktif değil">${I.info}</button>
    </div>
    <div class="screen-scroll">
      <div class="ru-statcard">
        <div class="ru-jar-label">Toplam Biriken</div>
        <div class="ru-jar-amt" id="ru-jar-amt" data-val="${r.jar}">${fmtTL2(r.jar)}</div>
        <div class="ru-statrow">
          <div class="ru-stat"><div class="ru-stat-l">Bu ay biriken</div><div class="ru-stat-v">+${fmtTL2(ruMonthTotal())}</div></div>
          <div class="ru-stat mid"><div class="ru-stat-l">Bu ay işlem</div><div class="ru-stat-v">${ruMonthTxns().length}</div></div>
          <div class="ru-stat"><div class="ru-stat-l">Geçen aya göre</div><div class="ru-stat-v up">${I.trendUp} %${r.monthChange}</div></div>
        </div>
      </div>

      <div class="ru-block">
        <div class="ru-block-h">Aylık birikim</div>
        ${ruChartHTML()}
      </div>

      ${ruGoalCard()}

      <div class="ru-info-card">
        <div class="ru-info-row"><span class="ru-info-ico">${I.target}</span><span class="ru-info-k">Kural</span><span class="ru-info-v">Sonraki ${RU_UNIT} TL'ye yuvarlanır</span></div>
        <div class="ru-info-row tap" data-action="ru-open-cardpick"><span class="ru-info-ico">${I.card}</span><span class="ru-info-k">Kart</span><span class="ru-info-v">${c ? c.name + '<br><i>' + c.num + '</i>' : 'Seçilmedi'}</span>${I.chevR}</div>
        <div class="ru-info-row tap" data-action="ru-open-acctpick"><span class="ru-info-ico">${I.bank}</span><span class="ru-info-k">Birikim hesabı</span><span class="ru-info-v">${a ? a.name + '<br><i>' + a.iban + '</i>' : 'Seçilmedi'}</span>${I.chevR}</div>
      </div>

      <div class="ru-txn-title">Son birikimler</div>
      <div class="ru-txns">${ruTxnRows()}</div>
      <div class="ru-seeall" data-action="ru-history">Tüm hareketleri gör ${I.chevR}</div>
    </div>
    <div class="screen-cta">
      <button class="btn-ghost-danger" data-action="ru-stop">Yuvarla Biriktir'i durdur</button>
    </div>
  </div>`;
}

// 6 aylık çubuk grafik — son 5 ay sabit veri, içinde bulunulan ay canlı (state'ten)
function ruChartHTML() {
  const months = [...RU_MONTHS, { m: 'May', v: ruMonthTotal(), cur: true }];
  const max = Math.max(...months.map(x => x.v), 1);
  return `
    <div class="ru-chart">
      ${months.map(x => `
        <div class="ru-bar-col">
          <div class="ru-bar-v">${Math.round(x.v)}</div>
          <div class="ru-bar-track"><div class="ru-bar ${x.cur ? 'cur' : ''}" style="height:${Math.max(9, Math.round(x.v / max * 100))}%"></div></div>
          <div class="ru-bar-m ${x.cur ? 'cur' : ''}">${x.m}</div>
        </div>`).join('')}
    </div>`;
}

// Hedef kartı — hedef yoksa çağrı, varsa ilerleme çubuğu
function ruGoalCard() {
  const r = state.roundup;
  const g = r.goal;
  if (!g) return `
    <div class="ru-goal-card empty" data-action="ru-open-goal">
      <span class="ru-goal-emoji">🎯</span>
      <div class="ru-goal-mid"><div class="ru-goal-t">Bir hedef belirle</div><div class="ru-goal-s">Hedefi olan birikim daha hızlı büyür.</div></div>
      <span class="ru-home-cta">Belirle ${I.chevR}</span>
    </div>`;
  const pct = Math.min(100, Math.round(r.jar / g.amount * 100));
  return `
    <div class="ru-goal-card" data-action="ru-open-goal">
      <span class="ru-goal-emoji">${g.emoji}</span>
      <div class="ru-goal-mid">
        <div class="ru-goal-row"><span class="ru-goal-t">${g.name}</span><b>%${pct}</b></div>
        <div class="ru-goal-track"><div class="ru-goal-fill" style="width:${pct}%"></div></div>
        <div class="ru-goal-s">${fmtTL2(r.jar)} / ${fmtTL(g.amount)}</div>
      </div>
      <span class="ru-txn-chev">${I.chevR}</span>
    </div>`;
}

// Tek hareket satırı — iki ekranda da (özet + geçmiş) aynı görünüm
function ruTxnRow(t) {
  const idx = state.roundup.txns.indexOf(t);
  return `
    <div class="ru-txn" data-action="ru-txn" data-idx="${idx}">
      <span class="ru-txn-ico">${t.emoji}</span>
      <div class="ru-txn-mid"><div class="ru-txn-m">${t.merchant}</div><div class="ru-txn-s">${fmtTL2(t.spent).replace(',00', '')} → ${fmtTL2(t.spent + t.add).replace(',00', '')}</div><div class="ru-txn-d">${t.date}</div></div>
      <span class="ru-txn-add">+${fmtTL2(t.add).replace(',00', '')}</span>
      <span class="ru-txn-chev">${I.chevR}</span>
    </div>`;
}

// Son birikim satırları (yönet ekranında ilk 3)
function ruTxnRows() {
  const r = state.roundup;
  if (!r.txns.length) return `<div class="ru-txn-empty">Henüz birikim yok. Kartını kullandıkça buraya düşecek.</div>`;
  return r.txns.slice(0, 3).map(ruTxnRow).join('');
}

// Tüm hareketler — aya göre gruplu, ay toplamı başlıkta
function RoundupHistory() {
  const r = state.roundup;
  const groups = [];
  r.txns.forEach(t => {
    let g = groups.find(x => x.m === t.month);
    if (!g) { g = { m: t.month, items: [], total: 0 }; groups.push(g); }
    g.items.push(t);
    g.total += t.add;
  });
  return `
  <div class="screen anim-right">
    <div class="nav-head">
      <button class="icon-btn" data-action="nav-back">${I.back}</button>
      <div class="nav-title">Birikim Hareketleri</div>
      <span class="icon-btn" style="visibility:hidden">${I.info}</span>
    </div>
    <div class="screen-scroll">
      ${groups.map(g => `
        <div class="ru-month-h"><span>${g.m}</span><b>+${fmtTL2(g.total)}</b></div>
        <div class="ru-txns">${g.items.map(ruTxnRow).join('')}</div>`).join('')}
      <div class="ru-hist-note">${I.info} Daha eski hareketler prototipte gösterilmiyor.</div>
    </div>
  </div>`;
}

/* ---- Yuvarla Biriktir akış mantığı ---- */
// Kumbarayı örnek geçmişle doldur (aktif değilse) — deeplink ve onay ortak kullanır
function ruSeedJar() {
  const r = state.roundup;
  r.active = true;
  if (!r.source) r.source = 'worldgold';
  if (!r.account) r.account = 'sav';
  if (!r.txns.length) r.txns = RU_SEED_TXNS.map(t => ({ ...t }));
}
// Talimat formu onayı — checkbox'ı ve Aktifleştir butonunu yerinde güncelle
function ruToggleAgree(el) {
  const r = state.roundup;
  r.agreed = !r.agreed;
  el.classList.toggle('on', r.agreed);
  const btn = document.getElementById('ru-activate-btn');
  if (btn) btn.classList.toggle('disabled', !(r.source && r.account && r.agreed));
}
// Talimat Formu — örnek yasal metin sheet'i
function ruOpenForm() {
  sheetEl.innerHTML = `
    <div class="sheet-handle"></div>
    <div class="ru-pick-t">Yuvarla Biriktir Talimat Formu</div>
    <div class="legal-scroll">
      <h4>1. Talimatın Kapsamı</h4>
      <p>Bu talimat ile seçtiğiniz kartla yapılan uygun harcama tutarları bir sonraki <b>${RU_UNIT} TL</b>'ye tamamlanır ve aradaki fark seçtiğiniz birikim hesabına aktarılır.</p>
      <h4>2. Kapsam Dışı İşlemler</h4>
      <p>Nakit çekim, kredi kartı borç ödemesi, para transferi, düzenli ödeme talimatları ve iade işlemlerinde yuvarlama uygulanmaz.</p>
      <h4>3. Durdurma ve Değişiklik</h4>
      <p>Talimatınızı dilediğiniz an durdurabilir veya kart/hesap bilgilerini güncelleyebilirsiniz. Biriken tutar hesabınızda kalır.</p>
      <p><b>Bu metin prototip amaçlı örnek bir sözleşme özetidir.</b></p>
    </div>
    <button class="sheet-btn" data-action="close-sheet">Okudum</button>`;
  sheetEl.classList.add('open');
  sheetScrimEl.classList.add('open');
}
// Aktifleştir → eksikleri söyle ya da onay sheet'ini aç
function ruActivate() {
  const r = state.roundup;
  if (!r.source) return toast('Önce bir kart seçmelisin');
  if (!r.account) return toast('Birikim hesabı seçmelisin');
  if (!r.agreed) return toast('Talimat Formu onayı gerekli');
  const c = ruCard(), a = ruAccount();
  sheetEl.innerHTML = `
    <div class="sheet-handle"></div>
    <div class="ru-pick-t">Talimatı Onayla</div>
    <div class="ru-cf-rows">
      <div class="ru-cf-row"><span>Kart</span><b>${c.name} ${c.num.slice(-4)}</b></div>
      <div class="ru-cf-row"><span>Kural</span><b>Sonraki ${RU_UNIT} TL'ye yuvarla</b></div>
      <div class="ru-cf-row"><span>Birikim hesabı</span><b>${a.name}</b></div>
      <div class="ru-cf-row"><span>Tahmini aylık birikim</span><b class="est">${RU_EST}</b></div>
    </div>
    <button class="sheet-btn" id="ru-confirm-btn" data-action="ru-confirm">${I.shield} Onayla ve Aktifleştir</button>
    <button class="sheet-btn ghost" data-action="close-sheet">Vazgeç</button>`;
  sheetEl.classList.add('open');
  sheetScrimEl.classList.add('open');
}
// Onay → kısa "talimat oluşturuluyor" bekleme → başarı durumu (aynı sheet içinde)
function ruConfirm() {
  const btn = document.getElementById('ru-confirm-btn');
  btn.innerHTML = `<span class="spinner"></span> Talimat oluşturuluyor…`;
  btn.style.pointerEvents = 'none';
  setTimeout(() => {
    ruSeedJar();
    sheetEl.innerHTML = `
      <div class="sheet-handle"></div>
      <div class="ru-done">
        <div class="ru-done-ring">${I.checkBig}</div>
        <div class="ru-done-t">Yuvarla Biriktir aktif! 🎉</div>
        <div class="ru-done-s">Artık ${ruCard().name} ile yaptığın her uygun harcamada aradaki fark otomatik birikecek.</div>
      </div>
      <button class="sheet-btn" data-action="ru-open-jar">Kumbaramı Gör</button>`;
  }, 1400);
}
// Kart seç alanına dokununca → kart listesi sheet'i (gerçek kart görselleriyle)
function ruOpenCardPick() {
  sheetEl.innerHTML = `
    <div class="sheet-handle"></div>
    <div class="ru-pick-t">Banka veya kredi kartı seçiniz</div>
    ${RU_CARDS.map(c => {
      const on = state.roundup.source === c.id;
      return `<div class="ru-pick-row ${on ? 'active' : ''}" data-action="ru-pick-card" data-val="${c.id}">
        ${ruCardArt(c)}
        <div class="ru-pick-mid"><div class="ru-pick-n">${c.name}</div><div class="ru-pick-s">${c.num} · ${c.kind}</div><div class="ru-pick-s2">${c.detail}</div></div>
        <span class="ru-pick-radio ${on ? 'on' : ''}">${on ? I.check : ''}</span>
      </div>`;
    }).join('')}
    <button class="sheet-btn ghost" data-action="close-sheet">Vazgeç</button>`;
  sheetEl.classList.add('open');
  sheetScrimEl.classList.add('open');
}
function ruPickCard(id) { state.roundup.source = id; closeSheet(); render(); }
// Birikim hesabı seç alanına dokununca → hesap listesi sheet'i
function ruOpenAcctPick() {
  sheetEl.innerHTML = `
    <div class="sheet-handle"></div>
    <div class="ru-pick-t">Birikim hesabı seçiniz</div>
    ${RU_ACCOUNTS.map(a => {
      const on = state.roundup.account === a.id;
      return `<div class="ru-pick-row ${on ? 'active' : ''}" data-action="ru-pick-acct" data-val="${a.id}">
        <span class="ru-pick-ico">${I.bank}</span>
        <div class="ru-pick-mid"><div class="ru-pick-n">${a.name}</div><div class="ru-pick-s">${a.iban} · ${a.detail}</div></div>
        <span class="ru-pick-radio ${on ? 'on' : ''}">${on ? I.check : ''}</span>
      </div>`;
    }).join('')}
    <button class="sheet-btn ghost" data-action="close-sheet">Vazgeç</button>`;
  sheetEl.classList.add('open');
  sheetScrimEl.classList.add('open');
}
function ruPickAcct(id) { state.roundup.account = id; closeSheet(); render(); }
// Hedef seç sheet'i — hazır hedefler + kaldırma
function ruOpenGoalPick() {
  const g = state.roundup.goal;
  sheetEl.innerHTML = `
    <div class="sheet-handle"></div>
    <div class="ru-pick-t">Birikim hedefini seç</div>
    ${RU_GOAL_PRESETS.map(p => {
      const on = g && g.id === p.id;
      return `<div class="ru-pick-row ${on ? 'active' : ''}" data-action="ru-pick-goal" data-val="${p.id}">
        <span class="ru-txn-ico">${p.emoji}</span>
        <div class="ru-pick-mid"><div class="ru-pick-n">${p.name}</div><div class="ru-pick-s">Hedef: ${fmtTL(p.amount)}</div></div>
        <span class="ru-pick-radio ${on ? 'on' : ''}">${on ? I.check : ''}</span>
      </div>`;
    }).join('')}
    ${g ? `<button class="sheet-btn ghost danger-txt" data-action="ru-clear-goal">Hedefi kaldır</button>` : ''}
    <button class="sheet-btn ghost" data-action="close-sheet">Vazgeç</button>`;
  sheetEl.classList.add('open');
  sheetScrimEl.classList.add('open');
}
function ruPickGoal(id) {
  state.roundup.goal = { ...RU_GOAL_PRESETS.find(p => p.id === id) };
  closeSheet();
  render();
  setTimeout(() => toast('Hedefin belirlendi 🎯'), 150);
}
function ruClearGoal() {
  state.roundup.goal = null;
  closeSheet();
  render();
  setTimeout(() => toast('Hedef kaldırıldı'), 150);
}
// Hareket detayı sheet'i
function ruOpenTxn(i) {
  const t = state.roundup.txns[i];
  if (!t) return;
  const c = ruCard();
  const a = ruAccount();
  sheetEl.innerHTML = `
    <div class="sheet-handle"></div>
    <div class="ru-td-head">
      <span class="ru-txn-ico big">${t.emoji}</span>
      <div class="ru-td-m">${t.merchant}</div>
      <div class="ru-td-d">${t.date}</div>
    </div>
    <div class="ru-cf-rows">
      <div class="ru-cf-row"><span>Harcama</span><b>${fmtTL2(t.spent)}</b></div>
      <div class="ru-cf-row"><span>Yuvarlandı</span><b>${fmtTL2(t.spent + t.add)}</b></div>
      <div class="ru-cf-row"><span>Birikime eklenen</span><b class="est">+${fmtTL2(t.add)}</b></div>
      ${c ? `<div class="ru-cf-row"><span>Kart</span><b>${c.name} ${c.num.slice(-4)}</b></div>` : ''}
      ${a ? `<div class="ru-cf-row"><span>Birikim hesabı</span><b>${a.name}</b></div>` : ''}
    </div>
    <button class="sheet-btn ghost" data-action="close-sheet">Kapat</button>`;
  sheetEl.classList.add('open');
  sheetScrimEl.classList.add('open');
}
// Durdur — geri alınamaz aksiyon: önce onay sheet'i
function ruStop() {
  sheetEl.innerHTML = `
    <div class="sheet-handle"></div>
    <div class="ru-pick-t">Yuvarla Biriktir'i durdur</div>
    <p class="ru-stop-txt">Talimatın iptal edilir ve yeni harcamalarda birikim yapılmaz. Biriken <b>${fmtTL2(state.roundup.jar)}</b> hesabında kalır.</p>
    <button class="sheet-btn" data-action="ru-stop-confirm">Durdur</button>
    <button class="sheet-btn ghost" data-action="close-sheet">Vazgeç</button>`;
  sheetEl.classList.add('open');
  sheetScrimEl.classList.add('open');
}
function ruStopConfirm() {
  const r = state.roundup;
  r.active = false;
  r.agreed = false;
  closeSheet();
  goHome();
  setTimeout(() => toast('Yuvarla Biriktir durduruldu. Biriken paran hesabında kalır.'), 300);
}
// Kumbara toplamı sayaç animasyonu — yönet ekranı her açılışta kısa bir count-up oynatır
function setupJar() {
  const el = document.getElementById('ru-jar-amt');
  if (!el) return;
  const target = parseFloat(el.dataset.val);
  const from = target * 0.55;
  const dur = 650;
  const t0 = performance.now();
  const tick = (now) => {
    const p = Math.min(1, (now - t0) / dur);
    const e = 1 - Math.pow(1 - p, 3); // ease-out
    el.textContent = fmtTL2(from + (target - from) * e);
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ===================================================================
   HARCAMA ANALİZİ & LİMİT  (Harcamalarım)
   İki ekran: Analiz + Limit (üstte segment). Analiz'de dönem + kart filtresi.
   Limitler hesap geneli (tüm kartlar) hesaplanır; kart filtresi yalnız Analiz'de.
   =================================================================== */
const SPEND_MONTH = 'Bu ay';
const SPEND_DAY = 20, SPEND_DAYS = 30;   // ayın kaçıncı günü / toplam gün
const SPEND_CHANGE = 8;                   // toplamda geçen aya göre % (artış)

// Filtre kartları — 'all' + gerçek kartlar
const SP_CARDS = [
  { id: 'all',       name: 'Tüm kartlar', num: '' },
  { id: 'worldcard', name: 'Worldcard',   num: '1234 56** **** 3333', kind: 'Kredi Kartı' },
  { id: 'tlcard',    name: 'TLcard',       num: '4506 34** **** 8842', kind: 'Banka Kartı' },
];
function spCardObj() { return SP_CARDS.find(c => c.id === state.spendCard) || SP_CARDS[0]; }

// Kategoriler — tutar işyeri kırılımından türetilir. dn: gün, card: filtre, mom: geçen aya göre %
const SPEND_CATS = [
  { id: 'market', name: 'Market', emoji: '🛒', color: '#14A5A0', mom: 12, txns: [
    { m: 'CarrefourSA', s: 'Ataşehir',  d: '18 Haz', dn: 18, a: 902.70, card: 'tlcard' },
    { m: 'Migros',      s: 'Ataşehir',  d: '15 Haz', dn: 15, a: 845.30, card: 'tlcard' },
    { m: 'A101',        s: 'Kadıköy',   d: '11 Haz', dn: 11, a: 780.00, card: 'worldcard' },
    { m: 'Getir',       s: '2 işlem',   d: '06 Haz', dn: 6,  a: 712.50, card: 'worldcard' },
  ]},
  { id: 'giyim', name: 'Giyim', emoji: '👕', color: '#2F6FED', mom: 18, txns: [
    { m: 'Boyner',     s: 'Akasya AVM', d: '17 Haz', dn: 17, a: 1640.00, card: 'worldcard' },
    { m: 'Zara',       s: 'Online',     d: '12 Haz', dn: 12, a: 780.00,  card: 'worldcard' },
    { m: 'LC Waikiki', s: 'Kadıköy',    d: '08 Haz', dn: 8,  a: 520.00,  card: 'tlcard' },
  ]},
  { id: 'yeme', name: 'Yemek', emoji: '🍽️', color: '#F5883E', mom: 9, txns: [
    { m: 'Big Chefs',     s: 'Restoran', d: '19 Haz', dn: 19, a: 720.00, card: 'worldcard' },
    { m: 'Yemeksepeti',   s: '3 sipariş', d: '14 Haz', dn: 14, a: 640.00, card: 'worldcard' },
    { m: 'Kahve Dünyası', s: '4 işlem',  d: '10 Haz', dn: 10, a: 440.00, card: 'tlcard' },
    { m: 'Starbucks',     s: '2 işlem',  d: '07 Haz', dn: 7,  a: 380.00, card: 'worldcard' },
  ]},
  { id: 'fatura', name: 'Faturalar', emoji: '🧾', color: '#8B7FD6', mom: -6, txns: [
    { m: 'Enerjisa',     s: 'Elektrik', d: '13 Haz', dn: 13, a: 720.30, card: 'worldcard' },
    { m: 'İGDAŞ',        s: 'Doğalgaz', d: '13 Haz', dn: 13, a: 610.00, card: 'worldcard' },
    { m: 'Türk Telekom', s: 'İnternet', d: '05 Haz', dn: 5,  a: 540.00, card: 'worldcard' },
  ]},
  { id: 'akaryakit', name: 'Akaryakıt', emoji: '⛽', color: '#4A6FA5', mom: -11, txns: [
    { m: 'Opet',  s: 'Ataşehir', d: '16 Haz', dn: 16, a: 960.00, card: 'worldcard' },
    { m: 'Shell', s: 'E-5',      d: '09 Haz', dn: 9,  a: 600.00, card: 'tlcard' },
  ]},
  { id: 'saglik', name: 'Sağlık & Bakım', emoji: '💊', color: '#E86AA6', mom: 7, txns: [
    { m: 'Eczane Nur', s: 'Sağlık',        d: '15 Haz', dn: 15, a: 550.00, card: 'tlcard' },
    { m: 'Watsons',    s: 'Kişisel bakım', d: '08 Haz', dn: 8,  a: 430.00, card: 'worldcard' },
  ]},
  { id: 'ulasim', name: 'Ulaşım', emoji: '🚕', color: '#7B61C9', mom: -14, txns: [
    { m: 'Uber',         s: '5 yolculuk', d: '18 Haz', dn: 18, a: 400.00, card: 'worldcard' },
    { m: 'İstanbulkart', s: 'Dolum',      d: '10 Haz', dn: 10, a: 240.00, card: 'tlcard' },
  ]},
  { id: 'eglence', name: 'Eğlence', emoji: '🎬', color: '#7C4DFF', mom: 22, txns: [
    { m: 'Cinemaximum', s: 'Sinema',    d: '14 Haz', dn: 14, a: 510.00, card: 'worldcard' },
    { m: 'Netflix',     s: 'Abonelik',  d: '03 Haz', dn: 3,  a: 150.00, card: 'worldcard' },
    { m: 'Spotify',     s: 'Abonelik',  d: '03 Haz', dn: 3,  a: 60.00,  card: 'worldcard' },
  ]},
  { id: 'diger', name: 'Diğer', emoji: '🧩', color: '#8A8F98', mom: 3, txns: [
    { m: 'Trendyol', s: 'Online', d: '11 Haz', dn: 11, a: 430.00, card: 'worldcard' },
  ]},
];

/* ---- filtreli (Analiz) hesaplar ---- */
function spCat(id) { return SPEND_CATS.find(c => c.id === id); }
function spCatTxns(c) { return state.spendCard === 'all' ? c.txns : c.txns.filter(t => t.card === state.spendCard); }
function spCatAmt(c) { return spCatTxns(c).reduce((s, t) => s + t.a, 0); }
function spTotal() { return SPEND_CATS.reduce((s, c) => s + spCatAmt(c), 0); }
function spActive() { return SPEND_CATS.filter(c => spCatAmt(c) > 0); }
function spSorted() { return spActive().sort((a, b) => spCatAmt(b) - spCatAmt(a)); }
function spAllTxns() { const a = []; SPEND_CATS.forEach(c => spCatTxns(c).forEach(t => a.push(t))); return a; }
function spMerchants() { return new Set(spAllTxns().map(t => t.m)).size; }
/* ---- tüm-kartlar (Limit) hesaplar — limit hesap geneli bir bütçedir ---- */
function spCatAmtAll(c) { return c.txns.reduce((s, t) => s + t.a, 0); }
function spTotalAll() { return SPEND_CATS.reduce((s, c) => s + spCatAmtAll(c), 0); }
function spSortedAll() { return SPEND_CATS.filter(c => spCatAmtAll(c) > 0).sort((a, b) => spCatAmtAll(b) - spCatAmtAll(a)); }
function spLimit(id) { return state.limits[id] || null; }
function spLimitInfo(c) {
  const lim = spLimit(c.id); if (!lim) return null;
  const spent = spCatAmtAll(c);
  const pct = Math.round(spent / lim * 100);
  const proj = SPEND_DAY ? spent / SPEND_DAY * SPEND_DAYS : spent;
  return { lim, spent, pct, remaining: lim - spent, over: spent > lim, near: pct >= 80 && spent <= lim, proj, projOver: proj > lim };
}
function fmtShortTL(n) { return Math.round(n).toLocaleString('tr-TR') + ' TL'; }
function momTxt(n) { return (n >= 0 ? '+' : '−') + '%' + Math.abs(n); }

/* Standart kategori ikonları — tema-uyumlu monoline (currentColor). Her ekranda aynı. */
const CAT_ICO = {
  market:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.3"/><circle cx="17.5" cy="20" r="1.3"/><path d="M2.5 3.5h2L6.6 15h10.2l1.7-7.5H6.2"/></svg>',
  giyim:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M8.6 3.2 4 6l1.6 2.4L7.5 7v13.5h9V7l1.9 1.4L20 6l-4.6-2.8a3.4 3.4 0 0 1-6.8 0Z"/></svg>',
  yeme:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v6a2 2 0 0 0 4 0V3M8 11v10M15.5 3c-1.4 0-2.3 2-2.3 4.4S14.1 12 15.5 12v9"/></svg>',
  fatura:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 3v18l2-1.4 2 1.4 2-1.4 2 1.4 2-1.4 2 1.4V3l-2 1.4-2-1.4-2 1.4-2-1.4-2 1.4z"/><path d="M8.5 8.5h7M8.5 12.5h7"/></svg>',
  akaryakit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 21V5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v16M3.5 21h11M5.5 11h7M13.5 8l2.4 2.4V16a1.7 1.7 0 0 0 3.4 0V9.5L16.5 6.5"/></svg>',
  saglik:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.5S4.5 16 4.5 10.6A3.7 3.7 0 0 1 12 8.2a3.7 3.7 0 0 1 7.5 2.4c0 5.4-7.5 9.9-7.5 9.9Z"/></svg>',
  ulasim:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 13.5 4.8 8a2 2 0 0 1 1.9-1.3h10.6A2 2 0 0 1 19.2 8L21 13.5V18h-2.4M3 13.5V18h2.4M3 13.5h18"/><circle cx="7" cy="18" r="1.5"/><circle cx="17" cy="18" r="1.5"/></svg>',
  eglence:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M10.2 8.4v7.2l6-3.6z" fill="currentColor" stroke="none"/></svg>',
  diger:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3.5" y="3.5" width="7" height="7" rx="1.6"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.6"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.6"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.6"/></svg>',
};
function spIco(c, size) { const col = (c && c.color) || '#8A8F98'; return `<span class="sp-ico ${size || ''}" style="background:${col}">${(c && CAT_ICO[c.id]) || CAT_ICO.diger}</span>`; }

/* ---- Donut ---- */
function spDonutParts() {
  const cats = spSorted(); const total = spTotal() || 1;
  const parts = cats.slice(0, 4).map(c => ({ name: c.name, color: c.color, amt: spCatAmt(c) }));
  const rest = cats.slice(4).reduce((s, c) => s + spCatAmt(c), 0);
  if (rest > 0) parts.push({ name: 'Diğer', color: '#8A8F98', amt: rest });
  return parts.map(p => ({ ...p, pct: Math.round(p.amt / total * 100) }));
}
function spDonut() {
  const parts = spDonutParts();
  const total = parts.reduce((s, p) => s + p.amt, 0) || 1;
  let acc = 0; const stops = [];
  parts.forEach(p => { const f = acc / total * 100; acc += p.amt; const to = acc / total * 100; stops.push(`${p.color} ${f.toFixed(2)}% ${to.toFixed(2)}%`); });
  if (!stops.length) stops.push('#8A8F98 0% 100%');
  return `
    <div class="sp-donut" style="background:conic-gradient(${stops.join(',')})">
      <div class="sp-donut-hole"><div class="sp-donut-amt">${fmtShortTL(spTotal())}</div><div class="sp-donut-lbl">Toplam</div></div>
    </div>
    <div class="sp-legend">${parts.map(p => `<div class="sp-leg"><span class="sp-leg-dot" style="background:${p.color}"></span><span class="sp-leg-pct">%${p.pct}</span><span class="sp-leg-n">${p.name}</span></div>`).join('')}</div>`;
}

/* ---- Kümülatif çizgi + geçen ay hayalet eğrisi ---- */
function spLineChart() {
  const txns = spAllTxns().slice().sort((a, b) => a.dn - b.dn);
  const W = 300, H = 92;
  let cum = 0; const pts = [[0, 0]];
  txns.forEach(t => { cum += t.a; pts.push([t.dn, cum]); });
  const curTotal = cum;
  const prevTotal = curTotal / (1 + SPEND_CHANGE / 100);
  const maxV = Math.max(curTotal, prevTotal, 1);
  const X = d => d / SPEND_DAYS * W;
  const Y = v => H - (v / maxV) * (H - 8);
  const line = pts.map((p, i) => `${i ? 'L' : 'M'}${X(p[0]).toFixed(1)} ${Y(p[1]).toFixed(1)}`).join(' ');
  const last = pts[pts.length - 1];
  const area = `${line} L${X(last[0]).toFixed(1)} ${H} L0 ${H} Z`;
  const gf = [0, .28, .52, .76, 1], gd = [0, 8, 15, 22, 30];
  const ghost = gd.map((d, i) => `${i ? 'L' : 'M'}${X(d).toFixed(1)} ${Y(prevTotal * gf[i]).toFixed(1)}`).join(' ');
  return `
    <svg class="sp-line" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">
      <defs><linearGradient id="spg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="var(--primary)" stop-opacity=".22"/>
        <stop offset="1" stop-color="var(--primary)" stop-opacity="0"/>
      </linearGradient></defs>
      <path d="${ghost}" fill="none" stroke="var(--text-faint)" stroke-width="1.6" stroke-dasharray="4 4" opacity=".75" vector-effect="non-scaling-stroke"/>
      <path d="${area}" fill="url(#spg)"/>
      <path d="${line}" fill="none" stroke="var(--primary)" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
      <line x1="${X(last[0]).toFixed(1)}" y1="0" x2="${X(last[0]).toFixed(1)}" y2="${H}" stroke="var(--primary)" stroke-width="1" stroke-dasharray="3 3" opacity=".45" vector-effect="non-scaling-stroke"/>
    </svg>`;
}

/* ---- Ortak üst başlık: segment + filtreler (kart yalnız Analiz'de) ---- */
function spHeader(active) {
  const card = spCardObj();
  const showCard = active === 'insights';
  return `
    <div class="nav-head sp-nav-accent">
      <button class="icon-btn" data-action="nav-back">${I.back}</button>
      <div class="nav-title">Harcamalarım</div>
      <button class="icon-btn" data-action="toast" data-msg="Bilgilendirme prototipte aktif değil">${I.info}</button>
    </div>
    <div class="sp-top">
      <div class="sp-seg">
        <button class="sp-seg-b ${active === 'insights' ? 'on' : ''}" data-action="sp-seg" data-seg="insights">Analiz</button>
        <button class="sp-seg-b ${active === 'limits' ? 'on' : ''}" data-action="sp-seg" data-seg="limits">Limit</button>
      </div>
      <div class="sp-filters ${showCard ? '' : 'solo'}">
        <button class="sp-fpill" data-action="sp-period"><span class="sp-fp-ic">${I.calendar}</span><span>${SPEND_MONTH}</span>${I.chevDown}</button>
        ${showCard ? `<button class="sp-fpill" data-action="sp-cardpick"><span class="sp-fp-ic">${I.card}</span><span>${card.name}</span>${I.chevDown}</button>` : ''}
      </div>
    </div>`;
}

/* =================== ANALİZ EKRANI =================== */
function InsightsScreen() {
  const total = spTotal();
  const cats = spSorted();
  const top = cats.slice(0, 4);
  const rest = cats.slice(4);
  const restSum = rest.reduce((s, c) => s + spCatAmt(c), 0);
  const inc = SPEND_CHANGE >= 0;
  return `
  <div class="screen anim-right sp-screen">
    ${spHeader('insights')}
    <div class="screen-scroll">
      <div class="sp-card">
        <div class="sp-sum-label">Toplam Harcama</div>
        <div class="sp-sum-amt">${fmtTL2(total)}</div>
        <div class="sp-chg ${inc ? 'inc' : 'dec'}"><span class="sp-chg-ic">${I.trendUp}</span><b>${momTxt(SPEND_CHANGE)}</b> geçen aya göre</div>
        <div class="sp-donut-wrap">${spDonut()}</div>
        <div class="sp-line-wrap">
          <span class="sp-today">Bugün</span>
          ${spLineChart()}
          <div class="sp-x"><span>1</span><span>8</span><span>15</span><span>22</span><span>30</span></div>
          <div class="sp-line-legend"><span class="ll cur">Bu ay</span><span class="ll prev">Geçen ay</span></div>
        </div>
      </div>

      <div class="sp-card pad0">
        <div class="sp-card-h row"><span>Kategoriye göre harcamalar</span><button class="sp-link" data-action="sp-allcats">Tümü ${I.chevR}</button></div>
        <div class="sp-cat-list">
          ${top.map(c => spCatRow(c, total)).join('')}
          ${rest.length ? `<div class="sp-cat" data-action="sp-allcats">
            <span class="sp-ico" style="background:#8A8F98">${I.grid}</span>
            <div class="sp-cat-mid"><div class="sp-cat-n">Diğer kategoriler</div><div class="sp-cat-sub">${rest.length} kategori</div></div>
            <span class="sp-cat-a">${fmtTL2(restSum)}</span>
            <span class="sp-cat-chev">${I.chevR}</span>
          </div>` : ''}
        </div>
      </div>

      <div class="sp-hab-head"><span>Harcama Alışkanlıkların</span><button class="sp-link" data-action="toast" data-msg="Tüm içgörüler prototipte aktif değil">Tümü ${I.chevR}</button></div>
      <div class="sp-hab-scroll">
        ${spHabitDay()}
        ${spHabitConc()}
        ${spHabitBiggest()}
        ${spHabitDaily()}
        ${spHabitSubs()}
        ${spHabitMerch()}
      </div>

      <div class="sp-foot-note">${I.lock} Veriler bu aya kadar günceldir.</div>
    </div>
  </div>`;
}

// Analiz kategori satırı — sade: ikon + isim + (%pay · geçen aya göre) + tutar
function spCatRow(c, total) {
  const amt = spCatAmt(c);
  const pct = total ? Math.round(amt / total * 100) : 0;
  return `
    <div class="sp-cat" data-action="sp-cat" data-id="${c.id}">
      ${spIco(c)}
      <div class="sp-cat-mid"><div class="sp-cat-n">${c.name}</div><div class="sp-cat-sub">%${pct} · geçen aya göre ${momTxt(c.mom)}</div></div>
      <span class="sp-cat-a">${fmtTL2(amt)}</span>
      <span class="sp-cat-chev">${I.chevR}</span>
    </div>`;
}

/* Tüm kategoriler (Tümü) */
function AllCatsScreen() {
  const total = spTotal();
  const cats = spSorted();
  return `
  <div class="screen anim-right">
    <div class="nav-head">
      <button class="icon-btn" data-action="nav-back">${I.back}</button>
      <div class="nav-title">Kategoriler</div>
      <span class="icon-btn" style="visibility:hidden">${I.info}</span>
    </div>
    <div class="screen-scroll">
      <div class="sp-card pad0" style="margin-top:14px"><div class="sp-cat-list">${cats.map(c => spCatRow(c, total)).join('')}</div></div>
      <div class="sp-foot-note">${I.lock} ${state.spendCard !== 'all' ? spCardObj().name + ' harcamaları' : 'Tüm kartlar'} · ${SPEND_MONTH}</div>
    </div>
  </div>`;
}

/* Alışkanlık kartları — çeşitli, çoğu canlı veriden (yatay kaydırma) */
const SP_WK_LBL = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cts', 'Paz'];
function spWeekday() { const s = [0, 0, 0, 0, 0, 0, 0]; spAllTxns().forEach(t => { s[(t.dn - 1) % 7] += t.a; }); return s; }
function spBiggest() { return spAllTxns().slice().sort((a, b) => b.a - a.a)[0]; }
function spSubs() { const s = spAllTxns().filter(t => t.s === 'Abonelik'); return { sum: s.reduce((x, t) => x + t.a, 0), count: s.length }; }
function spHabitDay() {
  const w = spWeekday(); const max = Math.max(...w, 1); const mi = w.indexOf(Math.max(...w));
  const full = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
  return `
    <div class="sp-hab">
      <div class="sp-hab-ico blue">${I.calendar}</div>
      <div class="sp-hab-lbl">En çok harcadığın gün</div>
      <div class="sp-hab-big">${full[mi]}</div>
      <div class="sp-hab-sub">O gün ${fmtShortTL(w[mi])}</div>
      <div class="sp-week">${w.map((v, i) => `<div class="sp-wk"><div class="sp-wk-track"><div class="sp-wk-bar ${i === mi ? 'on' : ''}" style="height:${Math.round(v / max * 100)}%"></div></div><div class="sp-wk-d ${i === mi ? 'on' : ''}">${SP_WK_LBL[i]}</div></div>`).join('')}</div>
    </div>`;
}
function spHabitConc() {
  const total = spTotal() || 1;
  const pct = Math.round((spCatAmt(spCat('market')) + spCatAmt(spCat('yeme'))) / total * 100);
  return `
    <div class="sp-hab">
      <div class="sp-hab-ico green">${I.pie}</div>
      <div class="sp-hab-lbl">Harcamalarının</div>
      <div class="sp-hab-big">%${pct}'i</div>
      <div class="sp-hab-sub">market ve yemek kategorilerinde</div>
      <button class="sp-hab-btn" data-action="toast" data-msg="Detay prototipte aktif değil">Detayları Gör</button>
    </div>`;
}
function spHabitBiggest() {
  const t = spBiggest();
  return `
    <div class="sp-hab">
      <div class="sp-hab-ico amber">${I.receipt}</div>
      <div class="sp-hab-lbl">En büyük tek harcama</div>
      <div class="sp-hab-big">${fmtShortTL(t ? t.a : 0)}</div>
      <div class="sp-hab-sub">${t ? t.m + ' · ' + t.d : '—'}</div>
    </div>`;
}
function spHabitDaily() {
  const avg = spTotal() / SPEND_DAY;
  return `
    <div class="sp-hab">
      <div class="sp-hab-ico teal">${I.wallet2}</div>
      <div class="sp-hab-lbl">Günlük ortalama</div>
      <div class="sp-hab-big">${fmtShortTL(avg)}</div>
      <div class="sp-hab-sub">bu ay · ${SPEND_DAY} gün</div>
    </div>`;
}
function spHabitSubs() {
  const s = spSubs();
  return `
    <div class="sp-hab">
      <div class="sp-hab-ico purple">${I.refresh}</div>
      <div class="sp-hab-lbl">Abonelikler</div>
      <div class="sp-hab-big">${fmtShortTL(s.sum)}</div>
      <div class="sp-hab-sub">${s.count} abonelik · aylık yenilenen</div>
    </div>`;
}
function spHabitMerch() {
  return `
    <div class="sp-hab">
      <div class="sp-hab-ico blue">${I.bank}</div>
      <div class="sp-hab-lbl">Bu ay</div>
      <div class="sp-hab-big">${spMerchants()}</div>
      <div class="sp-hab-sub">farklı iş yeri ile alışveriş yaptın</div>
      <button class="sp-hab-btn" data-action="toast" data-msg="İş yerleri prototipte aktif değil">İş Yerlerini Gör</button>
    </div>`;
}

/* =================== KATEGORİ DETAY =================== */
function InsightsCategoryScreen() {
  const c = spCat(state.spendCat) || SPEND_CATS[0];
  const amt = spCatAmt(c);
  const li = spLimitInfo(c);
  const txns = spCatTxns(c);
  return `
  <div class="screen anim-right">
    <div class="nav-head">
      <button class="icon-btn" data-action="nav-back">${I.back}</button>
      <div class="nav-title">${c.name}</div>
      <span class="icon-btn" style="visibility:hidden">${I.info}</span>
    </div>
    <div class="screen-scroll">
      <div class="sp-cat-hero">
        ${spIco(c, 'big')}
        <div class="sp-cat-hero-amt">${fmtTL2(amt)}</div>
        <div class="sp-cat-hero-sub">${SPEND_MONTH} · ${txns.length} işlem${state.spendCard !== 'all' ? ' · ' + spCardObj().name : ''}</div>
      </div>

      ${spCatLimitBlock(c, li)}

      <div class="section-title">İşlemler</div>
      <div class="sp-txns">${txns.length ? txns.map(t => `
        <div class="sp-txn">
          <span class="sp-txn-ico" style="background:${c.color}22;color:${c.color}">${initials(t.m)}</span>
          <div class="sp-txn-mid"><div class="sp-txn-m">${t.m}</div><div class="sp-txn-s">${t.s}</div><div class="sp-txn-d">${t.d}</div></div>
          <span class="sp-txn-a">${fmtTL2(t.a)}</span>
        </div>`).join('') : '<div class="sp-empty">Bu kartta bu kategoride işlem yok.</div>'}
      </div>
    </div>
  </div>`;
}
/* Sakin limit çubuğu — near'da uyarı rengi yok (hep sakin); aşımda limit çentiği + minik taşma (mercan) */
function spBar(spent, lim, big) {
  const cls = big ? 'sp-limit-track big' : 'sp-limit-track';
  if (!lim || spent <= lim) {
    const pct = lim ? Math.min(100, Math.round(spent / lim * 100)) : 0;
    return `<div class="${cls}"><div class="sp-limit-fill calm" style="width:${pct}%"></div></div>`;
  }
  const notch = (lim / spent * 100).toFixed(1);
  return `<div class="${cls} over">
    <div class="sp-limit-fill calm" style="width:${notch}%"></div>
    <div class="sp-over-seg" style="left:${notch}%"></div>
    <div class="sp-notch" style="left:${notch}%"></div>
  </div>`;
}
function spCatLimitBlock(c, li) {
  if (!li) return `
    <div class="sp-setlimit" data-action="sp-set-limit" data-id="${c.id}">
      <span class="sp-sl-ico">${I.target}</span>
      <div class="sp-sl-mid"><div class="sp-sl-t">Bu kategoriye limit koy</div><div class="sp-sl-s">Aylık harcamanı kontrol altında tut.</div></div>
      <span class="sp-sl-cta">${I.plus} Ekle</span>
    </div>`;
  const over = li.over;
  return `
    <div class="sp-limit-card ${over ? 'over' : ''}">
      <div class="sp-limit-head"><span>Aylık limit${state.spendCard !== 'all' ? ' · tüm kartlar' : ''}</span><b>${fmtShortTL(li.lim)}</b></div>
      <div class="sp-lim-hero ${over ? 'over' : ''}">${over ? fmtShortTL(-li.remaining) + ' aşıldı' : fmtShortTL(li.remaining) + ' kaldı'}</div>
      ${spBar(li.spent, li.lim)}
      <div class="sp-lim-meta"><span>${fmtShortTL(li.spent)} harcandı</span><span class="sp-lim-pct ${over ? 'over' : ''}">%${li.pct}</span></div>
      <div class="sp-limit-proj">${I.trendUp} Bu hızla ay sonunda ~${fmtShortTL(li.proj)} ${li.projOver ? '· limiti aşabilirsin' : '· limit içinde'}</div>
      <div class="sp-limit-actions">
        <button class="sp-lim-btn" data-action="sp-set-limit" data-id="${c.id}">Limiti düzenle</button>
        <button class="sp-lim-btn ghost" data-action="sp-remove-limit" data-id="${c.id}">Kaldır</button>
      </div>
    </div>`;
}

/* =================== LİMİT EKRANI (hesap geneli) =================== */
function LimitsScreen() {
  const used = spTotalAll();
  const tl = state.totalLimit;
  const rem = tl - used;
  const pct = tl ? Math.round(used / tl * 100) : 0;
  const limited = SPEND_CATS.filter(c => spLimit(c.id)).sort((a, b) => spLimitInfo(b).pct - spLimitInfo(a).pct);
  const sugg = spSuggestion();
  return `
  <div class="screen anim-right sp-screen">
    ${spHeader('limits')}
    <div class="screen-scroll">
      <div class="sp-card sp-sum-card" data-action="sp-edit-total">
        <div class="sp-card-h row"><span>Aylık limit özeti</span><span class="sp-edit-link">Düzenle ${I.chevR}</span></div>
        <div class="sp-sum3">
          <div><div class="sp-s3-l">Toplam limit</div><div class="sp-s3-v">${fmtShortTL(tl)}</div></div>
          <div class="mid"><div class="sp-s3-l">Kullanılan</div><div class="sp-s3-v">${fmtShortTL(used)}</div></div>
          <div><div class="sp-s3-l">Kalan</div><div class="sp-s3-v ${rem < 0 ? 'over' : 'blue'}">${fmtShortTL(rem)}</div></div>
        </div>
        ${spBar(used, tl, true)}
        <div class="sp-sum-note">${I.trendUp} Genel aylık hedefinin <b>%${pct}</b>'i kullanıldı.</div>
      </div>

      <div class="sp-card pad0">
        <div class="sp-card-h">Kategori limitlerin</div>
        <div class="sp-lim-list">${limited.length ? limited.map(spLimRow).join('') : '<div class="sp-empty">Henüz kategori limiti yok. Aşağıdan ekleyebilirsin.</div>'}</div>
      </div>

      ${sugg ? `
      <div class="sp-sugg">
        <div class="sp-sugg-top"><span class="sp-sugg-ico">💡</span><span class="sp-sugg-t">Akıllı öneri</span></div>
        <div class="sp-sugg-s">${sugg.text}</div>
        <button class="sp-out-btn wide" data-action="sp-apply-sugg" data-id="${sugg.id}" data-val="${sugg.val}">${sugg.cta}</button>
      </div>` : ''}

      <div class="sp-foot-note">${I.lock} Limitler yalnızca bilgilendirme amaçlıdır, işlemleri engellemez.</div>
    </div>
    <div class="screen-cta">
      <button class="btn-primary" data-action="sp-add-limit">Yeni kategori limiti ekle ${I.plus}</button>
    </div>
  </div>`;
}
function spLimRow(c) {
  const li = spLimitInfo(c);
  const over = li.over;
  const badge = over ? '<span class="sp-badge over">Limit aşıldı</span>' : '';
  return `
    <div class="sp-lim" data-action="sp-set-limit" data-id="${c.id}">
      ${spIco(c)}
      <div class="sp-lim-mid">
        <div class="sp-lim-top"><span class="sp-lim-n">${c.name}</span>${badge}<span class="sp-cat-chev">${I.chevR}</span></div>
        <div class="sp-lim-hero ${over ? 'over' : ''}">${over ? fmtShortTL(-li.remaining) + ' aşıldı' : fmtShortTL(li.remaining) + ' kaldı'}</div>
        ${spBar(li.spent, li.lim)}
        <div class="sp-lim-meta"><span>${fmtShortTL(li.spent)} harcandı</span><span>Limit ${fmtShortTL(li.lim)}</span></div>
      </div>
    </div>`;
}
// Akıllı öneri — bağlama göre değişir (aşımı artır / limitsiz büyük kategoriye ekle / az kullanılanı düşür)
function spSuggestion() {
  const over = SPEND_CATS.find(c => { const li = spLimitInfo(c); return li && li.over; });
  if (over) { const v = Math.ceil(spCatAmtAll(over) / 500) * 500 + 1000; return { id: over.id, name: over.name, val: v, cta: 'Öneriyi uygula', text: `Geçen 3 ayın harcamalarına göre <b>${over.name}</b> limitini <b>${fmtShortTL(v)}</b> yapman daha uygun olabilir.` }; }
  const big = spSortedAll().find(c => !spLimit(c.id) && spCatAmtAll(c) > 800);
  if (big) { const v = Math.ceil(spCatAmtAll(big) * 1.15 / 500) * 500; return { id: big.id, name: big.name, val: v, cta: 'Limit ekle', text: `En çok harcadığın kategorilerden <b>${big.name}</b> için limit yok. <b>${fmtShortTL(v)}</b> ile başlayabilirsin.` }; }
  const low = SPEND_CATS.find(c => { const li = spLimitInfo(c); return li && li.pct < 45; });
  if (low) { const v = Math.ceil(spCatAmtAll(low) * 1.2 / 500) * 500; return { id: low.id, name: low.name, val: v, cta: 'Öneriyi uygula', text: `<b>${low.name}</b> limitinin çoğu boşta. <b>${fmtShortTL(v)}</b>'ye çekerek bütçeni sıkılaştırabilirsin.` }; }
  return null;
}

/* =================== SHEET'LER =================== */
const SP_PRESETS = [2000, 5000, 10000];
function openLimitSheet(id) {
  const c = spCat(id); if (!c) return;
  const cur = spLimit(id);
  const spent = spCatAmtAll(c);
  sheetEl.innerHTML = `
    <div class="sheet-handle"></div>
    <div class="sp-sheet-head">
      ${spIco(c)}
      <div><div class="sp-sheet-t">${c.name} limiti</div><div class="sp-sheet-s">Bu ay harcanan: ${fmtShortTL(spent)}</div></div>
    </div>
    <div class="sp-amt-wrap"><input id="sp-limit-input" class="sp-amt-input" type="text" inputmode="numeric" placeholder="0" value="${cur || ''}" autocomplete="off" /><span class="sp-amt-cur">TL</span></div>
    <div class="sp-preset-row">${SP_PRESETS.map(p => `<button class="sp-preset" data-action="sp-limit-preset" data-val="${p}">${p.toLocaleString('tr-TR')} TL</button>`).join('')}</div>
    <div class="sp-sheet-hint">${I.info} Limite yaklaşınca (%80) ve aşınca bildirim gönderilir.</div>
    <button class="sheet-btn" data-action="sp-save-limit" data-id="${id}">${cur ? 'Limiti Güncelle' : 'Limiti Kaydet'}</button>
    ${cur ? `<button class="sheet-btn ghost danger-txt" data-action="sp-remove-limit" data-id="${id}">Limiti Kaldır</button>` : `<button class="sheet-btn ghost" data-action="close-sheet">Vazgeç</button>`}`;
  sheetEl.classList.add('open'); sheetScrimEl.classList.add('open');
  setTimeout(() => { const i = document.getElementById('sp-limit-input'); if (i) i.focus(); }, 250);
}
function openTotalLimitSheet() {
  const cur = state.totalLimit; const used = spTotalAll();
  sheetEl.innerHTML = `
    <div class="sheet-handle"></div>
    <div class="sp-sheet-head">
      <span class="sp-ico" style="background:var(--navy)">${I.target}</span>
      <div><div class="sp-sheet-t">Toplam aylık limit</div><div class="sp-sheet-s">Bu ay kullanılan: ${fmtShortTL(used)}</div></div>
    </div>
    <div class="sp-amt-wrap"><input id="sp-limit-input" class="sp-amt-input" type="text" inputmode="numeric" placeholder="0" value="${cur || ''}" autocomplete="off" /><span class="sp-amt-cur">TL</span></div>
    <div class="sp-preset-row">${[10000, 20000, 30000].map(p => `<button class="sp-preset" data-action="sp-limit-preset" data-val="${p}">${p.toLocaleString('tr-TR')} TL</button>`).join('')}</div>
    <div class="sp-sheet-hint">${I.info} Genel aylık harcama hedefin. Kategori limitlerinden bağımsızdır.</div>
    <button class="sheet-btn" data-action="sp-save-total">Kaydet</button>
    <button class="sheet-btn ghost" data-action="close-sheet">Vazgeç</button>`;
  sheetEl.classList.add('open'); sheetScrimEl.classList.add('open');
  setTimeout(() => { const i = document.getElementById('sp-limit-input'); if (i) i.focus(); }, 250);
}
function spOpenCardPick() {
  sheetEl.innerHTML = `
    <div class="sheet-handle"></div>
    <div class="ru-pick-t">Kart seç</div>
    ${SP_CARDS.map(c => { const on = state.spendCard === c.id;
      return `<div class="ru-pick-row ${on ? 'active' : ''}" data-action="sp-pick-card" data-val="${c.id}">
        <span class="sp-pick-card">${I.card}</span>
        <div class="ru-pick-mid"><div class="ru-pick-n">${c.name}</div><div class="ru-pick-s">${c.num ? c.num + ' · ' + c.kind : 'Tüm kartların toplamı'}</div></div>
        <span class="ru-pick-radio ${on ? 'on' : ''}">${on ? I.check : ''}</span>
      </div>`; }).join('')}
    <button class="sheet-btn ghost" data-action="close-sheet">Vazgeç</button>`;
  sheetEl.classList.add('open'); sheetScrimEl.classList.add('open');
}
function spOpenAddPick() {
  const cats = spSortedAll().filter(c => !spLimit(c.id));
  sheetEl.innerHTML = `
    <div class="sheet-handle"></div>
    <div class="ru-pick-t">Limit eklenecek kategori</div>
    ${cats.length ? cats.map(c => `
      <div class="ru-pick-row" data-action="sp-set-limit" data-id="${c.id}">
        ${spIco(c, 'sm')}
        <div class="ru-pick-mid"><div class="ru-pick-n">${c.name}</div><div class="ru-pick-s">Bu ay ${fmtShortTL(spCatAmtAll(c))}</div></div>
        ${I.chevR}
      </div>`).join('') : '<div class="sp-empty">Tüm kategorilerde limit tanımlı.</div>'}
    <button class="sheet-btn ghost" data-action="close-sheet">Vazgeç</button>`;
  sheetEl.classList.add('open'); sheetScrimEl.classList.add('open');
}

/* ---- akış mantığı ---- */
function spSeg(seg) { const target = seg === 'limits' ? 'limits' : 'insights'; if (state.screen !== target) { state.screen = target; render(); } }
function spLimitPreset(val) { const i = document.getElementById('sp-limit-input'); if (i) i.value = val; }
function spSaveLimit(id) {
  const i = document.getElementById('sp-limit-input');
  const val = parseInt((i ? i.value : '').replace(/[^\d]/g, ''), 10);
  if (!val || val <= 0) return toast('Geçerli bir tutar gir');
  state.limits[id] = val; closeSheet(); render();
  setTimeout(() => toast(`${spCat(id).name} limiti ${fmtShortTL(val)} olarak ayarlandı 🎯`), 150);
}
function spSaveTotal() {
  const i = document.getElementById('sp-limit-input');
  const val = parseInt((i ? i.value : '').replace(/[^\d]/g, ''), 10);
  if (!val || val <= 0) return toast('Geçerli bir tutar gir');
  state.totalLimit = val; closeSheet(); render();
  setTimeout(() => toast(`Toplam aylık limit ${fmtShortTL(val)} olarak ayarlandı`), 150);
}
function spRemoveLimit(id) { delete state.limits[id]; closeSheet(); render(); setTimeout(() => toast('Limit kaldırıldı'), 150); }
function spPickCard(id) { state.spendCard = id; closeSheet(); render(); }
function spApplySugg(id, val) { state.limits[id] = val; render(); setTimeout(() => toast(`${spCat(id).name} limiti ${fmtShortTL(val)} yapıldı 💡`), 150); }
function initials(name) { return name.split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase(); }

function PlaceholderScreen(title) {
  return `
  <div class="screen anim-right">
    <div class="nav-head">
      <button class="icon-btn" data-action="nav-back">${I.back}</button>
      <div class="nav-title">${title}</div>
    </div>
    <div class="placeholder">
      <div class="ph-ico">🚧</div>
      <h3>${title}</h3>
      <p>Bu bölüm prototip kapsamında tasarlanmadı.<br/>Demo akışı için <b>Arama → Alışveriş Asistanı</b> adımını kullanabilirsin.</p>
      <button class="btn-primary" style="max-width:220px" data-action="go-home">Ana Sayfaya Dön</button>
    </div>
  </div>`;
}

/* ===================================================================
   RENDER & NAVİGASYON
   =================================================================== */

function render() {
  let html = '';
  switch (state.screen) {
    case 'home': html = HomeScreen(); break;
    case 'search': html = SearchScreen(); break;
    case 'chat': html = ChatScreen(); break;
    case 'payment': html = PaymentScreen(); break;
    case 'success': html = SuccessScreen(); break;
    case 'tracking': html = TrackingScreen(); break;
    case 'sections': html = SectionsScreen(); break;
    case 'settings': html = SettingsScreen(); break;
    case 'roundup-apply': html = RoundupApply(); break;
    case 'roundup-jar': html = RoundupJar(); break;
    case 'roundup-history': html = RoundupHistory(); break;
    case 'insights': html = InsightsScreen(); break;
    case 'insights-category': html = InsightsCategoryScreen(); break;
    case 'insights-cats': html = AllCatsScreen(); break;
    case 'limits': html = LimitsScreen(); break;
    default: html = PlaceholderScreen(state.placeholderTitle || 'Yakında'); break;
  }
  app.innerHTML = html;

  // Ekrana özel kurulum
  if (state.screen === 'search') setupSearch();
  if (state.screen === 'chat') setupChat();
  if (state.screen === 'roundup-jar') setupJar();
}

/* İleri navigasyon — mevcut ekranı geri yığınına ekler (gerçek uygulama gibi) */
function go(screen) {
  state.nav.push(curFrame());
  closeDrawer();
  state.chatSeed = false;
  state.screen = screen;
  render();
}
/* O anki ekranın geri-frame'i. Chat'e geri dönülürse tamamlanmış haliyle gelsin. */
function curFrame() {
  return { screen: state.screen, chatSeed: state.screen === 'chat' };
}
/* Geri (back) — yığından bir önceki ekrana dön; boşsa ana sayfa */
function navBack() {
  closeDrawer();
  const f = state.nav.pop();
  if (!f) { state.chatSeed = false; state.screen = 'home'; return render(); }
  state.chatSeed = !!f.chatSeed;
  state.screen = f.screen;
  render();
}
/* Ana sayfaya dön — geri yığınını temizler (taze başlangıç) */
function goHome() {
  state.nav = [];
  state.chatSeed = false;
  closeDrawer();
  state.screen = 'home';
  render();
}

/* ---------- Drawer ---------- */
function openDrawer() {
  drawerEl.innerHTML = DrawerHTML();
  drawerEl.classList.add('open');
  scrimEl.classList.add('open');
}
function closeDrawer() {
  drawerEl.classList.remove('open');
  scrimEl.classList.remove('open');
}

function DrawerHTML() {
  return `
    <div class="drawer-scroll">
      <div class="promo" data-action="toast" data-msg="Otomatik talimat prototipte aktif değil">
        <div class="p-ico">🧾</div>
        <div><div class="p-title">Tek talimat yeter!</div><div class="p-sub">Faturalarını biz takip edelim.</div></div>
        <span class="chev-r">${I.chevR}</span>
      </div>
      ${MENU.map(m => `
        <div class="menu-item ${m.id === 'home' && state.screen === 'home' ? 'active' : ''}" data-action="menu-nav" data-id="${m.id}" data-label="${m.label}">
          ${I[m.icon]}<span>${m.label}</span>
        </div>`).join('')}
    </div>
    <div class="drawer-foot">
      <button class="settings" data-action="route" data-hash="sections">${I.grid} Bölümler</button>
      <button class="settings" data-action="go-settings">${I.gear} Ayarlarım</button>
      <button class="logout" data-action="toast" data-msg="Çıkış prototipte aktif değil">${I.power} Çıkış</button>
    </div>`;
}

/* ---------- Arama kurulumu ---------- */
function setupSearch() {
  const input = document.getElementById('search-input');
  const content = document.getElementById('search-content');
  setTimeout(() => input && input.focus(), 280);
  input.addEventListener('input', () => {
    content.innerHTML = searchResultsFor(input.value);
  });
}

/* ---------- Chat kurulumu ---------- */
function setupChat() {
  const ta = document.getElementById('chat-text');
  if (!ta) return;
  const autosize = () => { ta.style.height = 'auto'; ta.style.height = Math.min(ta.scrollHeight, 96) + 'px'; };
  ta.addEventListener('input', autosize);
  ta.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); chatSend(); }
  });
  setTimeout(autosize, 0);

  const scroll = document.getElementById('chat-scroll');

  // Deeplink (#assistant): tüm sohbeti animasyonsuz, anında dolu göster
  if (state.chatSeed) {
    state.chatSeed = false;
    seedChatInstant(scroll);
    return;
  }

  // "Asistanda aç": Setur konuşmasını sonucuyla anında kur
  if (state.seturSeed) {
    state.seturSeed = false;
    seedSeturChat(scroll);
    return;
  }

  // Gün ayracı + açılış mesajı + öneri çipleri (yazma efektiyle)
  const divider = document.createElement('div');
  divider.className = 'day-divider';
  divider.innerHTML = '<span>Bugün</span>';
  scroll.appendChild(divider);
  const gen = startGen();
  setStatus('typing');
  const typing = addTyping(scroll);
  gen.cleanup.push(() => typing.remove());
  setTimeout(() => {
    if (gen.aborted) return;
    typing.remove();
    const bubble = addBotBubble(scroll);
    typeText(bubble, GREET, 14, () => {
      addChips(scroll);
      endGen(gen);
    }, gen);
  }, 650);
}

/* Asistan sohbetini anında dolu kurar (deeplink ile bölüm görüntüleme) */
function seedChatInstant(scroll) {
  const divider = document.createElement('div');
  divider.className = 'day-divider';
  divider.innerHTML = '<span>Bugün</span>';
  scroll.appendChild(divider);
  const setMsg = (txt) => { const b = addBotBubble(scroll); b.classList.remove('typing-caret'); b.textContent = txt; return b; };
  setMsg(GREET);
  addUserMessage(scroll, ASSISTANT_PROMPT);
  setMsg(CHAT_REPLY);
  const wrap = document.createElement('div');
  wrap.className = 'products';
  PRODUCTS.forEach(p => { const h = document.createElement('div'); h.innerHTML = ProductCardHTML(p); wrap.appendChild(h.firstElementChild); });
  scroll.appendChild(wrap);
  const b2 = setMsg(recFollowup());
  addMsgActions(b2);
  scrollChatBottom();
}

/* Öneri çiplerini ekle (yatay kaydırılabilir) */
function addChips(scroll) {
  const chips = document.createElement('div');
  chips.className = 'chip-row anim-in';
  chips.innerHTML = CHIPS.map(c => {
    if (c.key === 'robot') return `<div class="chip" data-action="use-prompt">${c.label}</div>`;
    if (c.key === 'setur') return `<div class="chip" data-action="setur-start">${c.label}</div>`;
    return `<div class="chip" data-action="chip-other" data-key="${c.key}">${c.label}</div>`;
  }).join('');
  scroll.appendChild(chips);
  scrollChatBottom();
}

function scrollChatBottom() {
  const s = document.getElementById('chat-scroll');
  if (s) s.scrollTop = s.scrollHeight;
}

/* ---------- Üretim (generation) yaşam döngüsü ----------
   Gerçek LLM arayüzleri gibi: üretim sürerken gönder butonu
   "durdur"a dönüşür; durdurunca yazılan kısım yarım kalır. */
let activeGen = null;

function setSendMode(mode) {
  const btn = document.getElementById('send-btn');
  if (!btn) return;
  if (mode === 'stop') {
    btn.dataset.action = 'chat-stop';
    btn.classList.add('stop');
    btn.innerHTML = I.stop;
    btn.disabled = false;
  } else {
    btn.dataset.action = 'chat-send';
    btn.classList.remove('stop');
    btn.innerHTML = I.send;
    btn.disabled = false;
  }
}

function startGen() {
  const gen = { aborted: false, cleanup: [] };
  activeGen = gen;
  const ta = document.getElementById('chat-text');
  if (ta) ta.disabled = true;
  setSendMode('stop');
  return gen;
}

function endGen(gen) {
  if (activeGen === gen) activeGen = null;
  const ta = document.getElementById('chat-text');
  if (ta) ta.disabled = false;
  setSendMode('send');
  setStatus('idle');
}

function abortGen() {
  const gen = activeGen;
  if (!gen) return;
  gen.aborted = true;
  gen.cleanup.forEach(fn => { try { fn(); } catch (e) { /* yoksay */ } });
  endGen(gen);
  scrollChatBottom();
}

function nowTime() {
  const d = new Date();
  return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
}

/* Başlık durumu: gerçek LLM arayüzleri gibi — "çevrimiçi" yok,
   boştayken nötr açıklama, çalışırken "düşünüyor / yanıt yazıyor" */
function setStatus(mode) {
  const el = document.getElementById('chat-status');
  if (!el) return;
  if (mode === 'typing') {
    el.innerHTML = `<span class="typing-mini"><i></i><i></i><i></i></span> yanıt yazıyor…`;
  } else if (mode === 'thinking') {
    el.innerHTML = `<span class="typing-mini"><i></i><i></i><i></i></span> düşünüyor…`;
  } else {
    el.innerHTML = `Yapay zeka destekli`;
  }
}

/* Kullanıcı mesaj satırı */
function addUserMessage(scroll, text) {
  const row = document.createElement('div');
  row.className = 'msg-row user anim-in';
  row.innerHTML = `<div class="msg-col"><div class="msg user"></div><div class="msg-time">${nowTime()}</div></div>`;
  row.querySelector('.msg.user').textContent = text;
  scroll.appendChild(row);
  scrollChatBottom();
}

/* Bot mesaj balonu (boş) döndürür; içine typeText ile yazılır */
function addBotBubble(scroll) {
  const row = document.createElement('div');
  row.className = 'msg-row bot anim-in';
  row.innerHTML = `<div class="bot-avatar">${I.spark}</div><div class="msg-col"><div class="msg bot typing-caret"></div><div class="msg-time">${nowTime()}</div></div>`;
  scroll.appendChild(row);
  scrollChatBottom();
  return row.querySelector('.msg.bot');
}

/* Yazıyor göstergesi (üç nokta balonu) */
function addTyping(scroll) {
  const row = document.createElement('div');
  row.className = 'msg-row bot anim-in';
  row.innerHTML = `<div class="bot-avatar">${I.spark}</div><div class="msg bot typing-bubble"><i></i><i></i><i></i></div>`;
  scroll.appendChild(row);
  scrollChatBottom();
  return row;
}

/* Düşünme göstergesi — ChatGPT/Claude tarzı: tek satır shimmer metin,
   adımlar arasında yumuşak geçiş yapar, cevap gelince sohbetten kaybolur.
   Süreler kasıtlı olarak eşit değil: analiz ve katalog taraması daha uzun. */
const THINK_STEPS = [
  { t: 'Düşünüyor…', d: 450 },
  { t: 'İhtiyacın analiz ediliyor…', d: 1050 },
  { t: 'Koçtaş kataloğu taranıyor…', d: 1250 },
  { t: 'World kampanyaları kontrol ediliyor…', d: 650 },
];
function addThinking(scroll) {
  const row = document.createElement('div');
  row.className = 'msg-row bot anim-in';
  row.innerHTML = `<div class="bot-avatar">${I.spark}</div><div class="think-line"><span class="shimmer"></span></div>`;
  scroll.appendChild(row);
  scrollChatBottom();
  return row;
}
function runThinking(row, done, gen, steps) {
  const S = steps || THINK_STEPS;
  const el = row.querySelector('.shimmer');
  let i = 0;
  const next = () => {
    if (gen && gen.aborted) return;
    if (i >= S.length) {
      // iz bırakmadan kaybol
      row.classList.add('fade-out');
      setTimeout(() => { row.remove(); if (done) done(); }, 240);
      return;
    }
    el.classList.remove('step-in');
    void el.offsetWidth; // animasyonu yeniden tetikle
    el.textContent = S[i].t;
    el.classList.add('step-in');
    scrollChatBottom();
    const wait = S[i].d + Math.random() * 200;
    i++;
    setTimeout(next, wait);
  };
  next();
}

/* AI metin akışı — gerçek LLM gibi KELİME KELİME stream eder (tek tek harf değil).
   gen verilirse durdurulunca yarım bırakır. */
function typeText(el, text, speed, done, gen) {
  el.classList.add('typing-caret');
  const tokens = text.match(/\S+\s*/g) || [text];
  let i = 0;
  const tick = () => {
    if (gen && gen.aborted) { el.classList.remove('typing-caret'); return; }
    el.textContent = tokens.slice(0, i).join('');
    scrollChatBottom();
    if (i++ < tokens.length) {
      // kelime başına ~34–82ms; arada çift kelimelik küçük sıçramalar (token hissi)
      setTimeout(tick, 34 + Math.random() * 48);
    } else {
      el.classList.remove('typing-caret');
      if (done) done();
    }
  };
  tick();
}

/* Bot mesajı altına aksiyon ikonları: kopyala + 👍/👎 (gerçek LLM arayüzleri gibi) */
function addMsgActions(bubble) {
  const col = bubble.closest('.msg-col');
  if (!col) return;
  const div = document.createElement('div');
  div.className = 'msg-actions anim-in';
  div.innerHTML = `
    <button class="ma-btn" data-action="msg-copy" aria-label="Kopyala">${I.copy}</button>
    <button class="ma-btn" data-action="msg-like" aria-label="Beğen">${I.thumbUp}</button>
    <button class="ma-btn" data-action="msg-dislike" aria-label="Beğenme">${I.thumbDown}</button>`;
  col.appendChild(div);
  scrollChatBottom();
}

/* Kullanıcı mesajını giriş kutusuna sanki elle yazıyormuş gibi harf harf yazar,
   sonra verilen gönderme fonksiyonunu çağırır (insan yazışı hissi). */
function typeInInput(text, onSend) {
  const ta = document.getElementById('chat-text');
  if (!ta) return;
  document.querySelectorAll('.chip-row').forEach(c => c.remove());
  ta.disabled = false;
  let i = 0;
  const type = () => {
    ta.value = text.slice(0, i);
    ta.style.height = 'auto';
    ta.style.height = Math.min(ta.scrollHeight, 96) + 'px';
    scrollChatBottom();
    if (i++ < text.length) {
      setTimeout(type, 24 + Math.random() * 22);
    } else {
      setTimeout(onSend, 430);
    }
  };
  type();
}

/* ---------- Chat akışı ---------- */
function chatSend() {
  const ta = document.getElementById('chat-text');
  const scroll = document.getElementById('chat-scroll');
  const text = (ta.value || '').trim();
  if (!text || ta.disabled) return;

  addUserMessage(scroll, text);
  ta.value = '';
  ta.style.height = 'auto';
  scroll.querySelectorAll('.chip-row').forEach(c => c.remove());

  const gen = startGen();

  // 1) shimmer'lı düşünme satırı (adım adım metin değiştirir, sonra kaybolur)
  setStatus('thinking');
  const think = addThinking(scroll);
  gen.cleanup.push(() => { if (think.isConnected) think.remove(); });

  // 2) düşünme bitince cevap (daktilo) + ürün kartları + takip mesajı
  runThinking(think, () => {
    if (gen.aborted) return;
    setStatus('typing');
    const bubble = addBotBubble(scroll);
    const reply = CHAT_REPLY;
    typeText(bubble, reply, 14, () => {
      if (gen.aborted) return;
      showProductCards(scroll, () => {
        if (gen.aborted) return;
        // 3) kısa gerekçeli takip mesajı — neden önerdi + fiyat + Worldpuan hediyesi
        setTimeout(() => {
          if (gen.aborted) return;
          const b2 = addBotBubble(scroll);
          const followup = recFollowup();
          typeText(b2, followup, 14, () => {
            addMsgActions(b2);
            endGen(gen);
          }, gen);
        }, 700);
      }, gen);
    }, gen);
  }, gen);
}

/* Henüz hazır olmayan akışlar için çip cevabı (Setur, Boyner, Opet) */
function chipOtherFlow(key) {
  const flow = CHIP_FLOWS[key];
  if (!flow) return;
  const scroll = document.getElementById('chat-scroll');
  scroll.querySelectorAll('.chip-row').forEach(c => c.remove());
  addUserMessage(scroll, flow.user);

  const gen = startGen();
  setStatus('typing');
  const typing = addTyping(scroll);
  gen.cleanup.push(() => typing.remove());
  setTimeout(() => {
    if (gen.aborted) return;
    typing.remove();
    const bubble = addBotBubble(scroll);
    typeText(bubble, flow.reply, 14, () => {
      addMsgActions(bubble);
      addChips(scroll);
      endGen(gen);
    }, gen);
  }, 900);
}

/* ===================================================================
   OTONOM SETUR AKIŞI — yetki ver → arka planda ara → bildirim → son onay
   =================================================================== */

/* Yetki çerçevesi kartı (chat içinde) — agent neyi, hangi sınırlarla yapacak */
function SeturAuthCardHTML() {
  const a = SETUR_AUTH;
  return `
  <div class="auth-card anim-in" id="setur-auth">
    <div class="auth-head">
      <span class="auth-ico"><img src="assets/mandate.png" alt=""></span>
      <div>
        <div class="auth-title">Agent'a yetki ver</div>
        <div class="auth-sub">Setur · senin adına otonom arama</div>
      </div>
    </div>
    <div class="auth-grid">
      <div class="auth-row"><span>Tarih</span><b>${a.dates} · ${a.nights} gece</b></div>
      <div class="auth-row"><span>Kişi</span><b>${a.guests}</b></div>
      <div class="auth-row"><span>Bölge</span><b>${a.region}</b></div>
      <div class="auth-row"><span>Bütçe</span><b>En çok ${fmtTL(a.budget)}</b></div>
      <div class="auth-row"><span>Kriter</span><b>${a.criteria.join(' · ')}</b></div>
      <div class="auth-row"><span>Ödeme</span><b class="auth-pay">${I.spark} En avantajlısını agent seçer</b></div>
      <div class="auth-row"><span>Kart havuzu</span><b>${a.cardPool} · en çok ${a.maxInst} taksit</b></div>
    </div>
    <div class="auth-rule">${I.lock} ${a.rule}</div>
    <button class="auth-btn" data-action="setur-grant">${I.shield} Yetki ver ve aramaya başla</button>
    <button class="auth-edit" data-action="toast" data-msg="Bu prototipte kriterler sabittir">Kriterleri düzenle</button>
  </div>`;
}

/* Tatil seçeneği kartı (chat içinde) — son onay butonlarıyla */
function SeturHotelCardHTML() {
  const h = seturHotel();
  return `
  <div class="hotel-card anim-in" id="setur-hotel">
    <div class="hotel-img">
      ${h.img ? imgOrFallback(h.img, h.emoji, 'hotel-photo') : `<span class="img-fallback" style="display:grid">${h.emoji}</span>`}
      <span class="tag world">Setur · World'e Özel</span>
      <span class="tag stock ok">${I.check} Uygun</span>
    </div>
    <div class="hotel-body">
      <div class="hotel-name">${h.name}</div>
      <div class="hotel-loc">${I.pin} ${h.loc}</div>
      <div class="hotel-rating">★ ${h.rating} <span>(${h.reviews} değerlendirme)</span></div>
      <div class="hotel-tags">
        <span class="htag">${SETUR_AUTH.dates}</span>
        <span class="htag">${h.nights} gece</span>
        <span class="htag">Havuz</span>
        <span class="htag">${h.view}</span>
        <span class="htag">${h.board}</span>
      </div>
      <div class="hotel-old">${h.old} TL</div>
      <div class="hotel-price">${fmtTL(h.priceNum)} <span>/ ${h.nights} gece, 2 kişi</span></div>
      <div class="hotel-meta">
        <span class="mtag inst">${I.card} ${h.inst}</span>
        <span class="mtag puan"><img src="assets/world.webp" class="puan-logo" alt="World"> ${h.puan}</span>
      </div>
      <div class="hotel-cancel">${I.check} ${h.cancel}</div>
      <button class="hotel-buy" data-action="setur-approve">${I.shield} Onayla ve rezerve et</button>
      <button class="hotel-alt" data-action="setur-swap">Başka seçenek göster</button>
    </div>
  </div>`;
}

/* 1) Setur çipi → talebi kullanıcı yazıyormuş gibi giriş kutusuna yaz, sonra gönder */
function seturStart() {
  state.seturAuthorized = false;
  state.seturOptionIdx = 0;
  typeInInput(SETUR_REQUEST, seturSend);
}
function seturSend() {
  const ta = document.getElementById('chat-text');
  const scroll = document.getElementById('chat-scroll');
  if (ta) { ta.value = ''; ta.style.height = 'auto'; }
  addUserMessage(scroll, SETUR_REQUEST);

  const gen = startGen();
  setStatus('thinking');
  const think = addThinking(scroll);
  gen.cleanup.push(() => { if (think.isConnected) think.remove(); });
  runThinking(think, () => {
    if (gen.aborted) return;
    setStatus('typing');
    const bubble = addBotBubble(scroll);
    const reply = 'Tabii, bunu senin için ben halledebilirim. 🏖️ Setur üzerinden, tarif ettiğin kriterlere uyan otelleri tarayıp en uygun fiyatı yakalayabilirim. Önce bana bu işi şu sınırlarla devretmeni rica edeyim — onaylarsan arka planda aramaya başlarım:';
    typeText(bubble, reply, 14, () => {
      if (gen.aborted) return;
      const holder = document.createElement('div');
      holder.innerHTML = SeturAuthCardHTML();
      scroll.appendChild(holder.firstElementChild);
      scrollChatBottom();
      endGen(gen);
    }, gen);
  }, gen, SETUR_THINK);
}

/* 2) Yetki verildi → agent arka planda aramaya başlar, sonra bildirim düşer */
function seturGrant() {
  if (state.seturAuthorized) return;
  state.seturAuthorized = true;
  const scroll = document.getElementById('chat-scroll');

  // Yetki kartını "verildi" durumuna kilitle
  const card = document.getElementById('setur-auth');
  if (card) {
    const btn = card.querySelector('.auth-btn');
    if (btn) { btn.innerHTML = `${I.check} Yetki verildi`; btn.classList.add('done'); btn.removeAttribute('data-action'); }
    const edit = card.querySelector('.auth-edit');
    if (edit) edit.remove();
    card.classList.add('granted');
  }

  const gen = startGen();
  setStatus('typing');
  const typing = addTyping(scroll);
  gen.cleanup.push(() => typing.remove());
  setTimeout(() => {
    if (gen.aborted) return;
    typing.remove();
    const bubble = addBotBubble(scroll);
    const reply = `Teşekkürler, yetkini aldım ✅ Kriterlerini not ettim; ödemede de kartların arasından en avantajlısını (en yüksek Worldpuan + uygun taksit) senin için ben seçeceğim. Setur’da uygun otelleri tarıyorum; birkaç saat içinde en iyi fiyatı yakaladığımda bildirim göndereceğim. Uygulamayı kapatabilirsin, ben arka planda devam ederim.`;
    typeText(bubble, reply, 14, () => {
      // Arıyor durum kartı
      const s = document.createElement('div');
      s.className = 'setur-search anim-in';
      s.id = 'setur-search';
      s.innerHTML = `<span class="ss-spin"></span><div><div class="ss-t">Setur taranıyor…</div><div class="ss-d">320+ otel, 18 bölge · uygun fiyat bekleniyor</div></div>`;
      scroll.appendChild(s);
      scrollChatBottom();
      endGen(gen);

      // Kullanıcı uygulamadan çıkmış gibi: birkaç saniye sonra kilit ekranına geç
      setTimeout(goToLockScreen, 2200);
    }, gen);
  }, 900);
}

/* Kilit ekranı — "uygulamadan çıktık" hissi. Saat 2 saat ileriye akar,
   sonra push bildirimi düşer (zaman geçtiğini görsel olarak anlatır). */
function fmtClock(mins) {
  mins = ((Math.round(mins) % 1440) + 1440) % 1440;
  return String(Math.floor(mins / 60)).padStart(2, '0') + ':' + String(mins % 60).padStart(2, '0');
}
function goToLockScreen() {
  const d = new Date();
  const dateStr = d.toLocaleDateString('tr-TR', { weekday: 'long', day: 'numeric', month: 'long' });
  const startMin = d.getHours() * 60 + d.getMinutes();
  const targetMin = startMin + 120;              // 2 saat sonrası
  lockEl.innerHTML = `
    <div class="lock-top">
      <div class="lock-lockico">${I.lock}</div>
      <div class="lock-date">${dateStr.charAt(0).toUpperCase() + dateStr.slice(1)}</div>
      <div class="lock-time spinning" id="lock-time">${fmtClock(startMin)}</div>
      <div class="lock-elapsed" id="lock-elapsed"></div>
    </div>
    <div class="lock-notif-slot" id="lock-notif-slot"></div>
    <div class="lock-bottom"><div class="lock-bar"></div></div>`;
  lockEl.classList.add('show');
  // Saat akışı: 1 sn dur, sonra ~3.4 sn boyunca 2 saat ileri sar
  setTimeout(() => animateClock(startMin, targetMin, 3400, () => {
    const el = document.getElementById('lock-elapsed');
    if (el) { el.textContent = '⏳ 2 saat sonra'; el.classList.add('show'); }
    setTimeout(fireSeturNotification, 750);
  }), 1000);
}
function animateClock(from, to, dur, done) {
  const start = performance.now();
  const step = (t) => {
    if (!lockEl.classList.contains('show')) return;   // kilit kapandıysa dur
    const p = Math.min((t - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);             // ease-out (hızlı başlar, yavaşlar)
    const el = document.getElementById('lock-time');
    if (el) el.textContent = fmtClock(from + (to - from) * eased);
    if (p < 1) { requestAnimationFrame(step); }
    else {
      const e = document.getElementById('lock-time');
      if (e) { e.textContent = fmtClock(to); e.classList.remove('spinning'); e.classList.add('settle'); }
      if (done) done();
    }
  };
  requestAnimationFrame(step);
}
function dismissLockScreen() { lockEl.classList.remove('show'); }

/* 3) Push bildirimi — kilit ekranına düşer (kullanıcı uygulamada değilken) */
function fireSeturNotification() {
  const h = seturHotel();
  const slot = document.getElementById('lock-notif-slot');
  if (!slot) return;
  slot.innerHTML = `
    <div class="notif-card pop-in" data-action="notif-open">
      <div class="notif-app"><img src="assets/yk-app-icon.jpg" class="notif-appicon" alt=""><span>Yapı Kredi Asistanı</span><span class="notif-time">şimdi</span></div>
      <div class="notif-title">Sana uygun bir tatil buldum 🏖️</div>
      <div class="notif-body">${h.loc.split('·')[0].trim()} · ${h.nights} gece — ${fmtTL(h.priceNum)}. Aç ve onayla, rezerve edeyim.</div>
      <div class="notif-hint">Detay ve onay için dokun ›</div>
    </div>`;
}

/* 4) Bildirime dokunuldu → uygulama ANA SAYFASINA dön ve ödeme onay popup'ını çıkar.
   Kullanıcı buradan direkt rezerve edebilir ya da "Asistanda aç" ile sohbete geçebilir. */
function seturOpenResult() {
  dismissLockScreen();
  const search = document.getElementById('setur-search');
  if (search) search.remove();
  state.nav = [];                       // temiz dön: ana sayfadayız
  state.screen = 'home';
  render();
  setTimeout(openSeturOfferPopup, 460); // ana sayfa görünür, sonra popup
}

/* Ana sayfada / sohbette açılan teklif + ödeme onay popup'ı */
function openSeturOfferPopup() {
  const h = seturHotel();
  sheetEl.innerHTML = `
    <div class="sheet-handle"></div>
    <div class="offer-head">
      <span class="offer-ai">${I.spark}</span>
      <div><div class="offer-t">Yapı Kredi Asistanı</div><div class="offer-s">Senin için bir tatil buldu 🏖️</div></div>
    </div>
    <div class="offer-match">${I.spark} Kriterlerinle <b>%${SETUR_AUTH.match} uyumlu</b> · 320 otel içindeki en iyi eşleşme</div>
    <div class="offer-hotel">
      <div class="offer-thumb">${h.img ? `<img src="${h.img}" class="offer-thumb-img" alt="">` : h.emoji}</div>
      <div class="offer-hinfo">
        <div class="offer-name">${h.name}</div>
        <div class="offer-loc">${I.pin} ${h.loc}</div>
        <div class="offer-feat">${SETUR_AUTH.dates} · ${h.nights} gece · ${SETUR_AUTH.guests}</div>
        <div class="offer-feat sub">Havuz · ${h.view} · ${h.board}</div>
      </div>
    </div>
    <div class="sheet-amount-label">Rezervasyon tutarı</div>
    <div class="sheet-amount">${fmtTL(h.priceNum)}</div>
    <div class="sheet-disc">${I.check} ${h.cancel}</div>
    <div class="offer-paynote"><img src="assets/mandate.png" class="paynote-ico" alt=""> Agent'ın senin yetkinle seçtiği ödeme</div>
    <div class="sheet-pay-row"><span>${I.card} ${SETUR_AUTH.card}</span><span class="spr-r">${SETUR_AUTH.inst}</span></div>
    <div class="offer-paywhy">${SETUR_AUTH.cardWhy}</div>
    <button class="sheet-btn" id="setur-confirm-btn" data-action="setur-book">${I.shield} Onayla ve rezerve et</button>
    <button class="sheet-btn ghost" data-action="setur-open-chat">Asistanda aç</button>`;
  sheetEl.classList.add('open');
  sheetScrimEl.classList.add('open');
}

/* "Asistanda aç" → sohbete geç, Setur konuşmasını sonucuyla hazır göster */
function seturOpenChat() {
  closeSheet();
  state.seturSeed = true;
  go('chat');   // mevcut ekran (ana sayfa) geri yığınına eklenir
}

/* Sohbet kartındaki "Onayla ve rezerve et" → aynı onay popup'ını aç */
function openSeturConfirm() { openSeturOfferPopup(); }

function renderSeturHotel(scroll) {
  const old = document.getElementById('setur-hotel');
  const holder = document.createElement('div');
  holder.innerHTML = SeturHotelCardHTML();
  const card = holder.firstElementChild;
  if (old) { old.replaceWith(card); } else { scroll.appendChild(card); }
  scrollChatBottom();
}

/* "Başka seçenek göster" → alternatif oteli yerinde göster (sohbette) */
function seturSwap() {
  state.seturOptionIdx = (state.seturOptionIdx + 1) % SETUR_HOTELS.length;
  const scroll = document.getElementById('chat-scroll');
  if (scroll) renderSeturHotel(scroll);
  toast('Alternatif seçenek getirildi');
}

/* Onayla → rezervasyonu yap, popup'ı başarı durumuna çevir (her ekranda çalışır) */
function seturBook() {
  const btn = document.getElementById('setur-confirm-btn');
  if (btn) { btn.innerHTML = `<span class="spinner"></span> Rezervasyon yapılıyor…`; btn.style.pointerEvents = 'none'; }
  const h = seturHotel();
  // Sohbetteki otonom kart varsa pasifleştir
  const card = document.getElementById('setur-hotel');
  if (card) card.classList.add('booked');
  setTimeout(() => {
    sheetEl.innerHTML = `
      <div class="sheet-handle"></div>
      <div class="bd-check">${I.checkBig}</div>
      <div class="bd-title" style="text-align:center">Rezervasyonun tamam!</div>
      <div class="bd-sub" style="text-align:center">${h.name}</div>
      <div class="bd-rows">
        <div><span>Tarih</span><b>${SETUR_AUTH.dates} · ${h.nights} gece</b></div>
        <div><span>Tutar</span><b>${fmtTL(h.priceNum)} · ${SETUR_AUTH.inst}</b></div>
        <div><span>Ödeme</span><b>${SETUR_AUTH.card}</b></div>
        <div><span>İptal</span><b>${h.cancel}</b></div>
        <div><span>Onay No</span><b>STR${String(Math.floor(100000 + Math.random() * 899999))}</b></div>
      </div>
      <div class="bd-note" style="text-align:center">Rezervasyon belgen e-posta ve uygulama bildirimlerine gönderildi.</div>
      <button class="sheet-btn" data-action="close-sheet">Tamam</button>`;
    toast('Setur rezervasyonu onaylandı 🏖️');
  }, 1500);
}

/* "Asistanda aç" yolundan gelindiğinde sohbeti sonucuyla anında kurar */
function seedSeturChat(scroll) {
  const divider = document.createElement('div');
  divider.className = 'day-divider';
  divider.innerHTML = '<span>Bugün</span>';
  scroll.appendChild(divider);
  const setMsg = (txt) => { const b = addBotBubble(scroll); b.classList.remove('typing-caret'); b.textContent = txt; return b; };

  addUserMessage(scroll, SETUR_REQUEST);
  setMsg('Tabii, bunu senin için ben halledebilirim. 🏖️ Setur üzerinden kriterlerine uyan otelleri tarayıp en uygun fiyatı yakaladım. İşte sana uygun seçenek 👇 Onaylarsan rezerve ediyorum.');
  renderSeturHotel(scroll);
  scrollChatBottom();
}

/* Asistanın önerdiği ürün */
const REC_ID = 'p1'; // Fakir Robert RS 700

/* Ürün kartlarını sırayla göster */
function showProductCards(scroll, done, gen) {
  const wrap = document.createElement('div');
  wrap.className = 'products';
  scroll.appendChild(wrap);
  const items = PRODUCTS.map(p => ProductCardHTML(p));
  let idx = 0;
  const addOne = () => {
    if (gen && gen.aborted) return;
    if (idx >= items.length) { if (done) done(); return; }
    const holder = document.createElement('div');
    holder.innerHTML = items[idx];
    const card = holder.firstElementChild;
    card.classList.add('anim-in');
    wrap.appendChild(card);
    scrollChatBottom();
    idx++;
    setTimeout(addOne, 280);
  };
  addOne();
}

/* ---------- Ödeme akışı ---------- */
function selectMethod(method, el) {
  state.payMethod = method;
  document.querySelectorAll('.method').forEach(m => m.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('inst-box').classList.toggle('show', method === 'worldcard');
  document.getElementById('bank-box').classList.toggle('show', method === 'bank');
  updatePayState();
}

function selectInst(id, el) {
  state.installment = id;
  document.querySelectorAll('.inst-opt').forEach(o => o.classList.remove('active'));
  el.classList.add('active');
}

/* Öde butonu: yöntem seçili VE her iki yasal onay verilmişse aktif olur */
function updatePayState() {
  const btn = document.getElementById('pay-btn');
  if (!btn) return;
  btn.disabled = !(state.payMethod && state.preInfoOk && state.contractOk);
}

/* Sözleşme/ön bilgilendirme onay kutucukları */
function toggleContract(key, el) {
  state[key] = !state[key];
  el.classList.toggle('on', state[key]);
  updatePayState();
}
function toggleBilling(el) {
  state.billingSame = !state.billingSame;
  el.classList.toggle('on', state.billingSame);
}

/* Worldpuan ile öde — tutarı ve finansal özeti günceller */
function togglePuan() {
  state.usePuan = !state.usePuan;
  replaceById('fin-box', FinanceBoxHTML());
  // Banka kutusunu da tazele ama açık/kapalı (show) durumunu koru
  const bb = document.getElementById('bank-box');
  if (bb) {
    const shown = bb.classList.contains('show');
    replaceById('bank-box', BankBoxHTML());
    if (shown) document.getElementById('bank-box').classList.add('show');
  }
  const amt = document.getElementById('pay-amt');
  if (amt) amt.textContent = payableStr();
}
/* Bir elemanı id'siyle, verilen HTML'in ilk elemanıyla değiştirir */
function replaceById(id, html) {
  const old = document.getElementById(id);
  if (!old) return;
  const tmp = document.createElement('div');
  tmp.innerHTML = html.trim();
  old.replaceWith(tmp.firstElementChild);
}

/* Adres kartını yerinde tazele (tüm ekranı render etmeden — yöntem seçimi korunur) */
function refreshAddressCard() {
  const old = document.getElementById('addr-card');
  if (!old) return;
  const tmp = document.createElement('div');
  tmp.innerHTML = AddressCardHTML().trim();
  old.replaceWith(tmp.firstElementChild);
}

/* "Adres Seçiniz" sheet'i — radio'lu adres kartları + yeni adres ekle */
let tmpAddressId = null;
function openAddressSheet() {
  tmpAddressId = state.addressId;
  const cards = ADDRESSES.map(a => `
    <div class="addr-pick ${a.id === tmpAddressId ? 'sel' : ''}" data-action="pick-address" data-id="${a.id}">
      <span class="ap-radio"></span>
      <div class="ap-info">
        <div class="ap-title">${a.title}</div>
        <div class="ap-line">${a.name} · ${a.line}</div>
        <div class="ap-city">${a.city}</div>
      </div>
    </div>`).join('');
  sheetEl.innerHTML = `
    <div class="sheet-handle"></div>
    <div class="sheet-bar"><h3>Adres Seçiniz</h3><button class="sheet-x" data-action="close-sheet">${I.close}</button></div>
    <div class="addr-list">
      ${cards}
      <div class="addr-add" data-action="toast" data-msg="Yeni adres ekleme prototipte aktif değil">
        <span class="aa-plus">${I.plus}</span><span>Yeni Adres Ekle</span>
      </div>
    </div>
    <button class="sheet-btn" data-action="confirm-address">Adresi Seç</button>`;
  sheetEl.classList.add('open');
  sheetScrimEl.classList.add('open');
}
function pickAddress(id) {
  tmpAddressId = id;
  document.querySelectorAll('.addr-pick').forEach(c => c.classList.toggle('sel', c.dataset.id === id));
}
function confirmAddress() {
  state.addressId = tmpAddressId || state.addressId;
  refreshAddressCard();
  closeSheet();
}

/* Yasal metin sheet'i — ön bilgilendirme formu / mesafeli satış sözleşmesi */
function openLegalSheet(kind) {
  const a = getAddress();
  const p = state.selectedProduct;
  const title = kind === 'preinfo' ? 'Ön Bilgilendirme Formu' : 'Mesafeli Satış Sözleşmesi';
  const intro = kind === 'preinfo'
    ? 'İşbu form, 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği uyarınca, siparişinizi onaylamadan önce sizi bilgilendirmek amacıyla hazırlanmıştır.'
    : 'İşbu sözleşme, aşağıda bilgileri yer alan ALICI ile SATICI arasında, ALICI tarafından elektronik ortamda verilen siparişe ilişkin olarak kurulmuştur.';
  sheetEl.innerHTML = `
    <div class="sheet-handle"></div>
    <div class="sheet-bar"><h3>${title}</h3><button class="sheet-x" data-action="close-sheet">${I.close}</button></div>
    <div class="legal-scroll">
      <p>${intro}</p>
      <h4>1. Taraflar</h4>
      <p><b>SATICI:</b> World Pay üye iş yeri — ${p.store}<br><b>ALICI:</b> ${a.name}<br>${a.line}, ${a.city}<br>${a.phone}</p>
      <h4>2. Sözleşme Konusu Ürün</h4>
      <p>${p.name}<br>Satış bedeli (KDV dahil): <b>${p.price}</b><br>Ödeme şekli: ${state.payMethod === 'bank' ? 'Vadesiz TL Hesabı · Tek Çekim' : 'Worldcard · ' + instLabel()}<br>Teslimat: Adresinize kargo ile, ortalama 2-4 iş günü.</p>
      <h4>3. Cayma Hakkı</h4>
      <p>ALICI, malın teslim tarihinden itibaren 14 (on dört) gün içinde herhangi bir gerekçe göstermeksizin ve cezai şart ödemeksizin sözleşmeden cayma hakkına sahiptir. Cayma hakkının kullanıldığına dair bildirimin bu süre içinde SATICI'ya yöneltilmesi yeterlidir.</p>
      <h4>4. Genel Hükümler</h4>
      <p>ALICI, sözleşme konusu ürünün temel nitelikleri, satış fiyatı ve ödeme şekli ile teslimata ilişkin tüm ön bilgileri okuyup bilgi sahibi olduğunu ve elektronik ortamda gerekli teyidi verdiğini kabul, beyan ve taahhüt eder. Bu belge prototip amaçlı örnek bir metindir.</p>
    </div>
    <button class="sheet-btn ghost" data-action="close-sheet">Kapat</button>`;
  sheetEl.classList.add('open');
  sheetScrimEl.classList.add('open');
}

/* Onay sheet'i: güvenli alandayız, Face ID yok — bu ikinci dokunuş
   müşterinin ödemeyi bilinçli onayladığını netleştiren son adım. */
function openConfirmSheet() {
  const p = state.selectedProduct;
  const methodLbl = state.payMethod === 'bank'
    ? `Vadesiz TL Hesabım · Tek Çekim`
    : `Worldcard **** 3333 · ${instLabel()}`;
  sheetEl.innerHTML = `
    <div class="sheet-handle"></div>
    <div class="sheet-amount-label">Ödenecek tutar</div>
    <div class="sheet-amount">${payableStr()}</div>
    ${state.usePuan ? `<div class="sheet-disc">${fmtTL(puanDiscount())} Worldpuan indirimi uygulandı</div>` : ''}
    <div class="sheet-pay-row"><span>${p.store} · World Pay</span><span class="spr-r">${methodLbl}</span></div>
    <button class="sheet-btn" id="approve-btn" data-action="approve">${I.shield} Ödemeyi Onaylıyorum</button>
    <button class="sheet-btn ghost" data-action="close-sheet">Vazgeç</button>`;
  sheetEl.classList.add('open');
  sheetScrimEl.classList.add('open');
}
function closeSheet() {
  sheetEl.classList.remove('open');
  sheetScrimEl.classList.remove('open');
}
function approvePayment() {
  const btn = document.getElementById('approve-btn');
  btn.innerHTML = `<span class="spinner"></span> Ödeme Onaylanıyor…`;
  btn.style.pointerEvents = 'none';
  // Sipariş kaydı oluştur — başarı ve takip ekranları aynı numarayı paylaşır
  state.lastOrder = {
    no: 'YKM' + String(Math.floor(100000000 + Math.random() * 900000000)),
    date: new Date(),
    productId: state.selectedProduct.id,
    addressId: state.addressId,
    payable: payableStr(),
    bank: state.payMethod === 'bank',
    inst: instLabel(),
    cargo: 'YK Kargo',
    track: 'YK' + String(Math.floor(100000000000 + Math.random() * 899999999999)),
  };
  // Yuvarla Biriktir aktifse (ve duraklatılmadıysa) kartla ödemede farkı kumbaraya at
  const r = state.roundup;
  if (r.active && state.payMethod !== 'bank') {
    const add = ruNextUnit(payableNum(), RU_UNIT) - payableNum();
    if (add > 0) {
      const now = new Date();
      const hhmm = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
      r.txns.unshift({
        merchant: `${state.selectedProduct.store} · World Pay`, emoji: '🛍️',
        spent: payableNum(), add, date: `25 Mayıs ${hhmm}`, month: RU_CUR_MONTH,
      });
      r.jar = Math.round((r.jar + add) * 100) / 100;
      state.lastOrder.ruAdd = add;
    }
  }
  setTimeout(() => {
    closeSheet();
    setTimeout(() => go('success'), 250);
  }, 1500);
}

/* ---------- Toast ---------- */
let toastTimer;
function toast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2200);
}

/* ---------- Tema ---------- */
function setTheme(theme) {
  state.theme = theme;
  document.body.setAttribute('data-theme', theme);
  localStorage.setItem('ykm-theme', theme);
  document.querySelector('meta[name="theme-color"]').setAttribute('content', theme === 'dark' ? '#000000' : '#ffffff');
  if (state.screen === 'settings') render();
}

/* ===================================================================
   OLAY YÖNETİMİ (event delegation)
   =================================================================== */
document.addEventListener('click', (e) => {
  const t = e.target.closest('[data-action]');

  // Scrim'lere tıklanınca kapat
  if (e.target === scrimEl) return closeDrawer();
  if (e.target === sheetScrimEl) return closeSheet();
  if (!t) return;

  const a = t.dataset.action;
  switch (a) {
    case 'open-drawer': return openDrawer();
    case 'close-drawer': return closeDrawer();
    case 'open-search': return go('search');
    case 'close-search': return navBack();
    case 'open-assistant':
      state.chatStarted = true;
      return go('chat');
    case 'nav-back': return navBack();
    case 'go-home': return goHome();
    case 'go-chat': return go('chat');
    case 'go-settings': return go('settings');
    case 'go-tracking': return go('tracking');
    case 'route': e.preventDefault(); return gotoSection(t.dataset.hash);
    case 'open-invoice': return openInvoiceSheet();
    case 'open-return': return openReturnSheet();
    case 'confirm-return': return confirmReturn();

    case 'toggle-bar': {
      const bar = t; const body = document.getElementById('bar-' + t.dataset.bar);
      bar.classList.toggle('open'); body.classList.toggle('open');
      return;
    }

    case 'use-prompt':
      // Öneri çipi: prompt'u input'a elle yazar gibi yaz, sonra otomatik gönder
      return typeInInput(ASSISTANT_PROMPT, chatSend);
    case 'chat-send': return chatSend();
    case 'chat-stop': return abortGen();

    case 'msg-copy': {
      const msg = t.closest('.msg-col')?.querySelector('.msg.bot');
      const txt = msg ? msg.textContent : '';
      if (txt && navigator.clipboard) {
        navigator.clipboard.writeText(txt).then(
          () => toast('Mesaj kopyalandı'),
          () => toast('Kopyalama desteklenmiyor')
        );
      } else toast('Mesaj kopyalandı');
      return;
    }
    case 'msg-like':
    case 'msg-dislike': {
      const wasActive = t.classList.contains('active');
      t.parentElement.querySelectorAll('[data-action="msg-like"],[data-action="msg-dislike"]')
        .forEach(b => b.classList.remove('active'));
      if (!wasActive) {
        t.classList.add('active');
        toast('Geri bildirimin için teşekkürler 💙');
      }
      return;
    }

    case 'buy': {
      state.selectedProduct = PRODUCTS.find(p => p.id === t.dataset.id);
      state.payMethod = null;
      state.installment = 'single';
      state.preInfoOk = false;
      state.contractOk = false;
      state.usePuan = false;
      return go('payment');
    }
    case 'select-method': return selectMethod(t.dataset.method, t);
    case 'select-inst': return selectInst(t.dataset.inst, t);

    case 'open-address': return openAddressSheet();
    case 'pick-address': return pickAddress(t.dataset.id);
    case 'confirm-address': return confirmAddress();
    case 'toggle-billing': return toggleBilling(t);
    case 'toggle-puan': return togglePuan();
    case 'toggle-contract': return toggleContract(t.dataset.key, t);
    case 'open-preinfo': return openLegalSheet('preinfo');
    case 'open-contract': return openLegalSheet('contract');
    case 'chip-other': return chipOtherFlow(t.dataset.key);

    // Otonom Setur akışı
    case 'setur-start': return seturStart();
    case 'setur-grant': return seturGrant();
    case 'notif-open': return seturOpenResult();
    case 'setur-open-chat': return seturOpenChat();
    case 'setur-swap': return seturSwap();
    case 'setur-approve': return openSeturConfirm();
    case 'setur-book': return seturBook();
    case 'step-close': {
      const card = t.closest('.step-card');
      if (card) card.remove();
      return;
    }
    case 'pay': return openConfirmSheet();
    case 'approve': return approvePayment();
    case 'close-sheet': return closeSheet();

    // Yuvarla Biriktir
    case 'ru-open': return go(state.roundup.active ? 'roundup-jar' : 'roundup-apply');
    case 'ru-agree': return ruToggleAgree(t);
    case 'ru-open-form': return ruOpenForm();
    case 'ru-activate': return ruActivate();
    case 'ru-confirm': return ruConfirm();
    case 'ru-open-jar': { closeSheet(); return go('roundup-jar'); }
    case 'ru-open-cardpick': return ruOpenCardPick();
    case 'ru-pick-card': return ruPickCard(t.dataset.val);
    case 'ru-open-acctpick': return ruOpenAcctPick();
    case 'ru-pick-acct': return ruPickAcct(t.dataset.val);
    case 'ru-open-goal': return ruOpenGoalPick();
    case 'ru-pick-goal': return ruPickGoal(t.dataset.val);
    case 'ru-clear-goal': return ruClearGoal();
    case 'ru-txn': return ruOpenTxn(+t.dataset.idx);
    case 'ru-history': return go('roundup-history');
    case 'ru-stop': return ruStop();
    case 'ru-stop-confirm': return ruStopConfirm();

    // Harcama analizi & limit
    case 'sp-open': return go('insights');
    case 'sp-seg': return spSeg(t.dataset.seg);
    case 'sp-cat': state.spendCat = t.dataset.id; return go('insights-category');
    case 'sp-allcats': return go('insights-cats');
    case 'sp-cardpick': return spOpenCardPick();
    case 'sp-pick-card': return spPickCard(t.dataset.val);
    case 'sp-period': return toast('Dönem seçimi prototipte aktif değil');
    case 'sp-set-limit': return openLimitSheet(t.dataset.id);
    case 'sp-limit-preset': return spLimitPreset(t.dataset.val);
    case 'sp-save-limit': return spSaveLimit(t.dataset.id);
    case 'sp-remove-limit': return spRemoveLimit(t.dataset.id);
    case 'sp-edit-total': return openTotalLimitSheet();
    case 'sp-save-total': return spSaveTotal();
    case 'sp-add-limit': return spOpenAddPick();
    case 'sp-apply-sugg': return spApplySugg(t.dataset.id, +t.dataset.val);

    case 'menu-nav': {
      const id = t.dataset.id;
      if (id === 'home') return goHome();
      // Diğer menüler placeholder
      state.placeholderTitle = t.dataset.label;
      return go('placeholder');
    }

    case 'set-theme': return setTheme(t.dataset.theme);
    case 'toggle-switch': return t.classList.toggle('on');

    case 'toast': return toast(t.dataset.msg || 'Bu işlem prototipte aktif değil');
  }
});

/* ---------- Saat ---------- */
function updateClock() {
  const el = document.getElementById('sb-time');
  if (el) {
    const d = new Date();
    el.textContent = String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
  }
}

/* ---------- Yönlendirme / derin bağlantı ----------
   Her bölümün kendi hash linki var: #home #assistant #setur #chat #payment
   #success #tracking #search #settings #sections
   Link açıldığında ekran gereken state ile hazır gelir (akışı tekrarlamadan). */
const ROUTES = ['home', 'search', 'chat', 'assistant', 'setur', 'payment', 'success', 'tracking', 'settings', 'sections', 'roundup', 'roundup-apply', 'roundup-jar', 'roundup-history', 'insights', 'insights-category', 'insights-cats', 'limits'];
function routeTo(hash) {
  const h = (hash || '').replace('#', '') || 'home';
  if (!ROUTES.includes(h)) return false;
  // Ödeme/başarı/takip: ürün seçili değilse asistanın önerdiğiyle hazırla
  if (['payment', 'success', 'tracking'].includes(h) && !state.selectedProduct) {
    state.selectedProduct = PRODUCTS.find(p => p.id === REC_ID) || PRODUCTS[0];
  }
  // Ödeme ekranını her zaman temiz (sıfır) halde aç
  if (h === 'payment') {
    state.payMethod = null; state.installment = 'single';
    state.preInfoOk = false; state.contractOk = false; state.usePuan = false;
  }
  if (h === 'assistant') {            // Koçtaş sohbetini dolu göster
    state.chatStarted = true;
    state.chatSeed = true;
    state.seturSeed = false;
    state.screen = 'chat';
    return true;
  }
  if (h === 'setur') {                // Setur otonom akışını sonucuyla dolu göster
    state.chatStarted = true;
    state.chatSeed = false;
    state.seturSeed = true;
    state.seturAuthorized = true;
    state.seturOptionIdx = 0;
    state.screen = 'chat';
    return true;
  }
  if (h === 'roundup') {              // #roundup → aktifse yönet, değilse başvuru
    state.chatSeed = false;
    state.screen = state.roundup.active ? 'roundup-jar' : 'roundup-apply';
    return true;
  }
  if (h === 'roundup-jar' || h === 'roundup-history') { // dolu kumbara/geçmiş — kural yoksa kurup göster (demo linki)
    if (!state.roundup.active) ruSeedJar();
    state.chatSeed = false;
    state.screen = h;
    return true;
  }
  state.chatSeed = false;
  state.screen = h;
  return true;
}
/* Bölüm linkine git: nereden geldiğimizi geri yığınına ekle (geri o ekrana dönsün),
   state'i kur, URL hash'ini güncelle (paylaşılabilir), çiz */
function gotoSection(hash) {
  const back = curFrame();
  if (!routeTo(hash)) return;
  state.nav.push(back);
  closeDrawer();
  history.replaceState(null, '', '#' + hash.replace('#', ''));
  render();
}
// Adres çubuğundan hash değişirse (bookmark / elle düzenleme) taze yönlen (yığın sıfır)
window.addEventListener('hashchange', () => {
  if (routeTo(location.hash)) { state.nav = []; render(); }
});

setTheme(state.theme);
updateClock();
setInterval(updateClock, 30000);
routeTo(location.hash);
render();
