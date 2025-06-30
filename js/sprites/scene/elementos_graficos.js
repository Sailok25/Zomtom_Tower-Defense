export class ElementosGraficos {
  constructor(x, y, w, h, img, srcX, srcY, srcW, srcH) {
    this.x = x;     
    this.y = y;
    this.w = w;
    this.h = h;

    this.img = img; 

    this.srcX = srcX; 
    this.srcY = srcY;
    this.srcW = srcW;
    this.srcH = srcH;
  }

  dibujar(ctx) {
    ctx.drawImage(
      this.img,
      this.srcX, this.srcY, this.srcW, this.srcH, 
      this.x, this.y, this.w, this.h              
    );
  }
}
