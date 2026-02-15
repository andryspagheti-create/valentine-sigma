function showHeart() {
    const hearts = document.getElementById('hearts');
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    hearts.appendChild(heart);
    
    setTimeout(() => heart.remove(), 3000);
}
