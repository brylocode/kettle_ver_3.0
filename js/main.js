const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    // console.log(window.innerWidth);

    window.scrollY > 0 ? nav.classList.add('nav--sticky') : nav.classList.remove('nav--sticky');
})


const instruction = document.querySelector('.instruction');
const instructionIcon = document.querySelector('.instruction-icon');


const handleShowInstruction = () => {
    instruction.classList.toggle('instruction--active')
}

instructionIcon.addEventListener('click', handleShowInstruction)