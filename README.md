<div align="center">

# Tasarım Düzenleyici

**E-belge tasarımları için XML ve XSLT şablon arşivi**

<img alt="XML" src="https://img.shields.io/badge/XML-UBL-orange?style=for-the-badge" />
<img alt="XSLT" src="https://img.shields.io/badge/XSLT-Template-blue?style=for-the-badge" />
<img alt="e-Belge" src="https://img.shields.io/badge/e--Belge-Tasarım-green?style=for-the-badge" />

</div>

---

## Genel Bakış

**Tasarım Düzenleyici**, e-belge çıktılarında kullanılan örnek **XML** verileri ve bu verileri görsel belge tasarımına dönüştüren **XSLT** şablonlarını düzenli şekilde saklayan bir kaynak reposudur.

Bu repo; e-Fatura, e-Arşiv, e-İrsaliye, ihracat faturası, serbest meslek makbuzu, müstahsil makbuzu, sigorta ve adisyon gibi belge tiplerinde tasarım düzenlemesi yaparken hızlıca örnek veri ve şablon eşleştirmesi yapmak için kullanılabilir.

> [!IMPORTANT]
> Dosyalar `.js` uzantılı görünse de içerikleri klasik JavaScript kodu değildir. Dosyalar XML veya XSLT içeriği barındırır. Bu yapı, dosyaların bir uygulama içinde statik kaynak/string olarak kullanılabilmesi için tercih edilmiş olabilir.

---

## Repository İçeriği

| Belge Türü | XML Örnek Veri | XSLT Tasarım Şablonu |
| --- | --- | --- |
| e-Fatura | `e-fatura.xml.js` | `e-fatura.xslt.js` |
| e-Arşiv Fatura | `e-arsiv.xml.js` | `e-arsiv.xslt.js` |
| e-İrsaliye | `e-irsaliye.xml.js` | `e-irsaliye.xslt.js` |
| İhracat Faturası | `ihracat.xml.js` | `ihracat.xslt.js` |
| Serbest Meslek Makbuzu | `smm.xml.js` | `smm.xslt.js` |
| Müstahsil Makbuzu | `mm.xml.js` | `mm.xslt.js` |
| Sigorta Belgesi | `sigorta.xml.js` | `sigorta.xslt.js` |
| Adisyon | `adisyon.xml.js` | `adisyon.xslt.js` |

---

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

---

## Kullanım Mantığı

Her belge tipi için iki ana dosya bulunur:

| Dosya Tipi | Görevi |
| --- | --- |
| `*.xml.js` | Belgeye ait örnek UBL/XML verisini içerir. |
| `*.xslt.js` | XML verisinin HTML/görsel belge tasarımına dönüşmesini sağlayan XSLT şablonudur. |

Örnek eşleşme:

```text
e-fatura.xml.js   → örnek e-Fatura XML verisi
e-fatura.xslt.js  → e-Fatura görsel tasarım şablonu
```

Bu yapı sayesinde bir belge tasarımında değişiklik yaparken, aynı belge tipine ait örnek XML verisiyle hızlıca test alınabilir.

---

## Hızlı Başlangıç

Projeyi bilgisayarınıza klonlayın:

```bash
git clone <repository-url>
cd tasarim-duzenleyici-main
```

Düzenlemek istediğiniz belge tipini seçin:

```text
e-fatura.xml.js
e-fatura.xslt.js
```

Tasarım değişikliği için genellikle ilgili `xslt` dosyası düzenlenir:

```text
e-fatura.xslt.js
```

Ardından aynı belge tipine ait XML örneğiyle çıktı kontrolü yapılabilir.

---

## Düzenleme Yapılabilecek Alanlar

XSLT şablonları üzerinden genellikle aşağıdaki alanlar düzenlenebilir:

- Logo ve üst bilgi alanı
- Firma adı, adres ve vergi bilgileri
- Belge numarası, tarih ve senaryo bilgileri
- Ürün/hizmet satır tablosu
- KDV, ara toplam ve genel toplam alanları
- Açıklama/not bölümleri
- Font, renk, tablo çizgileri ve genel görünüm

---

## Dosya Uzantıları Hakkında

Bu repodaki dosyalar `.js` uzantılıdır; ancak içerikleri XML veya XSLT formatındadır.

Test veya düzenleme sırasında dosyaları geçici olarak şu şekilde yeniden adlandırabilirsiniz:

```text
e-fatura.xml.js   → e-fatura.xml
e-fatura.xslt.js  → e-fatura.xslt
```

> [!TIP]
> XML ve XSLT dosyalarını düzenlerken `cbc:` ve `cac:` namespace alanlarının doğru eşleştiğinden emin olun. XSLT içindeki alan adları XML içerisindeki alanlarla uyuşmazsa ilgili veri çıktıda görünmeyebilir.

---

## Desteklenen Belge Tipleri

<div align="center">

| e-Belge | Durum |
| --- | --- |
| e-Fatura | ✅ |
| e-Arşiv Fatura | ✅ |
| e-İrsaliye | ✅ |
| İhracat Faturası | ✅ |
| Serbest Meslek Makbuzu | ✅ |
| Müstahsil Makbuzu | ✅ |
| Sigorta Belgesi | ✅ |
| Adisyon | ✅ |

</div>

---

## Geliştirme Notları

- Projede paket yöneticisi veya build sistemi bulunmaz.
- Ek kurulum adımı gerektirmez.
- Tasarım değişiklikleri çoğunlukla `.xslt.js` dosyalarında yapılır.
- XML dosyaları örnek veri içerir; canlı ortam verisi olarak kullanılmadan önce kontrol edilmelidir.
- Görünmeyen alanlarda önce XML içeriği, sonra XSLT içindeki XPath seçicileri kontrol edilmelidir.

---

## Örnek Çalışma Akışı

```text
1. Belge tipini seç
2. İlgili .xml.js ve .xslt.js dosyasını aç
3. Tasarım değişikliğini .xslt.js dosyasında yap
4. Örnek XML verisiyle çıktıyı test et
5. Görsel sonucu kontrol edip düzenlemeyi tamamla
```

---

<div align="center">

**E-belge tasarımlarını düzenli, okunabilir ve kolay test edilebilir şekilde yönetmek için hazırlanmıştır.**

</div>
