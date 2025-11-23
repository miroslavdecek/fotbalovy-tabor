const targetDate = new Date("2025-06-27T12:00:00").getTime();

setInterval(() => {
  const now = Date.now();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerText = "Tábor začal!";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").innerText =
    `${d}d ${h}h ${m}m ${s}s`;
}, 1000);
