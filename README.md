# bmh231-odev1

BMH231 Web Programlama dersi 1. ödevi için Node.js'in yerleşik `http` modülüyle (Express kullanmadan) yazılmış basit bir web sunucusu.

## Amaç

Sunucu birkaç sabit yola yanıt verir, AGEP son teslim tarihine kalan gün sayısını `dayjs` paketiyle hesaplar ve HTTP durum kodlarının (200, 404, 405) nasıl çalıştığını gösterir.

## Gereksinimler

- [Node.js](https://nodejs.org/) (LTS sürümü)
- [Git](https://git-scm.com/)

## Kurulum ve çalıştırma

```bash
git clone https://github.com/sevgi-merve-dogan/bmh231-odev1.git
cd bmh231-odev1
npm install
npm start
```

Sunucu başladıktan sonra tarayıcıda `http://localhost:3000` adresini açın.

## Desteklenen yollar

| Yöntem | Yol | Yanıt |
|---|---|---|
| GET | `/` | 200, HTML ana sayfa (`/hakkimda` bağlantısı içerir) |
| GET | `/hakkimda` | 200, HTML tanıtım sayfası |
| GET | `/api/ders` | 200, JSON: ders kodu, adı ve günü |
| GET | `/api/agep` | 200, JSON: AGEP son teslim tarihi (01.11.2026) ve kalan gün sayısı |
| GET | Diğer yollar | 404, düz metin: "Sayfa bulunamadı" |
| GET dışı (POST, PUT, DELETE...) | Tüm yollar | 405, düz metin, `Allow: GET` başlığıyla |

Sunucu, gelen her isteğin yöntemini ve yolunu uçbirime yazar.

## Kullanılan paketler

- [dayjs](https://www.npmjs.com/package/dayjs): tarih hesapları için