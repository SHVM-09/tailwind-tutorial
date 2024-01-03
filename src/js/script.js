const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const formCloseBtn = document.querySelectorAll('.form-close');
const formModal = document.getElementById('form-modal');

btn.addEventListener('click', () => {
    nav.classList.toggle('hidden');
    nav.classList.toggle('flex');
    btn.classList.toggle('open');
    });

formCloseBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
       formModal.classList.toggle('hidden');
       nav.classList.toggle('hidden');
    });
}   ); 

formModal.onsubmit = (e) => {    
    formModal.classList.toggle('hidden');
}