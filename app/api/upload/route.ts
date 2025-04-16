import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";
import { v4 as uuidv4 } from "uuid";
import * as fs from "fs";

export const maxDuration = 30;

export async function POST(req: NextRequest) {
  try {
    // Verificar si el directorio de uploads existe, si no, crearlo
    const uploadDir = join(process.cwd(), "uploads");
    try {
      await fs.promises.access(uploadDir);
    } catch (error) {
      await fs.promises.mkdir(uploadDir, { recursive: true });
    }

    const formData = await req.formData();
    const message = (formData.get("message") as string) || "";
    const files = formData.getAll("files");

    if (!files || files.length === 0) {
      return NextResponse.json(
        { error: "No se proporcionaron archivos" },
        { status: 400 }
      );
    }

    const savedFiles = [];

    for (const file of files) {
      if (!(file instanceof File)) {
        continue;
      }

      const fileId = uuidv4();
      const fileExtension = file.name.split(".").pop();
      const fileName = `${fileId}.${fileExtension}`;
      const filePath = join(uploadDir, fileName);

      // Convertir archivo a Buffer
      const buffer = Buffer.from(await file.arrayBuffer());

      // Guardar el archivo
      await writeFile(filePath, buffer);

      savedFiles.push({
        originalName: file.name,
        savedName: fileName,
        path: filePath,
        type: file.type,
        size: file.size,
      });
    }

    return NextResponse.json({
      message: "Archivos subidos correctamente",
      files: savedFiles,
    });
  } catch (error) {
    console.error("Error al subir archivos:", error);
    return NextResponse.json(
      { error: "Error al procesar los archivos" },
      { status: 500 }
    );
  }
}
