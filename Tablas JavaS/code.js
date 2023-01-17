//Boton del buscador de la tabla de multiplicar.
function buscador(){
    var input = document.getElementById('buscador').value; 
 
    
        if (input<1 || input>10) {alert("Esto no es un número del 1 al 10")}
        else{
          for( var i = 1; i <= 10; i++) {
            
            document.getElementById('resultado').innerHTML += input + "x" + i + "=" +input*i+"<br>";
          }
           
        }
}
/*Boton de limpiar*/
function limpiar(){

  document.getElementById('resultado').innerHTML = "";
    
}
/*Funcion de colores */
function msj(msj){
  if(msj.getAttribute("data-value") == 'a'){
    var popup = document.getElementById("myPopup_a");
    popup.classList.toggle("show");
    popup.innerHTML = 'Rojo';
  }

  if(msj.getAttribute("data-value") == 'b'){
    var popup = document.getElementById("myPopup_b");
    popup.classList.toggle("show");
    popup.innerHTML = 'Amarillo';
  }

  if(msj.getAttribute("data-value") == 'c'){
    var popup = document.getElementById("myPopup_c");
    popup.classList.toggle("show");
    popup.innerHTML = 'Verde';
  }

  if(msj.getAttribute("data-value") == 'd'){
    var popup = document.getElementById("myPopup_d");
    popup.classList.toggle("show");
    popup.innerHTML = 'Azul';
  }

}
/*Funcion de accesos de enlaces*/ 
function mostrar(num) {
  var caja = document.getElementById("cuadro");
  var todos = document.links;
  var texto = "";
  if (num == 0 ){
      for (i=0;i<todos.length;i++){
      texto += todos[i] + "<br/>";
      }
  }
  else {
      for (i=0;i<todos.length;i++){
      texto += todos[i].innerHTML + "<br/>";
      }
  }
  caja.innerHTML = texto  
  }

  /*Funcion de ampliación de las fotos*/
  function muestra(num) {
    imagen = document.images[num].src
    comentario = document.images[num].alt
    grande = document.images["pantalla"]
    texto = document.getElementById("descripcion")
    grande.src = imagen
    texto.innerHTML = comentario
    }

  /*Propiedades de la pagina*/
  function amarillo() { //cambiar color de fondo
    document.bgColor = "yellow";
    }

function blanco() { //restablecer color de fondo
    document.bgColor = "white";
    }

function azul() { //cambiar color de texto
    document.fgColor = "blue";
    }

function negro() { //restablecer color de texto
    document.fgColor = "black";
    }

function titulo(){ //ver el título
    var nombre = document.title
    var texto = document.getElementById("caja1");
    texto.innerHTML = nombre
    }

function pantalla(){ //ver resolución de pantalla
    var ancho = screen.width;
    var alto = screen.height;
    var texto = document.getElementById("caja1");
    texto.innerHTML = ancho + " x " +  alto + " px.";
    }
