const dataModul = [
  {
    id: 1,
    judul: "Modul 1: Setup & Fundamentals",
    kontenUrl: "materi/materi1.html",
    
  },
  {
    id: 2,
    judul: "Modul 2: UI Development",
    kontenUrl: "materi/materi2.html",
    
  },
  {
    id: 3,
    judul: "Modul 3: Java untuk Android",
    kontenUrl: "materi/materi3.html",
    
  },
    {
    id: 4,
    judul: "Modul 4: Multiple Activities",
    kontenUrl: "materi/materi4.html",
    
  },
  {
    id: 5,
    judul: "Modul 5: Lists & Data Display",
    kontenUrl: "materi/materi5.html",
    
  },
    {
    id: 6,
    judul: "Modul 6: Data Storage di Android",
    kontenUrl: "materi/materi6.html",
    
  },
    {
    id: 7,
    judul: "Modul 7: Networking & APIs di Android",
    kontenUrl: "materi/materi7.html",
    
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

function updateProgress() {
  const progress = ((currentProgress + 1) / dataModul.length) * 100;
  progressBar.style.width = progress + '%';
}

function showLoading() {
  loadingSpinner.style.display = 'block';
  setTimeout(() => {
    loadingSpinner.style.display = 'none';
  }, 500);
}

function renderTopikList() {
  showLoading();

  setTimeout(() => {
    topikList.innerHTML = "";
    dataModul.forEach((topik, index) => {
      const card = document.createElement("button");
      card.className = "topic-card";
      card.style.animationDelay = `${0.1 + index * 0.1}s`;

      card.innerHTML = `
        <h3>${topik.judul}</h3>
        
      `;

      card.onclick = () => {
        currentProgress = index;
        showMateri(topik);
      };

      topikList.appendChild(card);
    });

    materiView.style.display = "none";
    topikList.style.display = "grid";
    progressBar.style.width = '0%';
  }, 500);
}

function showMateri(topik) {
  showLoading();

  fetch(topik.kontenUrl)
    .then(response => {
      if (!response.ok) throw new Error("Gagal memuat materi.");
      return response.text();
    })
    .then(html => {
      setTimeout(() => {
        materiJudul.textContent = topik.judul;
        materiKonten.innerHTML = html;
        topikList.style.display = "none";
        materiView.style.display = "block";
        updateProgress();
        materiView.style.animation = 'slideInRight 0.6s ease-out';
      }, 500);
    })
    .catch(error => {
      materiKonten.innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
}

backBtn.addEventListener("click", () => {
  materiView.style.animation = 'slideOutLeft 0.4s ease-out';
  setTimeout(() => {
    renderTopikList();
  }, 400);
});

const animasiKeyframes = `
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

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
const style = document.createElement('style');
style.textContent = animasiKeyframes;
document.head.appendChild(style);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && materiView.style.display === 'block') {
    backBtn.click();
  }
});

window.addEventListener('load', () => {
  setTimeout(() => {
    renderTopikList();
  }, 200);
});