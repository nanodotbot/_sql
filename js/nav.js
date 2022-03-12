const nav = document.getElementById('nav');
const menu = document.getElementById('menu');

let active = false;

menu.onclick = () => {
    if (!active){
        nav.classList.add('active');
        menu.classList.add('active');
        active = true;
    } else {
        nav.classList.remove('active');
        menu.classList.remove('active');
        active = false;
    }
};