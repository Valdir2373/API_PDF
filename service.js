//ahsgdgastgdvb
import { exec } from "child_process";
import fs from "fs/promises";

async function extractTextFromPdf(pdfFilePath, outputFilePath) {
  try {
    await new Promise((resolve, reject) => {
      exec(
        `pdftotext -raw "${pdfFilePath}" "${outputFilePath}"`,
        (error, stdout, stderr) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        }
      );
    });

    const data = await fs.readFile(outputFilePath, "utf8");
    return data;
  } catch (error) {
    console.error("Erro ao extrair texto:", error);
    return null;
  }
}

const outputFilePath = "./output.txt";
export default async function main(pdfFilePath) {
  const extractedText = await extractTextFromPdf(pdfFilePath, outputFilePath);

  if (extractedText) {
    return extractedText;
    // Agora você pode armazenar 'extractedText' onde precisar.
  }
}
