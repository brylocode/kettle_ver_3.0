const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    // console.log(window.innerWidth);

    if (window.scrollY === 0) {
        nav.classList.remove('nav--is-sticky')

    } else if (window.scrollY > 0 && window.scrollY <= 500) {
        nav.classList.remove('nav--is-sticky')
    } else {
        if (window.innerWidth > 640) {
            nav.classList.add('nav--is-sticky')
        }
    }
})