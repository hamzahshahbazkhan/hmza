import styles from "../../styles/terminal.module.css";

export function ContactPage() {
  return (
    <>
      <h1 className={styles.h1}>Contact</h1>
      <p>
        Reach out if you want to chat about code, work together, or just say hi.
        I'm open to discussions on tech, projects, or anything interesting. I
        usually reply within 24 hours.
      </p>
      <br style={{ margin: "1rem" }} />
      <ul className={styles.ul}>
        <li>
          <a
            href="https://github.com/hamzahshahbazkhan"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub: github.com/hamzahshahbazkhan
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/hamzah-shahbaz-khan"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn: linkedin.com/in/hamzah-shahbaz-khan
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/straytjacket"
            target="_blank"
            rel="noopener noreferrer"
          >
            X/Twitter: @straytjacket
          </a>
        </li>
        <li>
          <a href="mailto:khanhamzah142@gmail.com">
            Email: khanhamzah142@gmail.com
          </a>
        </li>
        {/* <li> */}
        {/*   <a href="myresume.com" target="_blank" rel="noopener noreferrer"> */}
        {/*     Resume */}
        {/*   </a> */}
        {/*   <span className={styles.comment}> */}
        {/*     {" "} */}
        {/*     — In case you would like to hire me */}
        {/*   </span> */}
        {/* </li> */}
      </ul>
    </>
  );
}
