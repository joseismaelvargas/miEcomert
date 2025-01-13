import mongoose from "mongoose";
const mongodb="mongodb+srv://i00934562:dsrwaig473OsZFEh@cluster0.z8aba.mongodb.net/bdproducto"
mongoose.connect(mongodb)
const infoconection=mongoose.connection
infoconection.once('open',()=>{
    console.log("base de datos conectada")
})