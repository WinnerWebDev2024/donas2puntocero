    const sliders = [...document.querySelectorAll('.slider__elements')];
    const arrowNext = document.querySelector('#afther');
    const arrowBefore = document.querySelector('#before');
    let value;
    
    arrowNext.addEventListener('click', ()=>changePosition(1));

    arrowBefore.addEventListener('click', ()=>changePosition(-1));

    window.onload = setInterval(changePosition(7), 1000);

   function changePosition(change){
        console.log(change);
        const currentElement = parseInt(document.querySelector('.slider__elements--show').dataset.id);
        value = currentElement;
        value+= change;
        console.log(value, change);
        console.log(sliders.length)
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle('slider__elements--show');
        sliders[value-1].classList.toggle('slider__elements--show');
    };
    const changePositionIzq = (change2 = 1) => {
        const currentElement = parseInt(document.querySelector('.slider__elements--show').dataset.id);
        value = currentElement;
        value+= change2;
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle('slider__elements--show');
        sliders[value-1].classList.toggle('slider__elements--show');
    };
setInterval(changePositionIzq, 5000);

// Menu ham,burgues
const BOTON = document.querySelector('#icono i'); /* Selecciona en elemento i de la id icono */
const ENLACES = document.querySelector('#enlaces');

BOTON.addEventListener('click', () =>{
    ENLACES.classList.toggle('open'); /* añade o quita el class open */
    setTimeout(() =>{ /* para que espere 600ms y cambia el hamburguer a X */
        BOTON.classList.toggle('fa-xmark');
    }, 600);
});
