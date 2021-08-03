const openMenu = document.getElementById('menu');
const closeMenu = document.getElementById('close');
const Menu = document.getElementById('side-menu');

let sideMenu = false;

function openSideMenu() {
  Menu.style.display = 'flex';
  sideMenu = true;
}

function closeSideMenu() {
  Menu.style.display = 'none';
  sideMenu = false;
}

function getMenu() {
  if (sideMenu === false) {
    openSideMenu();
  } else closeSideMenu();
}

openMenu.addEventListener('click', openSideMenu);
closeMenu.addEventListener('click', closeSideMenu);

if (getMenu === 0) {
  getMenu();
}
