# ✅ Lista de tareas – ZomTom: Tower Defense

Aquí se detallan todas las tareas del proyecto, dividido por áreas. 
- `- [X]` : Para marcar tareas completadas.
- `- [ ]` : Para marcar tareas pendientes. 



## 🎯 Base del proyecto
- [X] Estructura de carpetas organizada
- [X] Crear archivo `DOCUMENTACION.md`
- [X] Crear archivo `TODO.md`
- [X] Crear sistema de versiones (usando Git)



## 🖥️ HTML & CSS
- [X] Crear `index.html` con `<canvas>` principal
- [X] Crear `style.css` para menú e interfaz inicial
- [X] Añadir icono y título al navegador



## 🎮 Motor del juego
- [X] Crear `main.js` como punto de entrada
- [ ] Diseñar bucle principal (`loop`) con `requestAnimationFrame`
- [ ] Controlar el tiempo (`deltaTime`, FPS)
- [ ] Crear sistema de estados (menú, juego, pausa, fin)



## 🎨 Escenario y gráficos
- [ ] Dibujar fondo/escena en `scene.js`
- [ ] Crear el sprite del suelo (fijo)
- [ ] Dibujar el suelo
- [ ] Añadir decoracione por capas (árboles, rocas…)



## 🧍 Personajes y enemigos

### Héroes
- [ ] Crear clase base para héroe
- [ ] Cargar y mostrar sprite (`heroMan.png` o `heroWoman.png`)
- [ ] Mover héroe con teclas (izquierda/derecha)
- [ ] Animaciones simples (caminar, quieto)

### Zombis
- [ ] Crear clase base `Zombie`
- [ ] Implementar zombi básico (`z_basic.js`)
- [ ] Añadir zombi rápido y su lógica (`z_fast.js`)
- [ ] Añadir zombi especial (`z_special.js`)
- [ ] Añadir zombi tanque (`z_tank.js`)
- [ ] Sistema de oleadas



## 🧱 Entidades y torres

- [ ] Crear sistema de torres (`army.js`)
- [ ] Colocar torres en el escenario
- [ ] Crear balas/proyectiles
- [ ] Colisiones bala-zombi


## 💥 Sonido

- [ ] Reproducir música de fondo (`music.mp3`)
- [ ] Añadir efectos: disparos, muerte zombi, explosiones
- [ ] Control de volumen y mute


## 🧠 Interfaz (UI)

- [ ] Dibujar menú principal (start, ayuda)
- [ ] Crear HUD (vida, puntuación, dinero)
- [ ] Pantalla de victoria/derrota
- [ ] Añadir botón de pausa


## 🧪 Tutorial y ayuda

- [ ] Mostrar instrucciones al iniciar
- [ ] Crear guía paso a paso (usar `assets/tutorial/`)


## 🧹 Optimización y limpieza

- [ ] Modularizar el código en clases/módulos
- [ ] Comentar el código
- [ ] Eliminar código no usado


## 📦 Publicación

- [ ] Probar en distintos navegadores
- [ ] Comprimir imágenes y audio
- [ ] Subir a GitHub o servidor web


## 🧪 Extras (a futuro)

- [ ] Sistema de mejoras para torres
- [ ] Selección de héroe
- [ ] Guardado de partidas
- [ ] Modo supervivencia