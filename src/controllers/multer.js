import fs from 'node:fs/promises';
import path from 'path';
import multer from "multer"
const upload=multer({dest:'uploads/'})
export async function saveImage(file) {
  const newPath = path.join('uploads', file.originalname);
  try {
    await fs.rename(file.path, newPath);
    console.log('Imagen guardada en:', newPath);
    return newPath;
  } catch (err) {
    console.error('Error al guardar imagen:', err);
    return null;
  }
}
export const subirImage=upload.single('imageProduct')