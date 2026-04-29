/**
 * ui-effects.js - Micro-interactions dan kesan visual
 */
const UIEffects = {
    setupGlow(button) {
        button.addEventListener('mouseenter', () => {
            button.style.boxShadow = "0 0 20px var(--color-accent-glow)";
        });
        button.addEventListener('mouseleave', () => {
            button.style.boxShadow = "none";
        });
    },
    
    toggleActiveTab(tabs, activeElement) {
        tabs.forEach(tab => tab.classList.remove('active'));
        activeElement.classList.add('active');
    }
};
