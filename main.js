const carrusel = document.querySelector('.boxIconos');

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let interval = null;
let step = 1;

const start = () => {
    interval = setInterval(function () {
        carrusel.scrollLeft = carrusel.scrollLeft + step;

        if (carrusel.scrollLeft === maxScrollLeft) {
            step = step * -1;
         }else if (carrusel.scrollLeft === 0) {
             step =  step * -1;
         }
    }, 20);
    
}

start();