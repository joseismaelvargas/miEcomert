import { Router } from "express";
import { subirImage } from "../controllers/multer.js";
import { funcionprueba,verProducto,editProducto,crearProducto,deleteProducto} from "../controllers/productoscontrolers.js";
import { saveImage } from "../controllers/multer.js";
const ruta=Router()

ruta.route("/producto").post(crearProducto).get(verProducto)
ruta.route("/producto/:id").put(editProducto).delete(deleteProducto)
ruta.route('/images/single').post(subirImage,(req,res)=>{
   res.send({
  mensaje: 'Imagen subida correctamente',
  archivo: req.file,
  url: `/uploads/${req.file.filename}`
});
     console.log(req.file);
   saveImage(req.file)
  
})
export default ruta