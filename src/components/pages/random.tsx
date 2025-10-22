import { useState } from "react";
import styles from "../../styles/terminal.module.css";
import hoardingsData from "../../data/hoardings.json";

interface HoardingItem {
  id: string;
  type: "website" | "article" | "book" | "paper" | "video" | "tool";
  title: string;
  url: string;
  description: string;
  category: "tech" | "other";
}

interface RandomPageProps {
  active: boolean;
}

const hoardings: HoardingItem[] = hoardingsData as HoardingItem[];

export function RandomPage({ active }: RandomPageProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "tech" | "other">("all");
  const [activeType, setActiveType] = useState<"all" | "website" | "article" | "book" | "paper" | "video" | "tool">("all");

  const getFilteredHoardings = () => {
    let filtered = hoardings;

    if (activeFilter !== "all") {
      filtered = filtered.filter(item => item.category === activeFilter);
    }

    if (activeType !== "all") {
      filtered = filtered.filter(item => item.type === activeType);
    }

    return filtered;
  };

  const filteredHoardings = getFilteredHoardings();



  return (
    <div
      id="random-page"
      aria-labelledby="random"
      className={`${styles.page} ${active ? styles.active : ""}`}
    >
      <h1 className={styles.h1}>Random Hoardings</h1>

      {/* Category Filters */}
      <div className={styles.blogFilters}>
        <span className={styles.blogFilterList}>
          <span>
            <button
              className={`${styles.blogFilterLink} ${activeFilter === "all" ? styles.active : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              all
            </button>
          </span>
          <span>
            <button
              className={`${styles.blogFilterLink} ${activeFilter === "tech" ? styles.active : ""}`}
              onClick={() => setActiveFilter("tech")}
            >
              tech
            </button>
          </span>
          <span>
            <button
              className={`${styles.blogFilterLink} ${activeFilter === "other" ? styles.active : ""}`}
              onClick={() => setActiveFilter("other")}
            >
              other
            </button>
          </span>
        </span>
      </div>

      {/* Type Filters */}
      <div className={styles.blogFilters} style={{ marginTop: "1rem" }}>
        <span className={styles.blogFilterList}>
          <span>
            <button
              className={`${styles.blogFilterLink} ${activeType === "all" ? styles.active : ""}`}
              onClick={() => setActiveType("all")}
            >
              all types
            </button>
          </span>
          <span>
            <button
              className={`${styles.blogFilterLink} ${activeType === "website" ? styles.active : ""}`}
              onClick={() => setActiveType("website")}
            >
              websites
            </button>
          </span>
          <span>
            <button
              className={`${styles.blogFilterLink} ${activeType === "article" ? styles.active : ""}`}
              onClick={() => setActiveType("article")}
            >
              articles
            </button>
          </span>
          <span>
            <button
              className={`${styles.blogFilterLink} ${activeType === "book" ? styles.active : ""}`}
              onClick={() => setActiveType("book")}
            >
              books
            </button>
          </span>
          <span>
            <button
              className={`${styles.blogFilterLink} ${activeType === "paper" ? styles.active : ""}`}
              onClick={() => setActiveType("paper")}
            >
              papers
            </button>
          </span>
          <span>
            <button
              className={`${styles.blogFilterLink} ${activeType === "video" ? styles.active : ""}`}
              onClick={() => setActiveType("video")}
            >
              videos
            </button>
          </span>
          <span>
            <button
              className={`${styles.blogFilterLink} ${activeType === "tool" ? styles.active : ""}`}
              onClick={() => setActiveType("tool")}
            >
              tools
            </button>
          </span>
        </span>
      </div>

      {/* Hoardings Content */}
      <div className={styles.blogContent}>
        <div className={styles.blogSeparator}>
          ________________________________________________________________________________
        </div>

        {filteredHoardings.length === 0 ? (
          <p style={{ color: "peru" }}>no hoardings yet</p>
        ) : (
          filteredHoardings.map((item) => (
            <div key={item.id} className={styles.blogPost}>
              <h3 className={styles.h3}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.blogTitle}
                >
                  {item.title}
                </a>
              </h3>
              <p className={styles.text}>{item.description}</p>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                <span
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "4px",
                    fontSize: "0.8rem",
                    color: "var(--cyan)"
                  }}
                >
                  {item.category}
                </span>
                <span
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "4px",
                    fontSize: "0.8rem",
                    color: "var(--cyan)"
                  }}
                >
                  {item.type}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}