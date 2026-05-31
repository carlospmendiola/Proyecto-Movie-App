# Proyecto-Movie-App
Creación de una base de datos de películas Nos centramos en el desarrollo de la lógica de servidor, la persistencia de datos, la gestión de ficheros y la seguridad. Construiremos una API REST robusta utilizando Node.js y Express.

## Repositorio del proyecto
https://github.com/carlospmendiola/Proyecto-Movie-App

## Url despligue en Render

## Historias de invitado
### Como invitado puedo acceder al login
- Recoger validar datos del login
- Generar y devolver token

### Como invitado puedo acceder al registro
- Recoger y validar datos del registro
- Guardamos los datos en bbdd
- Generar y devolver token

## Historias de usuario
### Como usuario registrado puedo acceder a la búsqueda de películas
- Verificar Token y rol de usuario.
- Validar búsqueda
- Ejecutar búsqueda y devolver json de resultado

### Como usuario registrado puedo añadir película a favoritos
- Verificar Token y rol de usuario.
- Validar datos
- Añadir a bbdd

### Como usuario registrado puedo ver detalle película de favoritos
- Verificar Token y rol de usuario.
- Validar datos
- Devolver detalle película

### Como usuario registrado puedo eliminar películas de favoritos
- Verificar Token y rol de usuario.
- Validar datos
- Eliminar de favoritos

### Como usuario registrado puedo acceder al listado de favoritos
- Verificar Token y rol de usuario.
- Devolver listado favoritos usuario

## Historias de administrador
### Como administrador puedo acceder al listado de todas las películas
- Verificar Token y rol de administrador.
- Devolver listado todas las películas de la bbdd

### Como administrador puedo crear películas
- Verificar Token y rol de administrador.
- Confirmar datos validos.
- Subir imagen con Multer y almacenar URL
- Añadir película en bbdd

### Como administrador puedo editar películas
- Verificar Token y rol de administrador.
- Recoger los datos nuevo y validarlos.
- Probar existencia película
- Remplazar imagen si es necesario con Multer
- Actualizar datos nuevos película

### Como administrador puedo eliminar películas
- Verificar Token y rol de administrador.
- Validar y verificar existencia película
- Eliminar de la bbdd


En relación al uso de Multer proponemos que el tratamiento del nombre del archivo de la imagen coincida con el id de laq película y comprobar si la imagen que se manda es la misma que la que ya había guardada, para ahorrar el proceso de Multer.

** Usar módulo de node para comprobar el hash del archivo

## Tareas según nivel urgencia
- Crear funciones relacionadas en la verificación del Token
- Crear funciones relacionadas en la verificación del rol de usuario

## Base de datos
### Motor (MongoDB)
Entre PostgreSQL y MongoDB, se ha escogido este último como motor para la base de datos del proyecto debido a los siguientes puntos:

- **Simplicidad:** Debido a la reducida cantidad de entidades, utilizar una base de datos orientada a documentos permite no generar entidades adicionales para las relaciones.
- **Sencillez:** Evitamos tener que buscar un ORM para interactuar con la base de datos al ser un modelo de documentos más cercano a un modelo de objetos.
- **Dinamismo:** Para un desarrollo inicial donde la estructura puede cambiar según necesidades durante las primeras etapas de implementación, una base de datos orientada a documentos cambios de estructura de forma más ágil que una base de datos relacional.
- **Caso de uso:** Una base de datos orientada a documentos es más adecuada que una relacional para un catálogo de películas.

### Modelos
Se han definido dos modelos User y Movie para guardar respectivamente los usuarios y las películas.

- Modelo **User**:
	- _\_id:_ ObjectId de MongoDB
	- _name**\***:_ cadena de texto de hasta 30 caracteres
	- _email**\***:_ cadena de texto de hasta 254 caracteres
	- _password**\***:_ hash de la contraseña del usuario
	- _rol**\***:_ el rol del usuario, solo se admite "admin" o "user"
	- _favorites:_ array a ids del modelo Movie
	- _version:_ campo de versionado propio de MongoDB ante cambios importantes en el documento
	- _createdAt:_ fecha generada por MongoDB, la de creación del documento
	- _updatedAt:_ fecha generada por MongoDB, la de última actualización del documento

		**\*** Campo requerido

- Modelo **Movie**:
	- _\_id:_ ObjectId de MongoDB
	- _title**\***:_ cadena de texto de hasta 255 caracteres
	- _synopsis:_ cadena de texto de hasta 2000 caracteres
	- _year:_ número entre 1888 y 9999
	- _director:_ cadena de texto de hasta 100 caracteres con el director de la película, si hay más de uno se separan por ','
	- _genres:_ array de cadenas de texto con el nombre de las categorías de la película
	- _duration:_ número entre 1 y 1000 con la duración de la película en minutos
	- _externalId:_ cadena de texto de hasta 12 caracteres, vacía si no se han obtenido los detalles de la película de un proveedor externo y el id de la película en el proveedor externo si se han obtenido externamente
	- _version:_ campo de versionado propio de MongoDB ante cambios importantes en el documento
	- _createdAt:_ fecha generada por MongoDB, la de creación del documento
	- _updatedAt:_ fecha generada por MongoDB, la de última actualización del documento

		**\*** Campo requerido

## Creamos un primer Trello
Un trello básico con las primeras Tareas a realizar

## Meet primera reunión
Realizamos un meet para la organización de tareas
