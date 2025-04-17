import { openai } from "@ai-sdk/openai";

import { streamText } from "ai";
import { system } from "./prompt";
import { object, string } from "zod";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4.1-mini"),
    system,
    messages,
    tools,
  });

  return result.toDataStreamResponse();
}

const tools: Parameters<typeof streamText>[0]["tools"] = {
  feedback: {
    description: "herramienta para enviar el feedback recibido del usuario",
    parameters: object({
      feedback: string().describe("El feedback del usuario"),
    }),
    execute: async ({ feedback }) => {
      console.info(feedback);
      return { message: "Gracias por el feedback" };
    },
  },
};
