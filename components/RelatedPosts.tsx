import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import { Post, formatDate } from "@/lib/data";
import { CategoryBadge } from "./ArticleCard";

interface RelatedPostsProps {
  posts: Post[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16 pt-10 border-t-2 border-gray-100">
      <h2
        className="text-2xl font-bold text-navy mb-8"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Related Articles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 350px"
                />
              </div>
            </Link>
            <div className="p-4">
              <CategoryBadge category={post.category} categorySlug={post.categorySlug} small />
              <Link href={`/blog/${post.slug}`}>
                <h3
                  className="mt-2 text-gray-900 font-bold text-base leading-snug line-clamp-2 hover:text-navy transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {post.title}
                </h3>
              </Link>
              <div className="mt-2 flex items-center gap-3 text-gray-400 text-xs">
                <span>{formatDate(post.date)}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime} min
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
