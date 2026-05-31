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



## Elección BBDD
Se ha elegido MongoDB, por qué

## Creamos un primer Trello
Un trello básico con las primeras Tareas a realizar

## Meet primera reunión
Realizamos un meet para la organización de tareas
