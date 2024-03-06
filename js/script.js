
//Vamos a programar la barra reponsive del barra de navegacion para su apertura y cierre
//Con esto me refiero a darle funcionalidad al icono que aparece

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){

  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
}

if(close){

  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
}

