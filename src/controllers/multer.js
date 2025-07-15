import multer from "multer";
import fs from "node:fs";
import path from "path";

const upload = multer({ dest: 'uploads/' });

export function saveImage(file) {
  const uploadsDir = 'uploads/';
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir); // Por si Railway reinicia
  }

  // Evitar nombres duplicados
  const ext = path.extname(file.originalname);
  const name = path.basename(file.originalname, ext);
  const uniqueName = `${Date.now()}-${name}${ext}`;
  const newPath = path.join(uploadsDir, uniqueName);

  fs.renameSync(file.path, newPath);
  return uniqueName; // solo el nombre, para construir la URL luego
}

export const subirImage = upload.single('imageProduct');