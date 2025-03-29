import { Router } from "express";
import multer from "multer";
import main from "./service.js";
import fs from "fs/promises";

const routerPDF = Router();
const upload = multer({ dest: "uploads/" });

routerPDF.post(
  "/upload-pdf",
  upload.single("pdfFile"),
  async (req, res) => {
    console.log("Recebida requisição de upload de PDF.");
    if (!req.file) {
      console.log("Nenhum arquivo enviado.");
      return res.status(400).send("Nenhum arquivo enviado.");
    }
    const extractedText = await main(req.file.path);
    await fs.unlink(req.file.path);

    console.log("Arquivo recebido:", req.file);
    res.send(extractedText);
  },
  (err, req, res, next) => {
    // Error Handler
    console.error("Erro durante o upload:", err);
    res.status(500).send("Erro durante o upload.");
  }
);

export default routerPDF;
