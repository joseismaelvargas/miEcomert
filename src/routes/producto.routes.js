import { Router } from "express";
import { funcionprueba,crearProducto,verProducto} from "../controllers/productoscontrolers.js";
const ruta=Router()
ruta.route("/prueba").get(funcionprueba)
ruta.route("/crearProducto").post(crearProducto).get(verProducto)


export default ruta