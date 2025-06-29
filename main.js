// Enhanced data dengan deskripsi
const dataModul = [
  {
    id: 1,
    judul: "Pendahuluan",
    konten:"## Android Development dengan Java
    ### 🎯 Tujuan Pembelajaran
    Setelah menyelesaikan modul ini, Anda akan mampu:
    - Menginstall dan mengkonfigurasi Android Studio
    - Membuat project Android pertama
    - Memahami struktur project Android
    - Memahami Activity dan lifecycle
    - Menjalankan aplikasi di emulator/device
    
    ---
    
    ## 1. Installasi Android Studio
    
    ### Apa itu Android Studio?
    Android Studio adalah IDE (Integrated Development Environment) resmi untuk pengembangan aplikasi Android. Dikembangkan oleh Google berdasarkan IntelliJ IDEA.
    
    ### Langkah Installasi:
    1. **Download Android Studio**
       - Kunjungi: https://developer.android.com/studio
       - Pilih versi untuk OS Anda (Windows/Mac/Linux)
       - File size sekitar 1GB
    
    2. **Install Android Studio**
       - Jalankan installer
       - Pilih "Standard Installation"
       - Tunggu download SDK components (sekitar 2-3GB)
    
    3. **Setup AVD (Android Virtual Device)**
       - Buka AVD Manager
       - Create Virtual Device
       - Pilih device (contoh: Pixel 4)
       - Pilih system image (API 30 atau terbaru)
    
    ### ⚠️ Tips:
    - Pastikan RAM minimal 8GB
    - Sisa storage minimal 4GB
    - Enable virtualization di BIOS (untuk emulator)
    
    ---
    
    ## 2. Membuat Project Pertama
    
    ### Step-by-Step:
    1. **Start New Project**
       - Buka Android Studio
       - Pilih "Create New Project"
       - Pilih "Empty Activity"
    
    2. **Konfigurasi Project**
       ```
       Name: Hello World
       Package name: com.example.helloworld
       Save location: [pilih folder]
       Language: Java
       Minimum API level: API 21 (Android 5.0)
       ```
    
    3. **Project Structure**
       ```
       app/
       ├── src/main/
       │   ├── java/com/example/helloworld/
       │   │   └── MainActivity.java
       │   ├── res/
       │   │   ├── layout/
       │   │   │   └── activity_main.xml
       │   │   ├── values/
       │   │   │   ├── strings.xml
       │   │   │   └── colors.xml
       │   │   └── mipmap/
       │   └── AndroidManifest.xml
       └── build.gradle
       ```
    
    ---
    
    ## 3. Memahami File Penting
    
    ### MainActivity.java
    ```java
    package com.example.helloworld;
    
    import androidx.appcompat.app.AppCompatActivity;
    import android.os.Bundle;
    
    public class MainActivity extends AppCompatActivity {
        @Override
        protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_main);
        }
    }
    ```
    
    **Penjelasan:**
    - `AppCompatActivity`: Parent class untuk activity
    - `onCreate()`: Method yang dipanggil saat activity dibuat
    - `setContentView()`: Menghubungkan activity dengan layout XML
    
    ### activity_main.xml
    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <androidx.constraintlayout.widget.ConstraintLayout 
        xmlns:android="http://schemas.android.com/apk/res/android"
        xmlns:app="http://schemas.android.com/apk/res-auto"
        xmlns:tools="http://schemas.android.com/tools"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        tools:context=".MainActivity">
    
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Hello World!"
            app:layout_constraintBottom_toBottomOf="parent"
            app:layout_constraintLeft_toLeftOf="parent"
            app:layout_constraintRight_toRightOf="parent"
            app:layout_constraintTop_toTopOf="parent" />
    
    </androidx.constraintlayout.widget.ConstraintLayout>
    ```
    
    ### AndroidManifest.xml
    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <manifest xmlns:android="http://schemas.android.com/apk/res/android"
        package="com.example.helloworld">
    
        <application
            android:allowBackup="true"
            android:icon="@mipmap/ic_launcher"
            android:label="@string/app_name"
            android:theme="@style/Theme.HelloWorld">
            
            <activity android:name=".MainActivity">
                <intent-filter>
                    <action android:name="android.intent.action.MAIN" />
                    <category android:name="android.intent.category.LAUNCHER" />
                </intent-filter>
            </activity>
            
        </application>
    </manifest>
    ```
    
    ---
    
    ## 4. Activity Lifecycle
    
    ### Apa itu Activity Lifecycle?
    Activity lifecycle adalah serangkaian method yang dipanggil sistem saat activity mengalami perubahan state.
    
    ### Method Lifecycle Utama:
    ```java
    public class MainActivity extends AppCompatActivity {
        
        @Override
        protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_main);
            // Activity dibuat pertama kali
        }
        
        @Override
        protected void onStart() {
            super.onStart();
            // Activity mulai terlihat
        }
        
        @Override
        protected void onResume() {
            super.onResume();
            // Activity siap berinteraksi dengan user
        }
        
        @Override
        protected void onPause() {
            super.onPause();
            // Activity sebagian tertutup
        }
        
        @Override
        protected void onStop() {
            super.onStop();
            // Activity tidak terlihat
        }
        
        @Override
        protected void onDestroy() {
            super.onDestroy();
            // Activity akan dihancurkan
        }
    }
    ```
    
    ### 📊 Diagram Lifecycle:
    ```
    Created → Started → Resumed → Paused → Stopped → Destroyed
        ↑         ↑         ↑         ↑         ↑         ↑
    onCreate() onStart() onResume() onPause() onStop() onDestroy()
    ```
    
    ---
    
    ## 5. Menjalankan Aplikasi
    
    ### Menggunakan Emulator:
    1. Klik "Run" (▶️) atau Ctrl+R
    2. Pilih emulator yang sudah dibuat
    3. Tunggu emulator booting
    4. Aplikasi akan terinstall otomatis
    
    ### Menggunakan Device Fisik:
    1. Enable "Developer Options" di device
    2. Enable "USB Debugging"
    3. Hubungkan via USB
    4. Pilih device di Android Studio
    5. Klik "Run"
    
    ---
    
    ## 📝 Latihan Praktik
    
    ### Latihan 1: Modifikasi Text
    1. Buka `activity_main.xml`
    2. Ubah text "Hello World!" menjadi "Selamat Datang di Android!"
    3. Jalankan aplikasi
    
    ### Latihan 2: Tambah Log
    1. Buka `MainActivity.java`
    2. Tambahkan di `onCreate()`:
    ```java
    import android.util.Log;
    
    Log.d("MainActivity", "Activity telah dibuat!");
    ```
    3. Jalankan dan lihat Logcat
    
    ### Latihan 3: Lifecycle Log
    1. Override semua method lifecycle
    2. Tambahkan Log.d() di setiap method
    3. Amati urutan pemanggilan di Logcat
    
    ---
    
    ## 🔑 Poin Penting
    
    - **Android Studio** adalah IDE wajib untuk Android development
    - **Activity** adalah komponen dasar yang merepresentasikan satu layar
    - **Layout XML** mendefinisikan tampilan UI
    - **AndroidManifest.xml** berisi konfigurasi aplikasi
    - **Lifecycle** mengatur bagaimana activity berperilaku
    
    ---
    
    ## ❌ Common Errors
    
    ### 1. "SDK not found"
    **Solusi:** Install Android SDK melalui SDK Manager
    
    ### 2. Emulator tidak mau jalan
    **Solusi:** Enable virtualization di BIOS, atau gunakan device fisik
    
    ### 3. "R cannot be resolved"
    **Solusi:** Clean project (Build → Clean Project), atau sync gradle
    
    ### 4. App crashes saat dibuka
    **Solusi:** Cek Logcat untuk error message, pastikan tidak ada typo di XML
    
    ---
    
    ## 🎯 Quiz Singkat
    
    1. Method lifecycle mana yang dipanggil pertama kali?
    2. File mana yang mengatur tampilan UI?
    3. Apa fungsi `setContentView()`?
    4. Dimana kita mendaftarkan activity di Android?
    
    **Jawaban:**
    1. `onCreate()`
    2. Layout XML (activity_main.xml)
    3. Menghubungkan activity dengan layout
    4. AndroidManifest.xml
    
    ---
    
    ## 📚 Persiapan Modul Selanjutnya
    
    Modul berikutnya akan membahas **UI Development** dimana kita akan:
    - Mempelajari berbagai jenis Views
    - Membuat layout yang lebih kompleks
    - Menangani user interactions
    
    Pastikan project Hello World Anda sudah berjalan dengan baik sebelum lanjut ke modul berikutnya!,
     deskripsi: "Pengantar lengkap tentang dunia mobile programming",
  },
  {
    id: 2,
    judul: "Instalasi & Setup",
    konten:
      "Langkah demi langkah setup environment pengembangan yang optimal! Di sini Anda akan belajar menginstal Android Studio sebagai IDE utama, mengkonfigurasi Android SDK dengan berbagai API level, membuat dan mengelola emulator untuk testing, serta setup perangkat fisik untuk debugging. Kami juga akan membahas konfigurasi Git untuk version control dan tips optimasi performa Android Studio agar development process berjalan lancar.",
    deskripsi: "Setup lengkap environment pengembangan Android",
  },
  {
    id: 3,
    judul: "Activity & Intent",
    konten:
      "Memahami building blocks fundamental aplikasi Android! Activity adalah komponen inti yang merepresentasikan single screen dalam aplikasi Anda. Pelajari lifecycle Activity (onCreate, onStart, onResume, onPause, onStop, onDestroy), bagaimana mengelola state transitions, dan best practices untuk resource management. Intent bertindak sebagai messaging system yang memungkinkan komunikasi antar komponen - baik dalam satu aplikasi maupun antar aplikasi. Eksplorasi Explicit Intent untuk navigasi antar Activity dan Implicit Intent untuk mengakses fungsi sistem.",
    deskripsi: "Komponen dasar dan navigasi dalam aplikasi Android",
  },
];

