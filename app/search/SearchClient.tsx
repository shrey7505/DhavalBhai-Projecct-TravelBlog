"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, X, SlidersHorizontal } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";
import { categories } from "@/lib/data";
import type { Post } from "@/lib/data";

export default function SearchClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const initialCategory = searchParams.get("category") ?? "";

  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [results, setResults] = useState<Post[]>([]);

  // Load all posts once from API (picks up admin-created posts)
  useEffect(() => {
    fetch("/api/admin/posts")
      .then((r) => r.json())
      .then((data: Post[]) => setAllPosts(data))
      .catch(() => setAllPosts([]));
  }, []);

  useEffect(() => {
    const q = query.toLowerCase();
    let filtered = allPosts.filter(
      (p) =>
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
    if (selectedCategory) {
      filtered = filtered.filter((p) => p.categorySlug === selectedCategory);
    }
    setResults(filtered);
  }, [query, selectedCategory, allPosts]);

  const updateUrl = (q: string, cat: string) => {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (cat) params.set("category", cat);
    const queryString = params.toString();
    router.replace(`/search${queryString ? `?${queryString}` : ""}`, { scroll: false });
  };

  const handleQueryChange = (value: string) => {
    setQuery(value);
    updateUrl(value, selectedCategory);
  };

  const handleCategoryChange = (cat: string) => {
    const newCat = cat === selectedCategory ? "" : cat;
    setSelectedCategory(newCat);
    updateUrl(query, newCat);
  };

  const clearSearch = () => {
    setQuery("");
    setSelectedCategory("");
    router.replace("/search", { scroll: false });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Search header */}
      <div className="mb-10 text-center">
        <span className="text-xs font-bold text-amber tracking-widest uppercase block mb-2">
          Discover
        </span>
        <h1
          className="text-4xl font-bold text-navy mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Search Articles
        </h1>
        <p className="text-gray-500">
          Find stories, destination guides, and travel tips from our library of {allPosts.length} articles.
        </p>
      </div>

      {/* Search input */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            placeholder="Search articles, destinations, tips..."
            className="w-full pl-12 pr-12 py-4 rounded-xl border-2 border-gray-200 focus:border-navy focus:outline-none text-base shadow-sm"
            autoFocus
          />
          {(query || selectedCategory) && (
            <button
              onClick={clearSearch}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-navy transition-colors"
              aria-label="Clear search"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        <div className="flex items-center gap-1.5 mr-2 text-sm text-gray-500">
          <SlidersHorizontal className="w-4 h-4" />
          Filter:
        </div>
        <button
          onClick={() => handleCategoryChange("")}
          className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition-colors ${
            !selectedCategory
              ? "bg-navy text-white border-navy"
              : "border-gray-200 text-gray-600 hover:border-navy hover:text-navy"
          }`}
        >
          All Categories
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => handleCategoryChange(cat.slug)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition-colors ${
              selectedCategory === cat.slug
                ? "bg-navy text-white border-navy"
                : "border-gray-200 text-gray-600 hover:border-navy hover:text-navy"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-gray-500">
          {results.length === 0 ? (
            "No articles found"
          ) : (
            <>
              <span className="font-bold text-navy">{results.length}</span>
              {` article${results.length === 1 ? "" : "s"} found`}
              {query && (
                <>
                  {" for "}
                  <span className="font-bold text-navy">"{query}"</span>
                </>
              )}
            </>
          )}
        </p>
        {selectedCategory && (
          <span className="text-xs bg-navy text-white px-3 py-1 rounded-full">
            {categories.find((c) => c.slug === selectedCategory)?.name}
          </span>
        )}
      </div>

      {/* Results grid */}
      {results.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🗺️</div>
          <h2
            className="text-2xl font-bold text-navy mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            No Results Found
          </h2>
          <p className="text-gray-500 mb-6">
            Try different keywords or browse our categories below.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => {
                  setQuery("");
                  setSelectedCategory(cat.slug);
                  updateUrl("", cat.slug);
                }}
                className="px-5 py-2 bg-navy text-white text-sm font-semibold rounded-full hover:bg-navy-light transition-colors"
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((post) => (
            <ArticleCard key={post.id} post={post} variant="default" />
          ))}
        </div>
      )}
    </div>
  );
}
