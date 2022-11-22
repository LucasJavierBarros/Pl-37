window.addEventListener('load', function(){

tituloAdd = document.querySelector('h1.moviesAddTitulo');
seccion = document.querySelector('section');
articulo = document.querySelector('article');

tituloAdd.innerText = 'AGREGAR PELÍCULAS';
tituloAdd.classList.add('titulo');
articulo.classList.add('fondoTransparente');
seccion.classList.add('fondoCRUD')
})