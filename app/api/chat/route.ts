import { deepseek } from "@ai-sdk/deepseek";
import { streamText } from "ai";
import { system } from "./prompt";
import { join } from "path";
import { readFile } from "fs/promises";
import { existsSync } from "fs";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Buscar si el último mensaje tiene referencia a archivos adjuntos
  if (messages.length > 0) {
    const lastMessage = messages[messages.length - 1];

    // Comprobar si hay referencias a archivos en el mensaje
    if (lastMessage.content && typeof lastMessage.content === "string") {
      const fileMatch = lastMessage.content.match(
        /\[Archivos adjuntos: (.*?)\]/
      );

      if (fileMatch && fileMatch[1]) {
        // Obtener los nombres de archivo mencionados
        const fileNames = fileMatch[1].split(", ");

        // Buscar en el directorio de uploads estos archivos
        const uploadDir = join(process.cwd(), "uploads");
        const filesData = [];

        // Extraer solo el mensaje sin la referencia a archivos
        lastMessage.content = lastMessage.content
          .replace(/\[Archivos adjuntos: (.*?)\]/, "")
          .trim();

        // Para cada archivo mencionado, intentar encontrarlo
        for (const fileName of fileNames) {
          // Buscar archivos en el directorio que contengan el nombre original
          const files = existsSync(uploadDir)
            ? (await readdir(uploadDir)).filter((file) =>
                file.includes(fileName)
              )
            : [];

          if (files.length > 0) {
            // Leer el contenido del archivo
            const filePath = join(uploadDir, files[0]);
            const fileContent = await readFile(filePath, "utf-8");

            // Agregar los datos del archivo
            filesData.push({
              name: fileName,
              content: fileContent,
            });
          }
        }

        // Si se encontraron archivos, agregarlos al sistema de mensajes
        if (filesData.length > 0) {
          const filesContext = `
El usuario ha adjuntado los siguientes archivos:
${filesData
  .map(
    (file, index) => `
Archivo ${index + 1}: ${file.name}
Contenido:
\`\`\`
${file.content.substring(0, 1000)}${
      file.content.length > 1000 ? "...[contenido truncado]" : ""
    }
\`\`\`
`
  )
  .join("\n")}
`;

          // Añadir el contexto de los archivos al sistema
          const enhancedSystem = system + filesContext;

          // Usar el sistema mejorado con el contexto de los archivos
          const result = streamText({
            model: deepseek("deepseek-chat"),
            system: enhancedSystem,
            messages,
          });

          return result.toDataStreamResponse();
        }
      }
    }
  }

  // Si no hay archivos o no se pudieron procesar, usar el flujo normal
  const result = streamText({
    model: deepseek("deepseek-chat"),
    system,
    messages,
  });

  return result.toDataStreamResponse();
}

// Función auxiliar para leer el directorio
async function readdir(dir: string): Promise<string[]> {
  try {
    return await fs.promises.readdir(dir);
  } catch (error) {
    console.error(`Error al leer el directorio ${dir}:`, error);
    return [];
  }
}
