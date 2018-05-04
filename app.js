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
// validar
function respuestadep(){
  var valida="0";
  var respuesta_uno=false;
  var contador_respuesta = 0;
  //preg 1
    var porNombre=document.getElementsByName("dep");
    for(var i=0;i<porNombre.length;i++)
    {
        if(porNombre[i].checked){
          valida=porNombre[i].value;
          if(valida=="1"){
              respuesta_uno=true;
              contador_respuesta++;
          }
        }
    }
    //pregunta2
    valida="0";
    var respuesta_dos=false;
    var porNombre=document.getElementsByName("dep2");
    for(var i=0;i<porNombre.length;i++)
    {
        if(porNombre[i].checked){
          valida=porNombre[i].value;
          if(valida=="1"){
              respuesta_dos=true;
              contador_respuesta++;
          }
        }
    }
// preg 3
valida="0";
var respuesta_tres=false;
var porNombre=document.getElementsByName("dep3");
for(var i=0;i<porNombre.length;i++)
{
    if(porNombre[i].checked){
      valida=porNombre[i].value;
      if(valida=="1"){
          respuesta_tres=true;
          contador_respuesta++;
      }
    }
}
    if (respuesta_uno & respuesta_dos & respuesta_tres) {
      alert ("Felicitaciones")
    } else {
      alert (' Tiene: '+ contador_respuesta +' Suerte para la proxima ');
    }
}
