import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar } from "lucide-react";
import { Post, formatDate } from "@/lib/data";

interface ArticleCardProps {
  post: Post;
  variant?: "default" | "horizontal" | "featured";
}

export default function ArticleCard({ post, variant = "default" }: ArticleCardProps) {
  if (variant === "featured") {
    // The image is the clickable link; the overlay content is layered on top
    // via absolute positioning so CategoryBadge (also a link) is NOT nested inside it.
    return (
      <article className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative aspect-[16/9] overflow-hidden">
          {/* Clickable image layer */}
          <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-0">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
            />
          </Link>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
          {/* Overlay content — sits above the image link, not inside it */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
            <CategoryBadge category={post.category} categorySlug={post.categorySlug} />
            <Link href={`/blog/${post.slug}`} className="block mt-2 hover:opacity-90">
              <h2
                className="text-white text-2xl font-bold leading-tight line-clamp-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {post.title}
              </h2>
            </Link>
            <p className="mt-2 text-gray-200 text-sm line-clamp-2">{post.excerpt}</p>
            <div className="mt-3 flex items-center gap-4 text-gray-300 text-xs">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime} min read
              </span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  if (variant === "horizontal") {
    return (
      <article className="group flex gap-4 bg-white rounded-lg overflow-hidden hover:bg-gray-50 transition-colors p-3">
        <Link href={`/blog/${post.slug}`} className="shrink-0">
          <div className="relative w-28 h-28 rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="112px"
            />
          </div>
        </Link>
        <div className="flex-1 min-w-0">
          <CategoryBadge category={post.category} categorySlug={post.categorySlug} small />
          <Link href={`/blog/${post.slug}`}>
            <h3
              className="mt-1 text-gray-900 font-bold text-sm leading-snug line-clamp-2 hover:text-navy transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {post.title}
            </h3>
          </Link>
          <div className="mt-1.5 flex items-center gap-3 text-gray-400 text-xs">
            <span>{formatDate(post.date)}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime} min
            </span>
          </div>
        </div>
      </article>
    );
  }

  // Default card
  return (
    <article className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
          />
        </div>
      </Link>
      <div className="p-5 flex flex-col flex-1">
        <CategoryBadge category={post.category} categorySlug={post.categorySlug} />
        <Link href={`/blog/${post.slug}`}>
          <h3
            className="mt-2 text-gray-900 font-bold text-lg leading-snug line-clamp-2 hover:text-navy transition-colors"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {post.title}
          </h3>
        </Link>
        <p className="mt-2 text-gray-500 text-sm line-clamp-3 flex-1">{post.excerpt}</p>
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-7 h-7 rounded-full overflow-hidden bg-gray-200">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
                sizes="28px"
              />
            </div>
            <span className="text-xs text-gray-600 font-medium">{post.author.name}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400 text-xs">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime} min
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export function CategoryBadge({
  category,
  categorySlug,
  small = false,
}: {
  category: string;
  categorySlug: string;
  small?: boolean;
}) {
  const colorMap: Record<string, string> = {
    hiking: "bg-emerald-100 text-emerald-800",
    "family-travel": "bg-blue-100 text-blue-800",
    "budget-travel": "bg-purple-100 text-purple-800",
    destinations: "bg-amber-100 text-amber-800",
  };

  const colorClass = colorMap[categorySlug] ?? "bg-gray-100 text-gray-700";

  return (
    <Link
      href={`/category/${categorySlug}`}
      className={`inline-block font-semibold tracking-wide uppercase rounded-full transition-opacity hover:opacity-80 ${
        small ? "text-[10px] px-2 py-0.5" : "text-xs px-3 py-1"
      } ${colorClass}`}
    >
      {category}
    </Link>
  );
}
