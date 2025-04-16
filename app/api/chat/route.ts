import { deepseek } from "@ai-sdk/deepseek";
import { streamText } from "ai";
import { system } from "./prompt";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: deepseek("deepseek-chat"),
    system,
    messages,
    // tools,
  });

  return result.toDataStreamResponse();
}

/* 
const tools: Parameters<typeof streamText>[0]["tools"] = {
  weather: tool({
    description: "Get the weather in a location (fahrenheit)",
    parameters: z.object({
      location: z.string().describe("The location to get the weather for"),
    }),
    execute: async ({ location }) => {
      const temperature = Math.round(Math.random() * (90 - 32) + 32);
      return {
        location,
        temperature,
      };
    },
  }),
  convertFahrenheitToCelsius: tool({
    description: "Convert a temperature in fahrenheit to celsius",
    parameters: z.object({
      temperature: z
        .number()
        .describe("The temperature in fahrenheit to convert"),
    }),
    execute: async ({ temperature }) => {
      const celsius = Math.round((temperature - 32) * (5 / 9));
      return {
        celsius,
      };
    },
  }),
};
 */
