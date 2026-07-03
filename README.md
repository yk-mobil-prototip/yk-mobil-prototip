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
| Yuvarla & Biriktir — başvuru (kart, kural 10/50/100, talimat onayı) | `#roundup` |
| Yuvarla & Biriktir — kumbara (grafik, hedef, duraklat/durdur) | `#roundup-jar` |
| Yuvarla & Biriktir — tüm hareketler (aya göre gruplu) | `#roundup-history` |
| Arama | `#search` |
| Ayarlar | `#settings` |
| Bölümler hub'ı | `#sections` |

Örnek: `https://bselcukimre.github.io/yk-app-prototip/#tracking`

## Dosyalar
- `index.html` — iskelet + telefon çerçevesi + durum çubuğu
- `styles.css` — tüm stiller, koyu/açık tema değişkenleri
- `app.js` — ekranlar (component'ler), navigasyon, chat ve ödeme akışı
- `assets/` — ürün, kart ve logo görselleri
