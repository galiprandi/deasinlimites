import { UIMessage } from "ai";
import styles from "./Message.module.css";
import ReactMarkdown from "react-markdown";

export default function Message({
  message,
  role,
}: {
  message: UIMessage["parts"][number];
  role: UIMessage["role"];
}) {
  if (message.type !== "text") return null;

  return (
    <div className={`${styles.message} ${styles[role]}`}>
      <ReactMarkdown>{message.text}</ReactMarkdown>
    </div>
  );
}
