"use client";

import { useChat } from "@ai-sdk/react";
import Message from "./component/Message";
import send from "@/assets/icons/send.svg";
import Image from "next/image";

import styles from "./page.module.css";
import { useRef, useEffect } from "react";

import { fakeMessages } from "./messages.mock";

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
        {fakeMessages.map((message) => (
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
