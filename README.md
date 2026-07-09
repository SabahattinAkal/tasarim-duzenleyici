# Tasarım Düzenleyici

E-belge tasarımlarında kullanılmak üzere hazırlanmış örnek **XML** ve **XSLT** şablon dosyalarını içeren kaynak arşividir.

Bu proje; e-Fatura, e-Arşiv, e-İrsaliye, ihracat faturası, serbest meslek makbuzu, müstahsil makbuzu, sigorta ve adisyon gibi belge tipleri için örnek veri ve görsel tasarım şablonlarını düzenli şekilde saklamak amacıyla kullanılabilir.

> Not: Dosyalar `.js` uzantılı görünse de içerikleri doğrudan XML veya XSLT formatındadır. Bu yapı, dosyaların bir uygulama içinde statik kaynak veya string içerik olarak kullanılabilmesi için tercih edilmiş olabilir.

## İçerik

| Dosya | Belge Türü | İçerik |
| --- | --- | --- |
| `e-fatura.xml.js` | e-Fatura | Örnek UBL XML verisi |
| `e-fatura.xslt.js` | e-Fatura | Görsel tasarım / XSLT şablonu |
| `e-arsiv.xml.js` | e-Arşiv Fatura | Örnek UBL XML verisi |
| `e-arsiv.xslt.js` | e-Arşiv Fatura | Görsel tasarım / XSLT şablonu |
| `e-irsaliye.xml.js` | e-İrsaliye | Örnek UBL XML verisi |
| `e-irsaliye.xslt.js` | e-İrsaliye | Görsel tasarım / XSLT şablonu |
| `ihracat.xml.js` | İhracat Faturası | Örnek UBL XML verisi |
| `ihracat.xslt.js` | İhracat Faturası | Görsel tasarım / XSLT şablonu |
| `smm.xml.js` | Serbest Meslek Makbuzu | Örnek UBL XML verisi |
| `smm.xslt.js` | Serbest Meslek Makbuzu | Görsel tasarım / XSLT şablonu |
| `mm.xml.js` | Müstahsil Makbuzu | Örnek UBL XML verisi |
| `mm.xslt.js` | Müstahsil Makbuzu | Görsel tasarım / XSLT şablonu |
| `sigorta.xml.js` | Sigorta Belgesi | Örnek UBL XML verisi |
| `sigorta.xslt.js` | Sigorta Belgesi | Görsel tasarım / XSLT şablonu |
| `adisyon.xml.js` | Adisyon | Örnek UBL XML verisi |
| `adisyon.xslt.js` | Adisyon | Görsel tasarım / XSLT şablonu |

## Proje Yapısı

```text
tasarim-duzenleyici-main/
├── adisyon.xml.js
├── adisyon.xslt.js
├── e-arsiv.xml.js
├── e-arsiv.xslt.js
├── e-fatura.xml.js
├── e-fatura.xslt.js
├── e-irsaliye.xml.js
├── e-irsaliye.xslt.js
├── ihracat.xml.js
├── ihracat.xslt.js
├── mm.xml.js
├── mm.xslt.js
├── sigorta.xml.js
├── sigorta.xslt.js
├── smm.xml.js
└── smm.xslt.js
```

## Kullanım Mantığı

Her belge tipi için iki temel dosya bulunur:

1. **XML dosyası**  
   Belgeye ait örnek UBL verisini içerir.

2. **XSLT dosyası**  
   XML verisinin HTML/görsel belge tasarımına dönüştürülmesi için kullanılan şablondur.

Örnek eşleşme:

```text
e-fatura.xml.js   -> örnek e-Fatura XML verisi
e-fatura.xslt.js  -> e-Fatura tasarım şablonu
```

Bu yapı sayesinde bir belge tipi üzerinde tasarım değişikliği yapılırken, aynı belgeye ait örnek XML verisiyle hızlıca test alınabilir.

## Nasıl Kullanılır?

Projeyi klonlayın:

```bash
git clone https://github.com/kullanici-adi/tasarim-duzenleyici.git
cd tasarim-duzenleyici
```

İlgili belge türünün XML ve XSLT dosyasını seçin:

```text
e-fatura.xml.js
e-fatura.xslt.js
```

Düzenleme yapmak için XSLT dosyasını açın:

```text
e-fatura.xslt.js
```

Tasarım üzerinde tablo, logo, açıklama alanı, satır bilgileri, toplamlar veya firma bilgileri gibi bölümler XSLT içerisinden güncellenebilir.

## Dosya Uzantıları Hakkında

Bu repodaki dosyalar `.js` uzantısına sahip olsa da içerikleri klasik JavaScript kodu değildir.

Örneğin:

```text
e-fatura.xml.js   -> XML içeriği
e-fatura.xslt.js  -> XSLT içeriği
```

Bu dosyaları doğrudan XML/XSLT işlemcilerinde test etmek isterseniz geçici olarak şu şekilde yeniden adlandırabilirsiniz:

```text
e-fatura.xml.js   -> e-fatura.xml
e-fatura.xslt.js  -> e-fatura.xslt
```

## Desteklenen Belge Tipleri

- e-Fatura
- e-Arşiv Fatura
- e-İrsaliye
- İhracat Faturası
- Serbest Meslek Makbuzu
- Müstahsil Makbuzu
- Sigorta Belgesi
- Adisyon

## Geliştirme Notları

- XML dosyaları örnek veri içerir; canlı ortam verisi olarak kullanılmadan önce kontrol edilmelidir.
- XSLT dosyaları belge görünümünü belirler.
- Tasarım değişiklikleri genellikle `.xslt.js` dosyaları üzerinde yapılır.
- XML tarafındaki alan adları, XSLT içerisindeki `cbc:` ve `cac:` namespace kullanımlarıyla eşleşmelidir.
- Projede paket yöneticisi veya build sistemi bulunmadığı için ek kurulum adımı yoktur.

## Örnek Düzenleme Senaryoları

- Belge logosunu değiştirme
- Firma adı, adres veya vergi bilgisi alanlarını düzenleme
- Satır tablosuna yeni kolon ekleme
- Toplam alanlarının görünümünü değiştirme
- Açıklama/not alanlarının konumunu güncelleme
- e-belge çıktısının renk, font veya tablo düzenini revize etme

## Katkı Sağlama

Katkı sağlamak için:

1. Repoyu fork edin.
2. Yeni bir branch oluşturun.
3. Değişikliklerinizi yapın.
4. Commit atın.
5. Pull Request açın.

```bash
git checkout -b feature/tasarim-guncellemesi
git add .
git commit -m "Tasarım şablonu güncellendi"
git push origin feature/tasarim-guncellemesi
```

## Lisans

Bu proje için henüz bir lisans dosyası belirtilmemiştir. Kullanım koşulları için proje sahibiyle iletişime geçilmelidir.
