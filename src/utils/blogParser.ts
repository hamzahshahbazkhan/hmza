export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: "tech" | "other";
}

// Simple frontmatter parser that works in the browser
function parseFrontmatter(markdown: string): {
  data: Record<string, any>;
  content: string;
} {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = markdown.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content: markdown };
  }

  const frontmatterText = match[1];
  const content = match[2];

  const data: Record<string, any> = {};

  // Parse YAML-like frontmatter
  const lines = frontmatterText.split("\n");
  for (const line of lines) {
    const colonIndex = line.indexOf(":");
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();

      // Remove quotes if present
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.substring(1, value.length - 1);
      }

      data[key] = value;
    }
  }

  return { data, content };
}

// Auto-import all markdown files from the blogs directory
const blogModules = import.meta.glob("/src/content/blogs/*.md", {
  as: "raw",
  eager: true,
});

let cachedBlogs: BlogPost[] | null = null;

function parseBlogs(): BlogPost[] {
  if (cachedBlogs) {
    return cachedBlogs;
  }

  const blogs: BlogPost[] = [];

  for (const [path, content] of Object.entries(blogModules)) {
    try {
      const { data, content: markdownContent } = parseFrontmatter(
        content as string,
      );

      // Extract slug from filename or use frontmatter slug
      const filenameSlug = path.split("/").pop()?.replace(".md", "") || "";
      const slug = data.slug || filenameSlug;

      const blog: BlogPost = {
        slug,
        title: data.title || "Untitled",
        date: data.date || new Date().toISOString(),
        category: (data.category as "tech" | "other") || "other",
        excerpt: data.excerpt || data.description || "",
        content: markdownContent,
      };

      blogs.push(blog);
    } catch (error) {
      console.error(`Error parsing blog at ${path}:`, error);
    }
  }

  // Sort by date (newest first)
  blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  cachedBlogs = blogs;
  return blogs;
}

export function getAllBlogs(): BlogPost[] {
  const blogs = parseBlogs();
  return blogs;
}

export function getBlogBySlug(slug: string): BlogPost | null {
  const blog = parseBlogs().find((blog) => blog.slug === slug);
  return blog || null;
}

export function getBlogsByCategory(category: "tech" | "other"): BlogPost[] {
  const blogs = parseBlogs().filter((blog) => blog.category === category);
  return blogs;
}
