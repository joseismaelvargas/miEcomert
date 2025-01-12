import { Schema } from "mongoose";
const productos=new Schema({
    nombre:{
        type:String,
        require:true,
        maxLength:30,
        minLength:5,
        
    }
})