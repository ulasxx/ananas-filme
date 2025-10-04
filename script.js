// Tema değiştirme butonu
const toggleBtn = document.getElementById("darkToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Buton simgesini değiştir
  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});
if (film) {
  container.innerHTML = `
    <section class="featured">
      <h2>${film.title}</h2>
      <img src="${film.image}" alt="${film.title}" style="max-width:500px; border-radius:10px;">
      <p><strong>${film.genre}</strong></p>
      <p>${film.description}</p>
      <video controls width="500" style="margin-top:20px; border-radius:10px;">
        <source src="${film.video}" type="video/mp4">
        Tarayıcınız video etiketini desteklemiyor.
      </video>
    </section>
  `;
}