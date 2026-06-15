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
  { hash: 'assistant', icon: 'spark',    t: 'Alışveriş Asistanı',  d: 'Sohbet + ürün önerileri (dolu görünüm)' },
  { hash: 'chat',      icon: 'guide',    t: 'Asistan — Boştan',    d: 'Sohbeti baştan, animasyonlu dene' },
  { hash: 'payment',   icon: 'card',     t: 'Ödeme Ekranı',        d: 'Adres, kargo, taksit, Worldpuan, sözleşme' },
  { hash: 'success',   icon: 'check',    t: 'Ödeme Başarılı',      d: 'Onay, Worldpuan, dekont' },
  { hash: 'tracking',  icon: 'box',      t: 'Sipariş Takibi',      d: 'Durum çizgisi, YK Kargo, fatura, iade/cayma' },
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
  theme: localStorage.getItem('ykm-theme') || 'dark',
};

/* ---------- Mock teslimat adresleri (kişisel veri yok, tamamen örnek) ---------- */
const ADDRESSES = [
  { id: 'a1', title: 'Ev',     name: 'Ada Yılmaz', line: 'Bağdat Cad. No:128 D:5, Fenerbahçe', city: 'Kadıköy / İstanbul', phone: '0 (5••) ••• •• 24' },
  { id: 'a2', title: 'İş',     name: 'Ada Yılmaz', line: 'Büyükdere Cad. No:201 Kat:8, Levent', city: 'Şişli / İstanbul',  phone: '0 (5••) ••• •• 24' },
  { id: 'a3', title: 'Yazlık', name: 'Ada Yılmaz', line: 'Sahil Sok. No:7, 3850. Mah.',        city: 'Çeşme / İzmir',     phone: '0 (5••) ••• •• 24' },
];
function getAddress() { return ADDRESSES.find(a => a.id === state.addressId) || ADDRESSES[0]; }

/* ---------- Mock kullanıcı finansal profili (örnek veriler) ---------- */
const USER = {
  name: 'Ada',
  limit: 18500,          // Worldcard kullanılabilir limit (TL)
  worldpuan: 1250,       // mevcut Worldpuan bakiyesi
  balance: 10000,        // Vadesiz TL hesap bakiyesi
};
const PUAN_VALUE = 0.1;  // 1 Worldpuan = 0,10 TL (örnek değerleme)

function fmtTL(n) { return n.toLocaleString('tr-TR') + ',00 TL'; }
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

      <div class="home-lower">
        <div class="quick-row4">
          <div class="quick4" data-action="toast" data-msg="Varlıklarım prototipte aktif değil"><div class="q4-ico">${I.pie}</div><span>Varlıklarım</span></div>
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
      <button class="icon-btn" data-action="go-home">${I.back}</button>
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

