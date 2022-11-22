window.addEventListener('load',function(){

let body = document.querySelector('body');
let titulo = document.querySelector('h1');

if (prompt('¿Desea modo oscuro?') === 'si'){

    body.style.backgroundColor = '#7f7f7f';
    body.classList.add('fondoMoviesList')
    
}
titulo.innerText = 'LISTADO DE PELÍCULAS';
titulo.style.color = 'white';
titulo.style.backgroundColor = 'teal';
titulo.style.fontSize = '20px';


})