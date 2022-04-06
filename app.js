document.querySelectorAll('.dropdown > a').forEach(e => {
    e.addEventListener('click', (event) => event.preventDefault())
})

document.querySelectorAll('.mega-dropdown > a').forEach(e => {
    e.addEventListener('click', (event) => event.preventDefault())
})

document.querySelector('#mb-menu-toggle').addEventListener('click', () => document.querySelector('#header-wrapper').classList.add('active'))

document.querySelector('#mb-menu-close').addEventListener('click', () => document.querySelector('#header-wrapper').classList.remove('active'))


let count =0;
const counter = document.getElementById('counter');
document.getElementById('add-animation').addEventListener('click', event => {
    const cl = counter.classList;
    const c = 'animation-counter';
    count++;
    counter.innerText = count;
    cl.remove(c, cl.contains(c));
    setTimeout (() => counter.classList.add('animation-counter'), 1);
});

