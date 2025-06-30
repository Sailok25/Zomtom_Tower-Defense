import { Suelo } from './sprites/scene/suelo.js';
import { ElementosGraficos } from './sprites/scene/elementos_graficos.js';
import { cargarImagen } from './data/load.js';

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Variables para objetos
let suelo
let torre, arbusto, arbusto2, arbusto3, arbusto4, arbol;

// Función principal de arranque
async function iniciarJuego() {
  // Cargar imágenes
  const imgSuelo = await cargarImagen("assets/img/resources/elementos_graficos/suelo.png");
  const imgElementos = await cargarImagen("assets/img/resources/elementos_graficos/elementos_graficos.png");

  // Crear instancias con las imágenes ya cargadas
  suelo = new Suelo(0, 35, 1500, 700, imgSuelo);
  torre = new ElementosGraficos(50, 135, 240, 500, imgElementos, 0, 6, 282, 676);
  arbusto = new ElementosGraficos(0, 540, 370, 94, imgElementos, 315, 432, 370, 94);
  arbusto2 = new ElementosGraficos(380, 540, 370, 94, imgElementos, 315, 432, 370, 94);
  arbusto3 = new ElementosGraficos(750, 540, 370, 94, imgElementos, 315, 432, 370, 94);
  arbusto4 = new ElementosGraficos(1200, 540, 370, 94, imgElementos, 315, 432, 370, 94);
  arbol = new ElementosGraficos(-125, 250, 280, 392, imgElementos, 290, 15, 280, 392);

  // Iniciar bucle de animación
  actualizar();
}

function actualizar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  torre.dibujar(ctx);
  arbol.dibujar(ctx);
  arbusto.dibujar(ctx);
  arbusto2.dibujar(ctx);
  arbusto3.dibujar(ctx);
  arbusto4.dibujar(ctx);
  suelo.dibujar(ctx);
  requestAnimationFrame(actualizar);
}

// Inicia todo
iniciarJuego();
