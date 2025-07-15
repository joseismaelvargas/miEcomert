import multer from "multer"
import fs from "node:fs"
const upload=multer({dest:'uploads/'})

export function saveImage(file){
 const newPath=`uploads/${file.originalname}`;
 fs.renameSync(file.path,newPath)
 return newPath
}
export const subirImage=upload.single('imageProduct')