/* ============================================
   Becky Taylor Voiceover — JavaScript
   ============================================ */

/* --- Portfolio Projects Config ---
   To add a new project: add an object to this array.
   For YouTube: use the video ID (the part after v= in the URL).
   For Vimeo: use the Vimeo video ID.
   Set videoUrl to null for a placeholder card.
*/
const PORTFOLIO_PROJECTS = [
    {
        title: "Christmas TV Ad",
        client: "The Works",
        brief: "A fun seasonal national TV advert needing warmth, charm, and an unmistakable Yorkshire touch.",
        style: "Warm, fun, happy",
        videoUrl: "https://www.youtube.com/watch?v=XSHYAvMDS0Q"
    },
    {
        title: "Event Recap",
        client: "The Royal College of GPs",
        brief: "A powerful closing recap for an annual conference, played to hundreds of delegates. The client needed a voice that would reflect pride, professionalism, and a touch of inspiration.",
        style: "Reflective, professional, uplifting",
        videoUrl: "https://www.youtube.com/watch?v=DnsigpVYpb8&t=108s"
    },
    {
        title: "Animated Explainer",
        client: "GroceryAid",
        brief: "A sensitive yet informative voiceover for an animated campaign promoting a confidential helpline. Aimed at grocery workers facing financial hardship, this required a voice that was compassionate, calm, and reassuring.",
        style: "Supportive, clear, empathetic",
        videoUrl: "assets/video/groceryaid.mp4"
    },
    {
        title: "Brand Introduction",
        client: "Wellknown",
        brief: "An agency introduction video aimed at professionals, requiring clear, confident delivery without sounding robotic.",
        style: "Clear, engaging, trustworthy",
        videoUrl: "assets/video/wellknown.mp4"
    },
];

/* --- Helper: Parse video URL to embed URL --- */
function getEmbedUrl(url) {
    if (!url) return null;

    // YouTube
    const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
    if (ytMatch) {
        let embedUrl = `https://www.youtube-nocookie.com/embed/${ytMatch[1]}`;
        const timeMatch = url.match(/[?&]t=(\d+)/);
        if (timeMatch) {
            embedUrl += `?start=${timeMatch[1]}`;
        }
        return embedUrl;
    }

    // Vimeo
    const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
    if (vimeoMatch) {
        return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
    }

    return null;
}

/* --- Helper: Check if URL is a local MP4 file --- */
function isLocalVideo(url) {
    return url && url.endsWith('.mp4');
}

/* --- Render Portfolio --- */
function renderPortfolio() {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;

    grid.innerHTML = PORTFOLIO_PROJECTS.map(project => {
        const embedUrl = getEmbedUrl(project.videoUrl);
        const isLocal = isLocalVideo(project.videoUrl);

        let videoHTML;
        if (isLocal) {
            videoHTML = `<div class="portfolio-video portfolio-video-local">
                   <video controls preload="metadata" playsinline
                          title="${project.title} — ${project.client}">
                       <source src="${project.videoUrl}" type="video/mp4">
                       Your browser does not support the video tag.
                   </video>
               </div>`;
        } else if (embedUrl) {
            videoHTML = `<div class="portfolio-video">
                   <iframe src="${embedUrl}"
                           title="${project.title} — ${project.client}"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                           allowfullscreen
                           loading="lazy"></iframe>
               </div>`;
        } else {
            videoHTML = `<div class="portfolio-video">
                   <div class="portfolio-placeholder">
                       <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                           <polygon points="5 3 19 12 5 21 5 3"/>
                       </svg>
                       <span>Video coming soon</span>
                   </div>
               </div>`;
        }

        return `
            <article class="portfolio-card fade-in">
                ${videoHTML}
                <div class="portfolio-info">
                    <h3>${project.title}</h3>
                    <p class="portfolio-client">${project.client}</p>
                    <p class="portfolio-brief">${project.brief}</p>
                    <span class="portfolio-style">${project.style}</span>
                </div>
            </article>
        `;
    }).join('');
}

/* --- Navigation --- */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    // Scroll behaviour — add shadow on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        navbar.classList.toggle('scrolled', currentScroll > 50);
        lastScroll = currentScroll;
    }, { passive: true });

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        navToggle.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

/* --- Audio Players --- */
function initAudioPlayers() {
    document.querySelectorAll('.audio-player').forEach(player => {
        const audio = player.querySelector('audio');
        const playBtn = player.querySelector('.play-btn');
        const playIcon = player.querySelector('.play-icon');
        const pauseIcon = player.querySelector('.pause-icon');
        const progressBar = player.querySelector('.progress-bar');
        const progressFill = player.querySelector('.progress-fill');
        const timeDisplay = player.querySelector('.time-display');

        if (!audio || !playBtn) return;

        playBtn.addEventListener('click', () => {
            // Pause all other players first
            document.querySelectorAll('.audio-player audio').forEach(otherAudio => {
                if (otherAudio !== audio && !otherAudio.paused) {
                    otherAudio.pause();
                    const otherPlayer = otherAudio.closest('.audio-player');
                    otherPlayer.querySelector('.play-icon').style.display = '';
                    otherPlayer.querySelector('.pause-icon').style.display = 'none';
                }
            });

            if (audio.paused) {
                audio.play().catch(() => {});
                playIcon.style.display = 'none';
                pauseIcon.style.display = '';
            } else {
                audio.pause();
                playIcon.style.display = '';
                pauseIcon.style.display = 'none';
            }
        });

        audio.addEventListener('timeupdate', () => {
            if (audio.duration) {
                const pct = (audio.currentTime / audio.duration) * 100;
                progressFill.style.width = pct + '%';
                timeDisplay.textContent = formatTime(audio.currentTime);
            }
        });

        audio.addEventListener('ended', () => {
            playIcon.style.display = '';
            pauseIcon.style.display = 'none';
            progressFill.style.width = '0%';
            timeDisplay.textContent = '0:00';
        });

        progressBar.addEventListener('click', (e) => {
            if (audio.duration) {
                const rect = progressBar.getBoundingClientRect();
                const pct = (e.clientX - rect.left) / rect.width;
                audio.currentTime = pct * audio.duration;
            }
        });
    });
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/* --- Scroll Animations (Intersection Observer) --- */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

/* --- Contact Form --- */
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', () => {
        const btn = form.querySelector('button[type="submit"]');
        btn.textContent = 'Sending...';
        btn.disabled = true;
    });
}

/* --- Initialise Everything --- */
document.addEventListener('DOMContentLoaded', () => {
    renderPortfolio();
    initNavigation();
    initAudioPlayers();
    initScrollAnimations();
    initContactForm();
});
