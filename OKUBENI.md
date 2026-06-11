# Yapı Kredi Mobil — Prototip

Yöneticiye gösterim / ekran kaydı için hazırlanmış, **çalışmayan ama tıklanabilir** mobil prototip.
Saf HTML/CSS/JS — kurulum gerektirmez. İleride React/Vite'a taşınabilir.

## Çalıştırma

1. Finder'da **`baslat.command`** dosyasına çift tıkla. (Açılmazsa: sağ tık → Aç)
2. Terminalde iki adres görünür:
   - Bu bilgisayarda: `http://localhost:8080`
   - Telefondan (aynı Wi-Fi): `http://<IP>:8080`
3. **Telefon kaydı için:** Telefonu bilgisayarla **aynı Wi-Fi'a** bağla, Safari/Chrome'da telefon adresini aç.
   - Tam ekran (adres çubuğu olmadan) görünüm için: **Paylaş → Ana Ekrana Ekle**, sonra ana ekrandaki ikondan aç.

Durdurmak için Terminal penceresinde `Ctrl + C`.

## Demo akışı (kayıt senaryosu)

1. **Ana Sayfa** → üstteki arama çubuğuna bas
2. Aramaya **"Yapı Kredi Alışveriş Asistanı"** yaz (birkaç harf yeter) → sonuç çıkar, üzerine bas
3. **Chat** açılır. Alt kısımdaki mesaj zaten hazır → **gönder (➤)** butonuna bas
   - "World üye iş yerleri… taranıyor" yüklemesi → cevap → **ürün kartları**
4. Bir üründe **"World Pay ile Al"** → ödeme ekranı
5. **"Worldcard ile öde"** seçeneğine bas (tik işareti belirir) → **"Öde | 2.199,00 TL"**
6. **"Yapı Kredi Mobil ile Onayla"** → **Onayla**
7. **Başarı ekranı**: ödeme tamamlandı + Worldpuan kazanımı

## Tema
Sol üst ☰ menü → **Ayarlarım** → Tema (Koyu / Açık). Seçim hatırlanır.

## Demo ipuçları
- Belirli bir ekrana atlamak için adres sonuna ekle: `#chat`, `#payment`, `#success`, `#search`, `#settings`
  (örn. `http://localhost:8080/#payment`)
- Diğer menü öğeleri (Hesaplarım, Krediler vb.) bilinçli olarak "prototip dışı" bırakıldı; demo odağı asistan akışı.

## Dosyalar
- `index.html` — iskelet + telefon çerçevesi + durum çubuğu
- `styles.css` — tüm stiller, koyu/açık tema değişkenleri
- `app.js` — ekranlar (component'ler), navigasyon, chat ve ödeme akışı, veri
