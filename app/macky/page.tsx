"use client";

import { useChat } from "@ai-sdk/react";
import Message from "./component/Message";
import send from "@/assets/icons/send.svg";
import attachment from "@/assets/icons/attachment.svg"; // Necesitarás este icono
import Image from "next/image";

import styles from "./page.module.css";
import { useRef, useEffect, useState } from "react";

import { fakeMessages } from "./messages.mock";

export default function AI() {
  const [isTyping, setIsTyping] = useState(false);
  const [showRealMessages, setShowRealMessages] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const {
    messages: realMessages,
    input,
    handleInputChange,
    handleSubmit: originalHandleSubmit,
    status,
    stop: stopGeneration,
    error,
    reload,
    setMessages,
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
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleFileButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "" && files.length === 0) return;

    setIsTyping(true);
    setShowRealMessages(true);

    // Si hay archivos, procesarlos
    if (files.length > 0) {
      try {
        // Crear un FormData para enviar los archivos
        const formData = new FormData();
        formData.append("message", input);
        files.forEach((file) => {
          formData.append("files", file);
        });

        // Enviar los archivos y el mensaje al servidor
        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Error al subir los archivos");
        }

        const data = await response.json();

        // Añadir mensaje del usuario con información de los archivos
        const fileNames = files.map((file) => file.name).join(", ");
        const userMessage = `${input}${
          input ? " " : ""
        }[Archivos adjuntos: ${fileNames}]`;

        // Limpiar los archivos
        setFiles([]);

        // Continuar con el flujo normal de envío de mensaje
        originalHandleSubmit(e, { message: userMessage });
      } catch (error) {
        console.error("Error al procesar archivos:", error);
        setIsTyping(false);
      }
    } else {
      // Si no hay archivos, proceder con el flujo normal
      originalHandleSubmit(e);
    }
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

      {/* Mostrar vista previa de archivos seleccionados */}
      {files.length > 0 && (
        <div className={styles.filePreview}>
          {files.map((file, index) => (
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

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
          multiple
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
            Stop
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
