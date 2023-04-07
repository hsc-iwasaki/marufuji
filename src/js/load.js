let progress = 0;
function loading80() {
  return new Promise((resolve) => {
    const progressElement = document.getElementById("loading-progress");
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 10);
      progress = Math.min(progress, 79);
      progressElement.innerText = `${progress}%`;

      if (progress >= 79) {
        clearInterval(interval);
        resolve();
      }
    }, 500);
  });
}

function loading100() {
  return new Promise((resolve) => {
    progress = 80;
    const progressElement = document.getElementById("loading-progress");

    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 10);
      progress = Math.min(progress, 100);
      progressElement.innerText = `${progress}%`;

      if (progress >= 100) {
        clearInterval(interval);
        resolve();
      }
    }, 500);
  });
}

window.addEventListener("DOMContentLoaded", async () => {
  await loading80();
  return;
});
window.addEventListener("load", async () => {
  await loading100();
  const loadingScreen = document.getElementById("loading-screen");
  loadingScreen.style.display = "none";
});
