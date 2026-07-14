# Yapı Kredi Mobil — Prototip

Gerçek Yapı Kredi Mobil uygulamasının birebir kopyası üzerine kurulu, yeni özellik fikirlerini
gerçek uygulama hissiyle demo etmek için yapılmış **statik HTML/CSS/JS prototipi**.
Backend, gerçek veri ve build süreci yoktur.

## Hızlı başlangıç

- **Canlı:** https://bselcukimre.github.io/yk-app-prototip/
- **Lokal:** `baslat.command`'a çift tıkla → http://localhost:8080 (telefondan da aynı Wi-Fi'da açılır)
- Herhangi bir bölüme doğrudan gitmek için hash linkleri kullan, örn. `.../#widgets`, `.../#qr-pay`

## Belgeler

| Belge | Kim için |
|---|---|
| [docs/KULLANIM.md](docs/KULLANIM.md) | Prototipi kullanacak / demo yapacak kişiler — akışlar ve tüm bölüm linkleri |
| [AGENTS.md](AGENTS.md) | Kod üzerinde çalışacak geliştiriciler ve AI agent'lar — mimari, tasarım kuralları, çalışma kuralları |

## İçerik (özet)

Alışveriş Asistanı (AI chat + World Pay ödeme), Setur otonom senaryosu, Karekod ile Öde
(ana ekran widget'ı), Widget Galerisi, Birikim hub'ı (Yuvarla / Ekstreden / Maden),
Ödül Yolu, Harcama Bölüştür, Birlikte Kazan, Dinamik CVV, abonelikler, harcama analizi ve daha fazlası.
Tam liste ve linkler: [docs/KULLANIM.md](docs/KULLANIM.md)

## Dosyalar

```
index.html    iskelet + telefon çerçevesi + durum çubuğu
app.js        ekranlar, navigasyon, chat ve ödeme akışları
styles.css    tüm stiller (koyu/açık tema)
assets/       ürün, kart ve logo görselleri
docs/         kullanım kılavuzu + tasarım referans görselleri
```
