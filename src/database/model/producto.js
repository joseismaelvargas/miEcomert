import { text } from "express";
import mongoose, { Schema } from "mongoose";
const productosEcomert=new Schema({
    name:{
        type:String,
        required:true,
        maxLength:30,
        minLength:5,
        unique:true
        
    },
    namedetallado:{
        type:String,
        required:true,
        maxLength:200,
        minLength:20,
  
    },
    img:{
        type:String,
        required:true
    },
    categoria:{
        type:String,
        required:true
    },
    text:{
        type:String,
        require:true,
        minLength:3,
        maxLength:500
    },
    precio:{
        type:Number,
        required:true,

    },
    cantidad:{
        type:Number
    }
})
    const ProductoEcomert=mongoose.model('Producto',productosEcomert)
    export default ProductoEcomert