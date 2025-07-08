export class Zombi {
  constructor(x, y, datosZombi) {
    this.x = x;
    this.y = y;
    this.sprite = new Image();
    this.sprite.src = datosZombi.imagenSrc;
    this.animaciones = datosZombi.animaciones;
    this.estado = 'caminar';
    this.frameActual = 0;
    this.contadorFrames = 0;

    this.velocidad = datosZombi.velocidad;
    this.vida = datosZombi.vida;
    this.daño = datosZombi.daño || 10;
    this.tipo = datosZombi.tipo;
  }

  actualizar() {
    this.contadorFrames++;
    if (this.contadorFrames > 10) {
      this.frameActual = (this.frameActual + 1) % this.animaciones[this.estado].length;
      this.contadorFrames = 0;
    }

    this.x -= this.velocidad;
  }

  dibujar(ctx) {
    const frame = this.animaciones[this.estado][this.frameActual];
    ctx.drawImage(
      this.sprite,
      frame.x, frame.y, frame.width, frame.height,
      this.x, this.y - frame.height,
      frame.width, frame.height
    );
  }

  recibirDaño(puntos) {
    this.vida -= puntos;
    if (this.vida <= 0) {
      this.estado = 'muerto';
    }
  }
} 