"use client";

import { UIMessage } from "ai";
import { useChat } from "@ai-sdk/react";
import Message from "./component/Message";

import styles from "./page.module.css";

export default function AI() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    status,
    stop,
    error,
    reload,
  } = useChat({
    maxSteps: 5,
  });

  return (
    <div className={styles.chat}>
      <div className={styles.messages}>
        {messages.map((message) => (
          <div key={message.id} className={styles.message}>
            {message.parts.map((part, i) => {
              switch (part.type) {
                case "text":
                  return (
                    <Message
                      key={`${message.id}-${i}`}
                      message={part}
                      role={message.role}
                    />
                  );
                case "tool-invocation":
                  return (
                    <pre key={`${message.id}-${i}`}>
                      {JSON.stringify(part.toolInvocation, null, 2)}
                    </pre>
                  );
              }
            })}
          </div>
        ))}

        {error && (
          <>
            <div>An error occurred.</div>
            <button type="button" onClick={() => reload()}>
              Retry
            </button>
          </>
        )}
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          name="prompt"
          value={input}
          onChange={handleInputChange}
          disabled={status !== "ready"}
          placeholder="Hola, ¿en qué puedo ayudarte?"
        />
        {status === "submitted" || status === "streaming" ? (
          <button type="button" onClick={() => stop()}>
            Stop
          </button>
        ) : (
          <button type="submit">Enviar</button>
        )}
      </form>
    </div>
  );
}

// Create fake conversation
const fakeMessages: UIMessage[] = [
  {
    id: "1",
    role: "user",
    parts: [{ type: "text", text: "Hola" }],
    content: "Hola",
  },
  {
    id: "2",
    role: "assistant",
    parts: [{ type: "text", text: "Hola, ¿en qué puedo ayudarte?" }],
    content: "Hola, ¿en qué puedo ayudarte?",
  },
  {
    id: "3",
    role: "user",
    parts: [
      {
        type: "text",
        text: "Quiero adaptar una evaluación para un niño de 10 años",
      },
    ],
    content: "Quiero adaptar una evaluación para un niño de 10 años",
  },
  {
    id: "4",
    role: "assistant",
    parts: [
      { type: "text", text: "Que tipo de DEA (dificultad) tiene el niño?" },
    ],
    content: "Que tipo de DEA (dificultad) tiene el niño?",
  },
  {
    id: "5",
    role: "user",
    parts: [{ type: "text", text: "Tiene dislexia" }],
    content: "Tiene dislexia",
  },
  {
    id: "6",
    role: "assistant",
    parts: [{ type: "text", text: "Bien, copia y pega la evaluación" }],
    content: "Bien, copia y pega la evaluación",
  },
];
