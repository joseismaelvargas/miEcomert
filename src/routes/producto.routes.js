import { Router } from "express";
import { subirImage } from "../controllers/multer.js";
import { verProducto,editProducto,crearProducto,deleteProducto} from "../controllers/productoscontrolers.js";

const ruta=Router()

ruta.route("/producto").post(subirImage,crearProducto).get(verProducto)
ruta.route("/producto/:id").put(subirImage,editProducto).delete(deleteProducto)

export default ruta