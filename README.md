# Pokédex 


## Objetivo 🌄

Crear una aplicación web según los requerimientos pedidos relacionados con los wireframes de la carpeta 'Prueba Pokémon'.

## Requerimientos generales ✅

- La aplicación se debe crear utilizando React.js
- Debe utilizar Functional Components y Styled Components.
- Se debe aplicar Redux.
- Se debe usar los servicios ofrecidos por [Poke Api](https://pokeapi.co/), sin embargo se pueden utilizar otros servicios adicionales.

## Requerimientos 📖
### Pantalla De inicio De Sesión
Construir la vista basándose en el wireframe '1 Inicio de sesión'. Debe de considerar las siguientes funcionalidades:

- Debe simular un inicio de sesión guardando los datos en localStorage.
- Ambos campos son requeridos y tendrán la validación adecuada al tipo de información que contendrá.
- Esta vista será la principal cuando no se haya simulado el inicio de Sesión, una vez que esto ocurra esta vista estará oculta e inaccesible.

### Pantalla Principal
Construir la vista basándose en los wireframes '2a Principal Modo Lista' y '2b Principal Modo Cuadrícula'. Debe de considerar las siguientes funcionalidades generales:

- El campo de texto que contiene el Placeholder "Buscar Pokémon" servirá para filtrar el contenido por nombre.
- El grupo de botones "Lista", y "Cuadrícula" cambiará la forma en que se mostrará el contenido. Por defecto el modo "lista" estará seleccionado.

Para el modo lista se debe basar el diseño en el wireframe '2a Principal Modo Lista' y considerar las siguientes funcionalidades:

- Se mostrará los datos en modo de lista con las columnas correspondientes a los datos "Número", "Nombre", "Imagén", "Tipos" y "Habilidades".
- Cada elemento de la lista tendrá un botón con la leyenda "Shiny", que al hacer clic sobre él se mostrará una ventana emergente que contiene las imágenes del pokémon correspondiente en su forma Variocolor o Shiny.
- Al hacer clic en un elemento de la lista se redirigirá a la Pantalla de detalle con la información del pokémon correspondiente.
- Debe contener soporte de paginación por botones.

Para el modo cuadrícula se debe basar el diseño en el wireframe '2b Principal Modo Cuadrícula' y considerar las siguientes funcionalidades:

- Se mostrará los datos en modo de tarjeta con los datos, "Nombre", "Imagen", "Tipos" y "Habilidades" y un botón con la leyenda "Shiny", que al hacer click sobre él se mostrará una ventana emergenta que contiene las imagénes del pokémon correspondiente en su forma Variocolor o Shiny.
- Al hacer clic en la tarjeta se redirigirá a la Pantalla de detalle con la información del pokémon correspondiente.
- Debe contener soporte de paginación por Infinite Scroll.

### Pantalla de detalle
Construir la vista basandose en el wireframe '3 Vista Poke'. Debe de considerar las siguientes funcionalidades:

- Se mostrará las imágenes correspondientes al pokémon, incluida su forma Variocolor o Shiny, en el formato de galería.
- En la tarjeta superior izquierda se mostrarán los datos "Nombre", "Tipos" y "Descripción" del pokémon.
- En la tarjeta inferior izquierda se mostrarán la lista de habilidades del pokémon con nombre y descripción.
- En la tarjeta derecha se mostrarán una lista de 10 movimientos que el pokémon puede aprender. Cada movimiento debe contener los datos "Nombre", "Poder", "Precisión" y "Tipo"


## Puntos que valoraremos 🏁
- Compromiso.
- Creatividad.
- Buenas prácticas.
- Experiencia de las herramientas aplicadas.
- Propuestas de mejora.
