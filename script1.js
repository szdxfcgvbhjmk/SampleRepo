const menu = document.querySelector('.fa-bars');
const menuList = document.querySelector('.nav--list');
menu.addEventListener('click', () => {
  menuList.classList.toggle('showmenu');
});
console.log(menu);
console.log(menuList);
