// Seleccionem el canvas i el seu context per poder dibuixar
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Definim el terra, que serà un rectangle fix a la part inferior
const terra = {
  x: 0,
  y: canvas.height - 60,
  amplada: canvas.width,
  alcada: 60,
  color: "#d2b48c" // color marró clar
};

// Array on guardarem els núvols que van sortint
let nuvols = [];

// 🔄 Funció per esborrar tot el canvas
function esborrarCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// 🌥️ Funció per crear un núvol nou amb valors aleatoris
function crearNuvol() {
  const nuvol = {
    x: canvas.width, // surt per la dreta del canvas
    y: Math.random() * (canvas.height / 2 - 50), // només a la part superior (cel)
    amplada: 80 + Math.random() * 40,
    alcada: 20 + Math.random() * 30,
    velocitat: 0.5 + Math.random() * 1
  };
  nuvols.push(nuvol);
  console.log("Nou núvol creat:", nuvol);
}

// 🛠️ Actualitzem posició i eliminem núvols que surten de la pantalla
function actualitzarNuvols() {
  nuvols.forEach(nuvol => {
    nuvol.x -= nuvol.velocitat;
  });

  // Eliminar núvols que han marxat de la pantalla (esquerra)
  nuvols = nuvols.filter(nuvol => nuvol.x + nuvol.amplada > 0);

  // Si hi ha menys de 5 núvols i toca aleatòriament, creem-ne un nou
  if (nuvols.length < 5 && Math.random() < 0.04) {
    crearNuvol();
  }
}

// 🎨 Dibuixem fons, núvols i terra
function dibuixar() {
  esborrarCanvas(); // Opcional, aquí netegem totalment (transparent)

  // Pintem el fons del cel
  ctx.fillStyle = "#add8e6";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Dibuixem els núvols
  ctx.fillStyle = "white";
  nuvols.forEach(nuvol => {
    ctx.fillRect(nuvol.x, nuvol.y, nuvol.amplada, nuvol.alcada);
  });

  // Dibuixem el terra
  ctx.fillStyle = terra.color;
  ctx.fillRect(terra.x, terra.y, terra.amplada, terra.alcada);
}

// Bucle del joc
function bucleJoc() {
  actualitzarNuvols();
  dibuixar();
  requestAnimationFrame(bucleJoc); // Crida recursiva per continuar el bucle
}

// 🚀 Iniciem el bucle
bucleJoc();
    