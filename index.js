import express from "express"

import morgan from "morgan";
import cors from "cors"
import path from 'path';
import { fileURLToPath } from 'url';
import ruta from "./src/routes/producto.routes.js"
import "./src/database/model/bdconection.js"


const app=express()
app.set('port',process.env.PORT||4000);

app.listen(app.get('port'),()=>{
   console.info("Se conecto al puerto " +app.get('port'))
});
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)
console.log(__dirname)
app.use(express.static(path.join(__dirname,'/public')))

app.use('/uploads', express.static('uploads'));

app.use('/api',ruta)
