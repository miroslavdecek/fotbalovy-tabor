// script.js
// Dynamický odpočet pro element #countdown (česky)

document.addEventListener('DOMContentLoaded', function () {
  const countdownEl = document.getElementById('countdown');
  if (!countdownEl) return;

  // Začátek tábora: 12. srpna 2025 v 09:00
  const start = new Date(2025, 7, 12, 9, 0, 0); // August = 7 (měsíce jsou 0-indexované)
  // Konec tábora: 12. – 17. srpna (6 dní)
  const end = new Date(start);
  end.setDate(end.getDate() + 6);

  // Oznamujeme změny čtečce obrazovky
  countdownEl.setAttribute('aria-live', 'polite');

  // Jednoduchá česká pluralizace pro 3 tvary
  function czPlural(n, forms) {
    const m = Math.abs(n);
    if (m % 100 >= 11 && m % 100 <= 14) return forms[2];
    if (m % 10 === 1) return forms[0];
    if (m % 10 >= 2 && m % 10 <= 4) return forms[1];
    return forms[2];
  }

  function formatParts(totalSeconds) {
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const parts = [];

    if (days > 0) parts.push(`${days} ${czPlural(days, ['den', 'dny', 'dní'])}`);
    if (hours > 0 || parts.length > 0) parts.push(`${hours} ${czPlural(hours, ['hodina', 'hodiny', 'hodin'])}`);
    if (minutes > 0 || parts.length > 0) parts.push(`${minutes} ${czPlural(minutes, ['minuta', 'minuty', 'minut'])}`);
    parts.push(`${seconds} ${czPlural(seconds, ['sekunda', 'sekundy', 'sekund'])}`);

    return parts.join(' ');
  }

  function update() {
    const now = new Date();

    if (now < start) {
      const diffSec = Math.max(0, Math.floor((start - now) / 1000));
      countdownEl.textContent = formatParts(diffSec);
    } else if (now >= start && now < end) {
      countdownEl.textContent = 'Tábor právě probíhá!';
    } else {
      countdownEl.textContent = 'Tábor skončil.';
      if (timer) clearInterval(timer);
    }
  }

  let timer = null;
  update();
  timer = setInterval(update, 1000);
});
