const bar = document.getElementById('bar');
const close_ = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close_) {
    close_.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}