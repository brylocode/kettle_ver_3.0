document.addEventListener('DOMContentLoaded', function () {

    const menuBtn = document.querySelector('.menu__btn-js');
    const menuCloseBtn = document.querySelector('.menu__close-btn-js');
    const menuList = document.querySelector('.menu__list-js');
    const menuLinks = document.querySelectorAll('.menu__link-js');
    const bluler = document.querySelector('.bluler');
    const handleOpenMenu = () => {
        if (menuList.classList.contains('menu__list--active')) {
            return null;
        }
        menuList.classList.add('menu__list--active');
        bluler.style.visibility = 'visible';
        bluler.style.opacity = '1';

    }
    const handleCloseMenu = () => {
        menuList.classList.remove('menu__list--active');
        bluler.style.visibility = 'hidden';
        bluler.style.opacity = '0';
    }

    menuLinks.forEach(el => {
        el.addEventListener('click', handleCloseMenu)
    });

    menuBtn.addEventListener('click', handleOpenMenu);
    menuCloseBtn.addEventListener('click', handleCloseMenu);

});