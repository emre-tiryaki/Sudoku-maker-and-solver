# 🔢 Sudoku Solver & Generator (Vanilla JS)

Bu proje, klasik 9x9'luk Sudoku oyun tahtasını HTML, CSS ve JavaScript kullanarak oluşturur, çözer ve yeni bulmacalar üretir. Kullanıcı arayüzü üzerinden çözülmesi gereken yeni sudoku bulmacaları üretilebilir, çözülebilir ve sıfırlanabilir.

---

deneyimlemek için: https://sudoku-maker-and-solver.netlify.app

---

## 🚀 Özellikler

- ✅ **Sudoku tahtası oluşturur** (9x9 grid)
- 🧠 **Backtracking algoritmasıyla çözüm** uygular
- 🎲 **Rastgele boşluklu (çözülebilir) sudoku üretir**
- 🎛️ **Boşluk sayısı ayarlanabilir**
- 🔄 **Tahtayı temizle** seçeneği içerir

---

## 🖼️ Arayüz

- **Oluştur (Create Sudoku):** Yeni ve çözülebilir sudoku tahtası oluşturur.  
- **Çöz (Solve Sudoku):** Mevcut Sudoku’yu çözer.  
- **Temizle (Clear Board):** Tahtayı tamamen temizler.  
- **Boşluk Sayısı (Blank Count):** Oluşturulacak Sudoku'daki boş hücre sayısını belirtir (varsayılan: 40).

---

## 📂 Dosya Yapısı

```

/sudoku-solver
├── index.html        # Ana HTML sayfası
├── style.css         # Tüm stiller
├── script.js         # Sudoku çözme, oluşturma ve yönetim mantığı
├── README.md         # Bu dökümantasyon

````

## 🧠 Kullanılan Teknolojiler

* ✅ **HTML5**
* ✅ **CSS3 (Grid Layout)**
* ✅ **Vanilla JavaScript (Backtracking + Random Shuffle)**

---

## 📸 Ekran Görüntüsü

🧩 Sudoku tahtası ve kontrol butonlarıyla sade ve etkileşimli bir arayüz sunar.
---

## ⚠️ Bilinmesi Gerekenler

* `removeCells()` fonksiyonu şu an için sadece hücre siler, tek çözüm garantilemez.
* Eğer tek çözüm gerekliliği varsa, üretim sonrası çözüm sayısı kontrolü yapılmalıdır.

---
