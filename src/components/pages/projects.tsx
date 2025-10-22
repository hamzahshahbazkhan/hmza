"use client";

import styles from "../../styles/terminal.module.css";
import projects from "../../data/projects.json";

export function ProjectsPage({ active = true }: { active?: boolean }) {
  return (
    <div
      id="projects-page"
      aria-labelledby="projects"
      className={`${styles.page} ${active ? styles.active : ""}`}
    >
      <h1 className={styles.h1}>All Projects</h1>

      <p style={{ marginBottom: "2rem" }}>
        {"A collection of stuff that I've built."}
      </p>

      {projects.map((project) => (
        <div className={styles.projectCard} key={project.title}>
          <h3 className={styles.projectTitle}>
            <a href={project.sourceCode}>{project.title}</a>
          </h3>
          <p>{project.description}</p>
          <p>
            Tech:{" "}
            {project.tech.flatMap((t, i) =>
              i === 0
                ? [
                    <code key={t} className={styles.code}>
                      {t}
                    </code>,
                  ]
                : [
                    " ",
                    <code key={t} className={styles.code}>
                      {t}
                    </code>,
                  ],
            )}
          </p>
          <p className={styles.projectLinks} style={{ marginTop: "0.5rem" }}>
            {project.liveDemo ? (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "1em" }}
              >
                Live demo
              </a>
            ) : (
              <div></div>
            )}
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/hamzahshahbazkhan/{project.title}
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}
