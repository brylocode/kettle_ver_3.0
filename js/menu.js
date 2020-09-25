document.addEventListener('DOMContentLoaded', function () {

    const menuBtn = document.querySelector('.menu__btn-js');
    const menuCloseBtn = document.querySelector('.menu__close-btn-js');
    const menuList = document.querySelector('.menu__list-js');
    const menuLinks = document.querySelectorAll('.menu__link-js')

    const handleOpenMenu = () => {
        if (menuList.classList.contains('menu__list--active')) {
            return null;
        }
        menuList.classList.add('menu__list--active');

    }
    const handleCloseMenu = () => {
        menuList.classList.remove('menu__list--active');
    }

    menuLinks.forEach(el => {
        el.addEventListener('click', handleCloseMenu)
    });

    menuBtn.addEventListener('click', handleOpenMenu);
    menuCloseBtn.addEventListener('click', handleCloseMenu);

});