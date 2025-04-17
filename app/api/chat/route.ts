// import { deepseek } from "@ai-sdk/deepseek";
import { openai } from "@ai-sdk/openai";
import { anthropic } from "@ai-sdk/anthropic";

import { streamText } from "ai";
import { system } from "./prompt";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4.1-mini"), // anthropic("claude-3-5-sonnet-latest"), //deepseek("deepseek-chat"),
    system,
    messages,
  });

  return result.toDataStreamResponse();
}
