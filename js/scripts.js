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
    

    
// validacion del formulario

let camposSinValidar = document.querySelectorAll('.campo_no_validado');
let mensajeError = document.querySelectorAll('span');
let mensajeEnvio = document.querySelector('.mensaje-p');
let politicaForm = false;

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,120}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-,]+$/,
    telefono: /^\d{3}(\-|\s)\d{3}(\-|\s)\d{3}$/,

}

const campos = {
    nombre: false,
    correo: false,
    telefono: false,
}

camposSinValidar.forEach((campo) =>{
    campo.addEventListener('keyup', validarFormulario);
    campo.addEventListener('blur', validarFormulario);
});

function validarFormulario(e){
    // console.log(e.target.name);
    switch(e.target.name){
        case 'nombre':
            validarCampo(expresiones.nombre, e.target, 0);
            break;
        case 'correo':
            validarCampo(expresiones.correo, e.target, 1);
            break;
        case 'telefono':
            validarCampo(expresiones.telefono, e.target, 2);
            break;
    }
};

function validarCampo(expresion, entrada, numero){
    // console.log(entrada.value);
    if(expresion.test(entrada.value)){
        // console.log(`${entrada.value} validada`);
        mensajeError[numero].innerHTML = '';
        mensajeError[numero].removeAttribute('class', 'error');
        campos[entrada.name] = true;
    }else{
        console.log(`${entrada.value} no validada`);
        mensajeError[numero].innerHTML = '+ Introduzca un valor correcto';
        mensajeError[numero].setAttribute('class', 'error');
    }
};
function politica(){
    let politicaPrivacidad = document.querySelector('#condiciones');
    let spanError = document.querySelector('#politicaError');
    if(!politicaPrivacidad.checked){
        spanError.innerHTML = '+Debe seleccionar Politicas de proteccion de datos';
        spanError.className = 'error';
        return false;
    }else{
        spanError.innerHTML = '';
        spanError.className = 'noError';
        return true;
        
    }

}

document.querySelector('input[type="checkbox"]').addEventListener('click', ()=>{
    politica();
    politicaForm = politica();
    console.log(politica());
});

document.querySelector('input[type="submit"]').addEventListener('click', (e) =>{
    e.preventDefault();
    politica();
    politicaForm = politica();
    if (campos.nombre && campos.correo && campos.telefono && politicaForm){
        mensajeEnvio.innerHTML = 'MENSAJE ENVIADO CON ÉXITO';
        setTimeout(() =>{
            mensajeEnvio.innerHTML = '';
            document.formulario.submit();
        }, 2000);
    }else{
        mensajeEnvio.innerHTML = 'REVISE LOS CAMPOS DE SU FORMULARIO!!!';
    }
});
