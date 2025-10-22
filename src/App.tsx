import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useParams,
} from "react-router-dom";
import { PromptLine } from "./components/prompt-line";
import { Nav } from "./components/nav";
import { HomePage } from "./components/pages/home";
import { AboutPage } from "./components/pages/about";
import { ProjectsPage } from "./components/pages/projects";
import { BlogsPage } from "./components/pages/blogs";
import { BlogPostPage } from "./components/pages/blog-post";
import { ContactPage } from "./components/pages/contacts";
import { RandomPage } from "./components/pages/random";

import { getBlogBySlug } from "./utils/blogParser";
import styles from "./styles/terminal.module.css";

type PageKey =
  | "home"
  | "about"
  | "projects"
  | "blogs"
  | "blog-post"
  | "contact"
  | "random";

// Component for individual blog posts that can access URL params
function BlogPostWrapper() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <div>Blog not found</div>;
  }

  const blog = getBlogBySlug(slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return <BlogPostPage blog={blog} active={true} />;
}

function AppContent() {
  const location = useLocation();
  const [active, setActive] = useState<PageKey>("home");

  // Update active page based on current route
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActive("home");
    } else if (path === "/about") {
      setActive("about");
    } else if (path === "/projects") {
      setActive("projects");
    } else if (path === "/blogs") {
      setActive("blogs");
    } else if (path === "/random") {
      setActive("random");
    } else if (path.startsWith("/blog/")) {
      setActive("blog-post");
    } else if (path === "/contact") {
      setActive("contact");
    }
  }, [location.pathname]);



  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const fullName = "Hamzah Khan";
  const [typedName, setTypedName] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTypedName(fullName.slice(0, i));
      if (i >= fullName.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className={styles.terminal} aria-label="khanhamza">
      <div className={`${styles.container} ${loaded ? styles.loaded : ""}`}>
        {active === "home" && (
          <>
            {/* prompt: whoami */}
            <PromptLine command="whoami" />
            <div className={styles.output}>
              {typedName}
              {isTyping ? (
                <span className={styles.typeCursor} aria-hidden="true" />
              ) : null}
            </div>
            {/* second prompt: ls */}
            <PromptLine command="ls" />
          </>
        )}
        <Nav active={active} />

        <Routes>
           <Route path="/" element={<HomePage />} />
           <Route
             path="/about"
             element={<AboutPage />}
           />
           <Route
             path="/projects"
             element={<ProjectsPage />}
           />
           <Route
             path="/contact"
             element={<ContactPage />}
           />
            <Route
              path="/blogs"
              element={<BlogsPage />}
            />
            <Route
              path="/random"
              element={<RandomPage />}
            />
            <Route path="/blog/:slug" element={<BlogPostWrapper />} />
         </Routes>
      </div>
    </main>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
