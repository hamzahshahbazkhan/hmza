import { Link } from "react-router-dom";
import styles from "../../styles/terminal.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/default.css';
import { BlogPost } from "../../utils/blogParser";

interface BlogPostPageProps {
  blog: BlogPost;
  active: boolean;
}

export function BlogPostPage({ blog, active }: BlogPostPageProps) {
  return (
    <div
      id="blog-post-page"
      className={`${styles.page} ${active ? styles.active : ""}`}
    >
      <div className={styles.backLink}>
        <Link to="/blogs">← back to blogs</Link>
      </div>

      <div className={styles.blogHeader}>
        <h1 className={styles.blogTitle}>{blog.title}</h1>
        <p className={styles.blogDate}>
          // {new Date(blog.date).toLocaleDateString()}
        </p>
        <div className={styles.blogSeparator}>
          ________________________________________________________________________________
        </div>
      </div>

      <div className={styles.blogContent}>
         <ReactMarkdown
           remarkPlugins={[remarkGfm]}
           rehypePlugins={[rehypeHighlight]}
           components={{
            h1: ({ children }) => <h2 className={styles.blogH2}>{children}</h2>,
            h2: ({ children }) => <h3 className={styles.blogH3}>{children}</h3>,
            h3: ({ children }) => <h4 className={styles.blogH4}>{children}</h4>,
            h4: ({ children }) => <h5 className={styles.blogH5}>{children}</h5>,
            h5: ({ children }) => <h6 className={styles.blogH6}>{children}</h6>,
            h6: ({ children }) => <h6 className={styles.blogH6}>{children}</h6>,
            p: ({ children }) => <p className={styles.blogP}>{children}</p>,
            code: ({ children }) => (
              <code className={styles.blogCode}>{children}</code>
            ),
            pre: ({ children }) => (
              <pre className={styles.blogPre}>{children}</pre>
            ),
            ul: ({ children }) => <ul className={styles.blogUl}>{children}</ul>,
            ol: ({ children }) => <ol className={styles.blogOl}>{children}</ol>,
            li: ({ children }) => <li className={styles.blogLi}>{children}</li>,
            a: ({ children, href }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.blogLink}
              >
                {children}
              </a>
            ),
            blockquote: ({ children }) => (
              <blockquote className={styles.blogBlockquote}>
                {children}
              </blockquote>
            ),
            img: ({ src, alt }) => (
              <img
                src={src}
                alt={alt}
                className={styles.blogImg}
                loading="lazy"
              />
            ),
            hr: () => <hr className={styles.blogHr} />,
            strong: ({ children }) => (
              <strong className={styles.blogStrong}>{children}</strong>
            ),
            em: ({ children }) => <em className={styles.blogEm}>{children}</em>,
            table: ({ children }) => (
              <div className={styles.blogTableWrapper}>
                <table className={styles.blogTable}>{children}</table>
              </div>
            ),
            thead: ({ children }) => (
              <thead className={styles.blogThead}>{children}</thead>
            ),
            tbody: ({ children }) => (
              <tbody className={styles.blogTbody}>{children}</tbody>
            ),
            tr: ({ children }) => <tr className={styles.blogTr}>{children}</tr>,
            th: ({ children }) => <th className={styles.blogTh}>{children}</th>,
            td: ({ children }) => <td className={styles.blogTd}>{children}</td>,
          }}
        >
          {blog.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
