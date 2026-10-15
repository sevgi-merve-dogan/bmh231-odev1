// Node.js'in yerleşik http modülünü yüklüyoruz.
// Ödevde Express kullanılmaması istendiği için sunucuyu bu modülle yazıyoruz.
const http = require("http");

// Sunucunun dinleyeceği port numarası
const PORT = 3000;

// Sunucuyu oluşturuyoruz.
// Her istek geldiğinde bu fonksiyon çalışır:
//   istek -> tarayıcıdan/curl'den gelen istek (yöntem, yol, başlıklar...)
//   yanit -> bizim geri göndereceğimiz cevap
const sunucu = http.createServer((istek, yanit) => {
  // Gelen her isteğin yöntemini (GET, POST...) ve yolunu (/, /api/ders...) uçbirime yazıyoruz.
  console.log(istek.method, istek.url);

  // Ana sayfa: "/"
  if (istek.url === "/") {
    // 200 = istek başarılı.
    // Content-Type başlığı tarayıcıya cevabın HTML olduğunu
    // ve Türkçe karakterlerin UTF-8 ile kodlandığını söyler.
    yanit.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

    // Cevabın gövdesi: başlık ve /hakkimda sayfasına bağlantı içeren HTML.
    // Ters tırnak (`) sayesinde çok satırlı metin yazabiliyoruz.
    // end() gövdeyi gönderir ve cevabı bitirir.
    yanit.end(`<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <title>BMH231 Ödev 1</title>
</head>
<body>
  <h1>BMH231 Web Programlama Ödev 1</h1>
  <p><a href="/hakkimda">Hakkımda</a></p>
</body>
</html>`);

  // Ders bilgisi: "/api/ders"
  } else if (istek.url === "/api/ders") {
    // Göndereceğimiz veriyi bir JavaScript nesnesi olarak hazırlıyoruz.
    const ders = {
      kod: "BMH231",
      ad: "Web Programlama",
      gun: "Cuma"
    };

    // Cevap JSON olduğu için Content-Type application/json.
    yanit.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });

    // JSON.stringify nesneyi JSON metnine çevirir.
    // HTTP üzerinden nesne değil, metin gönderilebilir.
    yanit.end(JSON.stringify(ders));

  } else {
    // Tanımadığımız bütün yollar için:
    // 404 = istenen kaynak sunucuda yok.
    // Cevap düz metin olduğu için Content-Type text/plain.
    yanit.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    yanit.end("Sayfa bulunamadı");
  }
});

// Sunucuyu 3000 numaralı portta dinlemeye başlatıyoruz.
// Sunucu hazır olduğunda uçbirime bilgi mesajı yazılır.
sunucu.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});