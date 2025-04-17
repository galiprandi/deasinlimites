import { UIMessage } from "ai";
import styles from "./Message.module.css";
import ReactMarkdown from "react-markdown";
import clipboard from "@/assets/icons/clipboard.svg";

import { useState } from "react";
import Image from "next/image";

export default function Message({
  message,
  role,
}: {
  message: UIMessage["parts"][number];
  role: UIMessage["role"];
}) {
  const [copied, setCopied] = useState(false);
  if (message.type !== "text") return null;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(message.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className={`${styles.message} ${styles[role]}`}>
      <ReactMarkdown>{message.text}</ReactMarkdown>
      {role === "assistant" && (
        <button
          type="button"
          onClick={handleCopy}
          className={styles.copyButton}
          aria-label="Copiar al portapapeles"
        >
          <Image src={clipboard} alt="Copiar" width={14} height={14} />
          {copied ? "Copiado!" : "Copiar"}
        </button>
      )}
    </div>
  );
}
