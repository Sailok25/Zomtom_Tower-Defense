export class Suelo {
  constructor(x, y, ancho, alto, img) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.img = img;
  }

  dibujar(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.ancho, this.alto);
  }
}