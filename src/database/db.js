const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
app.use(cors({ origin: '*' }));

const conexion = mysql.createConnection({
    host:'containers-us-west-169.railway.app',
    port: 5524,
    user: 'root',
    password: 'cxB9W8M6ghkALcaNBGYK',
    database: 'railway'
});

conexion.connect((error)=>{
    if(error){
        console.log("El error de conexión es: " + error);
        return
    }
    console.log("Conexión estaleblecida correctamente");
});

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(bodyParser.json());


app.get('/consultarDatos', (req, res) => {
  // Tomar una conexión de la pool
  conexion.getConnection((err, connection) => {
    if (err) {
      console.error('Error al obtener la conexión de la pool: ', err);
      res.status(500).json({ message: 'Error al obtener la conexión de la pool' });
      return;
    }

    // Consultar los datos en la base de datos
    connection.query('SELECT * FROM Datos', (err, result) => {
      // Liberar la conexión de la pool después de completar la operación
      connection.release();

      if (err) {
        console.error('Error al consultar los datos en la base de datos: ', err);
        res.status(500).json({ message: 'Error al consultar los datos en la base de datos' });
      } else {
        console.log('Consulta correcta.');
        res.status(200).json({ data: result });
      }
    });
  });
});


module.exports = conexion;