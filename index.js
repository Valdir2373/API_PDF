import express from "express";
import routerPDF from "./back-end/constroller.js";

const app = express();

app.use(routerPDF);
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
