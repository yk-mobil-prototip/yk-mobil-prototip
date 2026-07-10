# Yapı Kredi Mobil — Alışveriş Asistanı Prototipi

## 🔗 Linkler
- **Çalışan prototip:** https://bselcukimre.github.io/yk-app-prototip/
- **Kaynak kod:** https://github.com/bselcukimre/yk-app-prototip

## Akış
1. Ana sayfa → üstteki arama çubuğuna dokun
2. **"Yapı Kredi Alışveriş Asistanı"** yaz → çıkan sonuca dokun
3. Chat'te öneri çipine bas (mesaj otomatik yazılıp gönderilir)
4. Asistan World kampanyalı/taksitli **Koçtaş** ürünlerini listeler (yatay kaydır)
5. Bir üründe **"World Pay ile Al"** → ödeme ekranı
6. **Worldcard ile öde** seç → **Öde** → **Yapı Kredi Mobil ile Onayla**
7. Başarı ekranı + Worldpuan kazanımı

## Yuvarla Biriktir
1. Ana sayfadaki **Birikim** kartı → başvuru ekranı
2. Kart seç (gerçek kart görselleri) → yuvarlama kuralını seç (**10 / 50 / 100 TL**, canlı örnekler + aylık tahmin) → birikim hesabı seç
3. **Talimat Formu**'nu onayla → **Aktifleştir** → özet onay sheet'i → başarı animasyonu
4. Yönet ekranı: kumbara (sayaç animasyonlu), 6 aylık birikim grafiği, **hedef belirleme** (ilerleme çubuğu), kural/kart/hesap değiştirme, hareket detayı
5. **Duraklat / Devam Ettir** ve onaylı **Durdur** akışları
6. Entegrasyon: Yuvarla Biriktir aktifken World Pay ile ödeme yapınca fark kumbaraya düşer ve başarı ekranında görünür

## Karekod ile Öde (ana ekran widget'ı)
Telefonu açmadan, uygulamaya giriş yapmadan, ana ekrandaki widget'tan saniyeler içinde ödeme.
1. **Telefon ana ekranı** (springboard) — duvar kağıdı, app ikonları ve dock üstünde **Yapı Kredi widget'ı** (`#springboard`)
2. Widget'taki **Karekod ile Öde** butonuna dokun → **kamera/tarayıcı** açılır, TR Karekod otomatik okunur (`#qr-scan`)
3. Okunan işyeri (**Koçtaş · Bahçeşehir AVM**) + tutar gelir → **Worldcard** / Vadesiz TL Hesabı seç → **Öde** (`#qr-pay`)
4. **Yapı Kredi Mobil ile Onayla** (biyometrik his) → **başarı**: Worldpuan kazanımı + dekont → **Ana Ekrana Dön** (`#qr-success`)
- Uygulamanın kendi ödeme akışından bağımsız çalışır; widget'tan tıklanınca uygulamaya giriş adımı atlanır.

## Bölümlere doğrudan erişim
Her bölüm, akışı baştan tekrarlamadan kendi hash linkiyle doğrudan açılır ve gereken state hazır gelir.

İki şekilde erişilir:
- **Uygulama içinden:** soldaki menü → Bölümler
- **Bağlantıyla:** `https://bselcukimre.github.io/yk-app-prototip/` adresinin sonuna aşağıdaki etiketlerden birini ekle

| Bölüm | Link |
|---|---|
| Ana ekran | `#home` |
| Koçtaş senaryosu — tamamlandı (dolu sohbet) | `#assistant` |
| Setur otonom senaryosu — tamamlandı | `#setur` |
| Asistan — boştan (animasyonlu) | `#chat` |
| Ödeme ekranı | `#payment` |
| Ödeme başarılı | `#success` |
| Sipariş takibi | `#tracking` |
| Karekod ile Öde — telefon ana ekranı + YK widget'ı | `#springboard` |
| Karekod ile Öde — kamera/tarayıcı (otomatik okur) | `#qr-scan` |
| Karekod ile Öde — tutar + ödeme yöntemi (okunan işyeri) | `#qr-pay` |
| Karekod ile Öde — ödeme başarılı (Worldpuan + dekont) | `#qr-success` |
| Yuvarla & Biriktir — başvuru (kart, kural 10/50/100, talimat onayı) | `#roundup` |
| Yuvarla & Biriktir — kumbara (grafik, hedef, duraklat/durdur) | `#roundup-jar` |
| Yuvarla & Biriktir — tüm hareketler (aya göre gruplu) | `#roundup-history` |
| Ekstreden Biriktir — başvuru (kart, oran %1/5/10/20, üst limit, talimat onayı) | `#spendup` |
| Ekstreden Biriktir — yönet (toplam, günlük faiz, aylık aktarım grafiği) | `#spendup-jar` |
| Ekstreden Biriktir — tüm aktarımlar (aya göre gruplu) | `#spendup-history` |
| Maden Biriktir — başvuru (kart, altın/gümüş/platin/paladyum, sabit tutar TL/gram) | `#metal` |
| Maden Biriktir — yönet (toplam XAU/XAG, güncel değer, kazanç, grafik) | `#metal-jar` |
| Maden Biriktir — tüm alımlar (aya göre gruplu) | `#metal-history` |
| Ödül Yolu — hub (Benim Dünyam; ödülünü seç) | `#fayda` |
| Ödül Yolu — yolculuk (level haritası; Limit demo 2/5) | `#fayda-journey` |
| Ödül Yolu — tam ekran ödül seçimi (3 ödülden biri) | `#fayda-reward` |
| Ödüllerim — kazanılmış/aktif ödüller | `#fayda-wallet` |
| Harcama Bölüştür — hub (Gelen/Gönderilen istekler, istek oluştur) | `#split` |
| Harcama Bölüştür — harcama seç (kart hareketi/fatura/abonelik, çoklu seçim) | `#split-pick` |
| Harcama Bölüştür — tutar girerek istek | `#split-amount` |
| Harcama Bölüştür — kişi seç (banka rozetli · IBAN/telefon/karekod/TCKN) | `#split-people` |
| Harcama Bölüştür — form (payım var, kişi başı, süreler, kısmi ödeme) | `#split-form` |
| Harcama Bölüştür — gelen isteği FAST ile öde (ödeyen taraf) | `#split-pay` |
| Birlikte Kazan — hub (öne çıkan aktif hedef + çoklu mini hedef + nasıl çalışır) | `#reward-goal` |
| Birlikte Kazan — yeni hedef (hedef adı, tutar, katılımcılar, eşit/katkı paylaşımı) | `#reward-goal-new` |
| Birlikte Kazan — ilerleme (3 sütun stat, kolektif çubuk, üye katkıları, TL ödül) | `#reward-goal-track` |
| Birlikte Kazan — kutlama (hedefe ulaşıldı, kişi başı dağıtım, Ödüllerim) | `#reward-goal-win` |
| Arama | `#search` |
| Ayarlar | `#settings` |
| Bölümler hub'ı | `#sections` |

Örnek: `https://bselcukimre.github.io/yk-app-prototip/#tracking`

## Dosyalar
- `index.html` — iskelet + telefon çerçevesi + durum çubuğu
- `styles.css` — tüm stiller, koyu/açık tema değişkenleri
- `app.js` — ekranlar (component'ler), navigasyon, chat ve ödeme akışı
- `assets/` — ürün, kart ve logo görselleri
