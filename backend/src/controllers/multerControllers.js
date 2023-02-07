// Ajout de uuid
const { v4: uuidv4 } = require("uuid");
// import de fs pour renommer le fichier avec Multer
const fs = require("fs");

const uploadFile = (req, res) => {
  // On récupère le nom du fichier
  const { originalname } = req.file;
  // On récupère le nom du fichier
  const { filename } = req.file;
  // On utilise la fonction rename de fs pour renommer le fichier
  fs.rename(
    `uploads/${filename}`,
    `uploads/${originalname}-${uuidv4()}`,
    (err) => {
      if (err) throw err;
      res.send("File uploaded");
    }
  );
};

module.exports = {
  uploadFile,
};
