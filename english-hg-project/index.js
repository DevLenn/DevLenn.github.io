const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');
const menuIcon2 = document.getElementById('menu-icon2');
const menu2 = document.getElementById('menu2');
const menuIcon3 = document.getElementById('menu-icon3');
const menu3 = document.getElementById('menu3');
const menuIcon4 = document.getElementById('menu-icon4');
const menu4 = document.getElementById('menu4');
const menuIcon5 = document.getElementById('menu-icon5');
const menu5 = document.getElementById('menu5');
const menuIcon6 = document.getElementById('menu-icon6');
const menu6 = document.getElementById('menu6');
const menuIcon7 = document.getElementById('menu-icon7');
const menu7 = document.getElementById('menu7');
const menuIcon8 = document.getElementById('menu-icon8');
const menu8 = document.getElementById('menu8');
const menuIcon9 = document.getElementById('menu-icon9');
const menu9 = document.getElementById('menu9');
const menuIcon10 = document.getElementById('menu-icon10');
const menu10 = document.getElementById('menu10');
const menuIcon11 = document.getElementById('menu-icon11');
const menu11 = document.getElementById('menu11');

let menuOpen = false;
let menu2Open = false;
let menu3Open = false;
let menu4Open = false;
let menu5Open = false;
let menu6Open = false;
let menu7Open = false;
let menu8Open = false;
let menu9Open = false;
let menu10Open = false;
let menu11Open = false;

menuIcon.addEventListener('click', (event) => {
    const menuWidth = menu.offsetWidth;
    const menuHeight = menu.offsetHeight;
    const iconRect = menuIcon.getBoundingClientRect();

    const menuLeft = iconRect.left + (iconRect.width / 2) - (menuWidth / 2);
    const menuTop = iconRect.top + iconRect.height + 10; // Anpassung des vertikalen Abstands

    menu.style.left = `${menuLeft}px`;
    menu.style.top = `${menuTop}px`;

    if (menuOpen) {
        menu.classList.add('hidden');
    } else {
        menu.classList.remove('hidden');
    }

    menuOpen = !menuOpen;
});

menuIcon2.addEventListener('click', (event) => {
    const menu2Width = menu2.offsetWidth;
    const menu2Height = menu2.offsetHeight;
    const icon2Rect = menuIcon2.getBoundingClientRect();

    const menu2Left = icon2Rect.left + (icon2Rect.width / 2) - (menu2Width / 2);
    const menu2Top = icon2Rect.top + icon2Rect.height + 10; // Anpassung des vertikalen Abstands

    menu2.style.left = `${menu2Left}px`;
    menu2.style.top = `${menu2Top}px`;

    if (menu2Open) {
        menu2.classList.add('hidden');
    } else {
        menu2.classList.remove('hidden');
    }

    menu2Open = !menu2Open;
});

window.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && event.target !== menuIcon) {
        menu.classList.add('hidden');
        menuOpen = false;
    }

    if (!menu2.contains(event.target) && event.target !== menuIcon2) {
        menu2.classList.add('hidden');
        menu2Open = false;
    }

    if (!menu3.contains(event.target) && event.target !== menuIcon3) {
        menu3.classList.add('hidden');
        menu3Open = false;
    }

    if (!menu4.contains(event.target) && event.target !== menuIcon4) {
        menu4.classList.add('hidden');
        menu4Open = false;
    }

    if (!menu5.contains(event.target) && event.target !== menuIcon5) {
        menu5.classList.add('hidden');
        menu5Open = false;
    }

    if (!menu6.contains(event.target) && event.target !== menuIcon6) {
        menu6.classList.add('hidden');
        menu6Open = false;
    }

    if (!menu7.contains(event.target) && event.target !== menuIcon7) {
        menu7.classList.add('hidden');
        menu7Open = false;
    }

    if (!menu8.contains(event.target) && event.target !== menuIcon8) {
        menu8.classList.add('hidden');
        menu8Open = false;
    }

    if (!menu9.contains(event.target) && event.target !== menuIcon9) {
        menu9.classList.add('hidden');
        menu9Open = false;
    }

    if (!menu10.contains(event.target) && event.target !== menuIcon10) {
        menu10.classList.add('hidden');
        menu10Open = false;
    }

    if (!menu11.contains(event.target) && event.target !== menuIcon11) {
        menu11.classList.add('hidden');
        menu11Open = false;
    }
});

menuIcon3.addEventListener('click', (event) => {
    const menu3Width = menu3.offsetWidth;
    const menu3Height = menu3.offsetHeight;
    const icon3Rect = menuIcon3.getBoundingClientRect();

    const menu3Left = icon3Rect.left + (icon3Rect.width / 2) - (menu3Width / 2);
    const menu3Top = icon3Rect.top + icon3Rect.height + 10; // Anpassung des vertikalen Abstands

    menu3.style.left = `${menu3Left}px`;
    menu3.style.top = `${menu3Top}px`;

    if (menu3Open) {
        menu3.classList.add('hidden');
    } else {
        menu3.classList.remove('hidden');
    }

    menu3Open = !menu3Open;
});

menuIcon4.addEventListener('click', (event) => {
    const menu4Width = menu4.offsetWidth;
    const menu4Height = menu4.offsetHeight;
    const icon4Rect = menuIcon4.getBoundingClientRect();

    const menu4Left = icon4Rect.left + (icon4Rect.width / 2) - (menu4Width / 2);
    const menu4Top = icon4Rect.top + icon4Rect.height + 10; // Anpassung des vertikalen Abstands

    menu4.style.left = `${menu4Left}px`;
    menu4.style.top = `${menu4Top}px`;

    if (menu4Open) {
        menu4.classList.add('hidden');
    } else {
        menu4.classList.remove('hidden');
    }

    menu4Open = !menu4Open;
});

