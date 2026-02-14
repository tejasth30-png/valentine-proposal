'use strict';

// Interactive logic for the unclickable No button
const noButton = document.getElementById('no-button');

noButton.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

// Confetti effect
function startConfetti() {
    const colors = ['#ff0', '#0f0', '#00f', '#f00', '#ff00', '#00ff'];
    const confetti = document.createElement('div');
    confetti.style.position = 'absolute';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.top = Math.random() * 100 + '%';
    confetti.style.left = Math.random() * 100 + '%';
    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 3000);
}

function celebrate() {
    for (let i = 0; i < 100; i++) {
        setTimeout(startConfetti, i * 100);
    }
}

// Start celebration on clicking the Yes button
const yesButton = document.getElementById('yes-button');

yesButton.addEventListener('click', celebrate);