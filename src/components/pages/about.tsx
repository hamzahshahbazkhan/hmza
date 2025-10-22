"use client";

import styles from "../../styles/terminal.module.css";

export function AboutPage({ active }: { active: boolean }) {
  return (
    <div
      id="about-page"
      aria-labelledby="about"
      className={`${styles.page} ${active ? styles.active : ""}`}
    >
      <h1 className={styles.h1}>About Me</h1>
      <pre className={styles.host}>
        {String.raw`/$$
| $$
| $$$$$$$  /$$$$$$/$$$$  /$$$$$$$$  /$$$$$$
| $$__  $$| $$_  $$_  $$|____ /$$/ |____  $$
| $$  $\ $$| $$ \ $$ \ $$   /$$$$/   /$$$$$$$
| $$  | $$| $$ | $$ | $$  /$$__/   /$$__  $$
| $$  | $$| $$ | $$ | $$ /$$$$$$$$|  $$$$$$$
|__/  |__/|__/ |__/ |__/|________/ \_______/

 `}
      </pre>{" "}
      <p>
        {
          "Hey, I'm Hamzah. I write code that does things, preferably things I'd actually use. I am currently working as a full stack engineer using Typescript and I have lately been dabbling with Rust "
        }
      </p>
      <p>
        {
          "I'm intrested in web3, cybersecurity, and linux (hence this website). I occasionally capture the flags."
        }
      </p>
      <p>
        {
          "I use arch (btw), and think gruvbox is objectively the correct color scheme. You can find my dots scattered around GitHub."
        }
      </p>
      <h2 className={styles.h2}>What I Do</h2>
      <p>
        {
          "I build full-stack applications and tools, ranging from web apps to CLI utilities. Most of my work involves:"
        }
      </p>
      <ul className={styles.ul}>
        <li>Building scalable and performative backend APIs.</li>
        <li>
          Creating responsive, interactive frontends with React and Next.js
        </li>
        <li>Developing plugins and cli tools for better workflows</li>
        <li>Exploring generative design and creative simulations in Rust.</li>
      </ul>
      <h2 className={styles.h2}>Technologies</h2>
      <div className={styles.infoBox}>
        <p>
          TypeScript, Javascript, Rust, Lua, React, Next.js, Tailwind, Node.js,
          PostgreSQL, MongoDB, Docker, Prisma, Neovim ...
        </p>
        <p>Currently exploring Rust async (Tokio), Web3 and creative coding.</p>
      </div>
      <h2 className={styles.h2}>Outside of Code</h2>
      <p>
        {
          "I get curious about anything and everything and deep dive into random stuff. Cards, magic, Rubik's cubes and many more. CTFs when I feel like it (new to it). Tinkering with Linux setups more than I probably should."
        }
      </p>
      <h1 className={styles.h1}>Connect</h1>
      <p>
        {
          "Want to talk about systems, security, card mechanics, or whatever? Hit me up."
        }
      </p>
      <ul className={styles.ul}>
        <li>
          <a
            href="https://github.com/hamzahshahbazkhan"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/hamzahshahbazkhan
          </a>{" "}
          <span className={styles.comment}>— code and projects</span>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/hamzah-shahbaz-khan"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/hamzah-shahbaz-khan
          </a>{" "}
          <span className={styles.comment}>— don't</span>
        </li>
        <li>
          <a
            href="https://x.com/straytjacket"
            target="_blank"
            rel="noopener noreferrer"
          >
            x.com/straytjacket
          </a>{" "}
          <span className={styles.comment}>— occasional thoughts</span>
        </li>
        <li>
          <a href="mailto:khanhamzah142@gmail.com">khanhamzah142@gmail.com</a>{" "}
          <span className={styles.comment}>— email works </span>
        </li>
      </ul>
    </div>
  );
}
