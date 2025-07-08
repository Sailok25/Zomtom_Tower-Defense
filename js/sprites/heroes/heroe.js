export class Heroe {
  constructor(x, y, datosSprite, escala = 1) {
    this.x = x;
    this.y = y;
    this.escala = escala;
    this.sprite = new Image();
    this.sprite.src = datosSprite.imagenSrc;
    this.animaciones = datosSprite.animaciones;
    this.estado = 'idle';
    this.frameActual = 0;
    this.contadorFrames = 0;
  }

  actualizar() {
    this.contadorFrames++;
    if (this.contadorFrames > 10) {
      this.frameActual = (this.frameActual + 1) % this.animaciones[this.estado].length;
      this.contadorFrames = 0;
    }
  }

  dibujar(ctx) {
    const frame = this.animaciones[this.estado][this.frameActual];
    const drawW = frame.width * this.escala;
    const drawH = frame.height * this.escala;

     const offsetY = this.estado === 'idle' ? 2 : 0;

    ctx.drawImage(
      this.sprite,
      frame.x, frame.y, frame.width, frame.height,
      this.x, this.y - drawH + offsetY, drawW, drawH
    );
  }

  cambiarEstado(nuevoEstado) {
    if (this.estado !== nuevoEstado) {
      this.estado = nuevoEstado;
      this.frameActual = 0;
      this.contadorFrames = 0;
      // Ajustar la posición y si es necesario
      const frame = this.animaciones[nuevoEstado][0];
      const diferenciaAltura = (this.animaciones[this.estado][0].height - frame.height) * this.escala;
      this.y += diferenciaAltura;
    }
  }
}
