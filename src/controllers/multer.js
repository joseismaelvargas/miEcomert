import fs from 'node:fs/promises';
import path from 'path';
import multer from 'multer';

// Multer guarda archivos temporalmente con nombre aleatorio
const upload = multer({ dest: 'uploads/' });

// Función para renombrar el archivo al nombre original o uno único
export async function saveImage(file) {
  const uniqueName = `${Date.now()}-${file.originalname}`;
  const newPath = path.join('uploads', uniqueName);
  try {
    await fs.rename(file.path, newPath);
    console.log('Imagen guardada en:', newPath);
    return uniqueName;
  } catch (err) {
    console.error('Error al guardar imagen:', err);
    return null;
  }
}

// Middleware de multer para subir una sola imagen
export const subirImage = upload.single('imageProduct');
