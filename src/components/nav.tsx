"use client";

import { Link } from "react-router-dom";
import styles from "../styles/terminal.module.css";

type PageKey = "home" | "about" | "projects" | "blogs" | "random" | "contact";

export function Nav({
  active,
  onChange,
}: {
  active: PageKey;
  onChange: (key: PageKey) => void;
}) {
  // If not on home page, show back to home link
  if (active !== "home") {
    return (
      <nav className={styles.nav} aria-label="Navigation">
        <Link to="/" className={styles.backLink}>
          ← back to home
        </Link>
      </nav>
    );
  }

  // On home page, show full navigation
  const links: { key: PageKey; label: string }[] = [
    { key: "projects", label: "projects" },
    { key: "blogs", label: "blogs" },
    // { key: "random", label: "random" },
    { key: "about", label: "about" },
    { key: "contact", label: "contact" },
    // { key: "home", label: "gui" },
  ];

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <span
        className={styles.navList}
        role="tablist"
        aria-orientation="horizontal"
      >
        {links.map((l) => (
          <span key={l.key}>
            <Link
              to={l.key === "home" ? "https://spectop.vercel.app" : `/${l.key}`}
              className={`${styles.navLink} ${active === l.key ? styles.active : ""}`}
              role="tab"
              aria-selected={active === l.key}
              aria-controls={`${l.key}-page`}
            >
              {l.label}
            </Link>
          </span>
        ))}
      </span>
    </nav>
  );
}
