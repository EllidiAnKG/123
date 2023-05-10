const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnStart = document.querySelector('.button_start');
const close = document.querySelector('.icon-close');
const enter = document.querySelector('.btn-enter');

loginLink.addEventListener('click', () => {
    wrapper.classList.add('active')
});

registerLink.addEventListener('click', () => {
    wrapper.classList.remove('active')
});

btnStart.addEventListener('click', () => {
    wrapper.classList.add('btn-start')
});

close.addEventListener('click', () => {
    wrapper.classList.remove('btn-start')
});
enter.addEventListener('click', () => {
    enter = window.location.href = '/hub.html'
})


