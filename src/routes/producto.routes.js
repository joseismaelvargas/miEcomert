import { Router } from "express";
import { subirImage } from "../controllers/multer.js";
import { funcionprueba,verProducto,editProducto,crearProducto,deleteProducto} from "../controllers/productoscontrolers.js";
import { saveImage } from "../controllers/multer.js";
const ruta=Router()

ruta.route("/producto").post(crearProducto).get(verProducto)
ruta.route("/producto/:id").put(editProducto).delete(deleteProducto)
ruta.route('/images/single').post(subirImage, async (req, res) => {
  const nombreGuardado = await saveImage(req.file);
  if (!nombreGuardado) {
    return res.status(500).json({ mensaje: 'Error al guardar imagen' });
  }

  res.json({
    mensaje: 'Imagen subida correctamente',
    archivo: req.file,
    url: `/uploads/${nombreGuardado}`  // ← nombre final, accesible públicamente
  });
});

export default ruta