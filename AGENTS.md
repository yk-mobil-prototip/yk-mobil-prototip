# Geliştirme Kılavuzu (İnsan + AI Agent)

Bu repo, gerçek **Yapı Kredi Mobil** uygulamasının (koyu tema) olabildiğince birebir kopyası olan
bir **statik HTML/CSS/JS prototipi**dir. Amaç: yeni özellik fikirlerini gerçek uygulama görünümüyle
demo etmek. Backend, gerçek veri ve build süreci yoktur.

Prototipi sadece kullanacaksan: [docs/KULLANIM.md](docs/KULLANIM.md)

## Klasör yapısı

```
app/                  Uygulamanın kendisi (yayınlanan klasör)
  index.html          İskelet: telefon çerçevesi, iOS durum çubuğu, #app, drawer/sheet/toast/lockscreen katmanları
  app.js              Tüm uygulama: mock veriler, state, ekran component'leri, aksiyon dispatcher, hash router (~7.500 satır)
  styles.css          Tüm stiller: tema değişkenleri (koyu varsayılan + açık), bölüm başlıklı yorumlarla (~3.600 satır)
  assets/             Ürün, kart ve logo görselleri
  baslat.command      Lokal sunucu (çift tık; python3 http.server 8080, telefon erişimi için IP gösterir)
docs/
  KULLANIM.md         Demo akışları + tüm bölümlerin hash linkleri
  referans/           Gerçek uygulamadan tasarım referansı ekran görüntüleri
.github/workflows/
  pages.yml           GitHub Pages yayını: her main push'unda app/ klasörünü yayınlar
yayin/                (gitignore'da, sadece lokal) Yayın kopyası — aşağıdaki senkron kuralına bak
README.md             Kısa tanıtım ve hızlı başlangıç
AGENTS.md             Bu dosya
CLAUDE.md             Claude Code için giriş noktası (bu dosyayı import eder)
```

## Dil standartları

- **README.md, docs/KULLANIM.md, AGENTS.md:** Türkçe. README kısa ve net; KULLANIM ve AGENTS detaylı ama sade.
- **Kod dosyaları (app.js, styles.css, index.html, workflow):** standart İngilizce — değişken adları,
  fonksiyon adları ve yorumlar İngilizce yazılır.
- **Kullanıcıya görünen uygulama metinleri:** Türkçe, gerçek bankacılık diline uygun
  (örnek: FAST, Talimat Formu, Worldpuan, Tek Çekim).
