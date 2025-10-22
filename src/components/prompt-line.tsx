"use client";

import styles from "../styles/terminal.module.css";

export function PromptLine({ command = "" }: { command?: any }) {
  return (
    <div className={styles.promptLine}>
      <span className={styles.user}>hamzah</span>
      <span className={styles.at}>@</span>
      <span className={styles.host}>wh0d!n1</span>
      <span className={styles.path}>:~</span>
      <span className={styles.dollar}>$</span>{" "}
      <span className={styles.command}>{command}</span>
    </div>
  );
}
