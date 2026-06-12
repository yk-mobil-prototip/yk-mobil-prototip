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
  calendar: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><rect x="3" y="4.5" width="18" height="16" rx="2.5"/><path d="M3 9h18M8 3v3M16 3v3"/><rect x="6.5" y="12" width="3" height="3" rx=".5" fill="currentColor" stroke="none"/><rect x="11" y="12" width="3" height="3" rx=".5" fill="currentColor" stroke="none"/></svg>',
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
  pie: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M21 15.5A9 9 0 1 1 8.5 3"/><path d="M21 12A9 9 0 0 0 12 3v9z"/></svg>',
  qr: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M21 14v7h-7"/></svg>',
  guide: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 17v.01M12 13.5a2.5 2.5 0 1 0-2.5-2.9"/></svg>',
  sun: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"/></svg>',
  moon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
  spark: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8z"/><path d="M19 14l.9 2.6L22.5 17l-2.6.9L19 20l-.9-2.6L15.5 17l2.6-.9z"/></svg>',
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
  },
  {
    id: 'p2', emoji: '🧹', img: 'assets/arzum.webp',
    name: 'Arzum Cleanart Elegance Toz Torbalı Süpürge',
    desc: '2000 W güç · HEPA filtre · sessiz çalışma',
    price: '2.499,00 TL', priceNum: '2.499', old: '2.999,00 TL',
    rating: '4.5', reviews: '932',
    inst: '9 Taksit', instSub: '9 x 277,67 TL',
    puan: '+250 Worldpuan', store: 'Koçtaş',
  },
  {
    id: 'p3', emoji: '🌀', img: 'assets/karcher.png',
    name: 'Kärcher VC 4s Cordless Dikey Şarjlı Süpürge',
    desc: 'Dikey + el tipi · hafif gövde · 40 dk çalışma',
    price: '1.899,00 TL', priceNum: '1.899', old: '2.299,00 TL',
    rating: '4.8', reviews: '2.041',
    inst: '3 Taksit', instSub: '3 x 633,00 TL',
    puan: '+190 Worldpuan', store: 'Koçtaş',
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
  theme: localStorage.getItem('ykm-theme') || 'dark',
};

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
      <div class="acard">
        <div class="acard-top">
          <div class="acard-logo wallet-tl"><img src="assets/tl-white.png" class="tl-img" alt="₺" onerror="this.outerHTML='<span class=\\'tl-glyph\\'>₺</span>'"><span class="wallet-dot"></span></div>
          <div>
            <div class="acard-name">Vadesiz TL Hesabım</div>
            <div class="acard-sub">59870396</div>
          </div>
          <div class="acard-more" data-action="toast" data-msg="Hesap detayı prototipte aktif değil">⋮</div>
        </div>
        <div class="acard-figs">
          <div class="acard-fig"><div class="val">${money('10.000')}</div><div class="lbl">Kullanılabilir Bakiye</div></div>
          <div class="acard-fig"><div class="val">${money('10.000')}</div><div class="lbl">Güncel Bakiye</div></div>
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

