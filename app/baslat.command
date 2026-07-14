#!/bin/bash
# Yapı Kredi Mobil Prototip — yerel sunucuyu başlatır.
# Finder'da bu dosyaya çift tıkla. (İlk seferde: sağ tık -> Aç)
cd "$(dirname "$0")"

# Aktif Wi-Fi IP'sini bul (en0 -> en1 -> ilk LAN adresi)
IP=$(ipconfig getifaddr en0 2>/dev/null)
[ -z "$IP" ] && IP=$(ipconfig getifaddr en1 2>/dev/null)
[ -z "$IP" ] && IP=$(ifconfig | awk '/inet /{print $2}' | grep -v 127.0.0.1 | head -1)

# Port 8080 zaten kullanılıyorsa (önceki bir sunucu) kapat ki "Address already in use" gelmesin
lsof -ti TCP:8080 -sTCP:LISTEN 2>/dev/null | xargs kill -9 2>/dev/null
sleep 1

clear
echo "====================================================="
echo "   YAPI KREDI MOBIL PROTOTIP"
echo "====================================================="
echo ""
echo "   Bu bilgisayarda:"
echo "      http://localhost:8080"
echo ""
echo "   TELEFONDAN AC (ayni Wi-Fi'da olmali):"
echo "   ----------------------------------------"
echo "        http://$IP:8080"
echo "   ----------------------------------------"
echo ""
echo "   Ipucu: Telefonda tam ekran icin Safari'de"
echo "   Paylas -> Ana Ekrana Ekle."
echo ""
echo "   Durdurmak icin: bu pencerede Ctrl + C"
echo "====================================================="
echo ""

# IPv4 (0.0.0.0) olarak baglan ki telefon erisebilsin
python3 -m http.server 8080 --bind 0.0.0.0
