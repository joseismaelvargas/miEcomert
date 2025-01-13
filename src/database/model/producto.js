import { text } from "express";
import mongoose, { Schema } from "mongoose";
const productosEcomert=new Schema({
    name:{
        type:String,
        require:true,
        maxLength:30,
        minLength:5,
        unique:true
        
    },
    namedetallado:{
        type:String,
        require:true,
        maxLength:200,
        minLength:20,
        unique:true
    },
    img:{
        type:String,
        require:true
    },
    categoria:{
        type:String,
        require:true
    },
    text:{
        type:String,
        require:true,
        minLength:3,
        maxLength:500
    },
    precio:{
        type:Number,
        require:true,

    },
    cantidad:{
        type:Number
    }
})
    const ProductoEcomert=mongoose.model('Producto',productosEcomert)
    export default ProductoEcomert