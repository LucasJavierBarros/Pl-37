window.addEventListener('load', function () {
    
    let main = document.querySelector('main');
    let anchor = document.querySelector('a');
    let subtitulo = document.querySelector('h2');
    let parrafos = document.querySelectorAll('p');
    let body = document.querySelector('body')
    
    let nombre = prompt('Ingrese su nombre');

    if (nombre){
        subtitulo.innerText += nombre; 
    }else{
        subtitulo.innerText += 'invitado'
    }
    subtitulo.style.textTransform = 'uppercase';

    anchor.style.color = '#E51B3E';

    if (confirm('¿Desea colocar un fondo de pantalla?')){
        body.classList.add('fondo')
    }

    for (let i = 0; i < parrafos.length; i++) {
        if (i % 2 == 0){
            parrafos[i].classList.add ('descatadoPar')
        }else{
            parrafos[i].classList.add('destacadoImpar')
        }
    }

    main.style.display = 'block'
})
