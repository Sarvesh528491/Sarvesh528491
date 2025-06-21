// Hero Section Typing Animation
const welcomeMessage = "Welcome to JSW Bawal Maintenance Solutions";
const subText = "Advanced Industrial Maintenance & Smart Solutions — Built by Sarvesh & Saumya — SIP Interns 2025";

function typeText(element, text, delay = 30, callback) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, delay);
        } else if (callback) {
            callback();
        }
    }
    type();
}

// Add floating animation elements
function createFloatingElements() {
    const heroSection = document.querySelector('.hero-section');
    
    // Create floating maintenance icons
    const icons = ['🔧', '⚙️', '🔨', '🛠️', '⚡', '🔋'];
    icons.forEach((icon, index) => {
        const floatingIcon = document.createElement('div');
        floatingIcon.className = 'floating-icon';
        floatingIcon.textContent = icon;
        floatingIcon.style.left = `${20 + (index * 15)}%`;
        floatingIcon.style.animationDelay = `${index * 0.5}s`;
        floatingIcon.style.animationDuration = `${3 + (index % 2)}s`;
        heroSection.appendChild(floatingIcon);
    });
}

// Add scroll-triggered animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.hero-content, .navbar, .footer');
    animatedElements.forEach(el => observer.observe(el));
}

// Add interactive button effects
function addButtonEffects() {
    const getStartedBtn = document.getElementById('get-started');
    
    // Add ripple effect
    getStartedBtn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });

    // Add hover sound effect (visual feedback)
    getStartedBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
        this.style.boxShadow = '0 8px 25px rgba(0,112,243,0.3)';
    });

    getStartedBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 2px 12px rgba(0,112,243,0.08)';
    });
}

// Add navbar scroll effect
function addNavbarScrollEffect() {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        // Add background blur effect
        if (scrollTop > 50) {
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.backgroundColor = 'rgba(0, 51, 153, 0.95)';
        } else {
            navbar.style.backdropFilter = 'none';
            navbar.style.backgroundColor = 'linear-gradient(90deg, var(--jsw-blue) 60%, var(--accent-blue) 100%)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Add particle background effect
function createParticleBackground() {
    const heroSection = document.querySelector('.hero-section');
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 3 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        heroSection.appendChild(particle);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.getElementById('welcome-message');
    const heroSub = document.getElementById('hero-subtext');
    heroTitle.textContent = '';
    heroSub.textContent = '';
    
    // Start typing animation
    typeText(heroTitle, welcomeMessage, 32, () => {
        setTimeout(() => {
            typeText(heroSub, subText, 18);
        }, 300);
    });

    // Initialize all animations
    createFloatingElements();
    createParticleBackground();
    addScrollAnimations();
    addButtonEffects();
    addNavbarScrollEffect();

    // Get Started Button
    const getStartedBtn = document.getElementById('get-started');
    const chatbotCard = document.getElementById('chatbot-card');
    
    function openChatbaseWidget() {
        // Try to open Chatbase widget if available
        if (window.Chatbase && typeof window.Chatbase.openChat === 'function') {
            window.Chatbase.openChat();
        } else {
            // Try to click the Chatbase launcher button if present
            const chatbaseLauncher = document.querySelector('div[style*="chatbase"] button, .chatbase-launcher, .cb-launcher, button[aria-label*="chat"]');
            if (chatbaseLauncher) {
                chatbaseLauncher.click();
                return;
            }
            // Try to trigger the widget via DOM event
            const chatbaseFrame = document.getElementById('c0RxreJVYMwVtPKnLvDpw');
            if (chatbaseFrame && chatbaseFrame.contentWindow) {
                chatbaseFrame.contentWindow.postMessage({type: 'open'}, '*');
                return;
            }
            // Fallback: try to click the widget iframe if it exists
            const chatbaseWidget = document.querySelector('iframe[src*="chatbase.co"]');
            if (chatbaseWidget) {
                chatbaseWidget.contentWindow.postMessage({type: 'open'}, '*');
            }
        }
    }
    
    getStartedBtn.addEventListener('click', openChatbaseWidget);
    chatbotCard.addEventListener('click', openChatbaseWidget);
}); 