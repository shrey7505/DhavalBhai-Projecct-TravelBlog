"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, Eye, EyeOff, AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import ImageUploader from "./ImageUploader";
import type { Post } from "@/lib/server-data";
import { authors, categories } from "@/lib/data";

interface PostFormProps {
  post?: Post; // undefined = create mode
}

export default function PostForm({ post }: PostFormProps) {
  const router = useRouter();
  const isEditing = Boolean(post);

  const [form, setForm] = useState({
    title: post?.title ?? "",
    excerpt: post?.excerpt ?? "",
    content: post?.content ?? "",
    category: post?.category ?? categories[0].name,
    categorySlug: post?.categorySlug ?? categories[0].slug,
    tags: post?.tags?.join(", ") ?? "",
    image: post?.image ?? "",
    readTime: String(post?.readTime ?? 5),
    featured: post?.featured ?? false,
    authorSlug: post?.author?.slug ?? authors[0].slug,
  });

  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [previewMode, setPreviewMode] = useState(false);

  const set = (field: string, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleCategoryChange = (slug: string) => {
    const cat = categories.find((c) => c.slug === slug);
    if (cat) setForm((prev) => ({ ...prev, category: cat.name, categorySlug: cat.slug }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("saving");
    setErrorMsg("");

    try {
      const url = isEditing
        ? `/api/admin/posts/${post!.id}`
        : "/api/admin/posts";
      const method = isEditing ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Save failed");

      setStatus("success");
      setTimeout(() => router.push("/admin/posts"), 1000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "An error occurred");
    }
  };

  const inputClass =
    "w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 bg-white transition-colors";
  const labelClass = "block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-navy" style={{ fontFamily: "var(--font-display)" }}>
          {isEditing ? "Edit Post" : "New Post"}
        </h1>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPreviewMode((v) => !v)}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {previewMode ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            {previewMode ? "Edit" : "Preview"}
          </button>
          <button
            type="submit"
            disabled={status === "saving"}
            className="flex items-center gap-1.5 px-5 py-2 bg-navy text-white text-xs font-bold rounded-lg hover:bg-navy-light disabled:opacity-60 transition-colors"
          >
            {status === "saving" ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Save className="w-3.5 h-3.5" />
            )}
            {isEditing ? "Update Post" : "Publish Post"}
          </button>
        </div>
      </div>

      {/* Status messages */}
      {status === "success" && (
        <div className="mb-4 flex items-center gap-2 p-3 bg-green-50 text-green-700 rounded-lg text-sm border border-green-200">
          <CheckCircle2 className="w-4 h-4" />
          Post saved! Redirecting…
        </div>
      )}
      {status === "error" && (
        <div className="mb-4 flex items-center gap-2 p-3 bg-red-50 text-red-700 rounded-lg text-sm border border-red-200">
          <AlertCircle className="w-4 h-4" />
          {errorMsg}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content column */}
        <div className="lg:col-span-2 space-y-5">
          {/* Title */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <label className={labelClass}>Post Title *</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => set("title", e.target.value)}
              required
              placeholder="An enticing, descriptive title..."
              className={`${inputClass} text-base font-semibold`}
            />
          </div>

          {/* Excerpt */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <label className={labelClass}>Excerpt *</label>
            <textarea
              value={form.excerpt}
              onChange={(e) => set("excerpt", e.target.value)}
              required
              rows={3}
              placeholder="A short, compelling summary shown in article cards and SEO descriptions..."
              className={inputClass}
            />
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-1.5">
              <label className={labelClass + " mb-0"}>Content (HTML) *</label>
              <span className="text-xs text-gray-400">
                Use &lt;h2 id="section-id"&gt; for Table of Contents
              </span>
            </div>

            {previewMode ? (
              <div
                className="prose-magazine min-h-64 p-4 border border-gray-200 rounded-lg bg-gray-50 overflow-auto"
                dangerouslySetInnerHTML={{ __html: form.content }}
              />
            ) : (
              <textarea
                value={form.content}
                onChange={(e) => set("content", e.target.value)}
                required
                rows={20}
                placeholder={`<h2 id="introduction">Introduction</h2>\n<p>Start writing your article here...</p>\n\n<h2 id="section-two">Section Two</h2>\n<p>Continue...</p>`}
                className={`${inputClass} font-mono text-xs leading-relaxed`}
              />
            )}
          </div>
        </div>

        {/* Sidebar column */}
        <div className="space-y-5">
          {/* Cover Image */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <label className={labelClass}>Cover Image</label>
            <ImageUploader value={form.image} onChange={(url) => set("image", url)} />
          </div>

          {/* Category */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <label className={labelClass}>Category *</label>
            <select
              value={form.categorySlug}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className={inputClass}
            >
              {categories.map((cat) => (
                <option key={cat.slug} value={cat.slug}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Author */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <label className={labelClass}>Author</label>
            <select
              value={form.authorSlug}
              onChange={(e) => set("authorSlug", e.target.value)}
              className={inputClass}
            >
              {authors.map((a) => (
                <option key={a.slug} value={a.slug}>
                  {a.name}
                </option>
              ))}
            </select>
          </div>

          {/* Tags */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <label className={labelClass}>Tags</label>
            <input
              type="text"
              value={form.tags}
              onChange={(e) => set("tags", e.target.value)}
              placeholder="Japan, Hiking, Budget (comma-separated)"
              className={inputClass}
            />
            <p className="mt-1 text-xs text-gray-400">Separate tags with commas</p>
          </div>

          {/* Read Time */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <label className={labelClass}>Read Time (minutes)</label>
            <input
              type="number"
              min={1}
              max={60}
              value={form.readTime}
              onChange={(e) => set("readTime", e.target.value)}
              className={inputClass}
            />
          </div>

          {/* Featured */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <label className="flex items-center gap-3 cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={form.featured}
                  onChange={(e) => set("featured", e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-10 h-5 bg-gray-200 peer-checked:bg-amber rounded-full transition-colors" />
                <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform peer-checked:translate-x-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700">Featured Post</p>
                <p className="text-xs text-gray-400">Show in hero & featured sections</p>
              </div>
            </label>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2">
            <button
              type="submit"
              disabled={status === "saving"}
              className="w-full flex items-center justify-center gap-2 py-3 bg-navy text-white font-bold text-sm rounded-xl hover:bg-navy-light disabled:opacity-60 transition-colors"
            >
              {status === "saving" ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Save className="w-4 h-4" />
              )}
              {isEditing ? "Update Post" : "Publish Post"}
            </button>
            <button
              type="button"
              onClick={() => router.push("/admin/posts")}
              className="w-full py-2.5 text-sm font-semibold text-gray-500 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
