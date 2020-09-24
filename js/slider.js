const slideList = [{
        img: 'slider/slide1.png'
    },
    {
        img: 'slider/slide2.png'
    },
    {
        img: 'slider/slide3.png'
    },
    {
        img: 'slider/slide4.png'
    },
    {
        img: 'slider/slide5.png'
    },
    {
        img: 'slider/slide6.png'
    },
    {
        img: 'slider/slide7.png'
    },
    {
        img: 'slider/slide8.png'
    },
    {
        img: 'slider/slide9.png'
    },
    {
        img: 'slider/slide10.png'
    },
    {
        img: 'slider/slide11.png'
    },
    {
        img: 'slider/slide12.png'
    },
    {
        img: 'slider/slide13.png'
    },
    {
        img: 'slider/slide14.png'
    },
    {
        img: 'slider/slide15.png'
    },
    {
        img: 'slider/slide16.png'
    },
    {
        img: 'slider/slide17.png'
    },
    {
        img: 'slider/slide18.png'
    },
    {
        img: 'slider/slide19.png'
    },
    {
        img: 'slider/slide20.png'
    },
    {
        img: 'slider/slide21.png'
    },
    {
        img: 'slider/slide22.png'
    },
    {
        img: 'slider/slide23.png'
    },
    {
        img: 'slider/slide24.png'
    },
    {
        img: 'slider/slide25.png'
    },
    {
        img: 'slider/slide26.png'
    },
    // {
    //     img: 'slider/slide27.png'
    // },
    // {
    //     img: 'slider/slide28.png'
    // },
    // {
    //     img: 'slider/slide29.png'
    // },
    {
        img: 'slider/slide30.png'
    },
    {
        img: 'slider/slide31.png'
    },
    {
        img: 'slider/slide32.png'
    },
    {
        img: 'slider/slide33.png'
    },
    {
        img: 'slider/slide34.png'
    },
    {
        img: 'slider/slide35.png'
    },
    {
        img: 'slider/slide35.5.png'
    },
    {
        img: 'slider/slide36.png'
    },
    {
        img: 'slider/slide37.png'
    },
]

const image = document.querySelector('.slider img');

const time = 200;
let active = 0;

const changeSlide = () => {
    active++;
    if (active >= slideList.length) {
        active = 0;
    }

    image.src = slideList[active].img;
}

setInterval(changeSlide, time);