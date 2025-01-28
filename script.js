function randomColor() {
  const randomColorElement = document.querySelector(".randomColor");
  function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  setInterval(() => {
    randomColorElement.style.color = randomRGB();
  }, 500);
}

// Rainbow text effect for COLORS
function rainbowEffect() {
  const colorfulElement = document.querySelector(".colorful");
  const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
  const text = colorfulElement.textContent;

  function changeRainbow() {
    colorfulElement.innerHTML = text.split('').map((char, index) => {
      const colorIndex = (index + Math.floor(Date.now() / 500)) % colors.length; // Change color every 0.5 seconds
      return `<span style="color: ${colors[colorIndex]}">${char}</span>`;
    }).join('');
    requestAnimationFrame(changeRainbow);
  }
  changeRainbow();
}

window.addEventListener("DOMContentLoaded", () => {
  randomColor();
  rainbowEffect();
});
