# Getting Started with Create React App

Este proyecto se ha iniciado con [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

En el directorio del proyecto puedes ejecutar:

### `npm install`

Instala los paquetes necesarios para poder iniciar la app.

### `npm start`

Corre la aplicación en modo desarrollo
Abrir [http://localhost:3000](http://localhost:3000) para ver en el navegador.

### `npm run build`

Genera la ap para producción en la carpeta `build`.\

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

Puedes eliminar la build con este comando

## Librerías y tecnologías utilizadas

### Tailwind CSS

Se ha usado este framework CSS para reutilizar los estilos generados en su archivo de configuración tailwind.config.js en la raíz del proyecto

### CSS Modules

Se han usado CSS Modules para añadir estilos en los componentes, cada uno tiene su estilo [Estilo].module.scss al lado de su fichero. De esta forma nos ahorramos colisiones del CSS y también nos permite ir añadiendo la flexibilidad de SASS y Tailwind

### Typescript

Se ha tipado la gran mayoría del código para poder tener mejor control sobre posibles bugs de tipado y para facilitar la comprensión de métodos, objetos, etc...

### Redux Toolkit

Aunque la aplicación es muy pequeña y podría usarse perfectamente contexto he querido dejar una estructura de Redux para validar conocimientos y dejar la estructura preparada para hacer más grande la app en un futuro. Se han usado los estandares según la documentaión de Redux.

### i18n

Se ha usado esta libería para la gestión de los idiomas, separados en distintos archivos JSON

### Axios

He utilizado esta librería en vez del fetch nativo por familiaridad, y porque puede ser un poco más flexible en un futuro.

### React-grid-system

Como no quería usar un framework de UI Components para una app tan pequeña, he customizado toos los componentes a excepción del grid en el que he usado esta librería que he visto que se adaptaba a lo que quería.first-letter:

## Estructura del proyecto

#### Root

En la Raiz del proyecto se han dejado archivos de configuración como el de tailwind, postCSS, typescript y eslint y prettier

#### src

Carpeta dónde se incluye toda la estructura de la aplicación

#### assets

Fuentes, imágenes e estilos globales usados en la app

#### config

Archivos de configuración que se han usado en la aplicación, como el configurador del cliente de Axios y la definición de los breakpoints que se comparte tanto para el grid como para tailwind

### Hooks

Hooks usados en la aplicación, en este caso se ha usado un custom hook para poder gestionar la visibilidad de los componentes dentro del viewport. En este caso se ha usado para el lazy de las imágenes, para ganar en performance y solo cargar los recursos de imágen cuando sean visibles.

### infraestructure

En esta carpeta iría todo lo que constituye parte de la estructura en la que se respalda la aplicación, se ha incluido solo la configuración de i18n, pero podrían incluirse temas de gitlabCI, kubernetes, etc...

### Modules

En esta carpeta está la estructura de carpetas que contienen los componentes de la aplicación. Se ha separado en carpetas según el módulo cargado, como home, detail y uno para cosas compartidas.

De esta forma en cada módulo se puede repetir cierta estructura de carpetas como componentes, types, utils, etc.. para tenerlos más organizados.

En el caso de ser una entidad usad en más de un módulo (types, cmponentes, ..) se colocaría en shared

### Services

Aquí se centralizan todos casos de uso que se van a utilizar para hacer las llamadas a la api de Braking Bad y que serán utilizados a lo largo de la web.

### Store

He escogio esta forma de organizar Redux, en contraposición de los estándares porque me gusta tener tanto la configuración de la store como las features en la misma carpeta.

Dentro de feature no he vinculado el componente que la cosume porque prefiero tener aquí solo el reducer en cuestión, ya que si no queda extraño a la hora de organizar los componentes, que prefiero ordenarlos por tipo de módulo que si usan una feature u otra.

### Utils

Todos aquellos scripts que no encajen exáctamente dento de la estructura se colocarían aquí.

## Explicación del proyecto

En la aplicación he usado por primera vez la versión v6 de React Router Dom y no se si lo he hecho de la mejor forma.

En el index.tsx he generado el renderizado de la aplicación según el tipo de ruta que se seleccione.

Todas los componentes cargarían dependiendo de su ruta,dentro de una carcasa inicial <App /> que usa un layout base que carga un <Header /> y un <Main> para reutilizarla en toda la aplicación. App también toma el componente <Outlet /> de React Router Dom para cnetralizar el renderizado de sus rutas hijas.

### Home

En la ruta de la home /:lang tendríamos el componente <CharacterList /> que se encarga de llamar mediante n dispacth a una acción de Redux para tomar toos los personajes de la Api de Baking Bad y almacenarlo en un estate que se llama characters. Este listado a su vez pinta otro componente <CharacterCard /> que se encarga de la visualización de la ficha que aparece en el listado.

## Detail

Una vez el usuario hace click en la ficha va a la ruta /:lang/character/:id donde se renderiza el componente <CharacterDetail />
el cual consulta si ya esxiste un stado en redux con ese personaje, y si no, llama a la Api a través de los services echos para cargar la info. Esta no se almacena en redux, ya que no le vi mucho sentido a guardar esta info cuando no se puede reaprovechar en el resto de la aplicación.

## Not Found

Si por lo que sea se introduce una url que no encaja con las anteriores se pinta un componente <NotFound /> al que se le puede personalizar el mensaje, ya que dicho componente también se reutiliza en los componentes de listado y detalles en caso de error. Dependiendo si es un 404 o un 500, según se entiende en la Api, ya que no da detalles, se pinta un mensaje u otro.

## Feedback usuario

A parte de la gestión de errores, se ha implementado skeletons en la parte de detalles para mejorar la experiencia de usuario y que siempre tenga información de que está ocurriendo. En la Home, en vez de un skeleton se ha usado un cargando. Se podía haber simulado un layout de N cajas en formato skeleton para simular el grid pero he optado por el loading.

## Test

Me ha quedado pendiente, no he tenido tiempo.
