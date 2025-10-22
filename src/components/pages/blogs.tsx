import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/terminal.module.css";
import { getAllBlogs, getBlogsByCategory } from "../../utils/blogParser";

interface BlogsPageProps {
  active: boolean;
}

export function BlogsPage({ active }: BlogsPageProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "tech" | "other">(
    "all",
  );
  const allBlogs = getAllBlogs();
  const techBlogs = getBlogsByCategory("tech");
  const otherBlogs = getBlogsByCategory("other");

  const getFilteredBlogs = () => {
    switch (activeFilter) {
      case "tech":
        return techBlogs;
      case "other":
        return otherBlogs;
      default:
        return allBlogs;
    }
  };

  const filteredBlogs = getFilteredBlogs();

  return (
    <div
      id="blogs-page"
      aria-labelledby="blogs"
      className={`${styles.page} ${active ? styles.active : ""}`}
    >
      <h1 className={styles.h1}>Blogs</h1>

      {/* Filter Navigation - Like Home Page Nav */}
      <div className={styles.blogFilters}>
        <span className={styles.blogFilterList}>
          <span>
            <button
              className={`${styles.blogFilterLink} ${activeFilter === "all" ? styles.active : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              all({allBlogs.length})
            </button>
          </span>
          <span>
            <button
              className={`${styles.blogFilterLink} ${activeFilter === "tech" ? styles.active : ""}`}
              onClick={() => setActiveFilter("tech")}
            >
              tech({techBlogs.length})
            </button>
          </span>
          <span>
            <button
              className={`${styles.blogFilterLink} ${activeFilter === "other" ? styles.active : ""}`}
              onClick={() => setActiveFilter("other")}
            >
              other({otherBlogs.length})
            </button>
          </span>
        </span>
      </div>

      {/* Blog Content */}
      <div className={styles.blogContent}>
        <div className={styles.blogSeparator}>
          ________________________________________________________________________________
        </div>

        {filteredBlogs.length === 0 ? (
          <p style={{ color: "peru" }}>no post yet</p>
        ) : (
          filteredBlogs.map((blog) => (
            <div key={blog.slug} className={styles.blogPost}>
              <h3 className={styles.h3}>
                <Link to={`/blog/${blog.slug}`} className={styles.blogTitle}>
                  {blog.title}
                </Link>
              </h3>
              <p className={styles.date}>
                {new Date(blog.date).toLocaleDateString()}
              </p>
              <p className={styles.text}>{blog.excerpt}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