function ProductCardHTML(p) {
  return `
    <div class="pcard">
      <div class="pcard-img">
        ${imgOrFallback(p.img, p.emoji, 'p-photo')}
        <span class="tag world">World'e Özel</span>
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
    { id: 't6', label: p.inst, badge: `World'e Özel`, right: p.instSub },
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
      <span class="io-l"><span class="io-radio"></span><span>${o.label}</span>${o.badge ? `<span class="io-badge">${o.badge}</span>` : ''}</span>
      <span class="io-r">${o.right}</span>
    </div>`).join('');
}

function PaymentScreen() {
  const p = state.selectedProduct;
  const total = parseInt(p.priceNum.replace('.', ''));
  const remaining = (10000 - total).toLocaleString('tr-TR');
  return `
  <div class="screen anim-right">
    <div class="nav-head">
      <button class="icon-btn" data-action="go-chat">${I.back}</button>
      <div class="wp-brand"><span class="wp-logo">World</span><span>Pay</span></div>
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

      <div class="pay-section-title">Ödeme Yöntemi</div>

      <div class="method" data-action="select-method" data-method="worldcard">
        <div class="m-ico card-ico">${imgOrFallback(WORLDCARD_IMG, '💳', 'm-cardimg')}</div>
        <div><div class="m-name">Worldcard ile öde</div><div class="m-sub">**** 3333 · ${p.inst} imkanı · Worldpuan kazan</div></div>
        <div class="m-check">${I.check}</div>
      </div>

      <div class="method" data-action="select-method" data-method="bank">
        <div class="m-ico tl-ico"><img src="assets/tl-white.png" class="tl-img" alt="₺" onerror="this.outerHTML='<span class=\\'tl-glyph\\'>₺</span>'"></div>
        <div><div class="m-name">Vadesiz TL Hesabım'dan öde</div><div class="m-sub">Banka kartı · 59870396 · Tek çekim</div></div>
        <div class="m-check">${I.check}</div>
      </div>

      <div class="inst-box" id="inst-box">
        <div class="ib-title">Taksit Seçeneği</div>
        <div class="ib-note">${I.check} Peşin fiyatına taksit — vade farkı yok</div>
        ${InstBoxHTML(p)}
      </div>

      <div class="bank-box" id="bank-box">
        <div class="ib-title">Hesap Bilgisi</div>
        <div class="bb-row"><span class="bb-l">Kullanılabilir Bakiye</span><span class="bb-r">10.000,00 TL</span></div>
        <div class="bb-row"><span class="bb-l">Ödeme Tutarı</span><span class="bb-r">- ${p.price}</span></div>
        <div class="bb-row total"><span class="bb-l">İşlem Sonrası Bakiye</span><span class="bb-r">${remaining},00 TL</span></div>
        <div class="bb-note">${I.lock} Tutar hesabından tek çekimde, masrafsız tahsil edilir.</div>
      </div>
    </div>

    <div class="pay-foot">
      <button class="pay-btn" id="pay-btn" data-action="pay" disabled>
        <span>Öde</span><span class="div"></span><span id="pay-amt">${p.price}</span>
      </button>
      <div class="secure-note">${I.lock} 256-bit güvenli ödeme</div>
    </div>
  </div>`;
}

function SuccessScreen() {
  const p = state.selectedProduct;
  const bank = state.payMethod === 'bank';
  const d = new Date();
  const dateStr = `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}.${d.getFullYear()} · ${nowTime()}`;
  const txnNo = 'YKM' + String(Math.floor(100000000 + Math.random() * 900000000));
  return `
  <div class="screen anim-fade">
    <div class="screen-scroll">
      <div class="success">
        <div class="success-check"><div class="ring">${I.checkBig}</div></div>
        <h2>Ödemeniz Başarıyla Gerçekleşti</h2>
        <div class="succ-date">${dateStr}</div>
        <div class="amt">${p.price}</div>
        <div class="prod">${p.name}</div>

        <div class="puan-card">
          <div class="pc-logo"><img src="assets/world.webp" alt="World" onerror="this.outerHTML='🎉'"></div>
          <div>
            <div class="pc-val">${p.puan.replace('+','')}</div>
            <div class="pc-lbl">hesabına eklendi · Toplam: 1.470 Worldpuan</div>
          </div>
        </div>

        <div class="receipt">
          <div class="r-row"><span class="r-l">İşlem No</span><span class="r-r">${txnNo}</span></div>
          <div class="r-row"><span class="r-l">İş Yeri</span><span class="r-r">${p.store} · World Pay</span></div>
          <div class="r-row"><span class="r-l">Ödeme Yöntemi</span><span class="r-r">${bank ? 'Vadesiz TL Hesabım · 59870396' : 'Worldcard **** 3333'}</span></div>
          <div class="r-row"><span class="r-l">Taksit</span><span class="r-r">${instLabel()}</span></div>
          <div class="r-row"><span class="r-l">Tutar</span><span class="r-r">${p.price}</span></div>
        </div>

        <div class="success-actions">
          <button class="btn-outline" data-action="toast" data-msg="Dekont paylaşımı prototipte aktif değil">Dekont Paylaş</button>
          <button class="btn-primary" data-action="go-home">Ana Sayfaya Dön</button>
        </div>
      </div>
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

  // Gün ayracı + açılış mesajı + öneri çipleri (yazma efektiyle)
  const scroll = document.getElementById('chat-scroll');
  const divider = document.createElement('div');
  divider.className = 'day-divider';
  divider.innerHTML = '<span>Bugün</span>';
  scroll.appendChild(divider);
  const greet = 'Merhaba! 👋 Ben Yapı Kredi Alışveriş Asistanı. World üye iş yerlerindeki kampanya ve taksit avantajlarıyla sana en uygun ürünleri buluyorum. Ne aramıştın?';
  const gen = startGen();
  setStatus('typing');
  const typing = addTyping(scroll);
  gen.cleanup.push(() => typing.remove());
  setTimeout(() => {
    if (gen.aborted) return;
    typing.remove();
    const bubble = addBotBubble(scroll);
    typeText(bubble, greet, 14, () => {
      addChips(scroll);
      endGen(gen);
    }, gen);
  }, 650);
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
    const reply = 'Elbette! Bütçene uygun, World kampanyalı ve taksit avantajlı 3 seçenek buldum. Kartları sağa kaydırarak inceleyebilirsin 👇';
    typeText(bubble, reply, 14, () => {
      if (gen.aborted) return;
      showProductCards(scroll, () => {
        if (gen.aborted) return;
        // 3) kartlardan sonra kısa takip mesajı — sohbeti tek atımlık olmaktan çıkarır
        setTimeout(() => {
          if (gen.aborted) return;
          const b2 = addBotBubble(scroll);
          const followup = 'Bütçene en uygunu Fakir Robert RS 700 görünüyor — hem paspaslama özelliği var hem de 6 taksit + 220 Worldpuan avantajlı. Hazır olduğunda karttaki "World Pay ile Al" ile ödemeye geçebilirsin 💳';
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
  const btn = document.getElementById('pay-btn');
  btn.disabled = false;
}

function selectInst(id, el) {
  state.installment = id;
  document.querySelectorAll('.inst-opt').forEach(o => o.classList.remove('active'));
  el.classList.add('active');
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
    <div class="sheet-amount">${p.price}</div>
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
      return go('payment');
    }
    case 'select-method': return selectMethod(t.dataset.method, t);
    case 'select-inst': return selectInst(t.dataset.inst, t);
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

/* ---------- Başlat ---------- */
// İsteğe bağlı derin bağlantı: #search, #chat, #payment, #success, #settings
// (demo sırasında belirli bir ekrana atlamak için kullanılabilir)
function applyHash() {
  const h = (location.hash || '').replace('#', '');
  const valid = ['home', 'search', 'chat', 'payment', 'success', 'settings'];
  if (valid.includes(h)) {
    if ((h === 'payment' || h === 'success') && !state.selectedProduct) {
      state.selectedProduct = PRODUCTS[0];
    }
    state.screen = h;
  }
}

setTheme(state.theme);
updateClock();
setInterval(updateClock, 30000);
applyHash();
render();
