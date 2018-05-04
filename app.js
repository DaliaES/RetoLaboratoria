var name = prompt('¿Cuál es tu Nombre');
var menu_bienvenido = document.getElementById('menu_bienvenidoHtml');
menu_bienvenido . innerHTML=' Bienvenido : ' + name.toUpperCase();

if(confirm(' Hola! ' + name.toUpperCase()  +'\n ¿Te Animas a Jugar? ')){
    alert ( ' Muy bien ' + name.toUpperCase() + ' entonces comencemos! \n Por favor selecciona que categoria quieres jugar: ');
  } else {
      alert (' Que lastima, visitanos pronto');
  }
function categoria_uno(){
  document.getElementById("cultura").style.display = "none";
  document.getElementById("tecnologia").style.display = "none";
  document.getElementById("peliculas").style.display = "none";
  var categoria = document.getElementById("deportes");
  categoria.style.display = "block";
}
function categoria_dos(){
  document.getElementById("deportes").style.display = "none";
  document.getElementById("tecnologia").style.display = "none";
  document.getElementById("peliculas").style.display = "none";
  var categoria = document.getElementById("cultura");
  categoria.style.display = "block";
}
function categoria_tres(){
  document.getElementById("deportes").style.display = "none";
  document.getElementById("cultura").style.display = "none";
  document.getElementById("peliculas").style.display = "none";
  var categoria = document.getElementById("tecnologia");
  categoria.style.display = "block";
}
function categoria_cuatro(){
  document.getElementById("deportes").style.display = "none";
  document.getElementById("tecnologia").style.display = "none";
  document.getElementById("cultura").style.display = "none";
  var categoria = document.getElementById("peliculas");
  categoria.style.display = "block";
}
