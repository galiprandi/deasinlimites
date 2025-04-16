"use client";

import { useChat } from "@ai-sdk/react";
import Message from "./component/Message";
import send from "@/assets/icons/send.svg";
import Image from "next/image";

import styles from "./page.module.css";
import { useRef, useEffect } from "react";

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

  const messagesRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = messagesRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  return (
    <div className={styles.chat}>
      <div className={styles.messages} ref={messagesRef}>
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
          placeholder="escribe aquí..."
        />
        {status === "submitted" || status === "streaming" ? (
          <button type="button" onClick={() => stop()}>
            Stop
          </button>
        ) : (
          <button type="submit">
            <Image src={send} alt="Enviar" width={24} height={24} />
          </button>
        )}
      </form>
    </div>
  );
}

// Create fake conversation
/* const fakeMessages: UIMessage[] = [
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
]; */
