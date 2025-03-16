/* script.js */
function startCountdown() {
  const countdownElement = document.getElementById("countdown");
  const targetDate = new Date("March 17, 2025 00:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const diff = targetDate - now;
    if (diff <= 0) {
      countdownElement.innerHTML = "<h2>🎉 Happy Birthday Sneha! 🎂</h2>";
      clearInterval(intervalId);
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    countdownElement.innerHTML = `<h2>${days}d ${hours}h ${minutes}m ${seconds}s</h2>`;
  }
  
  const intervalId = setInterval(updateCountdown, 1000);
  updateCountdown();
}
window.onload = startCountdown;