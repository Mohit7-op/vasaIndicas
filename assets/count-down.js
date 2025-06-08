document.addEventListener("DOMContentLoaded", function () {
  const el = document.getElementById("countdown-timer");
  const targetDate = new Date(
    `${el.dataset.year}-${el.dataset.month}-${el.dataset.day}T${el.dataset.time}`
  );

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      document.querySelector(".day span").innerText = "00";
      document.querySelector(".hours span").innerText = "00";
      document.querySelector(".minutes span").innerText = "00";
      document.querySelector(".seconds span").innerText = "00";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.querySelector(".day span").innerText = String(days).padStart(
      2,
      "0"
    );
    document.querySelector(".hours span").innerText = String(hours).padStart(
      2,
      "0"
    );
    document.querySelector(".minutes span").innerText = String(
      minutes
    ).padStart(2, "0");
    document.querySelector(".seconds span").innerText = String(
      seconds
    ).padStart(2, "0");
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

});
