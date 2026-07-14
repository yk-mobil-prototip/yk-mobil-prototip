# Kullanım Kılavuzu

Bu belge, prototipi **kullanacak / demo yapacak** kişiler içindir.
Kod üzerinde çalışacaksan (insan ya da AI agent) önce kökteki [AGENTS.md](../AGENTS.md) dosyasını oku.

## Prototipi açma

| Yöntem | Nasıl |
|---|---|
| **Canlı link** | https://bselcukimre.github.io/yk-app-prototip/ |
| **Bilgisayarda lokal** | `app/baslat.command` dosyasına çift tıkla (ilk seferde: sağ tık → Aç) → http://localhost:8080 |
| **Telefonda** | `app/baslat.command` çalışırken, aynı Wi-Fi'daki telefondan terminalde yazan `http://<IP>:8080` adresini aç. Tam ekran için Safari'de Paylaş → Ana Ekrana Ekle |

> Derleme/kurulum yok: proje statik HTML/CSS/JS'dir, herhangi bir HTTP sunucusuyla açılır.

## Ana demo akışı (Alışveriş Asistanı)

1. Ana sayfa → üstteki **arama çubuğuna** dokun
2. **"Yapı Kredi Alışveriş Asistanı"** yaz → çıkan sonuca dokun
3. Chat'te öneri çipine bas (mesaj otomatik yazılıp gönderilir)
4. Asistan World kampanyalı/taksitli **Koçtaş** ürünlerini listeler (yatay kaydır)
5. Bir üründe **"World Pay ile Al"** → ödeme ekranı
6. **Worldcard ile öde** seç → **Öde** → **Yapı Kredi Mobil ile Onayla** (Face ID simülasyonu)
7. Başarı ekranı + Worldpuan kazanımı

Diğer uçtan uca akışlar: **Setur otonom senaryosu** (`#setur`), **Karekod ile Öde** (`#springboard`'dan başlar), **Birikim** (Yuvarla / Ekstreden / Maden), **Ödül Yolu**, **Harcama Bölüştür**, **Birlikte Kazan**.

## Bölümlere doğrudan erişim (hash linkleri)

Her bölüm, akışı baştan tekrarlamadan kendi hash linkiyle doğrudan açılır ve gereken state hazır gelir.

İki şekilde erişilir:
- **Uygulama içinden:** soldaki menü → Bölümler
- **Bağlantıyla:** adresin sonuna aşağıdaki etiketlerden birini ekle
  (örnek: `https://bselcukimre.github.io/yk-app-prototip/#tracking`)

| Bölüm | Link |
|---|---|
| Ana ekran | `#home` |
| Koçtaş senaryosu — tamamlandı (dolu sohbet) | `#assistant` |
| Setur otonom senaryosu — tamamlandı | `#setur` |
| Asistan — boştan (animasyonlu) | `#chat` |
| Ödeme ekranı | `#payment` |
| Ödeme başarılı | `#success` |
| Sipariş takibi | `#tracking` |
| Widget Galerisi — tüm çeşitler (YK teması) | `#widgets` |
| Karekod ile Öde — telefon ana ekranı + YK widget'ı | `#springboard` |
| Karekod ile Öde — kamera/tarayıcı (otomatik okur) | `#qr-scan` |
| Karekod ile Öde — tutar + ödeme yöntemi | `#qr-pay` |
| Karekod ile Öde — ödeme başarılı | `#qr-success` |
| Yuvarla & Biriktir — başvuru | `#roundup` |
| Yuvarla & Biriktir — kumbara (grafik, hedef, duraklat/durdur) | `#roundup-jar` |
| Yuvarla & Biriktir — tüm hareketler | `#roundup-history` |
| Ekstreden Biriktir — başvuru | `#spendup` |
| Ekstreden Biriktir — yönet | `#spendup-jar` |
| Ekstreden Biriktir — tüm aktarımlar | `#spendup-history` |
| Maden Biriktir — başvuru | `#metal` |
| Maden Biriktir — yönet | `#metal-jar` |
| Maden Biriktir — tüm alımlar | `#metal-history` |
| Ödül Yolu — hub (Benim Dünyam) | `#fayda` |
| Ödül Yolu — yolculuk (level haritası) | `#fayda-journey` |
| Ödül Yolu — tam ekran ödül seçimi | `#fayda-reward` |
| Ödüllerim — kazanılmış/aktif ödüller | `#fayda-wallet` |
| Harcama Bölüştür — hub | `#split` |
| Harcama Bölüştür — harcama seç | `#split-pick` |
| Harcama Bölüştür — tutar girerek istek | `#split-amount` |
| Harcama Bölüştür — kişi seç | `#split-people` |
| Harcama Bölüştür — form | `#split-form` |
| Harcama Bölüştür — gelen isteği FAST ile öde | `#split-pay` |
| Birlikte Kazan — hub | `#reward-goal` |
| Birlikte Kazan — yeni hedef | `#reward-goal-new` |
| Birlikte Kazan — ilerleme | `#reward-goal-track` |
| Birlikte Kazan — kutlama | `#reward-goal-win` |
| Arama | `#search` |
| Ayarlar | `#settings` |
| Bölümler hub'ı | `#sections` |

## Özellik özetleri

### Yuvarla & Biriktir
Kart seç → yuvarlama kuralı (10/50/100 TL) → birikim hesabı → Talimat Formu → Aktifleştir.
Yönet ekranında kumbara, 6 aylık grafik, hedef belirleme, duraklat/durdur.
World Pay ile ödeme yapınca fark otomatik kumbaraya düşer ve başarı ekranında görünür.

### Karekod ile Öde (ana ekran widget'ı)
Telefon ana ekranındaki (springboard) YK widget'ından: Karekod ile Öde → kamera TR Karekod'u otomatik okur → işyeri + tutar gelir → kart/hesap seç → Öde → onay → başarı. Uygulamaya giriş adımı atlanır.

### Widget Galerisi
Tüm YK widget çeşitleri tek ana-ekran yüzeyinde: karekod aksiyon kartı, bakiye, Worldpuan, aylık bütçe donut'u, Kartsız ATM, döviz & altın kurları. Karekodlu widget'lar dokununca ödeme akışını açar.

### Birikim hub'ı
Tek "Birikim" girişi altında 4 birikim türü × 3 yöntem matrisi (Harcama Yuvarla, Ekstreden, Maden; Transfer Et yöntemi dahil).

### Ödül Yolu / Harcama Bölüştür / Birlikte Kazan
Benim Dünyam altında level haritalı görev-ödül yolculuğu; FAST tabanlı harcama bölüştürme istekleri; ortak hedefle biriktirip TL ödül kazanılan Birlikte Kazan.
