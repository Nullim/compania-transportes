var express = require('express');
var router = express.Router();
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroyer = util.promisify(cloudinary.uploader.destroy);
var ModeloNovedades = require('../../modelos/novedadesModelo');

router.get('/', async function(req, res, next) {
  var novedades = await ModeloNovedades.obtenerNovedades();

  novedades = novedades.map(novedad => {
    if(novedad.img_id) {
      const imagen = cloudinary.image(novedad.img_id, {
        width: 70,
        height: 70,
        crop: 'fill'
      });
      return {
        ...novedad,
        imagen
      }
    } else {
      return {
        ...novedad,
        imagen: ''
      }
    }
  })
  res.render('admin/novedades', { 
    layout:'admin/layout',
    usuario: req.session.nombre,
    novedades
   });
});

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  });
});

router.post('/agregar', async (req,res, next) => {
  try {
    var img_id = '';
    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
      await ModeloNovedades.agregarNovedad({
        ...req.body,
        img_id
      });
      res.redirect('/admin/novedades')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true, message: 'Todos los campos son requeridos'
      })
    }
  } catch(e) {
    console.log(e)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true, message: 'No se subió la novedad'
    })
  }
})

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  let novedad = await ModeloNovedades.obtenerNovedadPorId(id);

  if (novedad.img_id) {
    await (destroyer(novedad.img_id))
  }
  await ModeloNovedades.eliminarNovedad(id);
  res.redirect('/admin/novedades');
})

router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;

  var novedad = await ModeloNovedades.obtenerNovedadPorId(id);
  res.render('admin/modificar', {
    layout: 'admin/layout',
    novedad
  })
})

router.post('/modificar', async(req, res, next) => {
  try {
    let img_id = req.body.imagen_original;
    let borrar_imagen_vieja = false;

    if(req.body.borrar_imagen === "1") {
      img_id = null;
      borrar_imagen_vieja = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
        borrar_imagen_vieja = true;
      }
    }
    
    if (borrar_imagen_vieja && req.body.imagen_original) {
      await (destroyer(req.body.imagen_original));
    }

    var obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo,
      img_id
    };

    await ModeloNovedades.modificarNovedad(obj, req.body.id);
    res.redirect('/admin/novedades');
  } catch (e) {
    console.log(e);
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modificó la novedad'
    })
  }
})

module.exports = router;
