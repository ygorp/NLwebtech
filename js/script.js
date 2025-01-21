const btnAbrir = document.getElementById('btn-menu');
const menu = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');

const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');

btnAbrir.addEventListener('click', () => {
  menu.classList.toggle('menu-mobile--aberto');
});

menu.addEventListener('click', () => {
    menu.classList.toggle('menu-mobile--aberto');
});


overlay.addEventListener('click', () => {
    menu.classList.toggle('menu-mobile--aberto');
});

    

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const formData = new FormData(form);
    const response = await fetch(form.action, {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        form.reset();
    } else {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
});