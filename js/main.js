import { Suelo } from './sprites/scene/suelo.js';
import { ElementosGraficos } from './sprites/scene/elementos_graficos.js';
import { cargarImagen } from './data/load.js';
import { Heroe } from './sprites/heroes/heroe.js';
import { datosHombre } from './sprites/heroes/hombre.js';
import { datosMujer } from './sprites/heroes/mujer.js';

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Variables para objetos
let suelo;
let torre, arbusto, arbusto2, arbusto3, arbusto4, arbol;
let heroe;

// Elegir género
let generoSeleccionado = 'hombre'; // o 'mujer'
let datos = generoSeleccionado === 'hombre' ? datosHombre : datosMujer;

// Establecer dimensiones base desde el primer frame de idle
datos.anchoFrame = datos.animaciones.idle[0].width;
datos.altoFrame = datos.animaciones.idle[0].height;

async function iniciarJuego() {
  const imgSuelo = await cargarImagen("assets/img/resources/elementos_graficos/suelo.png");
  const imgElementos = await cargarImagen("assets/img/resources/elementos_graficos/elementos_graficos.png");
  const imgHeroe = await cargarImagen(datos.imagenSrc);

  // Asignar imagen ya cargada al héroe
  datos.imagenSrc = imgHeroe.src;

  // Crear objetos
  suelo = new Suelo(0, 35, 1500, 700, imgSuelo);
  torre = new ElementosGraficos(50, 135, 240, 500, imgElementos, 0, 6, 282, 676);
  arbusto = new ElementosGraficos(0, 540, 370, 94, imgElementos, 315, 432, 370, 94);
  arbusto2 = new ElementosGraficos(380, 540, 370, 94, imgElementos, 315, 432, 370, 94);
  arbusto3 = new ElementosGraficos(750, 540, 370, 94, imgElementos, 315, 432, 370, 94);
  arbusto4 = new ElementosGraficos(1200, 540, 370, 94, imgElementos, 315, 432, 370, 94);
  arbol = new ElementosGraficos(-125, 250, 280, 392, imgElementos, 290, 15, 280, 392);

  // Crear el héroe
 heroe = new Heroe(155, 175, datosHombre, 2);

  // Iniciar bucle
  actualizar();
}

function actualizar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Fondo y escena
  heroe.actualizar();
  heroe.dibujar(ctx);
  torre.dibujar(ctx);
  arbol.dibujar(ctx);
  arbusto.dibujar(ctx);
  arbusto2.dibujar(ctx);
  arbusto3.dibujar(ctx);
  arbusto4.dibujar(ctx);
  suelo.dibujar(ctx);

  // Héroe

  requestAnimationFrame(actualizar);
}

iniciarJuego();
