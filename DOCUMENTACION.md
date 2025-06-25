# Proyecto: ZomTom - Tower Defense
Este archivo explica la estructura del juego y el propósito de cada carpeta y archivo. 


## 🎨 Carpeta `assets/`

### 1. `audio/`
- `btn_selector.mp3`, `game_over.mp3`, `music.mp3`: sonidos generales.
- `army/`: efectos de disparos o explosiones.
- `characteres/`: sonidos de zombis, gritos, etc.

### 2. `img/`
- Imágenes del juego, organizadas en:
  - `characters/hero/`: sprites del jugador.
  - `characters/zombie/`: sprites de enemigos.
  - `resources/menu/`: botones, textos e imágenes del menú.
  - `tutorial/`: imágenes para mostrar guía grafica.



## 💻 Carpeta `js/`

### 1. `data/`
| Archivo              | Descripción                                                       |
|----------------------|-------------------------------------------------------------------|
| `main.js`            | punto de entrada JS. Lógica de arranque, bucle principal, control de entrada.
| `engineILRU.js`      | Lógica del motor base: renderizado, actualizaciones, utilidades. |
| `gameConfig.js`      | Parámetros configurables del juego (velocidades, daño, etc).     |
| `uiElements.js`      | Botones, menús e interfaz gráfica (HUD).                         |                                                                |     


### 2. `sprites/`
#### 2.1 `entities/`
- `army.js`: clases o funciones para proyectiles y torres.
- `scene.js`: representa el escenario, suelo, fondo, etc.

#### 2.2 `heroes/`
- `heroMan.js`: lógica del héroe masculino.
- `heroWoman.js`: lógica de la heroína.

#### 2.3 `zombie/`
- `z_basic.js`: zombi normal.
- `z_fast.js`: zombi rápido.
- `z_special.js`: zombi con habilidades especiales.
- `z_tank.js`: zombi con más vida o resistencia.