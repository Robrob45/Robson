let menuBtn = document.getElementById('menuBtn');
let sideNav = document.getElementById('sideNav');
let menu = document.getElementById('menu');

menu.onclick = function() {
    if (sideNav.style.right === '-250px' || sideNav.style.right === '') {
        sideNav.style.right = '0';
        menu.src = './Image/w.png'; // Ensure the path is correct
    } else {
        sideNav.style.right = '-250px';
        menu.src = './Image/icons8-menu-30.png'; // Ensure the path is correct
    }
};