document.addEventListener('DOMContentLoaded', function () {

    const menuBtn = document.querySelector('.menu__btn-js');
    const menuList = document.querySelector('.menu__list-js');
    const menuLinks = document.querySelectorAll('.menu__link-js')

    const handleOpenMenu = () => {
        menuList.classList.toggle('menu__list--active');
        if (menuList.classList.contains('menu__list--active')) {
            menuBtn.innerHTML = '<img src="assets/menu-x.svg" alt="menu-icon" class="menu-icon">'
        } else {
            menuBtn.innerHTML = '<img src="assets/menu-btn.svg" alt="menu-icon" class="menu-icon">'
        }
    }
    const handleCloseMenu = () => {
        menuList.classList.remove('menu__list--active');
        menuBtn.innerHTML = '<img src="assets/menu-btn.svg" alt="menu-icon" class="menu-icon">'
    }

    menuLinks.forEach(el => {
        el.addEventListener('click', handleCloseMenu)
    });

    menuBtn.addEventListener('click', handleOpenMenu);
});