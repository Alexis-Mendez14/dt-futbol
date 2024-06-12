const express = require('express');
const app = express();

const Mundialista = [
  {
    "anio": 1998,
    "anfitrion": "Francia",
    "ganador": "Francia"
  },
  {
    "anio": 2002,
    "anfitrion": "Corea del Sur, Japon",
    "ganador": "Brasil"
  },
  {
    "anio": 2006,
    "anfitrion": "Alemania",
    "ganador": "Italia"
  },
  {
    "anio": 2010,
    "anfitrion": "Australia", // Error
    "ganador": "Espania"
  },
  {
    "anio": 2014,
    "anfitrion": "Brasil",
    "ganador": "Alemania"
  },
  {
    "anio": 2018,
    "anfitrion": "Rusia",
    "ganador": "Francia"
  },
]
// Definición de rutas
// - Una ruta GET para obtener los mundiales que tenga registrados (la lista actual)
// - Una ruta POST que me permita registrar un nuevo mundial (falta el de Catar por ejemplo)
// - Una ruta PATCH que me permita actualizar un mundial que exista (el de 2010 no fue en Australia)
// - Una ruta DELETE que me permita borrar un mundial que exista (borremos el primero que es el más viejo)
// <- Aquí van ustedes
app.get('/',(req,res) => (res.send(Mundialista)));
app.post('/',(req,res) =>{
  Mundialista = res.body
  res.send('Se agrego un nuevo mundial')
} );
app.patch('/',(req,res) => {
res.send('Se actualizado la listas')
} );
app.delete('/',(req,res) => { 
  
  res.send('Se elemino un mundial')
});
const PORT = 3000
app.listen(PORT, 3000 , () => {console.log(`Escuchando peticiones en el puerto ${PORT}...`)
})