# Documentación de uso

### Endpoint: GET http://localhost:3000/dev/users

Endpoint en prod:

GET https://enahcaom54.execute-api.us-east-1.amazonaws.com/dev/users

#### Descripción:

Este endpoint permite recuperar una lista de usuarios.

#### Método HTTP:

- GET

#### Parámetros:

Ninguno

#### Respuesta exitosa:

- Código de estado: 200 OK
- Contenido de respuesta: Un arreglo de objetos JSON, cada uno representando un usuario.

#### Ejemplo de Uso:

```
curl -X GET http://localhost:3000/dev/users
curl -X GET https://enahcaom54.execute-api.us-east-1.amazonaws.com/dev/users
```

### Endpoint: POST http://localhost:3000/dev/users

#### Descripción:

Este endpoint permite crear un nuevo usuario.

#### Método HTTP:

- POST

#### Parámetros:

- Cuerpo de solicitud (JSON): Un objeto JSON que representa al nuevo usuario a crear.

#### Respuesta exitosa:

- Código de estado: 201 Created
- Contenido de respuesta: Un objeto JSON representando al usuario recién creado.

#### Ejemplo de Uso:

```
POST http://localhost:3000/dev/users
```

### Endpoint: GET http://localhost:3000/dev/translate/{word}

#### Descripción:

Este endpoint permite traducir una palabra al español.

#### Método HTTP:

- GET

#### Parámetros:

- `word` (string): La palabra que se desea traducir.

#### Respuesta exitosa:

- Código de estado: 200 OK
- Contenido de respuesta: La palabra traducida al español en formato de texto.

#### Ejemplo de Uso:

```
curl -X GET http://localhost:3000/dev/translate/hello
curl -X GET https://enahcaom54.execute-api.us-east-1.amazonaws.com/dev/translate/hello
```

### Endpoint: GET http://localhost:3000/dev/swapi/{resource}

#### Descripción:

Este endpoint permite recuperar datos de SWAPI (Star Wars API) para un recurso específico.

**Los recursos que se pueden consultar son:** 

films, people, planets, species, starships, vehicles

#### Método HTTP:

- GET

#### Parámetros:

- `resource` (string): El nombre del recurso de SWAPI que se desea recuperar, por ejemplo, "people" o "films".

#### Respuesta exitosa:

- Código de estado: 200 OK
- Contenido de respuesta: Datos de SWAPI en formato JSON.

#### Ejemplo de Uso:

```
curl -X GET http://localhost:3000/dev/swapi/starships
curl -X GET https://enahcaom54.execute-api.us-east-1.amazonaws.com/dev/swapi/starships
```

### Endpoint: GET http://localhost:3000/dev/swapi/{resource}/{id}

#### Descripción:

Este endpoint permite recuperar datos de SWAPI (Star Wars API) para un recurso específico por su ID.

**Los recursos que se pueden consultar son:** 

films, people, planets, species, starships, vehicles

#### Método HTTP:

- GET

#### Parámetros:

- `resource` (string): El nombre del recurso de SWAPI que se desea recuperar, por ejemplo, "people" o "films".
- `id` (string): El ID del recurso que se desea recuperar.

#### Respuesta exitosa:

- Código de estado: 200 OK
- Contenido de respuesta: Datos de SWAPI en formato JSON.

#### Ejemplo de Uso:

```
curl -X GET http://localhost:3000/dev/swapi/starships/2
curl -X GET https://enahcaom54.execute-api.us-east-1.amazonaws.com/dev/swapi/starships/2
```