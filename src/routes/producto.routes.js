import { Router } from "express";
import { subirImage } from "../controllers/multer.js";
import { funcionprueba,verProducto,editProducto,crearProducto,deleteProducto} from "../controllers/productoscontrolers.js";
import { saveImage } from "../controllers/multer.js";
const ruta=Router()

ruta.route("/producto").post(crearProducto).get(verProducto)
ruta.route("/producto/:id").put(editProducto).delete(deleteProducto)
ruta.post('/images/single', subirImage, (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No se subió ninguna imagen' });
  }

  const url = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;

  // Si tenés una función para guardar datos en la DB
  if (typeof saveImage === 'function') {
    saveImage(req.file); // o guardar req.file.filename / url
  }

  res.json({
    mensaje: 'Imagen subida correctamente',
    archivo: req.file,
    url
  });

  console.log('Archivo subido:', req.file);
});
export default ruta