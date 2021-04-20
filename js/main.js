const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    // console.log(window.innerWidth);

    window.scrollY > 0 ? nav.classList.add('nav--sticky') : nav.classList.remove('nav--sticky');
})


const instruction = document.querySelector('.instruction');
const instructionIcon = document.querySelector('.instruction-icon');
const instructionCloseBtn = document.querySelector('.instruction__close-btn-js');


const handleShowInstruction = () => {
    instruction.classList.add('instruction--active')
}
const handleCloseInstruction = () => {
    instruction.classList.remove('instruction--active')
}

instructionIcon.addEventListener('click', handleShowInstruction)
instructionCloseBtn.addEventListener('click', handleCloseInstruction)