// Menu hamburguesa
const BOTON = document.querySelector('#icono i'); /* Selecciona en elemento i de la id icono */
const ENLACES = document.querySelector('#enlaces');

BOTON.addEventListener('click', () =>{
    ENLACES.classList.toggle('open'); /* añade o quita el class open */
    setTimeout(() =>{ /* para que espere 600ms y cambia el hamburguer a X */
        BOTON.classList.toggle('fa-xmark');
    }, 600);
});

// scripts para los sliders

    const sliders = [...document.querySelectorAll('.slider__body')];
    const arrowNext = document.querySelector('#next');
    const arrowBefore = document.querySelector('#before');
    let value;

    arrowNext.addEventListener('click', ()=>changePosition(1));

    arrowBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.slider__body--show').dataset.id);
        // 4+1 = 5
        value = currentElement;
        value+= change;

        console.log(sliders.length)
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle('slider__body--show');
        sliders[value-1].classList.toggle('slider__body--show');
    }

    const changePositionNew = (change2 = 1)=>{
        const currentElement = Number(document.querySelector('.slider__body--show').dataset.id);
        value = currentElement;
        value+= change2;

        console.log(sliders.length)
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle('slider__body--show');
        sliders[value-1].classList.toggle('slider__body--show');
    }
    setInterval (changePositionNew, 3000);
    