menuIcon5.addEventListener('click', (event) => {
    const menu5Width = menu5.offsetWidth;
    const menu5Height = menu5.offsetHeight;
    const icon5Rect = menuIcon5.getBoundingClientRect();

    const menu5Left = icon5Rect.left + (icon5Rect.width / 2) - (menu5Width / 2);
    const menu5Top = icon5Rect.top + icon5Rect.height + 10; // Anpassung des vertikalen Abstands

    menu5.style.left = `${menu5Left}px`;
    menu5.style.top = `${menu5Top}px`;

    if (menu5Open) {
        menu5.classList.add('hidden');
    } else {
        menu5.classList.remove('hidden');
    }

    menu5Open = !menu5Open;
});

menuIcon6.addEventListener('click', (event) => {
    const menu6Width = menu6.offsetWidth;
    const menu6Height = menu6.offsetHeight;
    const icon6Rect = menuIcon6.getBoundingClientRect();

    const menu6Left = icon6Rect.left + (icon6Rect.width / 2) - (menu6Width / 2);
    const menu6Top = icon6Rect.top + icon6Rect.height + 10; // Anpassung des vertikalen Abstands

    menu6.style.left = `${menu6Left}px`;
    menu6.style.top = `${menu6Top}px`;

    if (menu6Open) {
        menu6.classList.add('hidden');
    } else {
        menu6.classList.remove('hidden');
    }

    menu6Open = !menu6Open;
});

menuIcon7.addEventListener('click', (event) => {
    const menu7Width = menu7.offsetWidth;
    const menu7Height = menu7.offsetHeight;
    const icon7Rect = menuIcon7.getBoundingClientRect();

    const menu7Left = icon7Rect.left + (icon7Rect.width / 2) - (menu7Width / 2);
    const menu7Top = icon7Rect.top + icon7Rect.height + 10; // Anpassung des vertikalen Abstands

    menu7.style.left = `${menu7Left}px`;
    menu7.style.top = `${menu7Top}px`;

    if (menu7Open) {
        menu7.classList.add('hidden');
    } else {
        menu7.classList.remove('hidden');
    }

    menu7Open = !menu7Open;
});

menuIcon8.addEventListener('click', (event) => {
    const menu8Width = menu8.offsetWidth;
    const menu8Height = menu8.offsetHeight;
    const icon8Rect = menuIcon8.getBoundingClientRect();

    const menu8Left = icon8Rect.left + (icon8Rect.width / 2) - (menu8Width / 2);
    const menu8Top = icon8Rect.top + icon8Rect.height + 10; // Anpassung des vertikalen Abstands

    menu8.style.left = `${menu8Left}px`;
    menu8.style.top = `${menu8Top}px`;

    if (menu8Open) {
        menu8.classList.add('hidden');
    } else {
        menu8.classList.remove('hidden');
    }

    menu8Open = !menu8Open;
});

menuIcon9.addEventListener('click', (event) => {
    const menu9Width = menu9.offsetWidth;
    const menu9Height = menu9.offsetHeight;
    const icon9Rect = menuIcon9.getBoundingClientRect();

    const menu9Left = icon9Rect.left + (icon9Rect.width / 2) - (menu9Width / 2);
    const menu9Top = icon9Rect.top + icon9Rect.height + 10; // Anpassung des vertikalen Abstands

    menu9.style.left = `${menu9Left}px`;
    menu9.style.top = `${menu9Top}px`;

    if (menu9Open) {
        menu9.classList.add('hidden');
    } else {
        menu9.classList.remove('hidden');
    }

    menu9Open = !menu9Open;
});

menuIcon10.addEventListener('click', (event) => {
    const menu10Width = menu10.offsetWidth;
    const menu10Height = menu10.offsetHeight;
    const icon10Rect = menuIcon10.getBoundingClientRect();

    const menu10Left = icon10Rect.left + (icon10Rect.width / 2) - (menu10Width / 2);
    const menu10Top = icon10Rect.top + icon10Rect.height + 10; // Anpassung des vertikalen Abstands

    menu10.style.left = `${menu10Left}px`;
    menu10.style.top = `${menu10Top}px`;

    if (menu10Open) {
        menu10.classList.add('hidden');
    } else {
        menu10.classList.remove('hidden');
    }

    menu10Open = !menu10Open;
});

menuIcon11.addEventListener('click', (event) => {
    const menu11Width = menu11.offsetWidth;
    const menu11Height = menu11.offsetHeight;
    const icon11Rect = menuIcon11.getBoundingClientRect();

    const menu11Left = icon11Rect.left + (icon11Rect.width / 2) - (menu11Width / 2);
    const menu11Top = icon11Rect.top + icon11Rect.height + 10; // Anpassung des vertikalen Abstands

    menu11.style.left = `${menu11Left}px`;
    menu11.style.top = `${menu11Top}px`;

    if (menu11Open) {
        menu11.classList.add('hidden');
    } else {
        menu11.classList.remove('hidden');
    }

    menu11Open = !menu11Open;
});

function fullScreen() {
    const imageURL = 'panem.png';
    const newTab = window.open(imageURL, '_blank');
    if (newTab) {
      newTab.focus();
    }
};


