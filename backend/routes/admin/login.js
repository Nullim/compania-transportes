var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../modelos/usuariosModelo');

router.get('/', function(req, res, next) {
  res.render('admin/login', { layout:'admin/layout' });
});

router.post('/', async (req, res, next) => {
  try {
    var usuario = req.body.usuario;
    var clave = req.body.clave;
    var data = await usuariosModel.obtenerUsuarioPorNombreYClave(usuario, clave);

    if (data != undefined) {
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;
      res.redirect('/admin/novedades');
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      })
    }
  } catch (error) {
    console.log(error);
  }
})

router.get('/logout', function(req, res, next) {
  req.session.destroy();
  res.redirect('/admin/login');
})

module.exports = router;
