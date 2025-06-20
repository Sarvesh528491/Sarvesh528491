// Hero Section Typing Animation
const welcomeMessage = "Welcome to the JSW-SCPL Bawal Smart Interface";
const subText = "Built by Sarvesh & Saumya — SIP Interns 2025";

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

document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.getElementById('welcome-message');
    const heroSub = document.getElementById('hero-subtext');
    heroTitle.textContent = '';
    heroSub.textContent = '';
    typeText(heroTitle, welcomeMessage, 32, () => {
        setTimeout(() => {
            typeText(heroSub, subText, 18);
        }, 300);
    });

    // Get Started Button
    const getStartedBtn = document.getElementById('get-started');
    getStartedBtn.addEventListener('click', () => {
        // For now, just scroll to chatbot card
        const chatbotCard = document.getElementById('chatbot-card');
        chatbotCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Optionally, show an alert
        // alert('Get Started functionality coming soon!');
    });

    // Chatbot Button Logic Stub
    const chatbotCard = document.getElementById('chatbot-card');
    chatbotCard.addEventListener('click', () => {
        // Placeholder for future chatbot integration
        alert('Chatbot feature coming soon!');
    });
}); 