const topikList = document.getElementById("topikList");
const materiView = document.getElementById("materiView");
const materiJudul = document.getElementById("materiJudul");
const materiKonten = document.getElementById("materiKonten");
const backBtn = document.getElementById("backBtn");
const progressBar = document.getElementById("progressBar");
const loadingSpinner = document.getElementById("loadingSpinner");

let currentProgress = 0;

// Update progress bar
function updateProgress() {
  const progress = ((currentProgress + 1) / dataModul.length) * 100;
  progressBar.style.width = progress + "%";
}

// Show loading animation
function showLoading() {
  loadingSpinner.style.display = "block";
  setTimeout(() => {
    loadingSpinner.style.display = "none";
  }, 500);
}

// Enhanced topic list rendering
function renderTopikList() {
  showLoading();

  setTimeout(() => {
    topikList.innerHTML = "";
    dataModul.forEach((topik, index) => {
      const card = document.createElement("button");
      card.className = "topic-card";
      card.style.animationDelay = `${0.1 + index * 0.1}s`;

      card.innerHTML = `
      <div class="topic-icon"></div>
      <h3>${topik.judul}</h3>
      <p class="topic-description">${topik.deskripsi}</p>
    `;

      card.onclick = () => {
        currentProgress = index;
        updateProgress();
        showMateri(topik);
      };

      topikList.appendChild(card);
    });

    materiView.style.display = "none";
    topikList.style.display = "grid";
    progressBar.style.width = "0%";
  }, 500);
}

// Enhanced materi display
function showMateri(topik) {
  showLoading();

  setTimeout(() => {
    materiJudul.textContent = topik.judul;
    materiKonten.textContent = topik.konten;
    topikList.style.display = "none";
    materiView.style.display = "block";
    updateProgress();

    // Add entrance animation
    materiView.style.animation = "slideInRight 0.6s ease-out";
  }, 500);
}

// Enhanced back button with animation
backBtn.addEventListener("click", () => {
  materiView.style.animation = "slideOutLeft 0.4s ease-out";
  setTimeout(() => {
    renderTopikList();
  }, 400);
});

// Add slide out animation
const slideOutKeyframes = `
@keyframes slideOutLeft {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50px);
  }
}
`;

// Inject additional CSS
const style = document.createElement("style");
style.textContent = slideOutKeyframes;
document.head.appendChild(style);

// Add keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && materiView.style.display === "block") {
    backBtn.click();
  }
});

// Initialize with enhanced animation
window.addEventListener("load", () => {
  setTimeout(() => {
    renderTopikList();
  }, 200);
});

// Add smooth scrolling for mobile
document.addEventListener("touchstart", {}, { passive: true });
