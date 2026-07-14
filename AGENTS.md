# Agent / Geliştirici Kılavuzu

Bu repo, gerçek **Yapı Kredi Mobil** uygulamasının (koyu tema) olabildiğince birebir kopyası olan
bir **statik HTML/CSS/JS prototipi**dir. Amaç: yeni özellik fikirlerini gerçek uygulama hissiyle
demo etmek. Gerçek veri, backend veya build süreci **yoktur**.

Prototipi sadece kullanacaksan: [docs/KULLANIM.md](docs/KULLANIM.md).

## Dosya yapısı

```
index.html        İskelet: telefon çerçevesi, sahte iOS durum çubuğu, #app, drawer/sheet/toast/lockscreen katmanları
app.js            TÜM uygulama: veriler (mock), state, ekran component'leri, aksiyon dispatcher, hash router (~7.500 satır)
styles.css        TÜM stiller: tema değişkenleri (koyu varsayılan + açık), bölüm bölüm yorum başlıklarıyla (~3.600 satır)
assets/           Ürün, kart ve logo görselleri
baslat.command    Lokal sunucu (çift tık; python3 http.server 8080, telefondan erişim için IP gösterir)
docs/KULLANIM.md  Demo akışları + tüm bölümlerin hash linkleri
docs/referans/    Gerçek uygulamadan tasarım referansı ekran görüntüleri
yayin/            (gitignore'da, sadece lokal) Yayın kopyası — aşağıya bak
```

## Mimari (app.js)

Framework yok; tek dosyada şu düzen:

1. **Veri + yardımcılar** (dosyanın başı): `I` (SVG ikon seti), `PRODUCTS`, `SECTIONS`, `MENU`,
   mock senaryo verileri (Setur, Birikim, Split, ...), `fmtTL()` gibi formatlayıcılar.
2. **`state`** (~satır 261): tüm uygulama durumu tek nesnede (`state.screen`, `state.nav`, akış state'leri).
3. **Ekran component'leri**: `HomeScreen()`, `ChatScreen()`, `PaymentScreen()`... — HTML string döndüren fonksiyonlar.
4. **`render()`**: `state.screen`'e göre `switch` ile ilgili component'i `#app`'e basar.
   Yeni ekran = yeni component fonksiyonu + `render()` switch'ine bir `case`.
5. **Aksiyon dispatcher**: tek global click listener; `data-action="..."` attribute'una göre dev bir `switch`.
   Yeni etkileşim = HTML'e `data-action` + dispatcher'a `case`.
6. **Hash router**: `ROUTES` listesi + `routeTo(hash)` — her bölüm `#etiket` ile doğrudan açılır,
   gereken state'i kendisi hazırlar (örn. `#payment` ürün seçili değilse asistanın önerdiğini kurar).
   Yeni bölüm eklerken: `ROUTES`'a etiket, `routeTo`'ya state hazırlığı, `SECTIONS`'a menü girişi,
   `docs/KULLANIM.md`'deki tabloya satır ekle.

Katmanlar: `drawer` (soldan menü), `sheet` (alttan onay/modal), `toast`, `lockscreen` — hepsi index.html'de hazır, `openSheet()/closeSheet()` gibi yardımcılarla kullanılır.

Not: Uzun listeli/animasyonlu ekranlarda tam `render()` yerine kısmi DOM güncellemesi tercih edilebilir
(titreme ve scroll sıçramasını önlemek için — örnek: Ödül Yolu görev tıklaması).

## Tasarım kuralları (kullanıcının yerleşik tercihleri)

- **Birebir YK kopyası**: renk/font/logo gerçek uygulamayla eşleşmeli; referans için `docs/referans/`
  ve gerçek uygulamanın ekran görüntüleri esastır. (Örn. kart borcu kırmızı değil beyaz yazılır.)
- **Font**: Ubuntu (gerçek uygulamaya en yakın Google Font).
- **Tema**: koyu varsayılan; açık tema `body[data-theme="light"]` değişkenleriyle desteklenir.
- **Chat = gerçek LLM deneyimi**: "çevrimiçi" gibi insan-chat kalıpları yok. Tek satır shimmer
  "düşünüyor" metni, eşit olmayan adım süreleri, bitince kaybolur. Üretim sırasında durdur butonu,
  bot mesajı altında kopyala + 👍/👎, girişin altında "yapay zeka hata yapabilir" uyarısı.
  Boş-durum açılışı DEĞİL, karşılama mesajıyla açılış.
- **Ödeme**: taksit varsayılanı **Tek Çekim**; kullanıcı değiştirebilir. Onayda Face ID "başarılı" simülasyonu.
- **Metinler Türkçe**, gerçek bankacılık diline uygun (örn. FAST, Talimat Formu, Worldpuan).
- Yeni görsel gerekirse kullanıcıdan istenir (indirip `assets/`'e atar).

## Çalışma kuralları

- **Test**: `python3 -m http.server 8080` (veya `baslat.command`) ile aç; ekranlara `#etiket` hash
  linkleriyle doğrudan giderek kontrol et. Build/lint/test framework'ü yok.
- **`yayin/` senkronu**: `app.js`, `styles.css`, `index.html` (ve README) değişince aynı dosyaları
  `yayin/` klasörüne de kopyala. `yayin/` gitignore'dadır, sadece lokal yayın kopyasıdır.
- **Commit mesajları Türkçe**, `Özellik: yapılan iş` kalıbında (git log'a bak); co-author satırı **eklenmez**.
- Yeni bölüm/özellik eklenince `docs/KULLANIM.md`'deki hash tablosunu ve gerekiyorsa README'yi güncelle.
