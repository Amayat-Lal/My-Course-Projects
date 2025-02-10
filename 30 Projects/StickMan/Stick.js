const gameContainer = document.getElementById('game-container');
const playerArcher = document.getElementById('player-archer');
const enemyArchers = document.querySelectorAll('.enemy-archer');
const arrowCanvas = document.getElementById('arrow-canvas');
const ctx = arrowCanvas.getContext('2d');

// Game constants
const arrowSpeed = 5;
const arrowWidth = 10;
const arrowHeight = 30;

// Game state
let isShooting = false;
let arrowX = 0;
let arrowY = 0;

// Event listeners
window.addEventListener('mousedown', startShooting);
window.addEventListener('mouseup', stopShooting);
window.addEventListener('mousemove', aimArrow);

// Game loop
function gameLoop() {
    // Update arrow position
    if (isShooting) {
        arrowY -= arrowSpeed;
        if (arrowY < 0) {
            isShooting = false;
        }
    }

    // Draw arrow
    ctx.clearRect(0, 0, arrowCanvas.width, arrowCanvas.height);
    ctx.fillStyle = 'black';
    ctx.fillRect(arrowX, arrowY, arrowWidth, arrowHeight);

    // Check for collisions
    enemyArchers.forEach(enemyArcher => {
        if (isColliding(arrowX, arrowY, arrowWidth, arrowHeight, enemyArcher.offsetLeft, enemyArcher.offsetTop, enemyArcher.offsetWidth, enemyArcher.offsetHeight)) {
            // Handle collision (e.g., remove enemy archer)
            enemyArcher.remove();
            isShooting = false;
        }
    });

    requestAnimationFrame(gameLoop);
}

// Helper functions
function startShooting() {
    isShooting = true;
    arrowX = playerArcher.offsetLeft + playerArcher.offsetWidth / 2 - arrowWidth / 2;
    arrowY = playerArcher.offsetTop;
}

function stopShooting() {
    isShooting = false;
}

function aimArrow(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const angle = Math.atan2(mouseY - arrowY, mouseX - arrowX);
    playerArcher.style.transform = `rotate(${angle}rad)`;
}

function isColliding(x1, y1, w1, h1, x2, y2, w2, h2) {
    return x1 + w1 > x2 && x1 < x2 + w2 && y1 + h1 > y2 && y1 < y2 + h2;
}

// Start the game
gameLoop();