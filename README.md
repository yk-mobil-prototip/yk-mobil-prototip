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
| Arama | `#search` |
| Ayarlar | `#settings` |
| Bölümler hub'ı | `#sections` |

Örnek: `https://bselcukimre.github.io/yk-app-prototip/#tracking`

## Dosyalar
- `index.html` — iskelet + telefon çerçevesi + durum çubuğu
- `styles.css` — tüm stiller, koyu/açık tema değişkenleri
- `app.js` — ekranlar (component'ler), navigasyon, chat ve ödeme akışı
- `assets/` — ürün, kart ve logo görselleri
