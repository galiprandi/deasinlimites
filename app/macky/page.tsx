"use client";

import { useChat } from "@ai-sdk/react";
import Message from "./component/Message";
import send from "@/assets/icons/send.svg";
import attachment from "@/assets/icons/attachment.svg";
import pause from "@/assets/icons/pause.svg";
import Image from "next/image";

import { useRef, useEffect, useState } from "react";

import styles from "./page.module.css";

export default function AI() {
  const [isTyping, setIsTyping] = useState(false);
  const [files, setFiles] = useState<FileList | undefined>(undefined);

  const {
    messages,
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
    },
  });

  const messagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom
  useEffect(() => {
    const el = messagesRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages]);

  // Focus on input
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const removeFile = (index: number) => {
    setFiles(undefined);
  };

  const handleFileButtonClick = () => {
    fileInputRef.current?.click();
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;
    handleSubmit(e, {
      experimental_attachments: files,
    });
    setIsTyping(true);
    setFiles(undefined);
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

      {!!files?.length && (
        <div className={styles.filePreview}>
          {Array.from(files).map((file, index) => (
            <div key={index} className={styles.fileItem}>
              <span>{file.name}</span>
              <button
                type="button"
                onClick={() => removeFile(index)}
                className={styles.removeFileBtn}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      <form className={styles.form} onSubmit={onSubmit}>
        <input
          type="file"
          style={{ display: "none" }}
          onChange={(event) => {
            if (event.target.files) {
              setFiles(event.target.files);
            }
          }}
          multiple
          ref={fileInputRef}
        />
        <button
          type="button"
          onClick={handleFileButtonClick}
          className={styles.attachButton}
          disabled={isLoading}
        >
          <Image src={attachment} alt="Adjuntar" width={20} height={20} />
        </button>

        <input
          ref={inputRef}
          name="prompt"
          value={input}
          onChange={handleInputChange}
          disabled={isLoading}
          placeholder="escribe aquí..."
          className={styles.inputField}
        />

        {isLoading ? (
          <button
            type="button"
            onClick={() => stopGeneration()}
            className={styles.actionButton}
          >
            <Image src={pause} alt="Detener" width={24} height={24} />
          </button>
        ) : (
          <button type="submit" className={styles.actionButton}>
            <Image src={send} alt="Enviar" width={24} height={24} />
          </button>
        )}
      </form>
    </div>
  );
}
