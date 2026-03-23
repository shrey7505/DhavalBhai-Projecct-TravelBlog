import { NextRequest, NextResponse } from "next/server";
import { getAllPosts, createPost, slugify } from "@/lib/server-data";
import { authors } from "@/lib/data";
import type { Post } from "@/lib/server-data";

export async function GET() {
  return NextResponse.json(getAllPosts());
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const {
    title,
    excerpt,
    content,
    category,
    categorySlug,
    tags,
    image,
    readTime,
    featured,
    authorSlug,
  } = body;

  if (!title || !excerpt || !content || !category || !categorySlug) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const author = authors.find((a) => a.slug === authorSlug) ?? authors[0];

  const post: Post = {
    id: Date.now().toString(),
    slug: slugify(title),
    title,
    excerpt,
    content,
    author,
    category,
    categorySlug,
    tags: typeof tags === "string"
      ? tags.split(",").map((t: string) => t.trim()).filter(Boolean)
      : tags ?? [],
    image: image || "https://picsum.photos/seed/default/1200/700",
    date: new Date().toISOString().split("T")[0],
    readTime: Number(readTime) || 5,
    featured: Boolean(featured),
  };

  createPost(post);
  return NextResponse.json(post, { status: 201 });
}