/* Worldpuan ile öde — sade onay kutusu (puanın TL karşılığını gösterir) */
function FinanceBoxHTML() {
  const tl = fmtTL(Math.round(USER.worldpuan * PUAN_VALUE));
  return `
  <div class="puan-box ${state.usePuan ? 'on' : ''}" id="fin-box" data-action="toggle-puan">
    <span class="cbx">${I.check}</span>
    <div class="pt-ico"><img src="assets/world.webp" alt="World" onerror="this.outerHTML='🎉'"></div>
    <div class="pt-txt">
      <div class="pt-name">Worldpuanlarımla öde</div>
      <div class="pt-sub">${USER.worldpuan.toLocaleString('tr-TR')} puanın var = <b>${tl}</b> indirim</div>
    </div>
  </div>`;
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
  <div class="del-strip">
    <div class="del-ico">${I.truck}</div>
    <div class="del-txt">
      <div class="del-main">Tahmini teslimat: <b>${range}</b></div>
      <div class="del-sub">${p.shipping} · ${p.warranty}</div>
    </div>
    <div class="del-cargo"><img src="assets/yk-kargo.png" alt="YK Kargo" onerror="this.parentElement.textContent='YK Kargo'"></div>
  </div>`;
}

function PaymentScreen() {
  const p = state.selectedProduct;
  return `
  <div class="screen anim-right">
    <div class="nav-head">
      <button class="icon-btn" data-action="go-chat">${I.back}</button>
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
      <button class="icon-btn" data-action="go-home">${I.back}</button>
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
      <button class="icon-btn" data-action="go-home">${I.back}</button>
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
      <button class="icon-btn" data-action="go-home">${I.back}</button>
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

function PlaceholderScreen(title) {
  return `
  <div class="screen anim-right">
    <div class="nav-head">
      <button class="icon-btn" data-action="go-home">${I.back}</button>
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
    default: html = PlaceholderScreen(state.placeholderTitle || 'Yakında'); break;
  }
  app.innerHTML = html;

  // Ekrana özel kurulum
  if (state.screen === 'search') setupSearch();
  if (state.screen === 'chat') setupChat();
}

function go(screen) {
  state.screen = screen;
  closeDrawer();
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
  chips.innerHTML = CHIPS.map(c =>
    c.key === 'robot'
      ? `<div class="chip" data-action="use-prompt">${c.label}</div>`
      : `<div class="chip" data-action="chip-other" data-key="${c.key}">${c.label}</div>`
  ).join('');
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
  { t: 'Düşünüyor…', d: 600 },
  { t: 'İhtiyacın analiz ediliyor…', d: 1700 },
  { t: 'Koçtaş kataloğu taranıyor…', d: 1900 },
  { t: 'World kampanyaları kontrol ediliyor…', d: 950 },
  { t: 'Worldpuan kazanımı hesaplanıyor…', d: 700 },
];
function addThinking(scroll) {
  const row = document.createElement('div');
  row.className = 'msg-row bot anim-in';
  row.innerHTML = `<div class="bot-avatar">${I.spark}</div><div class="think-line"><span class="shimmer"></span></div>`;
  scroll.appendChild(row);
  scrollChatBottom();
  return row;
}
function runThinking(row, done, gen) {
  const el = row.querySelector('.shimmer');
  let i = 0;
  const next = () => {
    if (gen && gen.aborted) return;
    if (i >= THINK_STEPS.length) {
      // iz bırakmadan kaybol
      row.classList.add('fade-out');
      setTimeout(() => { row.remove(); if (done) done(); }, 240);
      return;
    }
    el.classList.remove('step-in');
    void el.offsetWidth; // animasyonu yeniden tetikle
    el.textContent = THINK_STEPS[i].t;
    el.classList.add('step-in');
    scrollChatBottom();
    const wait = THINK_STEPS[i].d + Math.random() * 300;
    i++;
    setTimeout(next, wait);
  };
  next();
}

/* Daktilo efekti — gen verilirse durdurulunca yarım bırakır (gerçek LLM gibi) */
function typeText(el, text, speed, done, gen) {
  el.classList.add('typing-caret');
  let i = 0;
  const tick = () => {
    if (gen && gen.aborted) { el.classList.remove('typing-caret'); return; }
    el.textContent = text.slice(0, i);
    scrollChatBottom();
    if (i++ < text.length) {
      setTimeout(tick, speed + (Math.random() * 24 - 8));
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

/* iOS tarzı Face ID sembolü: köşe parantezleri + yüz (beyaz, koyu kutuda) */
const FACEID_GLYPH = `
  <svg width="62" height="62" viewBox="0 0 64 64" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 6h-5a9 9 0 0 0-9 9v5"/>
    <path d="M44 6h5a9 9 0 0 1 9 9v5"/>
    <path d="M20 58h-5a9 9 0 0 1-9-9v-5"/>
    <path d="M44 58h5a9 9 0 0 0 9-9v-5"/>
    <path d="M22 26v6"/>
    <path d="M42 26v6"/>
    <path d="M32 26v10c0 1.6-1.1 2.6-2.7 2.6"/>
    <path d="M23 45.5c2.4 2.5 5.5 3.9 9 3.9s6.6-1.4 9-3.9"/>
  </svg>`;
/* Kendini çizen daire + tik (iOS onay animasyonu) */
const FACEID_CHECK = `
  <svg width="62" height="62" viewBox="0 0 64 64" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="32" cy="32" r="26" class="fc-circle"/>
    <path d="M21 33l8 8 14-17" class="fc-check"/>
  </svg>`;

/* Onay sheet'i: iPhone'daki gibi Face ID doğrulaması, ardından Onayla aktifleşir */
function openConfirmSheet() {
  const p = state.selectedProduct;
  const methodLbl = state.payMethod === 'bank'
    ? `Vadesiz TL Hesabım · Tek Çekim`
    : `Worldcard **** 3333 · ${instLabel()}`;
  sheetEl.innerHTML = `
    <div class="sheet-handle"></div>
    <h3 id="sheet-title">Ödemeyi Onayla</h3>
    <p id="sheet-desc">Güvenliğin için Face ID ile doğrulama yapılıyor, telefonuna bakmaya devam et.</p>
    <div class="faceid-box" id="faceid-box"><div class="fid-glyph">${FACEID_GLYPH}</div></div>
    <div class="faceid-caption" id="faceid-caption">Face ID</div>
    <div class="sheet-pay-row"><span>${p.store} · World Pay</span><span class="spr-r">${methodLbl}</span></div>
    ${state.usePuan ? `<div class="sheet-disc">${fmtTL(puanDiscount())} Worldpuan indirimi uygulandı</div>` : ''}
    <div class="sheet-amount">${payableStr()}</div>
    <button class="sheet-btn" id="approve-btn" data-action="approve" disabled>${I.shield} Onayla</button>
    <button class="sheet-btn ghost" data-action="close-sheet">Vazgeç</button>`;
  sheetEl.classList.add('open');
  sheetScrimEl.classList.add('open');

  // Face ID "başarılı" senaryosu
  setTimeout(() => {
    const box = document.getElementById('faceid-box');
    const caption = document.getElementById('faceid-caption');
    const desc = document.getElementById('sheet-desc');
    const approve = document.getElementById('approve-btn');
    if (!box || !sheetEl.classList.contains('open')) return;
    box.classList.add('ok');
    box.innerHTML = FACEID_CHECK;
    caption.textContent = 'Doğrulandı';
    desc.textContent = 'Kimliğin doğrulandı. Ödemeyi tamamlamak için Onayla\'ya dokun.';
    approve.disabled = false;
  }, 1800);
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
    case 'close-search': return go('home');
    case 'open-assistant':
      state.chatStarted = true;
      return go('chat');
    case 'go-home': return go('home');
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

    case 'use-prompt': {
      // Öneri çipi: prompt'u input'a daktiloyla yaz, sonra otomatik gönder
      const ta = document.getElementById('chat-text');
      const sendBtn = document.getElementById('send-btn');
      document.querySelectorAll('.chip-row').forEach(c => c.remove());
      ta.disabled = false;
      let i = 0;
      const text = ASSISTANT_PROMPT;
      const type = () => {
        ta.value = text.slice(0, i);
        ta.style.height = 'auto';
        ta.style.height = Math.min(ta.scrollHeight, 96) + 'px';
        if (i++ < text.length) {
          setTimeout(type, 26 + Math.random() * 20);
        } else {
          setTimeout(chatSend, 450);
        }
      };
      type();
      return;
    }
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
    case 'step-close': {
      const card = t.closest('.step-card');
      if (card) card.remove();
      return;
    }
    case 'pay': return openConfirmSheet();
    case 'approve': return approvePayment();
    case 'close-sheet': return closeSheet();

    case 'menu-nav': {
      const id = t.dataset.id;
      if (id === 'home') return go('home');
      // Diğer menüler placeholder
      state.placeholderTitle = t.dataset.label;
      state.screen = 'placeholder';
      closeDrawer();
      return render();
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
   Her bölümün kendi hash linki var: #home #assistant #chat #payment
   #success #tracking #search #settings #sections
   Link açıldığında ekran gereken state ile hazır gelir (akışı tekrarlamadan). */
const ROUTES = ['home', 'search', 'chat', 'assistant', 'payment', 'success', 'tracking', 'settings', 'sections'];
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
  if (h === 'assistant') {            // sohbeti dolu göster
    state.chatStarted = true;
    state.chatSeed = true;
    state.screen = 'chat';
    return true;
  }
  state.chatSeed = false;
  state.screen = h;
  return true;
}
/* Bölüm linkine git: state'i kur, URL hash'ini güncelle (paylaşılabilir), çiz */
function gotoSection(hash) {
  if (!routeTo(hash)) return;
  closeDrawer();
  history.replaceState(null, '', '#' + hash.replace('#', ''));
  render();
}
// Adres çubuğundan hash değişirse (bookmark / elle düzenleme) canlı yönlen
window.addEventListener('hashchange', () => { if (routeTo(location.hash)) render(); });

setTheme(state.theme);
updateClock();
setInterval(updateClock, 30000);
routeTo(location.hash);
render();
