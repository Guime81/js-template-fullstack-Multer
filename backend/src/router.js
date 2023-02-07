const express = require("express");

const router = express.Router();
// import de Multer
const multer = require("multer");

const multerControllers = require("./controllers/multerControllers");

// On définit la destination de stockage de nos fichiers + testmulter représente la key à saisir dans Postman dans form-data
const upload = multer({ dest: "uploads/" }).single("testMulter");
const testage = (req, res, next) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      console.error(err);
    } else next();
  });
};

router.post("/api/uploadmulter", testage, multerControllers.uploadFile);
const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

/*

// ./src/router.js
const express = require("express");
const fs = require("fs");

// Ajout de multer
const multer = require("multer");

// Ajout de uuid
const { v4: uuidv4 } = require("uuid");

// On définit la destination de stockage de nos fichiers
const upload = multer({ dest: "uploads/" });

// route POST pour recevoir un fichier
router.post("/api/avatar", upload.single("avatar"), (req, res) => {
	// On récupère le nom du fichier
	const { originalname } = req.file;

	// On récupère le nom du fichier
	const { filename } = req.file;

	// On utilise la fonction rename de fs pour renommer le fichier
	fs
		.rename(`uploads/${filename}`, `uploads/${uuidv4()}-${originalname}`, (err) => {
			if (err) throw err;
			res.send("File uploaded");
		});
});
*/

module.exports = router;
