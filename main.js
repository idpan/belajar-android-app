// Enhanced data dengan deskripsi
    const dataModul = [
      {
        id: 1,
        judul: "Pendahuluan",
        konten: "konten 1.",
        deskripsi: "Pengantar lengkap tentang dunia mobile programming"
      },
      {
        id: 2,
        judul: "Instalasi & Setup",
        konten: "konten 2",
        deskripsi: "Setup lengkap environment pengembangan Android"
      },
      {
        id: 3,
        judul: "Activity & Intent",
        konten: "konten 3",
        deskripsi: "Komponen dasar dan navigasi dalam aplikasi Android"
      }
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
      progressBar.style.width = progress + '%';
    }

    // Show loading animation
    function showLoading() {
      loadingSpinner.style.display = 'block';
      setTimeout(() => {
        loadingSpinner.style.display = 'none';
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
        progressBar.style.width = '0%';
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
        materiView.style.animation = 'slideInRight 0.6s ease-out';
      }, 500);
    }

    // Enhanced back button with animation
    backBtn.addEventListener("click", () => {
      materiView.style.animation = 'slideOutLeft 0.4s ease-out';
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
    const style = document.createElement('style');
    style.textContent = slideOutKeyframes;
    document.head.appendChild(style);

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && materiView.style.display === 'block') {
        backBtn.click();
      }
    });

    // Initialize with enhanced animation
    window.addEventListener('load', () => {
      setTimeout(() => {
        renderTopikList();
      }, 200);
    });

    // Add smooth scrolling for mobile
    document.addEventListener('touchstart', {}, {passive: true});
                 
 
                        
