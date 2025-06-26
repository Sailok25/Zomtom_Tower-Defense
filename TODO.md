# ✅ Lista de tareas – ZomTom: Tower Defense

Aquí se detallan todas las tareas del proyecto, dividido por áreas.  
- `- [X]` : Tarea completada  
- `- [ ]` : Tarea pendiente  



## 🧱 Base del Proyecto (Código & Preparación)
- [X] Organizar estructura de carpetas
- [X] Crear archivo `DOCUMENTACION.md`
- [X] Crear archivo `TODO.md`
- [X] Sistema de versiones (Git)
- [ ] Configurar favicon del juego
- [ ] Añadir iconos responsive (mobile, tablet)



## 🖼️ Sprites y Recursos Gráficos

### 🎨 Escenario
- [ ] Crear fondo base para el escenario
- [ ] Crear sprite del suelo (fijo)
- [ ] Mostrar suelo en escena
- [ ] Crear sprite de roca
- [ ] Mostrar roca en escena
- [ ] Crear sprite de árbol
- [ ] Mostrar árbol en escena
- [ ] Organizar capas de fondo/medio/frente

### 🧍‍♂️ Héroes
- [ ] Crear clase `Hero`
- [ ] Cargar sprite `heroMan.png`
- [ ] Cargar sprite `heroWoman.png`
- [ ] Mostrar héroe en pantalla
- [ ] Animación héroe quieto
- [ ] Animación héroe disparando

### 🧟 Zombis
- [ ] Crear clase base `Zombie`
- [ ] Crear sprite `zombie_base.png`
- [ ] Crear clase `ZombiBásico`
- [ ] Mostrar zombi básico en pantalla
- [ ] Crear clase `ZombiRápido`
- [ ] Mostrar zombi rápido en pantalla
- [ ] Crear clase `ZombiEspecial`
- [ ] Mostrar zombi especial en pantalla
- [ ] Crear clase `ZombiTanque`
- [ ] Mostrar zombi tanque en pantalla
- [ ] Crear sistema de oleadas

### 💣 Armas y Trampas
- [ ] Crear clase `Arma`
- [ ] Mostrar sprite de disparo
- [ ] Crear clase `Bala`
- [ ] Mostrar bala en movimiento
- [ ] Detectar colisión bala-zombi
- [ ] Añadir daño y eliminación al colisionar
- [ ] Crear sistema de mejoras de armas
- [ ] Crear sprite de trampa (futuro)
- [ ] Lógica para colocar trampas en la línea de aparición
- [ ] Activar trampas al paso de zombis



## 🎮 Motor del Juego
- [ ] Crear archivo `main.js` como entrada
- [ ] Crear canvas en `index.html`
- [ ] Iniciar bucle `requestAnimationFrame`
- [ ] Calcular `deltaTime` entre frames
- [ ] Controlar FPS
- [ ] Crear sistema de estados (`menú`, `jugando`, `pausa`, `fin`)
- [ ] Modularizar código por clases/módulos
- [ ] Controlar reinicio y reset de partida



## 🕹️ Controles & Jugabilidad
- [ ] Movimiento del héroe (estático)
- [ ] Detectar clic para disparar
- [ ] Añadir cooldown entre disparos
- [ ] Pausar la partida
- [ ] Reanudar la partida
- [ ] Botón para reiniciar partida
- [ ] HUD: vida del jugador
- [ ] HUD: puntuación por zombis eliminados
- [ ] HUD: dinero o puntos para mejoras
- [ ] Mostrar pantalla de victoria
- [ ] Mostrar pantalla de derrota



## 🔊 Sonido
- [ ] Añadir música de fondo (`music.mp3`)
- [ ] Reproducir música en bucle
- [ ] Sonido de disparo
- [ ] Sonido de muerte de zombi
- [ ] Sonido de explosión
- [ ] Botón mute música
- [ ] Control de volumen general



## 🧠 Interfaz de Usuario (UI)
- [ ] Crear menú principal (`Start`, `Ayuda`)
- [ ] Mostrar botones (`Start`, `Ayuda`)
- [ ] Mostrar instrucciones básicas (cómo jugar)
- [ ] Crear HUD encima del canvas
- [ ] Mostrar iconos de vida / dinero / puntuación
- [ ] Mostrar botón pausa dentro del juego
- [ ] Crear mensaje de victoria
- [ ] Crear mensaje de derrota
- [ ] Añadir animación simple de transición entre pantallas



## 🧪 Extras

### 🧑‍🏫 Tutorial y ayuda
- [ ] Mostrar ayuda al iniciar primera vez
- [ ] Crear guía de ayuda con imágenes en `assets/tutorial/`
- [ ] Mostrar los posibles estados del héroe (esperando, disparando, etc.)

### ⚙️ Funciones futuras
- [ ] Sistema de mejora de armas con niveles
- [ ] Selección de personaje inicial (hombre/mujer)
- [ ] Guardado de partida en localStorage
- [ ] Carga de partida guardada
- [ ] Modo supervivencia (infinito, con marcador)



## 🧹 Optimización y Publicación
- [ ] Comentar todo el código fuente
- [ ] Eliminar funciones o sprites no usados
- [ ] Comprimir imágenes para rendimiento
- [ ] Comprimir archivos de audio
- [ ] Probar en Chrome, Firefox y Edge
- [ ] Subir versión final a GitHub
- [ ] Opción para subir a Itch.io u otra plataforma