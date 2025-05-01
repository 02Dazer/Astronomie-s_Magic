const canvas = document.getElementById("black");
const ctx = canvas.getContext("2d");

let width, height;
function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    ctx.clearRect(0, 0, width, height);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
const customColors = [
    "rgba(0, 0, 0, 0.9)", 
    "rgba(50, 50, 50, 0.7)", 
    "rgba(30, 30, 60, 0.6)", 
    "rgba(48, 25, 52, 0.8)"
];
const waves = [];
const numberOfWaves = customColors.length;

for (let i = 0; i < numberOfWaves; i++) {
    waves.push({
        x: width / 2,
        y: height / 2,
        radius: 200 + i * 100,
        color: customColors[i],
        speed: 6 + i * 1 
    });
}

function drawBlackHoleEffect() {
    ctx.clearRect(0, 0, width, height);

    waves.forEach(wave => {
        wave.radius += wave.speed;
        if (wave.radius > Math.max(width, height) * 1.5) {
            wave.radius = 0; 
        }
        const gradient = ctx.createRadialGradient(
            wave.x, wave.y, wave.radius / 6, wave.x, wave.y, wave.radius
        );
        gradient.addColorStop(0, wave.color);
        gradient.addColorStop(0.8, "rgba(0, 0, 0, 0.7)");
        gradient.addColorStop(1, "black");
        
        ctx.beginPath();
        ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.closePath();
    });

    requestAnimationFrame(drawBlackHoleEffect);
}

drawBlackHoleEffect();