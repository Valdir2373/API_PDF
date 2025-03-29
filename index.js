import express from "express";
import routerPDF from "./constroller.js";

const app = express();

app.use(routerPDF);
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