- **Commit mesajları:** Türkçe, `Özellik: yapılan iş` kalıbında (örnekler için git log'a bak).
  Co-author satırı eklenmez.

Not: Eski kodda Türkçe yorumlar kalmış olabilir; yeni yazılan ve elden geçirilen kod İngilizce olmalıdır.

## Mimari (app/app.js)

Framework yok; tek dosyada şu düzen:

1. **Veri ve yardımcılar** (dosyanın başı): `I` (SVG ikon seti), `PRODUCTS`, `SECTIONS`, `MENU`,
   mock senaryo verileri (Setur, Birikim, Split, ...), `fmtTL()` gibi formatlayıcılar.
2. **`state`** (~satır 261): tüm uygulama durumu tek nesnede (`state.screen`, `state.nav`, akış state'leri).
3. **Ekran component'leri:** `HomeScreen()`, `ChatScreen()`, `PaymentScreen()` gibi HTML string döndüren fonksiyonlar.
4. **`render()`:** `state.screen` değerine göre `switch` ile ilgili component'i `#app` içine basar.
5. **Aksiyon dispatcher:** tek global click listener; tıklanan elemanın `data-action` attribute'una göre
   büyük bir `switch` çalışır.
6. **Hash router:** `ROUTES` listesi + `routeTo(hash)`. Her bölüm `#etiket` ile doğrudan açılır ve
   gereken state'i kendisi hazırlar (örnek: `#payment`, ürün seçili değilse asistanın önerdiğini kurar).

Katmanlar: `drawer` (soldan menü), `sheet` (alttan onay/modal), `toast`, `lockscreen`.
Hepsi index.html'de hazırdır; `openSheet()` / `closeSheet()` gibi yardımcılarla kullanılır.

### Yeni ekran / bölüm ekleme adımları

1. Ekran component fonksiyonunu yaz (HTML string döndürür).
2. `render()` switch'ine `case` ekle.
3. Etkileşimler için HTML'e `data-action`, dispatcher'a `case` ekle.
4. Doğrudan erişim için: `ROUTES` listesine etiket, `routeTo()` içine state hazırlığı,
   `SECTIONS` listesine menü girişi ekle.
5. `docs/KULLANIM.md` içindeki hash tablosuna satır ekle; gerekiyorsa README'yi güncelle.

Not: Uzun listeli veya animasyonlu ekranlarda tam `render()` yerine kısmi DOM güncellemesi tercih edilir
(titreme ve scroll sıçramasını önlemek için — örnek: Ödül Yolu görev tıklaması).

## Tasarım kuralları

- **Birebir YK kopyası:** renk, font ve logolar gerçek uygulamayla eşleşmeli. Referans:
  [docs/referans/](docs/referans/) ve gerçek uygulamanın ekran görüntüleri.
  (Örnek: kart borcu kırmızı değil, gerçek uygulamadaki gibi beyaz yazılır.)
- **Font:** Ubuntu (gerçek uygulamaya en yakın Google Font).
- **Tema:** koyu varsayılan; açık tema `body[data-theme="light"]` değişkenleriyle desteklenir.
- **Chat = gerçek LLM deneyimi:** "çevrimiçi" gibi insan-chat kalıpları kullanılmaz.
  Tek satır shimmer "düşünüyor" metni, eşit olmayan adım süreleri, bitince kaybolur.
  Üretim sırasında durdur butonu; bot mesajı altında kopyala + 👍/👎;
  girişin altında "yapay zeka hata yapabilir" uyarısı.
  Açılış karşılama mesajıyla olur, boş durumla değil.
- **Ödeme:** taksit varsayılanı Tek Çekim; kullanıcı değiştirebilir. Onayda Face ID "başarılı" simülasyonu.
- Yeni görsel gerekirse kullanıcıdan istenir (indirip `app/assets/` içine atar).

## Kullanıcıdan gelen girdiler (AI üretimi görsel ve akışlar)

Kullanıcı yeni özellik çalışırken başka AI araçlarıyla (ChatGPT, Gemini vb.) hazırlanmış
UX/UI görselleri veya akış metinleri paylaşabilir.

**Temel ilke:** Başka AI'lardan gelen içerik doğruluk kaynağı değildir; fikir üretmeye yardımcı
dokümandır. Doğru kabul edip birebir uygulama. Kendi değerlendirmeni yap: bu repodaki tasarım
kurallarıyla, gerçek YK uygulamasının kalıplarıyla ve mevcut ekranlarla karşılaştır; uyumsuz,
mantıksız veya zayıf kısımları uygulamadan önce kullanıcıya söyle ve daha iyisini öner.

- **AI üretimi görsel = konsept referansı.** Yerleşimi ve fikri al; renk, font ve bileşen dilini
  birebir kopyalama — gerçek YK temasına uyarla (yukarıdaki tasarım kuralları geçerli).
- **Gerçek uygulama ekran görüntüsü > AI konsepti.** İkisi çelişirse gerçek uygulama kazanır.
- **Akış metinleri** (adımlar, ekranlar, durumlar) öneri taslağıdır, şartname değildir.
  İyi fikirlerini al, eksiklerini (hata, boş durum, geri dönüş) mevcut ekranlardaki kalıplara göre
  tamamla; kararsız kaldığın noktayı kullanıcıya sor.
- **Dosya yönetimi:** uygulamada kullanılacak görsel `app/assets/` içine, saklamaya değer tasarım
  referansı `docs/referans/` içine konur. Sohbete yapıştırılan tek seferlik konsept görselleri
  repoya eklenmez; kök dizinde başıboş görsel dosyası bırakılmaz.

## Çalışma kuralları

- **Test:** `app/baslat.command` (veya `app/` içinde `python3 -m http.server 8080`) ile aç;
  ekranlara `#etiket` hash linkleriyle doğrudan giderek kontrol et. Build, lint ve test framework'ü yoktur.
- **Yayın:** her `main` push'unda `.github/workflows/pages.yml`, `app/` klasörünü GitHub Pages'e yayınlar.
  Canlı adres: https://bselcukimre.github.io/yk-app-prototip/
- **`yayin/` senkronu:** `app/` içindeki dosyalar değişince aynılarını `yayin/` klasörüne kopyala
  (`cp -R app/. yayin/` benzeri). `yayin/` gitignore'dadır, sadece lokal yayın kopyasıdır.
