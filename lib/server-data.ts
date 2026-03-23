// Server-side data layer — reads/writes posts from data/posts.json.
// Falls back to the static seed data in lib/data.ts on first run.
// All functions in this file are server-only (Node.js fs).

import fs from "fs";
import path from "path";
import {
  posts as seedPosts,
  categories as seedCategories,
  type Post,
  type Category,
  type Destination,
  destinations,
  authors,
} from "./data";

export type { Post, Category, Destination };
export { authors, destinations };

const DATA_DIR = path.join(process.cwd(), "data");
const POSTS_FILE = path.join(DATA_DIR, "posts.json");

function ensureDir() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
}

// ── Posts ────────────────────────────────────────────────────────────────────

export function getAllPosts(): Post[] {
  ensureDir();
  if (!fs.existsSync(POSTS_FILE)) {
    fs.writeFileSync(POSTS_FILE, JSON.stringify(seedPosts, null, 2));
    return seedPosts;
  }
  try {
    return JSON.parse(fs.readFileSync(POSTS_FILE, "utf-8")) as Post[];
  } catch {
    return seedPosts;
  }
}

export function savePosts(posts: Post[]): void {
  ensureDir();
  fs.writeFileSync(POSTS_FILE, JSON.stringify(posts, null, 2));
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getPostById(id: string): Post | undefined {
  return getAllPosts().find((p) => p.id === id);
}

export function getPostsByCategory(categorySlug: string): Post[] {
  return getAllPosts().filter((p) => p.categorySlug === categorySlug);
}

export function getFeaturedPosts(): Post[] {
  return getAllPosts().filter((p) => p.featured);
}

export function getRelatedPosts(post: Post, limit = 3): Post[] {
  return getAllPosts()
    .filter((p) => p.id !== post.id && p.categorySlug === post.categorySlug)
    .slice(0, limit);
}

export function searchPosts(query: string): Post[] {
  if (!query.trim()) return getAllPosts();
  const q = query.toLowerCase();
  return getAllPosts().filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
  );
}

export function createPost(post: Post): Post {
  const posts = getAllPosts();
  posts.unshift(post);
  savePosts(posts);
  return post;
}

export function updatePost(id: string, updates: Partial<Post>): Post | null {
  const posts = getAllPosts();
  const idx = posts.findIndex((p) => p.id === id);
  if (idx === -1) return null;
  posts[idx] = { ...posts[idx], ...updates };
  savePosts(posts);
  return posts[idx];
}

export function deletePost(id: string): boolean {
  const posts = getAllPosts();
  const filtered = posts.filter((p) => p.id !== id);
  if (filtered.length === posts.length) return false;
  savePosts(filtered);
  return true;
}

// ── Categories ───────────────────────────────────────────────────────────────

export function getAllCategories(): Category[] {
  return seedCategories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return seedCategories.find((c) => c.slug === slug);
}

// ── Formatting ────────────────────────────────────────────────────────────────

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
