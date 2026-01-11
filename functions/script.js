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


// 2. Personalized Data Aura — math-driven Lissajous & spirograph patterns
const dataAuraCanvasContainer = document.getElementById('data-aura-canvas');
if (dataAuraCanvasContainer) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    dataAuraCanvasContainer.appendChild(canvas);

    let w = 0, h = 0;
    function resizeCanvas() {
        w = canvas.width = dataAuraCanvasContainer.clientWidth;
        h = canvas.height = dataAuraCanvasContainer.clientHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Parameters for math patterns
    let params = {
        a: 3, b: 2, // Lissajous frequencies
        A: 0.45, B: 0.45, // amplitudes (as fraction of min(w,h))
        delta: 0,
        speed: 0.003, // slower base speed
        lineWidth: 2,
        layers: 3
    };

    // Map mouse to frequencies/amplitudes
    function updateParamsFromMouse(x, y) {
        const nx = Math.max(0, Math.min(1, x / w));
        const ny = Math.max(0, Math.min(1, y / h));
        // frequencies 1..8
        params.a = 1 + Math.round(nx * 7);
        params.b = 1 + Math.round((1 - ny) * 7);
        params.A = 0.15 + nx * 0.6;
        params.B = 0.15 + ny * 0.6;
    }

    canvas.addEventListener('mousemove', (e) => {
        const r = canvas.getBoundingClientRect();
        updateParamsFromMouse(e.clientX - r.left, e.clientY - r.top);
    });

    // Click randomizes phase and optionally creates a denser spirograph
    canvas.addEventListener('click', (e) => {
        params.delta = Math.random() * Math.PI * 2;
        // slower random variations
        params.speed = 0.002 + Math.random() * 0.01;
        params.layers = 2 + Math.floor(Math.random() * 5);
    });

    // Draw a Lissajous curve given parameters and phase
    function drawLissajous(a, b, A, B, delta, color, opacity) {
        const R = Math.min(w, h) / 2;
        const cx = w / 2, cy = h / 2;
        ctx.beginPath();
        const steps = Math.max(200, Math.floor(200 * (1 + (A + B))));
        for (let i = 0; i <= steps; i++) {
            const t = (i / steps) * Math.PI * 2;
            const x = cx + R * A * Math.sin(a * t + delta);
            const y = cy + R * B * Math.sin(b * t);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = color;
        ctx.globalAlpha = opacity;
        ctx.lineWidth = params.lineWidth;
        ctx.stroke();
        ctx.globalAlpha = 1;
    }

    // Helper: color based on layer index
    function layerColor(i, layers) {
        // Brown palette default: walnut -> tan
        const s = getComputedStyle(document.documentElement);
        const start = s.getPropertyValue('--aura-brown-start') || '#8B5E3C'; // dark walnut
        const end = s.getPropertyValue('--aura-brown-end') || '#D2B48C';   // tan
        const t = i / Math.max(1, layers - 1);
        function hex2rgb(hex) {
            hex = hex.replace('#','');
            const bigint = parseInt(hex, 16);
            return [ (bigint>>16)&255, (bigint>>8)&255, bigint&255 ];
        }
        const sa = hex2rgb(start.trim());
        const ea = hex2rgb(end.trim());
        const r = Math.round(sa[0] + (ea[0]-sa[0])*t);
        const g = Math.round(sa[1] + (ea[1]-sa[1])*t);
        const b = Math.round(sa[2] + (ea[2]-sa[2])*t);
        return `rgb(${r},${g},${b})`;
    }

    // Animation loop
    let time = 0;
    function animate() {
        // soft fade overlay for trailing effect
        ctx.fillStyle = 'rgba(255,255,255,0.06)';
        ctx.fillRect(0,0,w,h);

        // Draw multiple layered Lissajous curves with slight phase offsets
        for (let i = 0; i < params.layers; i++) {
            const layerDelta = params.delta + i * (Math.PI*2/params.layers) + Math.sin(time*0.0005 + i)*0.2;
            const col = layerColor(i, params.layers);
            const opacity = 0.15 + 0.7*(1 - i/Math.max(1,params.layers-1));
            drawLissajous(params.a + i, params.b + i, params.A, params.B, layerDelta + time*params.speed*0.02, col, opacity);
        }

        time += 16;
        requestAnimationFrame(animate);
    }
    // initialize background
    ctx.fillStyle = '#fff'; ctx.fillRect(0,0,w,h);
    animate();

    // Share snapshot: keep behavior similar to before
    const shareButton = dataAuraCanvasContainer.nextElementSibling;
    if (shareButton) {
        shareButton.addEventListener('click', async () => {
            try {
                const snap = document.createElement('canvas');
                snap.width = w; snap.height = h;
                const sctx = snap.getContext('2d');
                // white background
                sctx.fillStyle = '#ffffff'; sctx.fillRect(0,0,w,h);
                sctx.drawImage(canvas, 0, 0);
                const blob = await new Promise(res => snap.toBlob(res, 'image/png'));

                if (navigator.clipboard && navigator.clipboard.write) {
                    const item = new ClipboardItem({ 'image/png': blob });
                    await navigator.clipboard.write([item]);
                    if (navigator.canShare && navigator.canShare({ files: [new File([blob],'aura.png',{type:'image/png'})] })) {
                        await navigator.share({ files: [new File([blob],'aura.png',{type:'image/png'})], title: 'My Math Aura' });
                    } else {
                        alert('Snapshot copied to clipboard!');
                    }
                } else if (navigator.share) {
                    const url = snap.toDataURL('image/png');
                    await navigator.share({ title: 'My Math Aura', text: 'Check my math-based aura', url });
                } else {
                    const url = URL.createObjectURL(blob);
                    window.open(url, '_blank');
                    alert('Opened snapshot in new tab.');
                }
            } catch (err) {
                console.error(err);
                alert('Unable to share image on this browser.');
            }
        });
    }
}


// 3. Project slideshow: micro-game replaced with a small featured-projects slider
// The global slider initialization (below) will pick up the `.slider-container` inside
// the micro-game card and handle navigation/auto-play. No inline game logic required.


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


// --- Homepage Project Slider (Fade Effect) ---
document.addEventListener('DOMContentLoaded', () => {
    // Select the slider container itself, not just the track for hover events
    const sliderContainer = document.querySelector('.slider-container');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const sliderItems = document.querySelectorAll('.slider-item');

    if (!sliderContainer || !prevArrow || !nextArrow || sliderItems.length === 0) {
        console.warn('Slider elements not found. Skipping slider initialization.');
        return; // Exit if elements are missing
    }

    let currentIndex = 0;
    const totalItems = sliderItems.length;
    let autoSlideInterval; // Variable to hold the interval for auto-slide

    function updateSlider() {
        // Remove 'active' class from all items
        sliderItems.forEach((item) => {
            item.classList.remove('active');
        });

        // Add 'active' class to the current item
        sliderItems[currentIndex].classList.add('active');
    }

    function startAutoSlide() {
        // Clear any existing interval to prevent duplicates
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
        }
        autoSlideInterval = setInterval(() => {
            currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0; // Loop forward
            updateSlider();
        }, 5000); // Change slide every 5 seconds (adjust as needed)
    }

    // Event listener for previous arrow
    prevArrow.addEventListener('click', () => {
        clearInterval(autoSlideInterval); // Stop auto-slide on manual click
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1; // Loop back
        updateSlider();
        startAutoSlide(); // Restart auto-slide after manual interaction
    });

    // Event listener for next arrow
    nextArrow.addEventListener('click', () => {
        clearInterval(autoSlideInterval); // Stop auto-slide on manual click
        currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0; // Loop forward
        updateSlider();
        startAutoSlide(); // Restart auto-slide after manual interaction
    });

    // Initialize the slider: show the first item and start auto-slide
    updateSlider(); // Show the first slide immediately
    startAutoSlide(); // Start the auto-advance

    // Optional: Pause auto-slide on hover and resume when mouse leaves
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval); // Pause auto-slide
        });
        sliderContainer.addEventListener('mouseleave', () => {
            startAutoSlide(); // Resume auto-slide
        });
    }
});

// ===== PROJECT FILTERING =====
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category').split(' ');
                
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    card.classList.remove('hidden');
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.classList.add('hidden');
                    }, 300);
                }
            });
        });
    });
});