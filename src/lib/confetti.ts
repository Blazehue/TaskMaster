// Confetti celebration using CSS animations and DOM manipulation
export function triggerConfetti() {
  const colors = ['#fbe857', '#90ee90', '#87ceeb', '#ffffff', '#ff6b6b']
  const confettiCount = 50
  const container = document.createElement('div')
  
  container.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
  `
  
  document.body.appendChild(container)
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div')
    const color = colors[Math.floor(Math.random() * colors.length)]
    const left = Math.random() * 100
    const animationDuration = 2 + Math.random() * 3
    const size = 8 + Math.random() * 8
    
    confetti.style.cssText = `
      position: absolute;
      top: -10px;
      left: ${left}%;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      border: 2px solid ${color === '#fbe857' ? '#000' : color};
      opacity: 0.9;
      animation: confetti-fall ${animationDuration}s linear forwards;
      transform: rotate(${Math.random() * 360}deg);
    `
    
    container.appendChild(confetti)
  }
  
  // Clean up after animation
  setTimeout(() => {
    document.body.removeChild(container)
  }, 5000)
}

// Add CSS animation if not already present
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = `
    @keyframes confetti-fall {
      0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
      }
      100% {
        transform: translateY(100vh) rotate(720deg);
        opacity: 0;
      }
    }
  `
  document.head.appendChild(style)
}
