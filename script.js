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