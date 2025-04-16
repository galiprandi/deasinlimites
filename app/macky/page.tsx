"use client";

import { useChat } from "@ai-sdk/react";
import Message from "./component/Message";
import send from "@/assets/icons/send.svg";
import stop from "@/assets/icons/stop.svg"; // Asumiendo que tienes este icono
import retry from "@/assets/icons/retry.svg"; // Asumiendo que tienes este icono
import Image from "next/image";

import styles from "./page.module.css";
import { useRef, useEffect, useState } from "react";

import { fakeMessages } from "./messages.mock";

export default function AI() {
  const [isTyping, setIsTyping] = useState(false);
  const [showRealMessages, setShowRealMessages] = useState(false);

  const {
    messages: realMessages,
    input,
    handleInputChange,
    handleSubmit,
    status,
    stop: stopGeneration,
    error,
    reload,
  } = useChat({
    maxSteps: 5,
    onResponse: () => {
      setIsTyping(false);
      setShowRealMessages(true);
    },
  });

  // Usar mensajes falsos o reales según el estado
  const messages = showRealMessages ? realMessages : fakeMessages;

  const messagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll al fondo cuando hay nuevos mensajes
  useEffect(() => {
    const el = messagesRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages]);

  // Focus en el input al cargar la página
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setIsTyping(true);
    setShowRealMessages(true);
    handleSubmit(e);
  };

  const isLoading = status === "submitted" || status === "streaming";

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
                    <div
                      key={`${message.id}-${i}`}
                      className={styles.toolInvocation}
                    >
                      <pre>{JSON.stringify(part.toolInvocation, null, 2)}</pre>
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </div>
        ))}

        {isTyping && (
          <div className={styles.typingIndicator}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}

        {error && (
          <div className={styles.errorContainer}>
            <div className={styles.errorMessage}>Ha ocurrido un error.</div>
            <button
              type="button"
              onClick={() => reload()}
              className={styles.retryButton}
            >
              Reintentar
            </button>
          </div>
        )}
      </div>

      <form onSubmit={onSubmit} className={styles.form}>
        <input
          ref={inputRef}
          name="prompt"
          value={input}
          onChange={handleInputChange}
          disabled={isLoading}
          placeholder="escribe aquí..."
        />

        {isLoading ? (
          <button type="button" onClick={() => stopGeneration()}>
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
