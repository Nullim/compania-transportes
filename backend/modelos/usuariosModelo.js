var pool = require('./bd');
var md5 = require('md5');

async function obtenerUsuarioPorNombreYClave(usuario, clave) {
  try {
    var query = 'select * from usuarios where usuario = ? and clave = ? limit 1';
    var filas = await pool.query(query, [usuario, md5(clave)]);
    return filas[0];
  } catch (error) {
    console.log(error);
  }
}

module.exports = { obtenerUsuarioPorNombreYClave };
