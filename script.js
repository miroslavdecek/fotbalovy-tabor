const targetDate = new Date("2025-06-27T12:00:00").getTime();
// Element pro zobrazení odpočtu
const countdown = document.getElementById("countdown");

// Cílové datum – začátek tábora (Upraveno na rok 2025 dle textu v HTML)
// Měsíce v JS jsou 0-11, ale v string formátu ISO (YYYY-MM-DD) je to normálně.
const targetDate = new Date("2025-08-12T14:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Pokud už tábor začal nebo skončil
  if (distance < 0) {
    countdown.innerHTML = "Tábor už začal!";
    return;
  }

  // Výpočet
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  // Hezký výpis bez sekund (vypadá to klidněji), nebo se sekundami dle libosti
  countdown.innerHTML = `${days} dní ${hours} hod ${minutes} min`;
}

// Spustit odpočet
setInterval(updateCountdown, 60000); // Stačí každou minutu
updateCountdown();
