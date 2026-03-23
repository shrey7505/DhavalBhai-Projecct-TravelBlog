import { NextRequest, NextResponse } from "next/server";
import { getPostById, updatePost, deletePost, slugify } from "@/lib/server-data";
import { authors } from "@/lib/data";

interface Props {
  params: Promise<{ id: string }>;
}

export async function GET(_req: NextRequest, { params }: Props) {
  const { id } = await params;
  const post = getPostById(id);
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(post);
}

export async function PUT(request: NextRequest, { params }: Props) {
  const { id } = await params;
  const body = await request.json();

  const { title, excerpt, content, category, categorySlug, tags, image, readTime, featured, authorSlug } = body;

  if (!title || !excerpt || !content || !category || !categorySlug) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const author = authors.find((a) => a.slug === authorSlug) ?? authors[0];

  const updated = updatePost(id, {
    title,
    slug: slugify(title),
    excerpt,
    content,
    author,
    category,
    categorySlug,
    tags: typeof tags === "string"
      ? tags.split(",").map((t: string) => t.trim()).filter(Boolean)
      : tags ?? [],
    image: image || "https://picsum.photos/seed/default/1200/700",
    readTime: Number(readTime) || 5,
    featured: Boolean(featured),
  });

  if (!updated) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(updated);
}

export async function DELETE(_req: NextRequest, { params }: Props) {
  const { id } = await params;
  const deleted = deletePost(id);
  if (!deleted) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ ok: true });
}
