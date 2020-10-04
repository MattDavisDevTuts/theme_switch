const checkbox = document.getElementById('checkbox');
const label = document.getElementById('label');
const toggler = document.getElementById('toggler');
let icons = document.getElementsByClassName('icon');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    label.classList.toggle('light');
    toggler.classList.toggle('dark');

    for (let i = 0; i < icons.length; i++) {
        icons[i].classList.toggle('icon-dark');
    }
});