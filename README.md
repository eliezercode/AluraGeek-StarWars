# Challange del curso FrontEnd de Alura Latam

# Alura Geek

Con la idea de poner en practica los conocimientos adquiridos en clases, es realizar un sitio web donde hagamos manipulación del DOM mediante JS y además manejar peticiones CRUD con API fake.

En el sitio podrán agregar nuevos personajes de StarWars a la base de datos mediante un formulario que realiza la validación de los datos, también se pueden realizar eliminaciones de personajes ya existentes o de los recientemente agregados.

# update de db.json en vercel.

También es posible ejecutar el sitio web utilizando Deploy API en VS Code
Sustituyendo https://json-server-alura-api.vercel.app/characters por http://localhost:3000/characters en los archivos JS:
* addCharacters
* printCharacters
* deleteCharacters
* app

Realizar el deploy en VSCode en la terminal

npx json-server --watch db.json --port 3000
