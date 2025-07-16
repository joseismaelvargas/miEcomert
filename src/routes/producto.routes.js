import { Router } from "express";

import { funcionprueba,verProducto,editProducto,crearProducto,deleteProducto} from "../controllers/productoscontrolers.js";

const ruta=Router()

ruta.route("/producto").post(crearProducto).get(verProducto)
ruta.route("/producto/:id").put(editProducto).delete(deleteProducto)

export default ruta