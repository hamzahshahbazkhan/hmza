"use client"

import type { PropsWithChildren } from "react"
import styles from "../styles/terminal.module.css"

export function PageContainer({ children }: PropsWithChildren) {
  return <div className={styles.container}>{children}</div>
}
