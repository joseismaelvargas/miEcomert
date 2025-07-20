
import ProductoEcomert from "../database/model/producto.js";
// importamos la funcion save image 
import { saveImage } from "./multer.js";

export const funcionprueba= (req,res)=>{
    console.log("Alguien se conecto ala prueba")
    res.send("Hola dese el backend")
}

export const crearProducto=async (req,res) =>{
 
     try{
         
        let  imagen=null
        if(req.file){
            imagen=await saveImage(req.file)
        }
        console.log(imagen)
             const productonew = new ProductoEcomert({
      ...req.body,
     imageProduct: imagen ? `https://miecomert-production.up.railway.app/uploads/${imagen}` : null,
    });
          await productonew.save()
          res.status(201).json({message:"Se creo el producto" })
     }catch(error){
       console.log("BODY:", req.body);
    console.log("FILE:", req.file);
       res.status(500).json({message:" un error al crear el Producto"})
       console.error(error)
     }
}

export const verProducto = async (req, res) => {
    try {
        const mostrar = await ProductoEcomert.find();
        res.status(200).json(mostrar);
        console.log("Se mostró la lista");
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Hubo un error al mostrar los productos" });
    }
};
export const editProducto = async (req, res) => {
    try {
        let imagen=null
        const buscarProducto = await ProductoEcomert.findById(req.params.id);
        if (!buscarProducto) {
            return res.status(404).json({ message: "No se encontró el producto para editar" });
        }
         if(req.file){
         imagen=await saveImage(req.file)
         }
       
        const productoActualizado = await ProductoEcomert.findByIdAndUpdate(
            req.params.id,{
                ...req.body,
                imageProduct: imagen ? `https://miecomert-production.up.railway.app/uploads/${imagen}` : null,
            },
         

            { new: true } 
        );

        res.status(200).json({ 
            message: "Producto editado con éxito", 
            producto: productoActualizado 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al editar el producto" });
    }
};
 export const deleteProducto=async(req,res)=>{
    try{
      const producto=ProductoEcomert.findById(req.params.id)
      if(!producto){
        return res.status(404).json({message:"No se encontro el Producto"})
      }
      await ProductoEcomert.findByIdAndDelete(req.params.id)
      res.status(200).json({message:"Se borro el producto"})
    }catch(error){
        res.status(500).json({message:"Error al borrar producto"})
    }
 }
