var pool = require('./bd');

async function obtenerNovedades() {
  try {
    var query = "select * from novedades order by id desc";
    var rows = await pool.query(query);
    return rows;
  } catch (e) {
    console.log(e);
    throw e;
  }
}

async function obtenerNovedadPorId(id) {
  try {
    var query = "select * from novedades where id = ?";
    var rows = await pool.query(query, [id]);
    return rows[0]
  } catch(e) {
    console.log(e);
    throw e;
  }
}

async function agregarNovedad(obj) {
  try {
    var query = "insert into novedades set ? ";
    var rows = await pool.query(query, [obj])
    return rows;
  } catch(e) {
    console.log(e);
    throw e;
  }
}

async function eliminarNovedad(id) {
  try {
    var query = "delete from novedades where id = ?";
    var rows = await pool.query(query, [id])
    return rows;
  } catch (e) {
    console.log(e);
    throw e;
  }
}

async function modificarNovedad(obj, id) {
  try {
    var query = "update novedades set ? where id = ?";
    var rows = await pool.query(query, [obj, id]);
    return rows;
  } catch(e) {
    console.log(e);
    throw e;
  }
}

module.exports = { obtenerNovedades, agregarNovedad, eliminarNovedad, obtenerNovedadPorId, modificarNovedad }
