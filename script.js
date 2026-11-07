const yearSpan = document.getElementById('year');
const themeBtn = document.getElementById('theme-btn');
const contactBtn = document.getElementById('contact-btn');
const toast = document.getElementById('toast');

const filterBtns = document.querySelectorAll('.filter-btn');
const skillCards = document.querySelectorAll('.skill-card');
const contactCards = document.querySelectorAll('.contact-card');

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        // Change the button icon: sun in dark mode, moon in light mode
        if (document.body.classList.contains('dark-mode')) {
            themeBtn.textContent = '☀️';
        } else {
            themeBtn.textContent = '🌙';
        }
    });
}


filterBtns.forEach((button) => {
    button.addEventListener('click', () => {

        filterBtns.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.dataset.filter;

        skillCards.forEach((card) => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.classList.remove('hide');   // show the card
            } else {
                card.classList.add('hide');      // hide the card
            }
        });
    });
});


contactCards.forEach((card) => {
    card.addEventListener('click', () => {
        const textToCopy = card.dataset.copy;    
        navigator.clipboard.writeText(textToCopy);
        showToast();                             
    });
});


function showToast() {
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);   
}

if (contactBtn) {
    contactBtn.addEventListener('click', () => {
        alert('Thank you for reaching out! Contact form coming soon.');
    });
}

// =========================================================
// Cherry Blossom Petals
// =========================================================

function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');

    petal.style.left = Math.random() * 100 + 'vw';

    const size = Math.random() * 8 + 8;
    petal.style.width = size + 'px';
    petal.style.height = size + 'px';

    const duration = Math.random() * 5 + 5;
    petal.style.animationDuration = duration + 's';

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, duration * 1000);
}

setInterval(createPetal, 300);