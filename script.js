// 🌗 Tema değiştirme butonu
const toggleBtn = document.getElementById("darkToggle");

// LocalStorage'dan tema durumunu al
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

// 🌟 Tema değiştirme animasyonu
function animateThemeChange(isDark) {
  const flash = document.createElement("div");
  flash.classList.add("theme-flash");
  document.body.appendChild(flash);
  setTimeout(() => flash.remove(), 600);

  document.body.style.transition = "background 0.8s ease, color 0.8s ease";
  document.body.style.filter = "brightness(1.1) saturate(1.2)";
  setTimeout(() => (document.body.style.filter = ""), 700);
}

// 🎛️ Tema geçiş butonu tıklama olayı
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
  animateThemeChange(isDark);

  // Butona tıklayınca kısa bir titreşim efekti
  toggleBtn.classList.add("btn-bounce");
  setTimeout(() => toggleBtn.classList.remove("btn-bounce"), 400);
});

// 🎬 Film bilgisi dinamik olarak yerleştirme
if (typeof film !== "undefined" && film) {
  const container = document.querySelector(".container");

  container.innerHTML = `
    <section class="featured animated fade-in">
      <h2 class="rgb-text">${film.title}</h2>
      <img src="${film.image}" alt="${film.title}" class="featured-img hover-zoom">
      <p class="slide-up"><strong>${film.genre}</strong></p>
      <p class="slide-up delay-1">${film.description}</p>
      <video controls class="fade-in video-box glow-border">
        <source src="${film.video}" type="video/mp4">
        Tarayıcınız video etiketini desteklemiyor.
      </video>
    </section>
  `;

  // 🎞️ Görsel hover efekti için animasyon ekleme
  const img = container.querySelector(".featured-img");
  img.addEventListener("mouseenter", () => {
    img.classList.add("vibrate");
  });
  img.addEventListener("mouseleave", () => {
    img.classList.remove("vibrate");
  });
}

<script>
document.addEventListener("click", function(e) {
  const ripple = document.createElement("span");
  ripple.className = "ripple";
  document.body.appendChild(ripple);

  const size = 100; // dalga boyutu
  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = (e.pageX - size / 2) + "px";
  ripple.style.top = (e.pageY - size / 2) + "px";

  // animasyon bitince kaldır
  ripple.addEventListener("animationend", () => {
    ripple.remove();
  });
});
</script>
