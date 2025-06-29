import { Suelo } from './sprites/scene/suelo.js';

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Crear una instancia del suelo
const suelo = new Suelo(0, 0, 1500, 700, "assets/img/resources/elementos_graficos/suelo.png");

function actualizar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  suelo.dibujar(ctx);
  requestAnimationFrame(actualizar);
}

actualizar();