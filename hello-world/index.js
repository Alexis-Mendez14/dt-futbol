const express = require('express');
const app = express();
app.listen(3000, () => (console.log('Server running on port 3000')));
app.get('/',(req,res) => (res.send("Bienvenido a mi aplicacion")));
app.get('C:\Users\Alumno\dt-futbol\menssages',(req,res) => (res.send("Su mensaje es:")));