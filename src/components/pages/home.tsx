"use client";
import { PromptLine } from "../prompt-line";
import { Cursor } from "../cursor";
import { Link } from "react-router-dom";
import styles from "../../styles/terminal.module.css";
import projects from "../../data/projects.json";

export function HomePage({ active = true }: { active?: boolean }) {

  return (
    <div
      id="home-page"
      aria-labelledby="home"
      className={`${styles.page} ${active ? styles.active : ""}`}
    >
      {/* <PromptLine command="glow README.md" /> */}
      <h1 className={styles.h1}>About</h1>
      <p>
        {
          "I'm Computer Science Engineer. I build fullstack applications and tools using "
        }
        <span className={styles.code}>TypeScript</span>
        {" and recently "}
        <span className={styles.code}>Rust</span>
        {
          ". I focus on performance, scalability, clean architecture and intuitive UI. Figuring things out diving head first (sometimes face first)."
        }
      </p>
      <p>Lately interested in Web3 and Cyber Security.</p>

      <h1 className={styles.h1}>
        <Link
          to="/projects"
          style={{ color: "var(--purple)", textDecoration: "none" }}
        >
          Featured Projects
        </Link>
      </h1>

      {projects.slice(0, 4).map((project) => (
        <div className={styles.projectCard} key={project.title}>
          <h3 className={styles.projectTitle}>
            <a href={project.liveDemo}>{project.title}</a>
          </h3>
          <p>{project.description}</p>
          <p style={{ marginTop: "0.5rem" }}>
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
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "1em" }}
              >
                Live demo
              </a>
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

      {/* <h1 className={styles.h1}> */}
      {/*   <Link */}
      {/*     to="/blogs" */}
      {/*     style={{ color: "var(--purple)", textDecoration: "none" }} */}
      {/*   > */}
      {/*     Recent Writings */}
      {/*   </Link> */}
      {/* </h1> */}
      {/* <ul className={styles.blogList}> */}
      {/*   {recentBlogs.map((blog) => ( */}
      {/*     <li key={blog.slug}> */}
      {/*       <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>{" "} */}
      {/*       <span className={styles.comment}> */}
      {/*         — {blog.excerpt.slice(0, 50)}... */}
      {/*       </span> */}
      {/*     </li> */}
      {/*   ))} */}
      {/* </ul> */}

      {/* <h1 className={styles.h1}>Socials</h1> */}
      {/* <ul className={styles.ul}> */}
      {/*   <li> */}
      {/*     <a href="https://github.com/hamzah">github.com/hamzah</a> */}
      {/*   </li> */}
      {/*   <li> */}
      {/*     <a href="https://linkedin.com/in/hamzah">linkedin.com/in/hamzah</a> */}
      {/*   </li> */}
      {/*   <li> */}
      {/*     <a href="mailto:hamzah@example.com">hamzah@example.com</a> */}
      {/*   </li> */}
      {/* </ul> */}

      <div style={{ marginTop: "2rem" }}>
        <PromptLine command={<Cursor />} />
      </div>
      <br />
      <footer className={styles.comment}>{"// HMZA@2025"}</footer>
      {/* bottom prompt with blinking cursor */}
    </div>
  );
}
