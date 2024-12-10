const startDate = new Date('2024-11-05T00:00:00');

function updateTimer() {
    const now = new Date();
    const difference = now - startDate;

    // Cálculos de tempo
    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const milliseconds = Math.floor(difference % 1000);

    // Atualiza os elementos
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    document.getElementById('milliseconds').textContent = milliseconds.toString().padStart(3, '0');
}

// Atualiza a cada 50ms para ter uma contagem suave dos milissegundos
setInterval(updateTimer, 50);

// Adiciona corações flutuantes dinamicamente
function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    const heart = document.createElement('i');
    heart.className = 'fas fa-heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    
    container.appendChild(heart);
    
    // Remove o coração depois da animação
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Cria novos corações a cada 300ms
setInterval(createFloatingHearts, 300);