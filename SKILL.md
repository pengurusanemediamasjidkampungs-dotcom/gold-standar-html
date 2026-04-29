# 🗺️ Developer Skill Roadmap: Offline AI IDE

## 🎯 Objektif Utama
Menguasai integrasi antara ekosistem Windows (Frontend/UI) dan Linux/WSL (Backend/AI Engine) untuk membina persekitaran pembangunan yang berdaulat (sovereign) dan pantas.

---

## ## 🛠️ Tech Stack: Offline AI IDE

### 1. Linux & System Management
Fokus kepada pengurusan "Engine Room" di dalam WSL2.
- [ ] **WSL2 (Ubuntu) Management:** Mahir mengawal, mengemaskini, dan menguruskan sistem fail Linux terus dari terminal Windows.
- [ ] **NVIDIA Container Toolkit:** (Khas untuk PC Utama) Pemasangan pemacu (driver) untuk membolehkan Ollama menggunakan kuasa **RTX 3060Ti** (GPU Acceleration).
- [ ] **OLLAMA_ORIGINS Configuration:** Mengkonfigurasi pembolehubah persekitaran (environment variables) untuk membenarkan permintaan lintas asal (CORS) dari browser Windows.
- [ ] **Resource Limiting:** Mengatur had penggunaan RAM/CPU di dalam fail `.wslconfig` supaya laptop 8GB tidak "hang".

### 2. JavaScript (The Intelligent Bridge)
Menghubungkan antaramuka pengguna dengan otak AI.
- [ ] **Async/Await Fetch:** Teknik memanggil API Ollama tanpa menyekat (blocking) kelancaran UI.
- [ ] **JSON Streaming:** Memproses data yang dihantar oleh AI secara berperingkat supaya teks muncul satu persatu (seperti ChatGPT).
- [ ] **Debounce Logic:** Mengimplementasikan "timer" supaya AI tidak dipanggil setiap kali satu huruf ditaip (menjimatkan RAM).
- [ ] **State Management:** Menyimpan sejarah perbualan atau kod sementara supaya AI mempunyai konteks yang betul.

### 3. PowerShell 7 (Automation Control)
Alat kawalan jauh untuk menggerakkan kedua-dua dunia.
- [ ] **Cross-Platform Scripting:** Menggunakan sintaks `wsl -d Ubuntu -- bash -c` untuk menjalankan arahan Linux dari Windows.
- [ ] **Background Process Management:** Menjalankan `ollama serve` dalam sesi tersembunyi (minimized) supaya tidak mengganggu ruang kerja.
- [ ] **Environment Variable Injection:** Menyuntik konfigurasi sistem (seperti port API) secara dinamik melalui skrip `.ps1`.

---

## 📚 Rujukan & Dokumentasi (Quick Links)
- **Ollama Documentation:** [github.com/ollama/ollama](https://github.com/ollama/ollama)
- **WSL Networking:** [Microsoft Docs - Accessing Linux networking](https://learn.microsoft.com/en-us/windows/wsl/networking)
- **MDN Web Docs:** [Using Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- **PowerShell 7 Core:** [Microsoft Learn - PowerShell Documentation](https://learn.microsoft.com/en-us/powershell/)

---

## 📈 Status Kemajuan (Progress Tracker)
| Kategori | Tahap Penguasaan | Status |
| :--- | :--- | :--- |
| **System Integration** | Dasar (Basic) | 🟡 Dalam Proses |
| **AI Communication** | Menengah (Intermediate) | ⚪ Belum Mula |
| **PowerShell Automation** | Dasar (Basic) | 🟡 Dalam Proses |
| **UI/UX (Glassmorphism)** | Mahir (Expert) | 🟢 Selesai |

---

> **Nota Strategik:** > Memandangkan laptop sekarang mempunyai 8GB RAM, fokuskan kepada **JavaScript Debounce Logic** terlebih dahulu. Ini akan memastikan IDE anda tidak memakan memori yang banyak ketika anda melakukan eksperimen awal.
