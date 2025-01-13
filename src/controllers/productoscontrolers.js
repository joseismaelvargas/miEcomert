import ProductoEcomert from "../database/model/producto.js";

export const funcionprueba= (req,res)=>{
    console.log("Alguien se conecto ala prueba")
    res.send("Hola dese el backend")
}

export const crearProducto=async (req,res) =>{
     try{
          const productonew=new ProductoEcomert(req.body)
          await productonew.save()
          res.status(201).json({message:"Se creo el producto" })
     }catch{
    
       res.status(500).json({message:" un error al crear el Producto"})
       console.log("error")
     }
}

export const verProducto=async(res,req)=>{
    try {
       const mostrar= await ProductoEcomert.find()
       res.status(200).json(mostrar)
       console.log("Se mostro la lista")
    }catch{
        console.error(error)
        res.status(500).json({message:"error al mostrar producto"})
    }
}