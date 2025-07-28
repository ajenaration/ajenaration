// --- script.js ---

// 1. Hero Section Interactive Background (Conceptual)
// For a sophisticated animation like particles or generative art, you'd likely use a library.
// Example with a very basic, custom JavaScript approach (for illustration, not production):

const heroBg = document.getElementById('interactive-background');
if (heroBg) {
    // Basic idea: create glowing circles that follow mouse
    let mouseX = 0;
    let mouseY = 0;

    heroBg.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        // In a real scenario, you'd update a particle system here
    });

    // You'd have a rendering loop (e.g., using requestAnimationFrame)
    // that updates and draws elements based on mouseX, mouseY
    function animateHeroBg() {
        // Example: dynamically create small, fading elements
        const glow = document.createElement('div');
        glow.className = 'mouse-glow';
        glow.style.left = `${mouseX}px`;
        glow.style.top = `${mouseY}px`;
        heroBg.appendChild(glow);

        // Remove after animation (CSS handles fade-out)
        glow.addEventListener('animationend', () => {
            glow.remove();
        });

        // setTimeout(animateHeroBg, 50); // Less efficient, but simple illustration
        // For smoother animation, use requestAnimationFrame
        requestAnimationFrame(animateHeroBg); // This would be the actual loop initiation
    }
    // animateHeroBg(); // Uncomment to run this very basic example
}

// CSS for .mouse-glow (add to your style.css):
/*
.hero-bg-animation .mouse-glow {
    position: absolute;
    width: 20px;
    height: 20px;
    background: radial-gradient(circle, var(--gradient-start) 0%, var(--gradient-end) 70%, transparent 100%);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: fadeOutGlow 1.5s forwards;
    pointer-events: none; // Don't block mouse events
    filter: blur(5px);
}

@keyframes fadeOutGlow {
    from { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    to { opacity: 0; transform: translate(-50%, -50%) scale(2); }
}
*/


// 2. Personalized Data Aura (Conceptual - using Canvas)
const dataAuraCanvasContainer = document.getElementById('data-aura-canvas');
if (dataAuraCanvasContainer) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    dataAuraCanvasContainer.appendChild(canvas);

    let animationFrameId; // To store the requestAnimationFrame ID

    function resizeCanvas() {
        // Make canvas fill its container
        canvas.width = dataAuraCanvasContainer.clientWidth;
        canvas.height = dataAuraCanvasContainer.clientHeight;
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId); // Stop old animation
        }
        drawAura(); // Redraw for new size
    }

    window.addEventListener('resize', resizeCanvas); // Adjust canvas on window resize
    resizeCanvas(); // Initial size setting

    // Example aura generation - very simple!
    function drawAura() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

        // Get the gradient from CSS variables
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, getComputedStyle(document.documentElement).getPropertyValue('--gradient-start'));
        gradient.addColorStop(1, getComputedStyle(document.documentElement).getPropertyValue('--gradient-end'));

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;

        // Draw a simple "aura" line that moves based on time/mouse
        const time = Date.now() * 0.001; // Current time
        const amplitude = canvas.height / 4;
        const frequency = 0.02;

        ctx.beginPath();
        for (let x = 0; x <= canvas.width; x += 5) {
            // Simple sine wave affected by time for animation
            const y = canvas.height / 2 + Math.sin(x * frequency + time) * amplitude * Math.sin(time * 0.5);
            if (x === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.stroke();

        animationFrameId = requestAnimationFrame(drawAura); // Loop animation
    }

    // Start the aura drawing when the section is visible or page loads
    // You might want to delay this until the user hovers or scrolls to the section
    drawAura(); // Start immediately for demonstration

    // Share button logic (conceptual)
    const shareButton = dataAuraCanvasContainer.nextElementSibling; // Assuming it's the next sibling
    if (shareButton) {
        shareButton.addEventListener('click', () => {
            // In a real app:
            // 1. Convert canvas to image: canvas.toDataURL('image/png')
            // 2. Upload image to a service (e.g., Cloudinary)
            // 3. Generate a shareable URL
            // 4. Use Web Share API or social media share links
            alert("Imagine your personalized aura is shared! (Feature under development)");
        });
    }
}


// 3. Playful Micro-Game/Puzzle (Conceptual)
const microGameContainer = document.getElementById('micro-game-container');
if (microGameContainer) {
    const playButton = microGameContainer.nextElementSibling; // Assuming it's the next sibling

    microGameContainer.innerHTML = "<p>Game content goes here!</p>"; // Initial placeholder

    if (playButton) {
        playButton.addEventListener('click', () => {
            // When button is clicked, start the game
            microGameContainer.innerHTML = "<p>Loading game...</p>";
            // Implement your game logic here. This could be:
            // - A simple memory game
            // - A "catch the falling code block" game
            // - A drag-and-drop puzzle
            // - You might use a small game library or build it from scratch.

            // Example: Simple "Guess the number" game
            let randomNumber = Math.floor(Math.random() * 10) + 1;
            let attempts = 0;
            microGameContainer.innerHTML = `
                <p>Guess a number between 1 and 10:</p>
                <input type="number" id="guessInput" min="1" max="10" style="width: 80px; padding: 8px; border-radius: 5px; border: 1px solid #ccc;">
                <button id="submitGuess" style="margin-left: 10px; padding: 8px 15px; background: var(--gradient-end); color: white; border: none; border-radius: 5px; cursor: pointer;">Guess</button>
                <p id="gameMessage"></p>
            `;

            document.getElementById('submitGuess').addEventListener('click', () => {
                const guess = parseInt(document.getElementById('guessInput').value);
                const messageElement = document.getElementById('gameMessage');
                attempts++;

                if (isNaN(guess) || guess < 1 || guess > 10) {
                    messageElement.textContent = "Please enter a valid number!";
                } else if (guess === randomNumber) {
                    messageElement.textContent = `🎉 Correct! You guessed it in ${attempts} attempts.`;
                    document.getElementById('submitGuess').disabled = true;
                    document.getElementById('guessInput').disabled = true;
                } else if (guess < randomNumber) {
                    messageElement.textContent = "Too low! Try again.";
                } else {
                    messageElement.textContent = "Too high! Try again.";
                }
            });
        });
    }
}


// 4. Smooth Scrolling for Navigation
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sliderTrack = document.querySelector('.slider-track');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const sliderItems = document.querySelectorAll('.slider-item');

    if (!sliderTrack || !prevArrow || !nextArrow || sliderItems.length === 0) {
        console.warn('Slider elements not found. Skipping slider initialization.');
        return; // Exit if elements are missing
    }

    let currentIndex = 0;
    const totalItems = sliderItems.length;

    function updateSlider() {
        // Calculate the translation needed
        const offset = -currentIndex * 100; // 100% for each item
        sliderTrack.style.transform = `translateX(${offset}%)`;
    }

    prevArrow.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
        updateSlider();
    });

    nextArrow.addEventListener('click', () => {
        currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
        updateSlider();
    });

    // Optional: Auto-slide (uncomment to enable)
    // setInterval(() => {
    //     currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
    //     updateSlider();
    // }, 5000); // Change slide every 5 seconds
});